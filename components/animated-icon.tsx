"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  CalendarClock,
  Eye,
  Globe2,
  Inbox,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const REGISTRY: Record<string, { Icon: LucideIcon; variant: "tilt" | "spin" | "pulse" | "scan" | "shake" | "rise" }> = {
  MessageCircle: { Icon: MessageCircle, variant: "pulse" },
  Inbox: { Icon: Inbox, variant: "rise" },
  Globe2: { Icon: Globe2, variant: "spin" },
  CalendarClock: { Icon: CalendarClock, variant: "tilt" },
  Workflow: { Icon: Workflow, variant: "scan" },
  Eye: { Icon: Eye, variant: "scan" },
  LockKeyhole: { Icon: LockKeyhole, variant: "shake" },
  ShieldCheck: { Icon: ShieldCheck, variant: "tilt" },
  Bot: { Icon: Bot, variant: "pulse" },
  Wrench: { Icon: Wrench, variant: "tilt" },
  Sparkles: { Icon: Sparkles, variant: "spin" },
  Zap: { Icon: Zap, variant: "shake" },
};

type Variant = (typeof REGISTRY)[keyof typeof REGISTRY]["variant"];

const VARIANTS: Record<Variant, {
  rest: Record<string, number | string>;
  hover: Record<string, number | string | number[]>;
  transition: object;
}> = {
  pulse: {
    rest: { scale: 1 },
    hover: { scale: [1, 1.18, 1] },
    transition: { duration: 1.0, repeat: Infinity, ease: "easeInOut" },
  },
  spin: {
    rest: { rotate: 0 },
    hover: { rotate: 360 },
    transition: { duration: 1.6, ease: "easeInOut" },
  },
  tilt: {
    rest: { rotate: 0 },
    hover: { rotate: [0, -10, 10, 0] },
    transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
  },
  scan: {
    rest: { x: 0 },
    hover: { x: [0, 2, -2, 0] },
    transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
  },
  shake: {
    rest: { rotate: 0 },
    hover: { rotate: [0, -3, 3, -3, 3, 0] },
    transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
  },
  rise: {
    rest: { y: 0 },
    hover: { y: [0, -3, 0] },
    transition: { duration: 0.7, repeat: Infinity, ease: "easeInOut" },
  },
};

type Props = {
  name: string;
  size?: number;
  hovered: boolean;
};

export function AnimatedIcon({ name, size = 22, hovered }: Props) {
  const reduced = useReducedMotion();
  const entry = REGISTRY[name];
  if (!entry) return null;
  const { Icon, variant } = entry;
  const v = VARIANTS[variant];

  return (
    <motion.span
      style={{ display: "inline-flex" }}
      animate={hovered && !reduced ? v.hover : v.rest}
      transition={hovered && !reduced ? v.transition : { duration: 0.3 }}
    >
      <Icon size={size} />
    </motion.span>
  );
}
