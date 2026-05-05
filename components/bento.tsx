"use client";

import { motion } from "framer-motion";
import { useRef, type ReactNode } from "react";

type BentoCardProps = {
  className?: string;
  children: ReactNode;
};

export function BentoCard({ className, children }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${px}%`);
    el.style.setProperty("--my", `${py}%`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      className={`bento-card ${className ?? ""}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bento-spotlight" aria-hidden />
      <div className="bento-content">{children}</div>
    </motion.div>
  );
}
