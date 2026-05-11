import { LandingPage } from '@/components/landing';

const siteUrl = 'https://privateagent.ch';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${siteUrl}/#organization`,
      name: 'PrivateAgent.ch',
      legalName: 'PrivateAgent.ch',
      url: `${siteUrl}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icon-512.png`,
        width: 512,
        height: 512,
      },
      image: `${siteUrl}/brand/og-image.png`,
      email: 'info@privateagent.ch',
      slogan: 'Your Private AI Operator',
      description:
        'PrivateAgent.ch baut und betreibt private KI-Agenten auf Basis von OpenClaw für Schweizer Unternehmer und KMU. Managed Setup auf privater Hetzner-Cloud-VPS in der EU.',
      foundingDate: '2026',
      areaServed: [
        { '@type': 'Country', name: 'Switzerland' },
        { '@type': 'Country', name: 'Liechtenstein' },
        { '@type': 'AdministrativeArea', name: 'DACH' },
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CH',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'info@privateagent.ch',
          contactType: 'sales',
          availableLanguage: ['de', 'de-CH', 'en'],
          areaServed: 'CH',
        },
        {
          '@type': 'ContactPoint',
          email: 'info@privateagent.ch',
          contactType: 'customer support',
          availableLanguage: ['de', 'de-CH', 'en'],
          areaServed: 'CH',
        },
      ],
      knowsAbout: [
        'KI-Agenten',
        'AI Operators',
        'OpenClaw',
        'Business Automation',
        'WhatsApp Automation',
        'Telegram Automation',
        'E-Mail Automation',
        'Browser Automation',
        'Private VPS Hosting',
        'DSGVO',
        'ISO 27001',
      ],
      sameAs: ['https://github.com/morningstarnasser/PrivateAgent.ch'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'PrivateAgent.ch',
      description:
        'Managed private KI-Agenten für Schweizer KMU — WhatsApp, Telegram, E-Mail, Kalender, Browser, Reports.',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'de-CH',
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: 'Private KI-Agenten Schweiz | Managed OpenClaw AI-Operatoren',
      description:
        'Wir bauen und betreiben private KI-Agenten für Schweizer KMU auf privater Hetzner-VPS. WhatsApp, E-Mail, Kalender, Browser, Reports — mit menschlicher Freigabe.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'de-CH',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/brand/og-image.png`,
      },
      breadcrumb: { '@id': `${siteUrl}/#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Start',
          item: `${siteUrl}/`,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#service`,
      name: 'Managed Private KI-Agenten für Schweizer KMU',
      alternateName: ['Private AI Operators', 'Managed OpenClaw Setup'],
      serviceType: 'Managed AI agent operations and business automation',
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: { '@type': 'Country', name: 'Switzerland' },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Schweizer Unternehmer, KMU, Agenturen und operative Teams',
      },
      serviceOutput: [
        { '@type': 'Thing', name: 'Daily operations reports' },
        { '@type': 'Thing', name: 'E-Mail drafts and triage' },
        { '@type': 'Thing', name: 'Browser-portal automation' },
        { '@type': 'Thing', name: 'WhatsApp / Telegram replies' },
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'Starter',
          price: '390',
          priceCurrency: 'CHF',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '390',
            priceCurrency: 'CHF',
            unitText: 'one-time setup',
          },
          description:
            'Setup für einen privaten OpenClaw-Agenten mit Telegram-Anbindung, Basic Inbox/Calendar, Monitoring & Updates. Plus ab CHF 149/Monat.',
        },
        {
          '@type': 'Offer',
          name: 'Business',
          price: '990',
          priceCurrency: 'CHF',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '990',
            priceCurrency: 'CHF',
            unitText: 'one-time setup',
          },
          description:
            'Mehrere Skills & Workflows, WhatsApp/Gmail/Browser, Daily Reports, priorisierter Support. Plus ab CHF 390/Monat.',
        },
        {
          '@type': 'Offer',
          name: 'Ops+',
          availability: 'https://schema.org/InStock',
          description:
            'Dedizierte Multi-Agent Workflows, Daten-/Doku-Pipelines, SLA und Schulung. Preis individuell auf Anfrage.',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'PrivateAgent.ch Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private OpenClaw Instanz' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WhatsApp und Telegram Operator' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Mail und Kalender Automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Browser und Web-Portal Automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Workflow und Daily Reports' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vision und Dokumentenverarbeitung' } },
        ],
      },
      termsOfService: `${siteUrl}/`,
    },
    {
      '@type': 'HowTo',
      '@id': `${siteUrl}/#howto`,
      name: 'So wird aus deinen Aufgaben ein produktiver KI-Operator',
      description:
        'Vier Schritte von der Analyse bis zum produktiven Betrieb deines privaten KI-Agenten.',
      inLanguage: 'de-CH',
      totalTime: 'P7D',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Analyse',
          text: 'Wir erfassen deine wiederkehrenden Aufgaben, Tools und Risiken.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Agent Design',
          text: 'Wir definieren Skills, Freigaben, Memory, Kanäle und Human-in-the-loop Punkte.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Private Deploy',
          text: 'OpenClaw läuft auf deiner privaten Instanz mit Secrets, Backups und Monitoring.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Go-live',
          text: 'Wir testen echte Workflows, schulen dich und optimieren im Betrieb.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      inLanguage: 'de-CH',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist ein privater KI-Agent für Unternehmen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein privater KI-Agent ist ein digitaler Operator, der in deinen echten Tools arbeitet: E-Mail, Kalender, Telegram, WhatsApp, Browser, Dateien und Reports. PrivateAgent.ch betreibt diese Agenten kontrolliert auf privater Infrastruktur statt als generischen Chatbot.',
          },
        },
        {
          '@type': 'Question',
          name: 'Für wen ist PrivateAgent.ch geeignet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Für Schweizer Unternehmer, KMU, Agenturen und operative Teams, die wiederkehrende Aufgaben delegieren wollen: Inbox-Triage, Kundenanfragen, Terminchecks, Web-Portal-Arbeit, Daily Reports, Social Media und interne Workflows.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wo läuft mein privater KI-Agent? Wer hat Zugriff auf meine Daten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Jeder Agent läuft auf einer dedizierten Hetzner-Cloud-VPS im Rechenzentrum Nürnberg oder Falkenstein (Deutschland, EU). Hetzner Online GmbH ist ISO 27001 zertifiziert und DSGVO-konform. Keine Multi-Tenant-Shared-Infrastruktur — du hast deine eigene Maschine, eigene IP, eigene Secrets, eigene Backups.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche konkreten Sicherheitsmassnahmen setzt ihr ein?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SSH-Key-Only Login, ufw Firewall, fail2ban gegen Brute-Force, Caddy mit Let’s Encrypt Auto-HTTPS und Security-Headers (HSTS, X-Frame-Options, CSP), automatische OS-Updates, tägliche Hetzner-Snapshots für Disaster Recovery, separate Secrets pro Service, Risk-Levels für Aktionen und Human-in-the-loop-Freigaben.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was passiert, wenn ich kündige? Kriege ich meine Daten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Du kriegst auf Wunsch ein vollständiges Backup (Dateien, Logs, Konfiguration) als verschlüsseltes Archiv. Danach werden VPS und Backups nach Vereinbarung gelöscht. Keine Vendor-Lock-In-Tricks: deine Daten gehören dir, und OpenClaw selbst ist Open-Source-basiert.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Tools kann ein PrivateAgent verbinden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Typische Integrationen: Telegram, WhatsApp, Gmail/Bluewin, Google Kalender, Browser-Automation, PDFs, Bilder, Obsidian/Vault-Dokumentation, GitHub, Social Media Workflows und kundenspezifische Web-Portale. Auf Anfrage auch CRM-Systeme, Buchhaltungs-Tools (Bexio etc.) und interne APIs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was kostet ein privater KI-Agent?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PrivateAgent.ch startet bei CHF 390 Setup plus ab CHF 149 pro Monat im Starter-Paket. Das Business-Paket liegt bei CHF 990 Setup plus ab CHF 390 pro Monat. Multi-Agent- und Ops+-Setups werden individuell offeriert.',
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
