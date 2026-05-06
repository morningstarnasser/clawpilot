"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Globe2,
  LockKeyhole,
  Menu,
  Server,
} from "lucide-react";
import { advantages, faqs, nav, pricing, services, stack, timeline } from "@/lib/data";
import { Magnetic } from "@/components/magnetic";
import { TiltCard } from "@/components/tilt-card";
import { StatusTicker } from "@/components/status-ticker";
import { LiveFeed } from "@/components/live-feed";
import { SplineHero } from "@/components/spline-hero";
import { AnimatedIcon } from "@/components/animated-icon";
import { Counter } from "@/components/counter";
import { SplitText } from "@/components/split-text";
import { ContactStatus } from "@/components/contact-status";
import { useLenis } from "@/lib/use-lenis";

function Badge({ children, amber = false }: { children: React.ReactNode; amber?: boolean }) {
  return <span className={`badge ${amber ? "badge--amber" : ""}`}>{children}</span>;
}

function ServiceCard({
  iconName,
  title,
  text,
  index,
}: {
  iconName: string;
  title: string;
  text: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TiltCard hint={`Skill ${String(index + 1).padStart(2, "0")} ▸ ready`}>
        <div className="bento-icon-wrap">
          <AnimatedIcon name={iconName} size={22} hovered={hovered} />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </TiltCard>
    </div>
  );
}

function StackCard({
  iconName,
  title,
  text,
  tag,
}: {
  iconName: string;
  title: string;
  text: string;
  tag: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <TiltCard hint={tag}>
        <div className="bento-icon-wrap">
          <AnimatedIcon name={iconName} size={22} hovered={hovered} />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </TiltCard>
    </div>
  );
}

