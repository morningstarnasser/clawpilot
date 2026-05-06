"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Tag = "tg" | "gm" | "br" | "ca" | "wa" | "rp";

type FeedEntry = {
  id: number;
  ts: string;
  tag: Tag;
  tagLabel: string;
  msg: string;
  emphasis?: string;
};

const POOL: Omit<FeedEntry, "id" | "ts">[] = [
  { tag: "rp", tagLabel: "RP", msg: "Morning report sent to Telegram" },
  { tag: "gm", tagLabel: "GM", msg: "14 emails triaged · 3 drafts ready" },
  { tag: "br", tagLabel: "BR", msg: "Browser agent collected competitor prices" },
  { tag: "ca", tagLabel: "CA", msg: "Calendar conflict — approval needed", emphasis: "approval" },
  { tag: "tg", tagLabel: "TG", msg: "Reply queued for client (de-CH)" },
  { tag: "wa", tagLabel: "WA", msg: "WhatsApp lead routed to inbox" },
  { tag: "br", tagLabel: "BR", msg: "Bexio invoice draft generated" },
  { tag: "gm", tagLabel: "GM", msg: "Bluewin SMTP delivery verified" },
  { tag: "ca", tagLabel: "CA", msg: "Tomorrow 09:30 confirmed · 14:00 free" },
  { tag: "rp", tagLabel: "RP", msg: "Daily KPI synced to Obsidian vault" },
  { tag: "br", tagLabel: "BR", msg: "Hostpoint admin login refreshed" },
  { tag: "tg", tagLabel: "TG", msg: "Voice memo transcribed · 37s" },
  { tag: "gm", tagLabel: "GM", msg: "Customer reply pending your review", emphasis: "review" },
  { tag: "wa", tagLabel: "WA", msg: "Group bridge online · 6 channels" },
  { tag: "rp", tagLabel: "RP", msg: "Weekly delta report archived" },
  { tag: "br", tagLabel: "BR", msg: "Form submitted · receipt confirmed" },
];

function formatTime(d: Date) {
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export function LiveFeed() {
  const [entries, setEntries] = useState<FeedEntry[]>(() => {
    const now = new Date();
    return [0, 1, 2, 3].map((i) => {
      const d = new Date(now.getTime() - (3 - i) * 7 * 60 * 1000);
      const pick = POOL[i % POOL.length];
      return { ...pick, id: -i - 1, ts: formatTime(d) };
    });
  });
  const [streaming, setStreaming] = useState(false);
  const counterRef = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt via mouse position
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 100, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 100, damping: 18, mass: 0.6 });
  const rotateX = useTransform(sy, [-1, 1], [6, -6]);
  const rotateY = useTransform(sx, [-1, 1], [-8, 8]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px * 2);
    my.set(py * 2);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // streaming log every 4-7s
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const delay = 4200 + Math.random() * 2800;
      timer = setTimeout(() => {
        const pick = POOL[Math.floor(Math.random() * POOL.length)];
        const id = ++counterRef.current;
        const next: FeedEntry = { ...pick, id, ts: formatTime(new Date()) };
        setStreaming(true);
        setTimeout(() => {
          setEntries((prev) => [...prev.slice(-3), next]);
          setStreaming(false);
        }, 700);
        tick();
      }, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="live-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30, rotateX: 14 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="terminal"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="terminal-header" style={{ transform: "translateZ(20px)" }}>
          <div className="terminal-dots">
            <i /><i /><i />
          </div>
          <span className="terminal-title">privateagent · live ops</span>
          <span className="terminal-meta">
            <span className="mono">UPLINK</span>
          </span>
        </div>

        <div className="terminal-body" style={{ transform: "translateZ(28px)" }}>
          <AnimatePresence mode="popLayout" initial={false}>
            {entries.map((entry, idx) => {
              const isLatest = idx === entries.length - 1;
              return (
                <motion.div
                  key={entry.id}
                  className={`feed-line ${isLatest && streaming ? "is-streaming" : ""}`}
                  layout
                  initial={{ opacity: 0, x: 30, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto", marginTop: 0 }}
                  exit={{ opacity: 0, x: -30, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="ts">{entry.ts}</span>
                  <span className={`tag ${entry.tag}`}>{entry.tagLabel}</span>
                  <span className="msg">
                    {entry.emphasis ? (
                      <Typed text={entry.msg} emphasis={entry.emphasis} animateOnce={isLatest && streaming} />
                    ) : (
                      <Typed text={entry.msg} animateOnce={isLatest && streaming} />
                    )}
                    {isLatest && streaming && <span className="caret" />}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="terminal-footer" style={{ transform: "translateZ(20px)" }}>
          <span className="terminal-status">Agent waiting for go</span>
          <span className="terminal-prompt mono">privateagent ▸</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Typed({ text, emphasis, animateOnce }: { text: string; emphasis?: string; animateOnce?: boolean }) {
  if (!animateOnce) {
    return emphasis ? <SplitWithEm text={text} emphasis={emphasis} /> : <>{text}</>;
  }
  return <TypedAnimated text={text} emphasis={emphasis} />;
}

function SplitWithEm({ text, emphasis }: { text: string; emphasis: string }) {
  const idx = text.toLowerCase().indexOf(emphasis.toLowerCase());
  if (idx < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="em">{text.slice(idx, idx + emphasis.length)}</span>
      {text.slice(idx + emphasis.length)}
    </>
  );
}

function TypedAnimated({ text, emphasis }: { text: string; emphasis?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 18);
    return () => clearTimeout(t);
  }, [count, text]);
  const partial = text.slice(0, count);
  if (emphasis) {
    return <SplitWithEm text={partial} emphasis={emphasis} />;
  }
  return <>{partial}</>;
}
