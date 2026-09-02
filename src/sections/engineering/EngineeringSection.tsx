'use client';

import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { RevealSection } from '@/components/motion/RevealSystem';
import { engineeringCategories } from '@/data/engineering';
import { EngineeringCategory } from './EngineeringCategory';



export function EngineeringSection() {
  return (
    <Section id="engineering" className="py-16 sm:py-24 md:py-36">
      <Container>
        <RevealSection>
          <SectionHeading
            number="03"
            label="CAPABILITIES"
            title="Frontend Engineering"
            description="Building responsive, accessible, and interactive interfaces as a system — not just a list of technologies."
          />
        </RevealSection>

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
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
