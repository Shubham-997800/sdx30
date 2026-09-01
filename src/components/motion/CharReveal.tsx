'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const EASE = [0.16, 1, 0.3, 1] as const;

export function CharReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
  as: Tag = 'span',
}: CharRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(wrapperRef, { once: true, margin: '-40px' });

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(' ');
  let globalIndex = 0;

  return (
    <div ref={wrapperRef} style={{ perspective: '600px' }}>
      <Tag className={className}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split('').map((char) => {
              const currentIndex = globalIndex++;
              const charDelay = delay + currentIndex * staggerDelay;

              return (
                <span key={currentIndex} className="inline-block overflow-hidden">
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
                      delay: charDelay,
                      ease: EASE,
                    }}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </Tag>
    </div>
  );
}
