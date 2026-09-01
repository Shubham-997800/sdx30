'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const RING_SPRING = { stiffness: 400, damping: 28, mass: 0.5 } as const;
const DOT_SPRING = { stiffness: 600, damping: 30, mass: 0.3 } as const;
const isTouchDevice = typeof window !== 'undefined'
  ? 'ontouchstart' in window || navigator.maxTouchPoints > 0
  : false;

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringX = useSpring(cursorX, RING_SPRING);
  const ringY = useSpring(cursorY, RING_SPRING);
  const smoothDotX = useSpring(dotX, DOT_SPRING);
  const smoothDotY = useSpring(dotY, DOT_SPRING);

  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (prefersReducedMotion || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        dotX.set(e.clientX);
        dotY.set(e.clientY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, cursorX, cursorY, dotX, dotY]);

  if (prefersReducedMotion || isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/20 mix-blend-difference hidden md:block"
        style={{ x: ringX, y: ringY }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference hidden md:block"
        style={{ x: smoothDotX, y: smoothDotY }}
      />
    </>
  );
}
