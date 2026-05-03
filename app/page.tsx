import { LandingPage } from '@/components/landing';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://privateagent.ch/#organization',
      name: 'PrivateAgent.ch',
      url: 'https://privateagent.ch/',
      logo: 'https://privateagent.ch/icon-512.png',
      email: 'info@privateagent.ch',
      areaServed: { '@type': 'Country', name: 'Switzerland' },
      sameAs: ['https://github.com/morningstarnasser/clawpilot'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://privateagent.ch/#website',
      url: 'https://privateagent.ch/',
      name: 'PrivateAgent.ch',
      publisher: { '@id': 'https://privateagent.ch/#organization' },
      inLanguage: 'de-CH',
    },
    {
      '@type': 'Service',
      '@id': 'https://privateagent.ch/#service',
      name: 'Private KI-Agenten und OpenClaw Automation für Schweizer KMU',
      serviceType: 'Managed AI agent operations and business automation',
      provider: { '@id': 'https://privateagent.ch/#organization' },
      areaServed: { '@type': 'Country', name: 'Switzerland' },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Schweizer Unternehmer, KMU und operative Teams',
      },
      offers: [
        { '@type': 'Offer', name: 'Starter', price: '390', priceCurrency: 'CHF', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Business', price: '990', priceCurrency: 'CHF', availability: 'https://schema.org/InStock' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'PrivateAgent.ch Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private OpenClaw Instanz' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WhatsApp und Telegram Operator' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Mail und Kalender Automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Browser und Web-Portal Automation' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://privateagent.ch/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist PrivateAgent.ch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PrivateAgent.ch baut und betreibt private KI-Agenten auf Basis von OpenClaw für Schweizer Unternehmer und KMU. Die Agenten übernehmen Messaging, Inbox, Kalender, Browser-Automation, Reports und individuelle Business-Workflows.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ist PrivateAgent.ch eine Chatbot-Agentur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Der Fokus liegt auf privaten KI-Operatoren, die echte Aufgaben ausführen: E-Mails vorbereiten, Portale bedienen, Termine prüfen, Reports erzeugen und Aktionen zur Freigabe vorlegen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wo laufen die KI-Agenten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Je nach Paket läuft der Agent auf einer privaten VPS-Umgebung mit separaten Secrets, Backups, Monitoring und klaren Human-in-the-loop-Freigaben.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
