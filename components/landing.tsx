"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, ChevronRight, Globe2, LockKeyhole, Menu, Server } from "lucide-react";
import { advantages, faqs, nav, pricing, services, stack, timeline } from "@/lib/data";
import { useLenis } from "@/lib/use-lenis";
import { Magnetic } from "@/components/magnetic";
import { BentoCard } from "@/components/bento";
import { Marquee } from "@/components/marquee";
import { SplitText } from "@/components/split-text";

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}

const bentoSpan = ["big", "std", "std", "wide", "std", "std"] as const;

export function LandingPage() {
  useLenis();

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 78%", "end 42%"],
  });
  const beamScale = useTransform(timelineProgress, [0, 1], [0, 1]);

  return (
    <>
      <div className="aurora" aria-hidden>
        <div className="blob-3" />
      </div>
      <div className="grain" aria-hidden />
      <motion.div className="scroll-beam" style={{ scaleX: scrollYProgress }} />

      <main>
        <header className="nav glass shell">
          <a className="brand" href="#top" aria-label="PrivateAgent.ch Home">
            <span className="brand-logo" aria-hidden>
              <img src="/brand/privateagent-logo.png" alt="" />
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <Magnetic className="nav-cta" href="#kontakt">
              Pilot starten <ChevronRight size={16} />
            </Magnetic>
            <details className="mobile-menu">
              <summary aria-label="Menü öffnen">
                <Menu size={18} />
                <span>Menü</span>
              </summary>
              <div className="mobile-menu-panel">
                {nav.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                ))}
                <a className="mobile-menu-cta" href="#kontakt">
                  Pilot starten <ArrowRight size={16} />
                </a>
              </div>
            </details>
          </div>
        </header>

        <section className="hero shell" id="top">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span>Private OpenClaw Agents</span>
                <span className="divider" />
                <span>Swiss Managed Ops</span>
              </div>
              <h1>
                <SplitText text="Private KI-Agenten" /> <br />
                <SplitText text="für Schweizer" delay={0.2} />{" "}
                <span className="accent">
                  <SplitText text="Operatoren." delay={0.45} />
                </span>
              </h1>
              <motion.p
                className="lead"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Wir bauen und betreiben private OpenClaw KI-Agenten in der Schweiz: WhatsApp,
                Telegram, E-Mail, Kalender, Browser-Automation, Reports und individuelle Business-Workflows
                — auf privater Infrastruktur, mit menschlicher Freigabe.
              </motion.p>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Magnetic className="button primary" href="#kontakt">
                  Pilotprojekt anfragen <ArrowRight size={18} />
                </Magnetic>
                <Magnetic className="button secondary" href="#services">
                  Services ansehen
                </Magnetic>
              </motion.div>
              <motion.div
                className="trust-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <span><Check size={14} /> Private VPS</span>
                <span><Check size={14} /> OpenClaw Skills</span>
                <span><Check size={14} /> Human approval</span>
                <span><Check size={14} /> Swiss-hosted</span>
              </motion.div>
            </div>

            <motion.div
              className="live-card"
              initial={{ opacity: 0, scale: 0.92, rotateX: 14 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <i /><i /><i />
                  </div>
                  <span className="terminal-title">privateagent / live ops</span>
                </div>
                <span className="terminal-line dim">— today, 09:00 CET</span>
                <div className="terminal-line">
                  <span className="ts">09:00</span>
                  <span className="msg">Morning report sent to Telegram</span>
                </div>
                <div className="terminal-line">
                  <span className="ts">09:12</span>
                  <span className="msg">14 emails triaged · 3 drafts ready</span>
                </div>
                <div className="terminal-line">
                  <span className="ts">09:18</span>
                  <span className="msg">Browser agent collected competitor prices</span>
                </div>
                <div className="terminal-line">
                  <span className="ts">09:26</span>
                  <span className="msg">Calendar conflict → approval needed</span>
                </div>
                <span className="terminal-status">agent waiting for your go</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Marquee>
          <span>OpenClaw Core</span>
          <span>Telegram</span>
          <span>WhatsApp</span>
          <span>Gmail</span>
          <span>Bluewin</span>
          <span>Google Calendar</span>
          <span>Browser Automation</span>
          <span>Private VPS</span>
          <span>Hostpoint</span>
          <span>21st.dev UI</span>
        </Marquee>

        <section className="section shell" id="services">
          <div className="section-head">
            <Badge>KI-Agenten Schweiz</Badge>
            <h2>Managed OpenClaw Automation. Nicht noch ein Chatbot.</h2>
            <p>
              Wir nehmen OpenClaw als Kern und bauen daraus produktive KI-Operatoren
              für Schweizer Unternehmen — sauber, überwacht und auf deine Prozesse,
              Sprache und Freigaben trainiert.
            </p>
          </div>
          <div className="bento">
            {services.map((service, i) => {
              const Icon = service.icon;
              const span = bentoSpan[i] ?? "std";
              return (
                <BentoCard key={service.title} className={span}>
                  <div className="bento-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </BentoCard>
              );
            })}
          </div>
        </section>

        <section className="section timeline-section shell" id="ablauf">
          <div className="timeline-wrap">
            <div className="timeline-sticky">
              <Badge>So läuft es</Badge>
              <h2>Von Chaos zu delegierbaren Workflows.</h2>
              <p>
                Wir starten klein, liefern schnell, und bauen jede Woche neue Fähigkeiten
                dazu. Kein Setup-Albtraum, keine Agenten-Spielerei.
              </p>
            </div>
            <div className="timeline" ref={timelineRef}>
              <motion.div className="timeline-beam" style={{ scaleY: beamScale }} />
              {timeline.map(([n, title, text], index) => (
                <motion.div
                  className="timeline-item"
                  key={n}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="num">{n}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="sicherheit">
          <div className="section-head">
            <Badge>Sicherheit & Stack</Badge>
            <h2>Auf privater Infrastruktur, nicht in der Blackbox.</h2>
          </div>
          <div className="bento" style={{ gridAutoRows: "auto" }}>
            {stack.map((item, i) => {
              const Icon = item.icon;
              const span = i === 0 ? "wide" : "std";
              return (
                <BentoCard key={item.title} className={`${span} std`}>
                  <div className="bento-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </BentoCard>
              );
            })}
          </div>
        </section>

        <section className="section shell">
          <div className="comparison">
            <div className="compare-card muted">
              <h3>DIY OpenClaw</h3>
              <ul>
                <li>Server härten</li>
                <li>Secrets sichern</li>
                <li>Skills debuggen</li>
                <li>Monitoring bauen</li>
                <li>Fehler nachts selber fixen</li>
              </ul>
            </div>
            <div className="compare-card winner">
              <Badge>Empfohlen</Badge>
              <h3 style={{ marginTop: 18 }}>PrivateAgent.ch Managed</h3>
              <ul>
                <li>Private Instanz bereitgestellt</li>
                <li>Tools verbunden</li>
                <li>Workflows gebaut</li>
                <li>Backups & Updates</li>
                <li>Support durch Menschen</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section shell" id="preise">
          <div className="section-head">
            <Badge>Pakete</Badge>
            <h2>Transparent starten. Nach Wert skalieren.</h2>
          </div>
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <motion.article
                className={`price-card ${plan.best ? "best" : ""}`}
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {plan.best && <span className="ribbon">Beliebt</span>}
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p className="cadence">{plan.cadence}</p>
                <ul>
                  {plan.points.map((p) => (
                    <li key={p}>
                      <Check size={16} /> {p}
                    </li>
                  ))}
                </ul>
                <Magnetic href="#kontakt" className="button primary full">
                  Anfragen <ArrowRight size={16} />
                </Magnetic>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-head">
            <Badge>Warum PrivateAgent.ch</Badge>
            <h2>Drei Dinge, die wir anders machen.</h2>
          </div>
          <div className="advantages">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <motion.article
                  key={adv.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Icon size={28} />
                  <h3>{adv.title}</h3>
                  <p>{adv.text}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="section shell" id="faq">
          <div className="section-head">
            <Badge>FAQ & SEO</Badge>
            <h2>Klartext zu KI-Automation in der Schweiz.</h2>
            <p>
              Viele Firmen testen KI-Tools, aber produktive Automatisierung scheitert oft an
              Login-Portalen, Datenschutz, Freigaben, Secrets und Wartung. PrivateAgent.ch
              schliesst genau diese Lücke.
            </p>
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

        <section className="section shell" id="kontakt">
          <div className="final-cta">
            <Badge>PrivateAgent.ch ist bereit</Badge>
            <div className="contact-grid">
              <div className="contact-copy">
                <h2>Bereit für deinen privaten KI-Operator?</h2>
                <p>
                  Schick kurz, was du automatisieren möchtest. Wir melden uns mit einem
                  konkreten Pilot-Vorschlag für OpenClaw, Messaging, Inbox, Kalender oder
                  Browser-Ops.
                </p>
                <div className="contact-mini-list">
                  <span><Check size={16} /> Antwort an info@privateagent.ch</span>
                  <span><Check size={16} /> Kein Newsletter, kein Spam</span>
                  <span><Check size={16} /> Menschliche Freigabe für produktive Aktionen</span>
                </div>
              </div>
              <form className="contact-form" action="/contact.php" method="post">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hp-field"
                  aria-hidden="true"
                />
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
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    <option>Private OpenClaw Instanz</option>
                    <option>WhatsApp / Telegram Operator</option>
                    <option>Inbox & Kalender Automation</option>
                    <option>Browser / Web-Portal Automation</option>
                    <option>Business Workflow / Daily Reports</option>
                  </select>
                </label>
                <label className="wide">
                  Nachricht *
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Was soll dein Agent übernehmen?"
                    required
                  />
                </label>
                <Magnetic
                  as="button"
                  type="submit"
                  className="button primary big wide"
                >
                  Anfrage senden <ArrowRight size={18} />
                </Magnetic>
                <p className="form-note">Nach dem Absenden wirst du zurück zur Seite geleitet.</p>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer shell">
          <div>
            <strong>PrivateAgent.ch</strong>
            <p>Private OpenClaw agents for Swiss business ops.</p>
          </div>
          <div><Server size={16} /> Private VPS</div>
          <div><LockKeyhole size={16} /> BYO API keys</div>
          <div><Globe2 size={16} /> privateagent.ch</div>
        </footer>
      </main>
    </>
  );
}
