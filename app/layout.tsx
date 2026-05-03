import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PrivateAgent.ch — Private OpenClaw Agents for Swiss Businesses',
  description: 'Managed OpenClaw AI agents on private infrastructure: Telegram, WhatsApp, Gmail, Calendar, browser automation, monitoring and business workflows.',
  metadataBase: new URL('https://privateagent.ch'),
  openGraph: {
    title: 'PrivateAgent.ch — Private OpenClaw Agents',
    description: 'Your private AI operator for Swiss business workflows.',
    url: 'https://privateagent.ch',
    siteName: 'PrivateAgent.ch',
    locale: 'de_CH',
    type: 'website',
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
