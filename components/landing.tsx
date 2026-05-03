"use client";

import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, Globe2, LockKeyhole, Play, Server, Sparkles } from 'lucide-react';
import { advantages, nav, pricing, services, stack, timeline } from '@/lib/data';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}

export function LandingPage() {
  const { scrollYProgress } = useScroll();
  const beam = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <main>
      <motion.div className="scroll-beam" style={{ scaleX: scrollYProgress }} />
      <section className="hero shell">
        <header className="nav glass">
          <a className="brand" href="#top" aria-label="ClawPilot Home">
            <span className="brand-mark">CP</span>
            <span>ClawPilot</span>
          </a>
          <nav>
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
            ))}
          </nav>
          <a className="nav-cta" href="mailto:hello@clawpilot.ch">Pilot starten <ChevronRight size={16} /></a>
        </header>

        <div className="hero-grid" id="top">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="hero-copy">
            <Badge>Private OpenClaw Agents · Swiss Managed Ops</Badge>
            <h1>Dein KI-Operator für alles, was im Alltag Zeit frisst.</h1>
            <p className="lead">ClawPilot baut und betreibt private OpenClaw-Agenten für Schweizer Unternehmer: Messaging, E-Mail, Kalender, Browser, Reports, Social Media und individuelle Business-Workflows.</p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:hello@clawpilot.ch?subject=ClawPilot%20Pilotprojekt">Pilotprojekt anfragen <ArrowRight size={18} /></a>
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
              <div className="terminal-line dim">clawpilot / live ops</div>
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
          <Badge>Was wir anbieten</Badge>
          <h2>Managed AI-Ops, nicht noch ein Chatbot.</h2>
          <p>Wir nehmen OpenClaw als Kern und bauen daraus produktive Operatoren, die wirklich Arbeit erledigen — sauber, überwacht und auf deine Prozesse trainiert.</p>
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
          <div className="timeline">
            <motion.div className="timeline-beam" style={{ height: beam }} />
            {timeline.map(([n, title, text]) => (
              <div className="timeline-item" key={n}>
                <span>{n}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
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
          <h3>ClawPilot Managed</h3>
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
              <a href="mailto:hello@clawpilot.ch" className="button full">Anfragen</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell advantages">
        {advantages.map((adv) => { const Icon = adv.icon; return <article key={adv.title}><Icon /><h3>{adv.title}</h3><p>{adv.text}</p></article>; })}
      </section>

      <section className="section shell final-cta" id="faq">
        <div className="cta-bg" />
        <Badge>ClawPilot.ch wahrscheinlich frei</Badge>
        <h2>Bereit für deinen privaten KI-Operator?</h2>
        <p>Wir bauen die erste produktive Automation, verbinden deine Kanäle und zeigen in einer Woche, was wirklich Zeit spart.</p>
        <a className="button primary big" href="mailto:hello@clawpilot.ch?subject=ClawPilot%20Start">Pilot starten <ArrowRight /></a>
      </section>

      <footer className="footer shell">
        <div><strong>ClawPilot</strong><p>Private OpenClaw agents for Swiss business ops.</p></div>
        <div><Server size={16} /> Private VPS</div>
        <div><LockKeyhole size={16} /> BYO API keys</div>
        <div><Globe2 size={16} /> clawpilot.ch</div>
      </footer>
    </main>
  );
}
