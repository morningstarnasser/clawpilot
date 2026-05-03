import { Bot, CalendarClock, Eye, Globe2, Inbox, LockKeyhole, MessageCircle, ShieldCheck, Sparkles, Workflow, Wrench, Zap } from 'lucide-react';

export const nav = ['Services', 'Ablauf', 'Preise', 'Sicherheit', 'Kontakt'];

export const services = [
  { icon: MessageCircle, title: 'Telegram & WhatsApp Operator', text: 'Ein Agent, der Anfragen annimmt, Medien versteht, Antworten vorbereitet und Workflows startet.' },
  { icon: Inbox, title: 'E-Mail & Inbox Ops', text: 'Gmail/Bluewin-Triage, Zusammenfassungen, Antwortentwürfe und Follow-up-Erinnerungen.' },
  { icon: Globe2, title: 'Browser Automation', text: 'Recherche, Formulare, Portale, Buchungen und Admin-Oberflächen — mit menschlicher Freigabe, wenn nötig.' },
  { icon: CalendarClock, title: 'Kalender & Erinnerungen', text: 'Termine, Tagesreports, Reminder, wiederkehrende Checks und familien-/teamtaugliche Abläufe.' },
  { icon: Workflow, title: 'Business Workflows', text: 'SSZ-Reports, Social-Reels, Leads, Rechnungen, CRM-Aufgaben und individuelle Automationen.' },
  { icon: Eye, title: 'Vision & Dokumente', text: 'Bild-/PDF-Verständnis, Screenshots, Dokumentanalyse und multimodale Qualitätschecks.' },
];

export const stack = [
  { icon: LockKeyhole, title: 'Private VPS', text: 'Jeder Kunde läuft auf isolierter Infrastruktur mit eigenen Secrets und Backups.' },
  { icon: ShieldCheck, title: 'Managed Security', text: 'Firewall, Updates, Monitoring, Recovery und sichere Credential-Hygiene ab Tag 1.' },
  { icon: Bot, title: 'OpenClaw Core', text: 'Agent Runtime, Skills, Browser, Messaging, Kalender, Memory und Subagent-Orchestrierung.' },
  { icon: Wrench, title: 'Done-for-you Setup', text: 'Wir designen, deployen, testen und betreiben deine produktiven Agenten.' },
];

export const pricing = [
  { name: 'Starter', price: 'CHF 390', cadence: 'Setup + ab CHF 149/Mt.', best: false, points: ['1 privater OpenClaw-Agent', 'Telegram-Anbindung', 'Basic Inbox/Calendar', 'Monitoring & Updates'] },
  { name: 'Business', price: 'CHF 990', cadence: 'Setup + ab CHF 390/Mt.', best: true, points: ['Mehrere Skills & Workflows', 'WhatsApp/Gmail/Browser', 'Daily Reports', 'Priorisierter Support'] },
  { name: 'Ops+', price: 'Individuell', cadence: 'für Teams & Spezialfälle', best: false, points: ['Dedizierte Automationen', 'Multi-Agent Workflows', 'Daten-/Doku-Pipelines', 'SLA & Schulung'] },
];

export const timeline = [
  ['01', 'Analyse', 'Wir erfassen deine wiederkehrenden Aufgaben, Tools und Risiken.'],
  ['02', 'Agent Design', 'Wir definieren Skills, Freigaben, Memory, Kanäle und Human-in-the-loop Punkte.'],
  ['03', 'Private Deploy', 'OpenClaw läuft auf deiner privaten Instanz, mit Secrets, Backups und Monitoring.'],
  ['04', 'Go-live', 'Wir testen echte Workflows, schulen dich und optimieren im Betrieb.'],
];

export const advantages = [
  { icon: Zap, title: 'Nicht nur Chat', text: 'PrivateAgent.ch führt Aufgaben aus — mit Browser, Dateien, Messaging, Kalender und Code-Agenten.' },
  { icon: Sparkles, title: 'Massgeschneidert', text: 'Keine generische SaaS-Maske. Jeder Agent bekommt deine Prozesse, Sprache und Tools.' },
  { icon: ShieldCheck, title: 'Kontrolliert', text: 'Risk Levels, Freigaben, Logs und lokale Memory-Strategien statt blindem Autopilot.' },
];
