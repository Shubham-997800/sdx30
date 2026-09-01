'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { learningItems } from '@/data/learning';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

export function LearningSection() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <Section id="learning" className="py-24 md:py-36">
      <Container>
        {/* ─── Header ─── */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            <SectionLabel>LEARNING</SectionLabel>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            <h2
              className="text-section text-foreground tracking-[-0.04em] leading-[1.05]"
            >
              Currently<br className="hidden md:block" /> Learning
            </h2>

            <p className="text-body text-muted-foreground max-w-md">
              Learning is part of the build process. Consistent curiosity drives better engineering.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 h-px w-full bg-border"
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* ─── Learning Grid ─── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {learningItems.map((item, i) => (
            <motion.div
              key={item.number}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={isGridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 + i * 0.06, ease: EASE }}
            >
              {/* Number */}
              <span className="text-label font-semibold text-muted-foreground/40">
                {item.number}
              </span>

              {/* Title */}
              <h3
                className="text-h4 mt-3 font-bold tracking-[-0.02em] text-foreground"
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Hover arrow */}
              <div className="absolute bottom-5 right-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">
                <span className="text-accent text-label">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
