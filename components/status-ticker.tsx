"use client";

type Tone = "live" | "warn" | "amber";

type Pill = {
  label: string;
  value: string;
  tone?: Tone;
};

const PILLS: Pill[] = [
  { label: "HET-NUE", value: "1.4ms", tone: "live" },
  { label: "TG-bridge", value: "online", tone: "live" },
  { label: "Gmail", value: "14 unread", tone: "amber" },
  { label: "Bluewin SMTP", value: "ready", tone: "live" },
  { label: "Calendar", value: "1 conflict", tone: "warn" },
  { label: "Browser-agent", value: "idle", tone: "live" },
  { label: "Memory", value: "1.2k notes", tone: "live" },
  { label: "Backup", value: "snap @ 04:00", tone: "live" },
  { label: "WhatsApp", value: "6 chats", tone: "live" },
  { label: "VPS", value: "FRA-DE", tone: "live" },
  { label: "Daily report", value: "queued 09:00", tone: "amber" },
  { label: "ufw", value: "22 only", tone: "live" },
  { label: "fail2ban", value: "active", tone: "live" },
  { label: "Caddy", value: "TLS-A+", tone: "live" },
  { label: "Risk-level", value: "approve-required", tone: "warn" },
];

export function StatusTicker() {
  return (
    <div className="ticker" aria-hidden>
      <div className="ticker-track">
        <div className="ticker-row">
          {PILLS.map((p, i) => (
            <span key={`a-${i}`} className={`ticker-pill ${p.tone === "warn" ? "warn" : p.tone === "amber" ? "amber" : ""}`}>
              <span className="dot" />
              <span className="label">{p.label}</span>
              <span className="value">{p.value}</span>
            </span>
          ))}
        </div>
        <div className="ticker-row" aria-hidden>
          {PILLS.map((p, i) => (
            <span key={`b-${i}`} className={`ticker-pill ${p.tone === "warn" ? "warn" : p.tone === "amber" ? "amber" : ""}`}>
              <span className="dot" />
              <span className="label">{p.label}</span>
              <span className="value">{p.value}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
