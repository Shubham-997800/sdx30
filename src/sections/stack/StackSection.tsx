'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { EASE } from '@/lib/animations';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { techCategories } from '@/data/stack';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { TechCategory } from './TechCategory';



export function StackSection() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="stack" className="py-24 md:py-36">
      <Container>
        <motion.div
          ref={ref}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading
            number="04"
            label="ECOSYSTEM"
            title="Tech Stack"
            description="Technologies I work with and actively learning. Honest progression, not inflated expertise."
          />
        </motion.div>

        <div className="mt-12 md:mt-16 space-y-8 md:space-y-10">
          {techCategories.map((category, index) => (
            <TechCategory
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
