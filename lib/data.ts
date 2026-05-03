import { Bot, CalendarClock, Eye, Globe2, Inbox, LockKeyhole, MessageCircle, ShieldCheck, Sparkles, Workflow, Wrench, Zap } from 'lucide-react';

export const nav = ['Services', 'Ablauf', 'Preise', 'Sicherheit', 'FAQ', 'Kontakt'];

export const services = [
  { icon: MessageCircle, title: 'Telegram & WhatsApp Operator', text: 'KI-Agenten für Telegram und WhatsApp: Anfragen annehmen, Medien verstehen, Antworten vorbereiten und Workflows mit Freigabe starten.' },
  { icon: Inbox, title: 'E-Mail & Inbox Automation', text: 'E-Mail Automation für KMU: Gmail/Bluewin-Triage, Zusammenfassungen, Antwortentwürfe, Follow-ups und tägliche Inbox-Reports.' },
  { icon: Globe2, title: 'Browser & Web-Portal Automation', text: 'Browser Automation für Schweizer Firmen: Recherche, Formulare, Kundenportale, Buchungen und Admin-Oberflächen — kontrolliert mit menschlicher Freigabe.' },
  { icon: CalendarClock, title: 'Kalender & Erinnerungen', text: 'Termine, Tagesreports, Reminder, wiederkehrende Checks und familien-/teamtaugliche Abläufe.' },
  { icon: Workflow, title: 'Business Workflow Automation', text: 'Individuelle Business Automation: Leads, Rechnungen, CRM-Aufgaben, Social Media, Reports und wiederkehrende operative Prozesse.' },
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


export const faqs = [
  {
    question: 'Was ist ein privater KI-Agent für Unternehmen?',
    answer: 'Ein privater KI-Agent ist ein digitaler Operator, der in deinen echten Tools arbeitet: E-Mail, Kalender, Telegram, WhatsApp, Browser, Dateien und Reports. PrivateAgent.ch betreibt diese Agenten kontrolliert auf privater Infrastruktur statt als generischen Chatbot.',
  },
  {
    question: 'Für wen ist PrivateAgent.ch geeignet?',
    answer: 'Für Schweizer Unternehmer, KMU, Agenturen und operative Teams, die wiederkehrende Aufgaben delegieren wollen: Inbox-Triage, Kundenanfragen, Terminchecks, Web-Portal-Arbeit, Daily Reports, Social Media und interne Workflows.',
  },
  {
    question: 'Ist OpenClaw sicher genug für produktive Workflows?',
    answer: 'Ja, wenn es sauber betrieben wird. Wir arbeiten mit separaten Secrets, Private VPS, Monitoring, Backups, Risk Levels und Human-in-the-loop-Freigaben. Kritische Aktionen werden nicht blind automatisiert.',
  },
  {
    question: 'Welche Tools kann ein PrivateAgent verbinden?',
    answer: 'Typische Integrationen sind Telegram, WhatsApp, Gmail/Bluewin, Google Kalender, Browser-Automation, PDFs, Bilder, Obsidian/Vault-Dokumentation, GitHub, Social Media Workflows und kundenspezifische Web-Portale.',
  },
];
