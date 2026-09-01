'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type CursorState = 'default' | 'link' | 'button' | 'project';

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { stiffness: 400, damping: 28, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const dotSpringConfig = { stiffness: 600, damping: 30, mass: 0.3 };
  const smoothDotX = useSpring(dotX, dotSpringConfig);
  const smoothDotY = useSpring(dotY, dotSpringConfig);

  const stateRef = useRef<CursorState>('default');
  const rafRef = useRef<number>(0);

  const updateCursorState = useCallback((el: Element | null) => {
    if (!el) {
      stateRef.current = 'default';
      return;
    }
    const target = el.closest('a, button, [role="button"], [data-cursor]');
    if (!target) {
      stateRef.current = 'default';
      return;
    }
    if (target.closest('[data-cursor="project"]')) {
      stateRef.current = 'project';
    } else if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
      stateRef.current = 'button';
    } else {
      stateRef.current = 'link';
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        dotX.set(e.clientX);
        dotY.set(e.clientY);
        updateCursorState(e.target as Element);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, cursorX, cursorY, dotX, dotY, updateCursorState]);

  if (prefersReducedMotion) return null;

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <>
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/20 mix-blend-difference hidden md:block"
        style={{ x: ringX, y: ringY }}
      />
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference hidden md:block"
        style={{ x: smoothDotX, y: smoothDotY }}
      />
    </>
  );
}
