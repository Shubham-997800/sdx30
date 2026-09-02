'use client';

import { type ReactNode, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { EASE, DURATION, DISTANCE } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/* ═══════════════════════════════════════════════
   CONTENT-FIRST REVEAL SYSTEM
   ─ Content is always visible in DOM.
   ─ Animation enhances entrance, never blocks it.
   ─ If JS fails, content remains visible.
   ═══════════════════════════════════════════════ */

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Animation direction */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Duration of animation (seconds) */
  duration?: number;
  /** Distance of translation (px) */
  distance?: number;
  /** Once in view, stay visible */
  once?: boolean;
  /** Whether this is above-the-fold (no useInView, animate on mount) */
  immediate?: boolean;
}

function getTransform(direction: string, distance: number) {
  switch (direction) {
    case 'up': return { y: distance };
    case 'down': return { y: -distance };
    case 'left': return { x: distance };
    case 'right': return { x: -distance };
    default: return {};
  }
}

/**
 * Content-first reveal.
 * Content is visible by default. Animation is enhancement only.
 */
export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = DURATION.normal,
  distance = DISTANCE.small,
  once = true,
  immediate = false,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = getTransform(direction, distance);

  if (immediate) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, ...offset }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Group reveal — container for staggered children.
 */
export function RevealGroup({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: DISTANCE.small }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: DISTANCE.small }}
      transition={{ duration: DURATION.normal, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Section-level reveal — for entire sections entering viewport.
 */
export function RevealSection({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: DISTANCE.medium }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: DISTANCE.medium }}
      transition={{ duration: DURATION.medium, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
