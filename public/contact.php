<?php
// PrivateAgent.ch contact form handler for Hostpoint static/PHP hosting.
declare(strict_types=1);

function clean_text(string $value, int $max = 1200): string {
    $value = trim($value);
    $value = str_replace(["\r", "\0"], '', $value);
    $value = strip_tags($value);
    if (mb_strlen($value, 'UTF-8') > $max) {
        $value = mb_substr($value, 0, $max, 'UTF-8');
    }
    return $value;
}

function redirect_with(string $status): void {
    header('Location: /?contact=' . rawurlencode($status) . '#kontakt');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_with('invalid');
}

// Honeypot: real users never fill this hidden field.
if (!empty($_POST['website'] ?? '')) {
    redirect_with('ok');
}

$name = clean_text((string)($_POST['name'] ?? ''), 120);
$email = filter_var(trim((string)($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$company = clean_text((string)($_POST['company'] ?? ''), 160);
$phone = clean_text((string)($_POST['phone'] ?? ''), 80);
$service = clean_text((string)($_POST['service'] ?? ''), 160);
$message = clean_text((string)($_POST['message'] ?? ''), 2500);

if ($name === '' || !$email || $message === '') {
    redirect_with('missing');
}

// === 1) Notification mail to PrivateAgent.ch admin ===
$to_admin = 'info@privateagent.ch';
$subject_admin = 'Neue PrivateAgent.ch Anfrage von ' . $name;
$body_admin = "Neue Anfrage über privateagent.ch\n\n"
    . "Name: {$name}\n"
    . "E-Mail: {$email}\n"
    . "Firma: " . ($company ?: '-') . "\n"
    . "Telefon: " . ($phone ?: '-') . "\n"
    . "Interesse: " . ($service ?: '-') . "\n\n"
    . "Nachricht:\n{$message}\n\n"
    . "IP: " . ($_SERVER['REMOTE_ADDR'] ?? '-') . "\n"
    . "Zeit: " . date('c') . "\n";

$headers_admin = [];
$headers_admin[] = 'From: PrivateAgent.ch <info@privateagent.ch>';
$headers_admin[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers_admin[] = 'Content-Type: text/plain; charset=UTF-8';
$headers_admin[] = 'X-Mailer: PHP/' . phpversion();

$ok_admin = mail($to_admin, $subject_admin, $body_admin, implode("\r\n", $headers_admin));

// === 2) Confirmation mail to the customer (only if admin notification went out) ===
if ($ok_admin) {
    $first_name = explode(' ', $name)[0];
    $subject_cust = 'Wir haben deine Anfrage erhalten — PrivateAgent.ch';
    $body_cust = "Hallo {$first_name},\n\n"
        . "vielen Dank für deine Anfrage bei PrivateAgent.ch.\n\n"
        . "Wir haben deine Nachricht erhalten und melden uns innerhalb von 1 Werktag persönlich mit einem konkreten Pilot-Vorschlag für deinen privaten KI-Operator.\n\n"
        . "— Zur Übersicht hier deine Angaben:\n"
        . "Name: {$name}\n"
        . "E-Mail: {$email}\n"
        . "Firma: " . ($company ?: '-') . "\n"
        . "Telefon: " . ($phone ?: '-') . "\n"
        . "Interesse: " . ($service ?: '-') . "\n\n"
        . "Deine Nachricht:\n{$message}\n\n"
        . "Bei dringenden Rückfragen einfach direkt auf diese E-Mail antworten oder an info@privateagent.ch schreiben.\n\n"
        . "Bis bald,\n"
        . "Ali Nasser\n"
        . "PrivateAgent.ch — Your Private AI Operator\n"
        . "https://privateagent.ch\n";

    $headers_cust = [];
    $headers_cust[] = 'From: PrivateAgent.ch <info@privateagent.ch>';
    $headers_cust[] = 'Reply-To: PrivateAgent.ch <info@privateagent.ch>';
    $headers_cust[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers_cust[] = 'X-Mailer: PHP/' . phpversion();

    @mail($email, $subject_cust, $body_cust, implode("\r\n", $headers_cust));
    // Note: customer mail failure is non-fatal — admin lead is already through.
}

redirect_with($ok_admin ? 'ok' : 'error');
