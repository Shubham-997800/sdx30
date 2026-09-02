'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { EASE, DURATION, STAGGER, DISTANCE } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { SectionLabel } from './SectionLabel';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionHeadingProps {
  title: string;
  label?: string;
  number?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  align?: 'left' | 'center';
}



export function SectionHeading({
  title,
  label,
  number,
  description,
  className,
  titleClassName,
  align = 'left',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn(
        'space-y-5',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {/* Label with line draw */}
      {(label || number) && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
          transition={{ duration: DURATION.normal, ease: EASE }}
        >
          <SectionLabel number={number}>{label}</SectionLabel>
        </motion.div>
      )}

      {/* Title — simple fade up, no per-char rotation */}
      <h2
        className={cn(
          'text-section text-foreground max-w-3xl',
          align === 'center' && 'mx-auto',
          titleClassName,
        )}
      >
        {prefersReducedMotion ? (
          title
        ) : (
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: DISTANCE.small }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: DISTANCE.small }}
            transition={{ duration: DURATION.normal, ease: EASE }}
          >
            {title}
          </motion.span>
        )}
      </h2>

      {/* Description — simple fade up, no blur */}
      {description && (
        <p
          className={cn(
            'text-body-lg text-muted-foreground max-w-2xl leading-relaxed',
            align === 'center' && 'mx-auto',
          )}
        >
          {prefersReducedMotion ? (
            description
          ) : (
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: DISTANCE.small }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: DISTANCE.small }}
              transition={{ duration: DURATION.normal, delay: STAGGER.fast, ease: EASE }}
            >
              {description}
            </motion.span>
          )}
        </p>
      )}
    </div>
  );
}
