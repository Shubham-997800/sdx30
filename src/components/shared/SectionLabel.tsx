'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { EASE, DURATION } from '@/lib/animations';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  number?: string;
}

export function SectionLabel({ children, className, number }: SectionLabelProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const [displayNum, setDisplayNum] = useState('00');

  useEffect(() => {
    if (!number || prefersReducedMotion || !isInView) {
      if (number) setDisplayNum(number);
      return;
    }

    const target = parseInt(number, 10);
    if (isNaN(target)) {
      setDisplayNum(number);
      return;
    }

    let current = 0;
    const step = Math.max(1, Math.floor(target / 10));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplayNum(String(current).padStart(2, '0'));
    }, 30);

    return () => clearInterval(timer);
  }, [number, isInView, prefersReducedMotion]);

  return (
    <span ref={ref} className={cn('inline-flex items-center gap-3 text-overline', className)}>
      {number && (
        <span className="text-accent font-mono tabular-nums">{displayNum}</span>
      )}
      <span>{children}</span>
      <motion.span
        className="h-px bg-accent/40 origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        style={{ width: 32 }}
        transition={{ duration: DURATION.fast, delay: 0.1, ease: EASE }}
      />
    </span>
  );
}
