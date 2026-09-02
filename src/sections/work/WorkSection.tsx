'use client';

import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { Reveal } from '@/components/motion/RevealSystem';
import { projects } from '@/data/projects';
import { ProjectFeature } from './ProjectFeature';



export function WorkSection() {
  return (
    <Section id="work" className="py-16 sm:py-24 md:py-36">
      <Container>
        {/* ─── Section Header ─── */}
        <div className="mb-8 sm:mb-16 md:mb-24">
          <Reveal direction="up" delay={0.05}>
            <SectionLabel number="02">SELECTED WORK</SectionLabel>
          </Reveal>

          <Reveal direction="up" delay={0.15} className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-section text-foreground max-w-xl">
              Projects built,<br className="hidden md:block" /> shipped, and iterated on.
            </h2>

            <span className="text-label text-muted-foreground/60 shrink-0">
              {String(projects.length).padStart(2, '0')} PROJECTS
            </span>
          </Reveal>

          {/* Separator */}
          <div className="mt-8 h-px w-full bg-border" />
        </div>

        {/* ─── Projects ─── */}
        <div className="space-y-12 sm:space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <ProjectFeature key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
