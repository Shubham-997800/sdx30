'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  number?: string;
}

export function SectionLabel({ children, className, number }: SectionLabelProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const [displayNum, setDisplayNum] = useState('00');

  // Number counter animation
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
    const step = Math.max(1, Math.floor(target / 15));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplayNum(String(current).padStart(2, '0'));
    }, 40);

    return () => clearInterval(timer);
  }, [number, isInView, prefersReducedMotion]);

  return (
    <span ref={ref} className={cn('inline-flex items-center gap-3 text-overline', className)}>
      {number && (
        <span className="text-accent font-mono tabular-nums">{displayNum}</span>
      )}
      <span>{children}</span>
      {/* Line draw */}
      <motion.span
        className="h-px bg-accent/40"
        initial={{ width: 0 }}
        animate={isInView ? { width: 32 } : { width: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </span>
  );
}
