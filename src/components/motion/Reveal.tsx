'use client';

import { type ReactNode, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
}

const DIRECTION_MAP = {
  up: (d: number) => ({ y: d }),
  down: (d: number) => ({ y: -d }),
  left: (d: number) => ({ x: d }),
  right: (d: number) => ({ x: -d }),
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  distance = 28,
  once = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once, margin: '-50px 0px' });

  const offset = DIRECTION_MAP[direction](distance);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
