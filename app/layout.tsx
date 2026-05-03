import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ClawPilot — Private OpenClaw Agents for Swiss Businesses',
  description: 'Managed OpenClaw AI agents on private infrastructure: Telegram, WhatsApp, Gmail, Calendar, browser automation, monitoring and business workflows.',
  metadataBase: new URL('https://clawpilot.ch'),
  openGraph: {
    title: 'ClawPilot — Private OpenClaw Agents',
    description: 'Your private AI operator for Swiss business workflows.',
    url: 'https://clawpilot.ch',
    siteName: 'ClawPilot',
    locale: 'de_CH',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  );
}
