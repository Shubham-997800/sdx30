'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { projects } from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ProjectFeature } from './ProjectFeature';

const EASE = [0.16, 1, 0.3, 1] as const;

export function WorkSection() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: '-80px' });

  return (
    <Section id="work" className="py-24 md:py-36">
      <Container>
        {/* ─── Section Header ─── */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          >
            <SectionLabel number="02">SELECTED WORK</SectionLabel>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            <h2 className="text-section text-foreground max-w-xl">
              Projects built,<br className="hidden md:block" /> shipped, and iterated on.
            </h2>

            <span className="text-label text-muted-foreground/60 shrink-0">
              {String(projects.length).padStart(2, '0')} PROJECTS
            </span>
          </motion.div>

          {/* Separator */}
          <motion.div
            className="mt-8 h-px w-full bg-border"
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* ─── Projects ─── */}
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <ProjectFeature key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
