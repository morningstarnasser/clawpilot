"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type TiltCardProps = {
  className?: string;
  children: ReactNode;
  intensity?: number;
  hint?: string;
};

export function TiltCard({ className, children, intensity = 6, hint }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.5 });
  const rotateX = useTransform(sy, [-1, 1], [intensity, -intensity]);
  const rotateY = useTransform(sx, [-1, 1], [-intensity, intensity]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    mx.set(px * 2 - 1);
    my.set(py * 2 - 1);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={canHover ? onMove : undefined}
      onMouseLeave={canHover ? onLeave : undefined}
      className={`bento-card ${className ?? ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={
        canHover
          ? { rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }
          : undefined
      }
    >
      <div className="bento-content">
        {children}
        {hint && <span className="bento-hint">{hint}</span>}
      </div>
    </motion.div>
  );
}
