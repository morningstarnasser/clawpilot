"use client";

import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
};

export function Marquee({ children, speed = 32 }: MarqueeProps) {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        <div className="marquee-row">{children}</div>
        <div className="marquee-row">{children}</div>
      </div>
    </div>
  );
}
