'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function Marquee({
  children,
  className,
  speed = 30,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(containerRef, { once: false, margin: '-50px' });

  const duration = speed;

  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={cn('overflow-hidden', className)}>
        <div className="flex items-center whitespace-nowrap gap-8">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'group overflow-hidden',
        className,
      )}
    >
      <motion.div
        className="flex items-center whitespace-nowrap gap-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center gap-8"
          animate={{ x: '-50%' }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
          style={{ willChange: 'transform' }}
        >
          {/* Duplicate content for seamless loop */}
          <div className="flex items-center gap-8">{children}</div>
          <div className="flex items-center gap-8" aria-hidden="true">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
