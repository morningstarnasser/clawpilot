"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, AlertTriangle, X } from "lucide-react";

type Status = "ok" | "error" | "missing" | "invalid" | null;

const messages: Record<Exclude<Status, null>, { tone: "success" | "error"; title: string; body: string }> = {
  ok: {
    tone: "success",
    title: "Anfrage gesendet.",
    body: "Bestätigung ist an deine E-Mail-Adresse unterwegs. Wir melden uns innerhalb von 1 Werktag mit einem konkreten Pilot-Vorschlag.",
  },
  error: {
    tone: "error",
    title: "Da ist etwas schief gelaufen.",
    body: "Die Anfrage konnte gerade nicht zugestellt werden. Schreib uns direkt an info@privateagent.ch — wir antworten persönlich.",
  },
  missing: {
    tone: "error",
    title: "Pflichtfelder fehlen.",
    body: "Bitte fülle Name, E-Mail und Nachricht aus, dann nochmal absenden.",
  },
  invalid: {
    tone: "error",
    title: "Anfrage ungültig.",
    body: "Bitte verwende das Formular unten — direkter Aufruf von /contact.php ist nicht erlaubt.",
  },
};

export function ContactStatus() {
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("contact");
    if (raw && raw in messages) {
      setStatus(raw as Exclude<Status, null>);
      // Smooth-scroll to status banner
      requestAnimationFrame(() => {
        const el = document.getElementById("contact-status");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }, []);

  if (!status) return null;
  const msg = messages[status];

  const dismiss = () => {
    setStatus(null);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("contact");
      window.history.replaceState({}, "", url.pathname + url.hash);
    }
  };

  return (
    <div id="contact-status" className={`contact-status contact-status-${msg.tone}`} role="status" aria-live="polite">
      <div className="contact-status-icon">
        {msg.tone === "success" ? <CheckCircle2 size={24} /> : <AlertTriangle size={24} />}
      </div>
      <div className="contact-status-text">
        <strong>{msg.title}</strong>
        <span>{msg.body}</span>
      </div>
      <button className="contact-status-close" onClick={dismiss} aria-label="Schliessen" type="button">
        <X size={18} />
      </button>
    </div>
  );
}
