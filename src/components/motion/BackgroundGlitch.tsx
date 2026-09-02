'use client';

import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';


interface BackgroundGlitchProps {
  text: string;
  className?: string;
}

export function BackgroundGlitch({ text, className }: BackgroundGlitchProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {/* Base text */}
      <span className="relative z-10">{text}</span>

      {/* Single subtle accent drift — one layer only */}
      <motion.span
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ color: 'var(--accent)' }}
        animate={{
          x: [0, -2, 2, -1, 0],
          opacity: [0, 0.12, 0, 0.15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden
      >
        {text}
      </motion.span>
    </span>
  );
}
