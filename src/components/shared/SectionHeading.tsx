'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
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

const EASE = [0.16, 1, 0.3, 1] as const;

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
  const isInView = useInView(ref, { once: false, margin: '-60px' });
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
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <SectionLabel number={number}>{label}</SectionLabel>
        </motion.div>
      )}

      {/* Title — CharReveal */}
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
          <span style={{ perspective: '600px' }}>
            {title.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block">
                {word.split('').map((char, charIndex) => {
                  const globalIndex = title.split(' ').slice(0, wordIndex).join('').length + wordIndex + charIndex;
                  return (
                    <span key={charIndex} className="inline-block overflow-hidden">
                      <motion.span
                        className="inline-block origin-bottom"
                        initial={{ y: '100%', opacity: 0, rotateX: -60 }}
                        animate={
                          isInView
                            ? { y: '0%', opacity: 1, rotateX: 0 }
                            : { y: '100%', opacity: 0, rotateX: -60 }
                        }
                        transition={{
                          duration: 0.6,
                          delay: globalIndex * 0.03,
                          ease: EASE,
                        }}
                      >
                        {char}
                      </motion.span>
                    </span>
                  );
                })}
                {wordIndex < title.split(' ').length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            ))}
          </span>
        )}
      </h2>

      {/* Description — word-by-word */}
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
            description.split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.3em]"
                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                    : { opacity: 0, y: 8, filter: 'blur(4px)' }
                }
                transition={{
                  duration: 0.4,
                  delay: title.length * 0.03 + 0.3 + i * 0.03,
                  ease: EASE,
                }}
              >
                {word}
              </motion.span>
            ))
          )}
        </p>
      )}
    </div>
  );
}
