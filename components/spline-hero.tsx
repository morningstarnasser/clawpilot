"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((mod) => mod.default),
  { ssr: false, loading: () => <BotPoster /> }
);

const SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

function BotPoster() {
  return (
    <div className="bot-poster">
      <img src="/brand/ai-operator-bot.png" alt="" />
      <div className="bot-poster-loader">
        <span /><span /><span />
        <span className="loader-text">Booting agent…</span>
      </div>
    </div>
  );
}

/**
 * On touch devices the bot can't follow a real cursor, so we fake one:
 * a virtual mouse moves in an organic Lissajous curve across the canvas,
 * making the bot look around continuously. Real taps interrupt with a
 * dispatch at the touch coordinates.
 */
function useAutoCursorOnTouch(stageRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const noHover = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!noHover || reduced) return;

    let raf = 0;
    let lastTouchAt = 0;
    const start = performance.now();

    const dispatchMove = (cx: number, cy: number) => {
      const stage = stageRef.current;
      const canvas = stage?.querySelector("canvas") as HTMLCanvasElement | null;
      if (!canvas) return;
      canvas.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: cx,
          clientY: cy,
          bubbles: true,
          cancelable: true,
        })
      );
    };

    const tick = () => {
      const stage = stageRef.current;
      if (!stage) {
        raf = requestAnimationFrame(tick);
        return;
      }
      // Skip the auto-cycle for 1.6s after a real touch
      if (performance.now() - lastTouchAt < 1600) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const rect = stage.getBoundingClientRect();
      if (rect.width < 10 || rect.height < 10) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const t = (performance.now() - start) / 1000;
      // Lissajous pattern feels organic, not robotic
      const phaseX = t * 0.7;
      const phaseY = t * 1.05;
      const cx = rect.left + rect.width / 2 + Math.sin(phaseX) * rect.width * 0.32;
      const cy = rect.top + rect.height * 0.45 + Math.cos(phaseY) * rect.height * 0.18;
      dispatchMove(cx, cy);
      raf = requestAnimationFrame(tick);
    };

    const onTouch = (e: TouchEvent) => {
      const touch = e.touches[0] || e.changedTouches[0];
      if (!touch) return;
      lastTouchAt = performance.now();
      dispatchMove(touch.clientX, touch.clientY);
    };

    const stage = stageRef.current;
    stage?.addEventListener("touchstart", onTouch, { passive: true });
    stage?.addEventListener("touchmove", onTouch, { passive: true });

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      stage?.removeEventListener("touchstart", onTouch);
      stage?.removeEventListener("touchmove", onTouch);
    };
  }, [stageRef]);
}

export function SplineHero({ children }: { children: React.ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);
  useAutoCursorOnTouch(stageRef);

  return (
    <motion.div
      className="spline-hero-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="spline-hero-grid">
        <div className="spline-hero-copy">{children}</div>
        <div className="spline-hero-stage" aria-hidden ref={stageRef}>
          <div className="bot-aura" aria-hidden />
          <div className="bot-frame">
            <Spline scene={SCENE} />
          </div>
          <div className="bot-floor" aria-hidden />
          <div className="bot-rings" aria-hidden>
            <span /><span /><span />
          </div>
          <div className="spline-watermark-cover" aria-hidden />
        </div>
      </div>
    </motion.div>
  );
}
