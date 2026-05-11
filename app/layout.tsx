import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://privateagent.ch';
const title = 'Private KI-Agenten Schweiz | Managed OpenClaw AI-Operatoren — PrivateAgent.ch';
const description = 'Wir bauen und betreiben private KI-Agenten für Schweizer KMU: WhatsApp, Telegram, E-Mail, Kalender, Browser-Automation und Daily Reports. Auf eigener Hetzner-VPS in der EU, ISO 27001 / DSGVO, mit menschlicher Freigabe. Ab CHF 390 Setup.';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf7f0' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1818' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s | PrivateAgent.ch',
  },
  description,
  applicationName: 'PrivateAgent.ch',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'de-CH': '/',
      'x-default': '/',
    },
  },
  keywords: [
    // Core service
    'Private KI-Agenten Schweiz',
    'KI Agent Schweiz',
    'AI Agent Schweiz',
    'KI Operator Schweiz',
    'AI Operator Schweiz',
    'Managed AI Schweiz',
    'OpenClaw',
    'OpenClaw Setup',
    'OpenClaw Schweiz',
    // Channels
    'WhatsApp Automation Schweiz',
    'Telegram Agent Schweiz',
    'E-Mail Automation KMU',
    'Inbox Automation Schweiz',
    'Gmail Automation',
    'Bluewin Automation',
    'Browser Automation Schweiz',
    'Web-Portal Automation',
    // Business
    'KMU Automation Schweiz',
    'Business Automation Schweiz',
    'Schweizer KI Beratung',
    'Daily Report Automation',
    'Lead Automation Schweiz',
    'Bexio Automation',
    'CRM Automation',
    // Trust signals
    'DSGVO konforme KI',
    'Private VPS KI',
    'Hetzner Cloud KI Schweiz',
    'ISO 27001 KI',
    'Schweizer Datenschutz KI',
    // Long-tail
    'KI Agent für Unternehmen',
    'AI Assistent Schweiz Geschäft',
    'Automatisierung kleine Unternehmen Schweiz',
  ],
  authors: [{ name: 'Ali Nasser', url: siteUrl }],
  creator: 'PrivateAgent.ch',
  publisher: 'PrivateAgent.ch',
  category: 'Business automation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Private KI-Agenten für Schweizer Operatoren — PrivateAgent.ch',
    description,
    url: siteUrl,
    siteName: 'PrivateAgent.ch',
    locale: 'de_CH',
    type: 'website',
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PrivateAgent.ch — Private KI-Operatoren für Schweizer KMU',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private KI-Agenten für Schweizer Operatoren',
    description: 'Managed OpenClaw KI-Agenten auf privater Hetzner-VPS — WhatsApp, Gmail, Kalender, Browser. DSGVO, ISO 27001, menschliche Freigabe.',
    images: ['/brand/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'PrivateAgent',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#fbf7f0',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH">
      <head>
        <link rel="preload" as="image" href="/brand/ai-operator-bot.png" fetchPriority="high" />
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
