"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
  as?: "a" | "button";
  type?: "button" | "submit";
};

export function Magnetic({
  children,
  className,
  href,
  strength = 0.35,
  as = "a",
  type,
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = (as === "a" ? motion.a : motion.button) as typeof motion.a;
  const aProps =
    as === "a"
      ? { href }
      : ({ type: type ?? "button" } as { type: "button" | "submit" });

  return (
    <Comp
      // @ts-expect-error -- ref is generic across a/button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...aProps}
    >
      {children}
    </Comp>
  );
}
