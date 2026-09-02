'use client';

import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Reveal, RevealGroup } from '@/components/motion/RevealSystem';
import { learningItems } from '@/data/learning';



export function LearningSection() {
  return (
    <Section id="learning" className="py-16 sm:py-24 md:py-36 editorial-border-top">
      <Container>
        <Reveal direction="up">
          <SectionHeading
            number="06"
            label="GROWTH"
            title="Currently Learning"
            description="Always expanding — these are the areas I'm actively exploring and building toward."
          />
        </Reveal>

        <RevealGroup className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {learningItems.map((item) => (
            <div
              key={item.number}
              className="group relative rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-accent/30"
            >
              <div className="flex items-start gap-3">
                <span className="text-label text-accent mt-0.5">{item.number}</span>
                <div className="space-y-1.5">
                  <h3 className="text-h4 text-foreground">{item.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>

              {/* Hover corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none">
                <div className="absolute bottom-0 right-0 w-px h-6 bg-gradient-to-t from-accent/30 to-transparent" />
                <div className="absolute bottom-0 right-0 h-px w-6 bg-gradient-to-l from-accent/30 to-transparent" />
              </div>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
