'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { RevealSection } from '@/components/motion/RevealSystem';
import { marqueeWords, marqueeStatement } from '@/data/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';



export function MarqueeSection() {
  const prefersReducedMotion = useReducedMotion();

  const words = [...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden editorial-border-top editorial-border-bottom">
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
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
        <RevealSection className="mt-12 md:mt-16 text-center">
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
            "{marqueeStatement}"
          </p>
        </RevealSection>
      </Container>
    </section>
  );
}
