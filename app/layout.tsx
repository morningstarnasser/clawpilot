import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://privateagent.ch';
const title = 'PrivateAgent.ch | Private KI-Agenten & OpenClaw Automation Schweiz';
const description = 'Managed private KI-Agenten für Schweizer KMU: OpenClaw Setup, WhatsApp/Telegram Operator, E-Mail, Kalender, Browser Automation, Reports und sichere Private-VPS-Betreuung.';

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'PrivateAgent.ch',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'de-CH': '/',
    },
  },
  keywords: [
    'KI Agent Schweiz',
    'AI Agent Schweiz',
    'OpenClaw Agent',
    'Private KI Agenten',
    'Business Automation Schweiz',
    'WhatsApp Automation',
    'Telegram Agent',
    'E-Mail Automation KMU',
    'Browser Automation Schweiz',
    'AI Operator für KMU',
  ],
  authors: [{ name: 'PrivateAgent.ch', url: siteUrl }],
  creator: 'PrivateAgent.ch',
  publisher: 'PrivateAgent.ch',
  category: 'Business automation',
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
    title,
    description,
    url: siteUrl,
    siteName: 'PrivateAgent.ch',
    locale: 'de_CH',
    type: 'website',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'PrivateAgent.ch Logo — private KI-Agenten für Schweizer Unternehmen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/icon-512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '512x512', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  );
}
