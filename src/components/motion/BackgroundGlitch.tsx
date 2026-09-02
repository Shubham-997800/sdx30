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

      {/* Layer 1 — accent color, continuous drift */}
      <motion.span
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ color: 'var(--accent)' }}
        animate={{
          x: [0, -3, 2, -1, 3, 0],
          y: [0, 1, -2, 1, -1, 0],
          opacity: [0, 0.15, 0, 0.2, 0, 0.1, 0],
          clipPath: [
            'inset(0 0 90% 0)',
            'inset(10% 0 60% 0)',
            'inset(30% 0 30% 0)',
            'inset(60% 0 10% 0)',
            'inset(80% 0 0% 0)',
            'inset(0 0 90% 0)',
          ],
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

      {/* Layer 2 — accent muted, opposite drift */}
      <motion.span
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ color: 'var(--accent)', filter: 'blur(1px)' }}
        animate={{
          x: [0, 2, -3, 1, -2, 0],
          y: [0, -1, 2, -1, 1, 0],
          opacity: [0, 0.1, 0, 0.15, 0, 0.08, 0],
          clipPath: [
            'inset(90% 0 0 0)',
            'inset(50% 0 20% 0)',
            'inset(20% 0 50% 0)',
            'inset(5% 0 70% 0)',
            'inset(0% 0 85% 0)',
            'inset(90% 0 0 0)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        aria-hidden
      >
        {text}
      </motion.span>

      {/* Layer 3 — intense glitch burst, periodic */}
      <motion.span
        className="absolute inset-0 z-30 pointer-events-none"
        style={{ color: 'var(--accent)' }}
        animate={{
          x: [0, 0, -6, 4, -2, 5, 0, 0],
          opacity: [0, 0, 0.4, 0, 0.3, 0, 0, 0],
          clipPath: [
            'inset(0 0 100% 0)',
            'inset(0 0 100% 0)',
            'inset(20% 0 40% 0)',
            'inset(50% 0 20% 0)',
            'inset(10% 0 60% 0)',
            'inset(40% 0 30% 0)',
            'inset(0 0 100% 0)',
            'inset(0 0 100% 0)',
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 1],
        }}
        aria-hidden
      >
        {text}
      </motion.span>
    </span>
  );
}
