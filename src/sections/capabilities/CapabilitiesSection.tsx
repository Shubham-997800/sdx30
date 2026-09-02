'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { EASE } from '@/lib/animations';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { engineeringCategories } from '@/data/engineering';
import { techCategories } from '@/data/stack';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { EngineeringCategory } from '@/sections/engineering/EngineeringCategory';
import { TechCategory } from '@/sections/stack/TechCategory';



export function CapabilitiesSection() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="capabilities" className="py-24 md:py-36">
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
            title="Skills & Stack"
            description="What I can build and what I build with — honest progression, not inflated expertise."
          />
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Engineering Skills */}
          <div>
            <h3 className="text-label text-accent mb-6 block">ENGINEERING</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {engineeringCategories.map((category, index) => (
                <EngineeringCategory
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div>
            <h3 className="text-label text-accent mb-6 block">TECH STACK</h3>
            <div className="space-y-6 md:space-y-8">
              {techCategories.map((category, index) => (
                <TechCategory
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
