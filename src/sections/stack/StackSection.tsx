'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { techCategories } from '@/data/stack';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { TechCategory } from './TechCategory';

const EASE = [0.16, 1, 0.3, 1] as const;

export function StackSection() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <Section id="stack" className="py-24 md:py-36">
      <Container>
        {/* ─── Section Header ─── */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
            }
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            <SectionLabel>STACK</SectionLabel>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            <h2
              className="text-section text-foreground"
            >
              Tech Stack
            </h2>

            <p className="text-body text-muted-foreground max-w-md">
              Strong fundamentals → modern frontend learning → full-stack expansion → production workflow.
            </p>
          </motion.div>

          {/* Separator */}
          <motion.div
            className="mt-8 h-px w-full bg-border"
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* ─── Categories Grid ─── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {techCategories.map((category, i) => (
            <TechCategory
              key={category.id}
              category={category}
              index={i}
              isInView={isGridInView}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