function AdvantageCard({
  iconName,
  title,
  text,
}: {
  iconName: string;
  title: string;
  text: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="advantage-icon">
        <AnimatedIcon name={iconName} size={20} hovered={hovered} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.article>
  );
}

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
      <div className="ai-mesh" aria-hidden />
      <div className="noise" aria-hidden />
      <motion.div className="scroll-beam" style={{ scaleX: scrollYProgress }} />

      <main>
        <header className="nav shell">
          <a className="brand" href="#top" aria-label="Private Agent — Home">
            <span className="brand-mark" aria-hidden>
              <img src="/brand/private-agent-logo.png" alt="" />
            </span>
            <span className="brand-name">
              Private<span> Agent</span>
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
              Pilot starten <ChevronRight size={14} />
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
                  Pilot starten <ArrowRight size={14} />
                </a>
              </div>
            </details>
          </div>
        </header>

        <section className="hero shell" id="top" style={{ position: "relative" }}>
          <SplineHero>
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="live-dot" aria-hidden />
              <span>Your Private AI Operator</span>
              <span className="divider" />
              <span>Swiss Managed Ops</span>
            </motion.div>
            <h1>
              <SplitText text="Private KI-Agenten" delay={0.4} /> <br />
              <SplitText text="für Schweizer" delay={0.6} />{" "}
              <span className="accent">
                <SplitText text="Operatoren." delay={0.85} mode="char" stagger={0.04} />
              </span>
            </h1>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Wir bauen und betreiben private OpenClaw KI-Agenten in der Schweiz: WhatsApp,
              Telegram, E-Mail, Kalender, Browser-Automation, Reports und individuelle
              Business-Workflows — auf privater Infrastruktur, mit menschlicher Freigabe.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Magnetic className="button primary" href="#kontakt">
                Pilot anfragen <ArrowRight size={16} />
              </Magnetic>
              <Magnetic className="button secondary" href="#services">
                Services ansehen
              </Magnetic>
            </motion.div>
            <motion.div
              className="trust-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <span><Check size={12} /> Hetzner DE/EU</span>
              <span><Check size={12} /> ISO 27001 · DSGVO</span>
              <span><Check size={12} /> Private VPS</span>
              <span><Check size={12} /> Human approval</span>
            </motion.div>
          </SplineHero>
        </section>

        <StatusTicker />

        <section className="section shell" id="live-ops" style={{ paddingTop: 80, paddingBottom: 60 }}>
          <div className="section-grid" style={{ marginBottom: 40 }}>
            <div className="section-num">OPS / 00</div>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <Badge>Live · Operator-Konsole</Badge>
              <h2>So sieht ein <em>laufender Tag</em> aus.</h2>
              <p>Echte Telemetrie aus einer produktiven Instanz: Inbox, Kalender, Browser, WhatsApp, Reports — alles mit menschlicher Freigabe.</p>
            </div>
          </div>
          <LiveFeed />
        </section>

        <section className="section shell" id="services">
          <div className="section-grid">
            <div className="section-num">SVC / 01</div>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <Badge>KI-Agenten Schweiz</Badge>
              <h2>Managed OpenClaw Automation. <em>Nicht noch ein Chatbot.</em></h2>
              <p>
                Wir nehmen OpenClaw als Kern und bauen daraus produktive KI-Operatoren
                für Schweizer Unternehmen — sauber, überwacht und auf deine Prozesse,
                Sprache und Freigaben trainiert.
              </p>
            </div>
          </div>
          <div className="bento">
            {services.map((service, idx) => (
              <ServiceCard
                key={service.title}
                iconName={service.iconName}
                title={service.title}
                text={service.text}
                index={idx}
              />
            ))}
          </div>
        </section>

        <section className="section timeline-section shell" id="ablauf">
          <div className="timeline-wrap">
            <div className="timeline-sticky">
              <Badge amber>Runbook · 04 Schritte</Badge>
              <h2>Von Chaos zu <em>delegierbaren</em> Workflows.</h2>
              <p>
                Wir starten klein, liefern schnell, und bauen jede Woche neue Fähigkeiten
                dazu. Kein Setup-Albtraum, keine Agenten-Spielerei.
              </p>
              <div style={{ marginTop: 32, display: "grid", gap: 12 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                  <span className="mono" style={{ color: "var(--amber)", fontSize: 28, fontWeight: 700 }}>
                    <Counter to={7} />
                  </span>
                  <span style={{ color: "var(--muted)", fontSize: 13 }}>Tage bis erster produktiver Agent</span>
                </div>
                <div style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                  <span className="mono" style={{ color: "var(--amber)", fontSize: 28, fontWeight: 700 }}>
                    <Counter to={100} suffix="%" />
                  </span>
                  <span style={{ color: "var(--muted)", fontSize: 13 }}>Human approval auf produktive Aktionen</span>
                </div>
                <div style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                  <span className="mono" style={{ color: "var(--amber)", fontSize: 28, fontWeight: 700 }}>
                    <Counter to={1} />
                  </span>
                  <span style={{ color: "var(--muted)", fontSize: 13 }}>VPS pro Kunde, niemals geteilt</span>
                </div>
              </div>
            </div>
            <div className="timeline" ref={timelineRef}>
              <motion.div className="timeline-beam" style={{ scaleY: beamScale }} />
              {timeline.map(([n, title, text], index) => (
                <motion.div
                  className="timeline-item"
                  key={n}
                  initial={{ opacity: 0, x: 32 }}
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
          <div className="section-grid">
            <div className="section-num">SEC / 02</div>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <Badge>Sicherheit & Stack</Badge>
              <h2>Auf privater Infrastruktur, <em>nicht in der Blackbox.</em></h2>
            </div>
          </div>
          <div className="bento bento-4">
            {stack.map((item, idx) => (
              <StackCard
                key={item.title}
                iconName={item.iconName}
                title={item.title}
                text={item.text}
                tag={`Layer ${String(idx + 1).padStart(2, "0")}`}
              />
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="comparison">
            <motion.div
              className="compare-card muted"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="compare-label">DIY · OpenClaw self-managed</span>
              <h3>Du betreibst den Stack selbst</h3>
              <ul>
                <li>Server härten</li>
                <li>Secrets sichern</li>
                <li>Skills debuggen</li>
                <li>Monitoring bauen</li>
                <li>Fehler nachts selber fixen</li>
              </ul>
            </motion.div>
            <motion.div
              className="compare-card winner"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="compare-label">Empfohlen · PrivateAgent.ch managed</span>
              <h3>Wir betreiben deinen Operator</h3>
              <ul>
                <li>Private Instanz bereitgestellt</li>
                <li>Tools verbunden</li>
                <li>Workflows gebaut</li>
                <li>Backups & Updates</li>
                <li>Support durch Menschen</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="section shell" id="preise">
          <div className="section-grid">
            <div className="section-num">PRC / 03</div>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <Badge>Pakete</Badge>
              <h2>Transparent starten. <em>Nach Wert skalieren.</em></h2>
            </div>
          </div>
          <div className="pricing-grid">
            {pricing.map((plan, idx) => (
              <motion.article
                className={`price-card ${plan.best ? "best" : ""}`}
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {plan.best && <span className="ribbon">Recommended</span>}
                <div className="tier-label">Tier · {String(idx + 1).padStart(2, "0")}</div>
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p className="cadence">{plan.cadence}</p>
                <ul>
                  {plan.points.map((p) => (
                    <li key={p}>
                      <Check size={14} /> {p}
                    </li>
                  ))}
                </ul>
                <Magnetic href="#kontakt" className="button primary full">
                  Anfragen <ArrowRight size={14} />
                </Magnetic>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-grid">
            <div className="section-num">DIF / 04</div>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <Badge>Warum Private Agent</Badge>
              <h2>Drei Dinge, <em>die wir anders machen.</em></h2>
            </div>
          </div>
          <div className="advantages">
            {advantages.map((adv) => (
              <AdvantageCard
                key={adv.title}
                iconName={adv.iconName}
                title={adv.title}
                text={adv.text}
              />
            ))}
          </div>
        </section>

        <section className="section shell" id="faq">
          <div className="section-grid">
            <div className="section-num">FAQ / 05</div>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <Badge>FAQ & SEO</Badge>
              <h2>Klartext zu <em>KI-Automation</em> in der Schweiz.</h2>
              <p>
                Viele Firmen testen KI-Tools, aber produktive Automatisierung scheitert oft an
                Login-Portalen, Datenschutz, Freigaben, Secrets und Wartung. Private Agent
                schliesst genau diese Lücke.
              </p>
            </div>
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
            {faqs.map((faq, idx) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </section>

        <section className="section shell" id="kontakt">
          <div className="final-cta">
            <Badge amber>System ready · awaiting brief</Badge>
            <ContactStatus />
            <div className="contact-grid">
              <div className="contact-copy">
                <h2>Bereit für deinen <em>privaten</em> KI-Operator?</h2>
                <p>
                  Schick kurz, was du automatisieren möchtest. Wir melden uns mit einem
                  konkreten Pilot-Vorschlag für OpenClaw, Messaging, Inbox, Kalender oder
                  Browser-Ops.
                </p>
                <div className="contact-mini-list">
                  <span><Check size={14} /> Antwort an info@privateagent.ch</span>
                  <span><Check size={14} /> Kein Newsletter, kein Spam</span>
                  <span><Check size={14} /> Menschliche Freigabe vor Versand</span>
                </div>
              </div>
              <motion.form
                className="contact-form"
                action="/contact.php"
                method="post"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
              >
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hp-field"
                  aria-hidden="true"
                />
                {[
                  { tag: "label", className: "", label: "Name *", input: <input name="name" type="text" placeholder="Dein Name" required /> },
                  { tag: "label", className: "", label: "E-Mail *", input: <input name="email" type="email" placeholder="du@firma.ch" required /> },
                  { tag: "label", className: "", label: "Firma", input: <input name="company" type="text" placeholder="Firma / Projekt" /> },
                  { tag: "label", className: "", label: "Telefon", input: <input name="phone" type="tel" placeholder="Optional" /> },
                ].map((field, i) => (
                  <motion.label
                    key={i}
                    className={field.className}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    {field.label}
                    {field.input}
                  </motion.label>
                ))}
                <motion.label
                  className="wide"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  Worum geht es?
                  <select name="service" defaultValue="">
                    <option value="" disabled>Bitte wählen</option>
                    <option>Private OpenClaw Instanz</option>
                    <option>WhatsApp / Telegram Operator</option>
                    <option>Inbox & Kalender Automation</option>
                    <option>Browser / Web-Portal Automation</option>
                    <option>Business Workflow / Daily Reports</option>
                  </select>
                </motion.label>
                <motion.label
                  className="wide"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  Nachricht *
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Was soll dein Agent übernehmen?"
                    required
                  />
                </motion.label>
                <motion.div
                  className="wide"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <Magnetic
                    as="button"
                    type="submit"
                    className="button primary big full"
                  >
                    Anfrage senden <ArrowRight size={16} />
                  </Magnetic>
                </motion.div>
                <p className="form-note">Nach dem Absenden wirst du zurück zur Seite geleitet.</p>
              </motion.form>
            </div>
          </div>
        </section>

        <footer className="footer shell">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="brand-mark" aria-hidden style={{ display: "block" }}>
                <img src="/brand/private-agent-logo.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </span>
              <strong>
                Private<span> Agent</span>
              </strong>
              <p>Private OpenClaw operators for Swiss business ops. Hetzner-hosted, human-approved, transparently logged.</p>
            </div>
            <div className="footer-section">
              <h4>Stack</h4>
              <ul>
                <li><Server size={14} /> Hetzner Cloud · DE/EU</li>
                <li><LockKeyhole size={14} /> SSH-key-only · ufw + fail2ban</li>
                <li><Globe2 size={14} /> Caddy · TLS-A+</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Kontakt</h4>
              <ul>
                <li><Globe2 size={14} /> privateagent.ch</li>
                <li><Server size={14} /> info@privateagent.ch</li>
                <li><LockKeyhole size={14} /> Antwort &lt; 1 Werktag</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} · Private Agent · Made in CH</span>
            <span className="live-status">All systems operational</span>
          </div>
        </footer>
      </main>
    </>
  );
}
