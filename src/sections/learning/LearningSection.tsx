'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { EASE } from '@/lib/animations';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { learningItems } from '@/data/learning';
import { useReducedMotion } from '@/hooks/useReducedMotion';



export function LearningSection() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="learning" className="py-24 md:py-36 editorial-border-top">
      <Container>
        <motion.div
          ref={ref}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading
            number="07"
            label="GROWTH"
            title="Currently Learning"
            description="Always expanding — these are the areas I'm actively exploring and building toward."
          />
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {learningItems.map((item, i) => (
            <motion.div
              key={item.number}
              className="group relative rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE }}
            >
              <div className="flex items-start gap-3">
                <span className="text-label text-accent mt-0.5">{item.number}</span>
                <div className="space-y-1.5">
                  <h3 className="text-h4 text-foreground">{item.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>

              {/* Hover corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-px h-6 bg-gradient-to-t from-accent/30 to-transparent" />
                <div className="absolute bottom-0 right-0 h-px w-6 bg-gradient-to-l from-accent/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
