"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
};

export function Counter({ to, suffix = "", duration = 1.6 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [display, setDisplay] = useState(0);
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const unsub = mv.on("change", (latest) => setDisplay(Math.round(latest)));
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref} className="mono">
      {display}
      {suffix}
    </span>
  );
}
