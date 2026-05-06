export const nav = ['Services', 'Ablauf', 'Preise', 'Sicherheit', 'FAQ', 'Kontakt'];

export const services = [
  { iconName: 'MessageCircle', title: 'Telegram & WhatsApp Operator', text: 'KI-Agenten für Telegram und WhatsApp: Anfragen annehmen, Medien verstehen, Antworten vorbereiten und Workflows mit Freigabe starten.' },
  { iconName: 'Inbox', title: 'E-Mail & Inbox Automation', text: 'E-Mail Automation für KMU: Gmail/Bluewin-Triage, Zusammenfassungen, Antwortentwürfe, Follow-ups und tägliche Inbox-Reports.' },
  { iconName: 'Globe2', title: 'Browser & Web-Portal Automation', text: 'Browser Automation für Schweizer Firmen: Recherche, Formulare, Kundenportale, Buchungen und Admin-Oberflächen — kontrolliert mit menschlicher Freigabe.' },
  { iconName: 'CalendarClock', title: 'Kalender & Erinnerungen', text: 'Termine, Tagesreports, Reminder, wiederkehrende Checks und familien-/teamtaugliche Abläufe.' },
  { iconName: 'Workflow', title: 'Business Workflow Automation', text: 'Individuelle Business Automation: Leads, Rechnungen, CRM-Aufgaben, Social Media, Reports und wiederkehrende operative Prozesse.' },
  { iconName: 'Eye', title: 'Vision & Dokumente', text: 'Bild-/PDF-Verständnis, Screenshots, Dokumentanalyse und multimodale Qualitätschecks.' },
] as const;

export const stack = [
  { iconName: 'LockKeyhole', title: 'Private VPS auf Hetzner Cloud', text: 'Dedizierte Instanz pro Kunde im Hetzner-Rechenzentrum Nürnberg/Falkenstein (DE/EU). DSGVO-konform, ISO 27001 zertifiziert. Keine Multi-Tenant-Shared-Infrastruktur — eigene Secrets, eigene Backups, eigene IP.' },
  { iconName: 'ShieldCheck', title: 'Hardened Security', text: 'SSH-Key-Only Login, ufw Firewall, fail2ban gegen Brute-Force, Caddy mit Let’s Encrypt Auto-HTTPS, Security-Headers, automatische Updates und tägliche Hetzner-Snapshots als Disaster Recovery.' },
  { iconName: 'Bot', title: 'OpenClaw Core', text: 'Agent Runtime, Skills, Browser, Messaging, Kalender, Memory und Subagent-Orchestrierung — alles auf deiner privaten Instanz, nicht in einer Blackbox-Cloud.' },
  { iconName: 'Wrench', title: 'Done-for-you Setup', text: 'Wir designen, deployen, härten, monitoren und betreiben deine produktiven Agenten. Schweizer Beratung, deutsche Infrastruktur, transparente Logs.' },
] as const;

export const pricing = [
  { name: 'Starter', price: 'CHF 390', cadence: 'Setup + ab CHF 149/Mt.', best: false, points: ['1 privater OpenClaw-Agent', 'Telegram-Anbindung', 'Basic Inbox/Calendar', 'Monitoring & Updates'] },
  { name: 'Business', price: 'CHF 990', cadence: 'Setup + ab CHF 390/Mt.', best: true, points: ['Mehrere Skills & Workflows', 'WhatsApp/Gmail/Browser', 'Daily Reports', 'Priorisierter Support'] },
  { name: 'Ops+', price: 'Individuell', cadence: 'für Teams & Spezialfälle', best: false, points: ['Dedizierte Automationen', 'Multi-Agent Workflows', 'Daten-/Doku-Pipelines', 'SLA & Schulung'] },
] as const;

