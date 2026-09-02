import type { Variants } from "motion/react";

/* ═══════════════════════════════════════════════
   EASING & TRANSITIONS
   ═══════════════════════════════════════════════ */

export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const SPRING = { stiffness: 300, damping: 20, mass: 0.5 } as const;
export const SPRING_SLOW = { stiffness: 150, damping: 20, mass: 0.8 } as const;
export const SPRING_SNAPPY = { stiffness: 400, damping: 28, mass: 0.5 } as const;

export const DURATION = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.35,
  medium: 0.5,
  slow: 0.7,
  cinematic: 1.0,
} as const;

export const STAGGER = {
  fast: 0.05,
  normal: 0.08,
  slow: 0.12,
  section: 0.15,
} as const;

export const DISTANCE = {
  small: 12,
  medium: 20,
  large: 32,
} as const;

/* ═══════════════════════════════════════════════
   VARIANTS — Pre-built animation sets
   ═══════════════════════════════════════════════ */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE.medium },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.medium, ease: EASE },
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: DURATION.slow, ease: EASE },
  },
};

export const clipRevealLeft: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: DURATION.slow, ease: EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.medium, ease: EASE },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -DISTANCE.large },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.medium, ease: EASE },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: DISTANCE.large },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.medium, ease: EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: STAGGER.fast,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.section,
      delayChildren: STAGGER.slow,
    },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: DURATION.medium, ease: EASE },
  },
};

export const charReveal: Variants = {
  hidden: { opacity: 0, y: "100%", rotateX: -60 },
  visible: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

export const lineReveal: Variants = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: {
    scaleX: 1,
    transition: { duration: DURATION.slow, ease: EASE },
  },
};

/* ═══════════════════════════════════════════════
   REUSABLE TRANSITION PRESETS
   ═══════════════════════════════════════════════ */

export const fadeUpTransition = (delay = 0) => ({
  initial: { opacity: 0, y: DISTANCE.medium },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.medium, delay, ease: EASE },
});

export const fadeInTransition = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: DURATION.medium, delay, ease: EASE },
});

export const scaleTransition = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: DURATION.medium, delay, ease: EASE },
});
