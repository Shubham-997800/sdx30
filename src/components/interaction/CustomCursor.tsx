'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const RING_SPRING = { stiffness: 400, damping: 28, mass: 0.5 } as const;
const DOT_SPRING = { stiffness: 600, damping: 30, mass: 0.3 } as const;
const isTouchDevice = typeof window !== 'undefined'
  ? 'ontouchstart' in window || navigator.maxTouchPoints > 0
  : false;

type CursorState = 'default' | 'link' | 'button' | 'text';

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
  const [state, setState] = useState<CursorState>('default');
  const [clicking, setClicking] = useState(false);

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

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, [role="link"]')) setState('link');
      else if (target.closest('button, [role="button"], input[type="submit"]')) setState('button');
      else if (target.closest('input, textarea, [contenteditable]')) setState('text');
      else setState('default');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, cursorX, cursorY, dotX, dotY]);

  if (prefersReducedMotion || isTouchDevice) return null;

  const ringSize = state === 'link' ? 48 : state === 'button' ? 56 : state === 'text' ? 24 : 32;
  const dotScale = clicking ? 0.5 : 1;

  return (
    <>
      {/* Main ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-accent/50 dark:border-foreground/20 dark:mix-blend-difference hidden md:block"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: state === 'link' || state === 'button'
            ? 'var(--accent)'
            : undefined,
          boxShadow: state !== 'default'
            ? '0 0 20px oklch(from var(--accent) l c h / 0.2)'
            : 'none',
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Center dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent dark:bg-foreground dark:mix-blend-difference hidden md:block"
        style={{ x: smoothDotX, y: smoothDotY }}
        animate={{
          width: state === 'link' ? 4 : state === 'button' ? 6 : 6,
          height: state === 'link' ? 4 : state === 'button' ? 6 : 6,
          scale: dotScale,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Click ripple */}
      {clicking && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40 dark:border-foreground/30 hidden md:block"
          style={{ x: cursorX, y: cursorY }}
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ width: 60, height: 60, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </>
  );
}
