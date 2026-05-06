"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "1.05em", rotateX: -38, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: "0.6em", rotateX: -45, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type SplitTextProps = {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  mode?: "word" | "char";
};

export function SplitText({
  text,
  className,
  stagger,
  delay = 0,
  mode = "word",
}: SplitTextProps) {
  if (mode === "char") {
    const chars = Array.from(text);
    return (
      <motion.span
        className={`split-text ${className ?? ""}`}
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: stagger ?? 0.025, delayChildren: delay }}
        aria-label={text}
      >
        {chars.map((ch, i) => (
          <motion.span
            key={`${ch}-${i}`}
            variants={charVariants}
            className="split-char"
            aria-hidden
          >
            {ch === " " ? " " : ch}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  const words = text.split(" ");
  return (
    <motion.span
      className={`split-text ${className ?? ""}`}
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: stagger ?? 0.06, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="split-word">
            <motion.span variants={wordVariants}>{word}</motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  );
}
