'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { marqueeWords, marqueeStatement } from '@/data/content';

const EASE = [0.16, 1, 0.3, 1] as const;

export function MarqueeSection() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-80px' });

  const words = [...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden editorial-border-top editorial-border-bottom" ref={ref}>
      {/* Marquee */}
      <div className="relative overflow-hidden">
        {prefersReducedMotion ? (
          <div className="flex items-center justify-center gap-6 md:gap-10 px-4">
            {marqueeWords.map((word, i) => (
              <span key={i} className="text-marquee text-foreground/10 dark:text-foreground/15 whitespace-nowrap">
                {word}
                <span className="text-accent/30 mx-4 md:mx-8">·</span>
              </span>
            ))}
          </div>
        ) : (
          <motion.div
            className="marquee"
            style={{ '--marquee-duration': '35s' } as React.CSSProperties}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            {words.map((word, i) => (
              <span key={i} className="text-marquee text-foreground/10 dark:text-foreground/15 whitespace-nowrap flex items-center">
                {word}
                <span className="text-accent/30 mx-6 md:mx-12 text-4xl md:text-6xl">·</span>
              </span>
            ))}
          </motion.div>
        )}
      </div>

      {/* Statement */}
      <Container>
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
            "{marqueeStatement}"
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
