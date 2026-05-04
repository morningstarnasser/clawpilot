"use client";

import { motion, type Variants } from "framer-motion";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "1.05em", rotateX: -38, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

type SplitTextProps = {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function SplitText({
  text,
  className,
  stagger = 0.06,
  delay = 0,
}: SplitTextProps) {
  const words = text.split(" ");
  return (
    <motion.span
      className={`split-text ${className ?? ""}`}
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span className="split-word" key={`${word}-${i}`}>
          <motion.span variants={wordVariants}>{word}</motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.span>
  );
}
