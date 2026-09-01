'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { engineeringCategories } from '@/data/engineering';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { EngineeringCategory } from './EngineeringCategory';

const EASE = [0.16, 1, 0.3, 1] as const;

export function EngineeringSection() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="engineering" className="py-24 md:py-36">
      <Container>
        <motion.div
          ref={ref}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading
            number="03"
            label="CAPABILITIES"
            title="Frontend Engineering"
            description="Building responsive, accessible, and interactive interfaces as a system — not just a list of technologies."
          />
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {engineeringCategories.map((category, index) => (
            <EngineeringCategory
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
