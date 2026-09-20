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

        <RevealGroup className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningItems.map((item, idx) => {
            const tags = ['ACTIVE DEEP DIVE', 'OPTIMIZATION', 'TEST DRIVEN', 'DESIGN TOKENS', 'SYSTEM PATTERNS'];
            const tag = tags[idx % tags.length];
            return (
              <div
                key={item.number}
                className="group relative rounded-xl border border-border bg-card p-5.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-accent/40"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-label text-accent font-mono font-bold">{item.number}</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/5 px-2 py-0.5 text-[0.62rem] font-mono font-semibold uppercase tracking-wider text-accent">
                    <span className="size-1 rounded-full bg-accent animate-pulse" />
                    {tag}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-h4 text-foreground group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                {/* Hover corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-px h-6 bg-gradient-to-t from-accent/50 to-transparent" />
                  <div className="absolute bottom-0 right-0 h-px w-6 bg-gradient-to-l from-accent/50 to-transparent" />
                </div>
              </div>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