export const timeline = [
  ['01', 'Analyse', 'Wir erfassen deine wiederkehrenden Aufgaben, Tools und Risiken.'],
  ['02', 'Agent Design', 'Wir definieren Skills, Freigaben, Memory, Kanäle und Human-in-the-loop Punkte.'],
  ['03', 'Private Deploy', 'OpenClaw läuft auf deiner privaten Instanz, mit Secrets, Backups und Monitoring.'],
  ['04', 'Go-live', 'Wir testen echte Workflows, schulen dich und optimieren im Betrieb.'],
] as const;

export const advantages = [
  { iconName: 'Zap', title: 'Nicht nur Chat', text: 'Private Agent führt Aufgaben aus — mit Browser, Dateien, Messaging, Kalender und Code-Agenten.' },
  { iconName: 'Sparkles', title: 'Massgeschneidert', text: 'Keine generische SaaS-Maske. Jeder Agent bekommt deine Prozesse, Sprache und Tools.' },
  { iconName: 'ShieldCheck', title: 'Kontrolliert', text: 'Risk Levels, Freigaben, Logs und lokale Memory-Strategien statt blindem Autopilot.' },
] as const;

export const faqs = [
  {
    question: 'Was ist ein privater KI-Agent für Unternehmen?',
    answer: 'Ein privater KI-Agent ist ein digitaler Operator, der in deinen echten Tools arbeitet: E-Mail, Kalender, Telegram, WhatsApp, Browser, Dateien und Reports. Private Agent betreibt diese Agenten kontrolliert auf privater Infrastruktur statt als generischen Chatbot.',
  },
  {
    question: 'Für wen ist Private Agent geeignet?',
    answer: 'Für Schweizer Unternehmer, KMU, Agenturen und operative Teams, die wiederkehrende Aufgaben delegieren wollen: Inbox-Triage, Kundenanfragen, Terminchecks, Web-Portal-Arbeit, Daily Reports, Social Media und interne Workflows.',
  },
  {
    question: 'Wo läuft mein privater KI-Agent? Wer hat Zugriff auf meine Daten?',
    answer: 'Jeder Agent läuft auf einer dedizierten Hetzner-Cloud-VPS im Rechenzentrum Nürnberg oder Falkenstein (Deutschland, EU). Hetzner Online GmbH ist ISO 27001 zertifiziert und DSGVO-konform. Keine Multi-Tenant-Shared-Infrastruktur — du hast deine eigene Maschine, eigene IP, eigene Secrets, eigene Backups. Zugriff hat ausschliesslich Private Agent (für Wartung) und du (für Reviews/Approvals). Keine Drittanbieter-SaaS, keine Datenweitergabe.',
  },
  {
    question: 'Welche konkreten Sicherheitsmassnahmen setzt ihr ein?',
    answer: 'SSH-Key-Only Login (kein Passwort-Login), ufw Firewall, fail2ban gegen Brute-Force, Caddy mit Let’s Encrypt Auto-HTTPS und Security-Headers (HSTS, X-Frame-Options, CSP), automatische OS- und Paket-Updates, tägliche Hetzner-Snapshots für Disaster Recovery, separate Secrets pro Service, Risk-Levels für Aktionen und Human-in-the-loop-Freigaben für alles, was extern geht (E-Mails versenden, Buchungen, Zahlungen).',
  },
  {
    question: 'Was passiert, wenn ich kündige? Kriege ich meine Daten?',
    answer: 'Du kriegst auf Wunsch ein vollständiges Backup (Dateien, Logs, Konfiguration) als verschlüsseltes Archiv. Danach werden VPS und Backups nach Vereinbarung gelöscht. Keine Vendor-Lock-In-Tricks: deine Daten gehören dir, und OpenClaw selbst ist Open-Source-basiert.',
  },
  {
    question: 'Welche Tools kann ein PrivateAgent verbinden?',
    answer: 'Typische Integrationen: Telegram, WhatsApp, Gmail/Bluewin, Google Kalender, Browser-Automation, PDFs, Bilder, Obsidian/Vault-Dokumentation, GitHub, Social Media Workflows und kundenspezifische Web-Portale. Auf Anfrage auch CRM-Systeme, Buchhaltungs-Tools (Bexio, etc.) und interne APIs.',
  },
] as const;
