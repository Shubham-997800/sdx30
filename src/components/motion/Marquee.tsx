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
        'group relative overflow-hidden',
        className,
      )}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

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
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
          style={{ willChange: 'transform' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {/* Pause on hover via CSS */}
          <div className="flex items-center gap-8 group-hover:[animation-play-state:paused]">{children}</div>
          <div className="flex items-center gap-8 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
