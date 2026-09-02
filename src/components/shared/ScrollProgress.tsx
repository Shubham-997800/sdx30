'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Color shifts from accent to a brighter shade at 100%
  const hue = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0.8]);
  const barHeight = useTransform(scrollYProgress, [0, 0.99, 1], [2, 2, 3]);

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[550]">
      {/* Glow layer */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2 origin-left will-change-transform"
        style={{
          scaleX,
          opacity: glowOpacity,
          background: 'linear-gradient(90deg, var(--accent), oklch(from var(--accent) l c h / 0.6))',
          filter: 'blur(6px)',
        }}
      />
      {/* Main bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 origin-left will-change-transform"
        style={{
          scaleX,
          height: barHeight,
          background: 'linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, white))',
        }}
      />
    </div>
  );
}
