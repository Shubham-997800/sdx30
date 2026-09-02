'use client';

import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { RevealSection } from '@/components/motion/RevealSystem';
import { techCategories } from '@/data/stack';
import { TechCategory } from './TechCategory';



export function StackSection() {
  return (
    <Section id="stack" className="py-16 sm:py-24 md:py-36">
      <Container>
        <RevealSection>
          <SectionHeading
            number="04"
            label="ECOSYSTEM"
            title="Tech Stack"
            description="Technologies I work with and actively learning. Honest progression, not inflated expertise."
          />
        </RevealSection>

        <div className="mt-8 sm:mt-12 md:mt-16 space-y-8 md:space-y-10">
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
