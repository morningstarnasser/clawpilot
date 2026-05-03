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

$to = 'info@privateagent.ch';
$subject = 'Neue PrivateAgent.ch Anfrage von ' . $name;
$body = "Neue Anfrage über privateagent.ch\n\n"
    . "Name: {$name}\n"
    . "E-Mail: {$email}\n"
    . "Firma: " . ($company ?: '-') . "\n"
    . "Telefon: " . ($phone ?: '-') . "\n"
    . "Interesse: " . ($service ?: '-') . "\n\n"
    . "Nachricht:\n{$message}\n\n"
    . "IP: " . ($_SERVER['REMOTE_ADDR'] ?? '-') . "\n"
    . "Zeit: " . date('c') . "\n";

$headers = [];
$headers[] = 'From: PrivateAgent.ch <info@privateagent.ch>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$ok = mail($to, $subject, $body, implode("\r\n", $headers));
redirect_with($ok ? 'ok' : 'error');
