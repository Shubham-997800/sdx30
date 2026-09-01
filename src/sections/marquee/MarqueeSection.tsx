'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Marquee } from '@/components/motion/Marquee';
import { marqueeWords, personalStatement } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function MarqueeWord({ word, index }: { word: string; index: number }) {
  return (
    <span className="flex items-center">
      {index > 0 && (
        <span className="mx-6 text-accent/40 text-2xl" aria-hidden="true">
          ·
        </span>
      )}
      <span
        className="font-bold tracking-[-0.04em] text-foreground/10 dark:text-foreground/15 transition-colors duration-500 uppercase"
        style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
      >
        {word}
      </span>
    </span>
  );
}

export function MarqueeSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <Section className="py-16 md:py-24">
      {/* ─── Marquee Band ─── */}
      <Marquee speed={40} className="w-full py-4 -mx-5 md:-mx-8 lg:-mx-10 px-5 md:px-8 lg:px-10">
        {marqueeWords.map((word, i) => (
          <MarqueeWord key={word} word={word} index={i} />
        ))}
      </Marquee>

      {/* ─── Personal Statement ─── */}
      <div ref={sectionRef}>
        <Container className="mt-20 md:mt-28">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Label */}
            <motion.div
              className="col-span-4 md:col-span-2"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <span className="text-label text-muted-foreground">
                {personalStatement.label}
              </span>
            </motion.div>

            {/* Statement */}
            <motion.div
              className="col-span-4 md:col-span-6 lg:col-span-7"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h2
                className="text-feature text-foreground leading-[1.1] tracking-[-0.03em]"
              >
                {personalStatement.heading}
              </h2>
              <p className="mt-6 text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
                {personalStatement.body}
              </p>
            </motion.div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
