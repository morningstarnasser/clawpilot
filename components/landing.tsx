"use client";

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check, ChevronRight, Globe2, LockKeyhole, Play, Server, Sparkles } from 'lucide-react';
import { advantages, faqs, nav, pricing, services, stack, timeline } from '@/lib/data';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}

export function LandingPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 78%', 'end 42%'],
  });
  const beamScale = useTransform(timelineProgress, [0, 1], [0, 1]);

  return (
    <main>
      <motion.div className="scroll-beam" style={{ scaleX: scrollYProgress }} />
      <section className="hero shell">
        <header className="nav glass">
          <a className="brand" href="#top" aria-label="PrivateAgent.ch Home">
            <span className="brand-logo" aria-hidden="true"><img src="/brand/privateagent-logo.png" alt="" /></span>
            <span>PrivateAgent.ch</span>
          </a>
          <nav>
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>
          <a className="nav-cta" href="#kontakt">Pilot starten <ChevronRight size={16} /></a>
        </header>

        <div className="hero-grid" id="top">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="hero-copy">
            <Badge>Private OpenClaw Agents · Swiss Managed Ops</Badge>
            <h1>Private KI-Agenten für Schweizer Unternehmer und KMU.</h1>
            <p className="lead">PrivateAgent.ch baut und betreibt private OpenClaw KI-Agenten in der Schweiz: WhatsApp, Telegram, E-Mail, Kalender, Browser Automation, Reports, Social Media und individuelle Business-Workflows auf privater Infrastruktur.</p>
            <div className="hero-actions">
              <a className="button primary" href="#kontakt">Pilotprojekt anfragen <ArrowRight size={18} /></a>
              <a className="button secondary" href="#services"><Play size={17} /> Services ansehen</a>
            </div>
            <div className="trust-row">
              <span><Check size={16} /> Private VPS</span>
              <span><Check size={16} /> OpenClaw Skills</span>
              <span><Check size={16} /> Human approval</span>
            </div>
          </motion.div>

          <motion.div className="agent-card" initial={{ opacity: 0, scale: 0.92, rotateX: 12 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="terminal glass-dark">
              <div className="dots"><i /><i /><i /></div>
              <div className="terminal-line dim">privateagent / live ops</div>
              <div className="terminal-line"><span>09:00</span> Morning report sent to Telegram</div>
              <div className="terminal-line"><span>09:12</span> 14 emails triaged, 3 drafts ready</div>
              <div className="terminal-line"><span>09:18</span> Browser agent collected competitor prices</div>
              <div className="terminal-line"><span>09:26</span> Calendar conflict detected → approval needed</div>
              <div className="terminal-pulse">agent waiting for your go</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section shell logos">
        <span>Built around</span>
        <strong>OpenClaw</strong>
        <strong>21st.dev-ready UI</strong>
        <strong>Private VPS</strong>
        <strong>Telegram</strong>
        <strong>Gmail</strong>
        <strong>Browser Automation</strong>
      </section>

      <section className="section shell" id="services">
        <motion.div className="section-head" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <Badge>KI-Agenten Schweiz</Badge>
          <h2>Managed OpenClaw Automation, nicht noch ein Chatbot.</h2>
          <p>Wir nehmen OpenClaw als Kern und bauen daraus produktive KI-Operatoren für Schweizer Unternehmen — sauber, überwacht und auf deine Prozesse, Sprache und Freigaben trainiert.</p>
        </motion.div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article className="service-card glass" key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <Icon className="card-icon" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section dark-section" id="ablauf">
        <div className="shell split">
          <div>
            <Badge>So läuft es</Badge>
            <h2>Von Chaos zu delegierbaren Workflows.</h2>
            <p>Wir starten klein, liefern schnell, und bauen danach jede Woche neue Fähigkeiten dazu. Kein Setup-Albtraum, keine Agenten-Spielerei.</p>
          </div>
          <div className="timeline" ref={timelineRef}>
            <motion.div className="timeline-beam" style={{ scaleY: beamScale }} />
            {timeline.map(([n, title, text], index) => (
              <motion.div
                className="timeline-item"
                key={n}
                initial={{ opacity: 0, x: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
              >
                <motion.span
                  initial={{ scale: 0.72, rotate: -8 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, delay: index * 0.08 + 0.08, ease: 'easeOut' }}
                >{n}</motion.span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="sicherheit">
        <div className="stack-grid">
          {stack.map((item) => {
            const Icon = item.icon;
            return <article className="stack-card" key={item.title}><Icon /><h3>{item.title}</h3><p>{item.text}</p></article>;
          })}
        </div>
      </section>

      <section className="section shell comparison">
        <div className="compare-card muted">
          <h3>DIY OpenClaw</h3>
          <ul><li>Server härten</li><li>Secrets sichern</li><li>Skills debuggen</li><li>Monitoring bauen</li><li>Fehler nachts selber fixen</li></ul>
        </div>
        <div className="compare-card winner">
          <Badge>Empfohlen</Badge>
          <h3>PrivateAgent.ch Managed</h3>
          <ul><li>Private Instanz bereitgestellt</li><li>Tools verbunden</li><li>Workflows gebaut</li><li>Backups & Updates</li><li>Support durch Menschen</li></ul>
        </div>
      </section>

      <section className="section shell" id="preise">
        <motion.div className="section-head" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <Badge>Pakete</Badge>
          <h2>Transparent starten. Danach nach Wert skalieren.</h2>
        </motion.div>
        <div className="pricing-grid">
          {pricing.map((plan) => (
            <article className={`price-card ${plan.best ? 'best' : ''}`} key={plan.name}>
              {plan.best && <span className="ribbon">Beliebt</span>}
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p className="cadence">{plan.cadence}</p>
              <ul>{plan.points.map((p) => <li key={p}><Check size={16} /> {p}</li>)}</ul>
              <a href="#kontakt" className="button full">Anfragen</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell advantages">
        {advantages.map((adv) => { const Icon = adv.icon; return <article key={adv.title}><Icon /><h3>{adv.title}</h3><p>{adv.text}</p></article>; })}
      </section>

      <section className="section shell seo-content" id="faq">
        <div className="section-head">
          <Badge>SEO & Klartext</Badge>
          <h2>Warum PrivateAgent.ch für KI-Automation in der Schweiz?</h2>
          <p>Viele Firmen testen KI-Tools, aber produktive Automatisierung scheitert oft an Login-Portalen, Datenschutz, Freigaben, Secrets und Wartung. PrivateAgent.ch schliesst genau diese Lücke: ein privater KI-Agent, der deine Prozesse kennt und kontrolliert Aufgaben erledigt.</p>
        </div>
        <div className="seo-grid">
          <article>
            <h3>Für Schweizer KMU gebaut</h3>
            <p>Wir optimieren Agenten für lokale Arbeitsrealität: Deutsch/Schweizerdeutsch, Schweizer Anbieter, KMU-Prozesse, Hostpoint/Bluewin/Gmail, Kalender, Rechnungen, Kundenanfragen und wiederkehrende Admin-Arbeit.</p>
          </article>
          <article>
            <h3>Private Infrastruktur statt Blackbox</h3>
            <p>Der Agent läuft auf privater Infrastruktur mit getrennten Secrets, Logs, Backups und klaren Freigaben. So bleiben produktive Workflows nachvollziehbar und kontrollierbar.</p>
          </article>
          <article>
            <h3>OpenClaw als Operator-Kern</h3>
            <p>OpenClaw verbindet Messaging, Browser, Dateien, Skills, Memory und Subagents. Daraus entsteht kein Demo-Chatbot, sondern ein Operator, der echte Aufgaben übernimmt.</p>
          </article>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section shell final-cta" id="kontakt">
        <div className="cta-bg" />
        <Badge>PrivateAgent.ch ist bereit</Badge>
        <div className="contact-grid">
          <div className="contact-copy">
            <h2>Bereit für deinen privaten KI-Operator?</h2>
            <p>Schick kurz, was du automatisieren möchtest. Wir melden uns mit einem konkreten Pilot-Vorschlag für OpenClaw, Messaging, Inbox, Kalender oder Browser-Ops.</p>
            <div className="contact-mini-list">
              <span><Check size={16} /> Antwort an info@privateagent.ch</span>
              <span><Check size={16} /> Kein Newsletter, kein Spam</span>
              <span><Check size={16} /> Menschliche Freigabe für produktive Aktionen</span>
            </div>
          </div>
          <form className="contact-form" action="/contact.php" method="post">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp-field" aria-hidden="true" />
            <label>
              Name *
              <input name="name" type="text" placeholder="Dein Name" required />
            </label>
            <label>
              E-Mail *
              <input name="email" type="email" placeholder="du@firma.ch" required />
            </label>
            <label>
              Firma
              <input name="company" type="text" placeholder="Firma / Projekt" />
            </label>
            <label>
              Telefon
              <input name="phone" type="tel" placeholder="Optional" />
            </label>
            <label className="wide">
              Worum geht es?
              <select name="service" defaultValue="">
                <option value="" disabled>Bitte wählen</option>
                <option>Private OpenClaw Instanz</option>
                <option>WhatsApp / Telegram Operator</option>
                <option>Inbox & Kalender Automation</option>
                <option>Browser / Web-Portal Automation</option>
                <option>Business Workflow / Daily Reports</option>
              </select>
            </label>
            <label className="wide">
              Nachricht *
              <textarea name="message" rows={5} placeholder="Was soll dein Agent übernehmen?" required />
            </label>
            <button className="button primary big wide" type="submit">Anfrage senden <ArrowRight /></button>
            <p className="form-note">Nach dem Absenden wirst du zurück zur Seite geleitet.</p>
          </form>
        </div>
      </section>

      <footer className="footer shell">
        <div><strong>PrivateAgent.ch</strong><p>Private OpenClaw agents for Swiss business ops.</p></div>
        <div><Server size={16} /> Private VPS</div>
        <div><LockKeyhole size={16} /> BYO API keys</div>
        <div><Globe2 size={16} /> privateagent.ch</div>
      </footer>
    </main>
  );
}
