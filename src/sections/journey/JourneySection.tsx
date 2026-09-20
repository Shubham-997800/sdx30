'use client';

import { motion } from 'motion/react';
import { EASE } from '@/lib/animations';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { Reveal } from '@/components/motion/RevealSystem';
import { journeyEvents } from '@/data/journey';
import { JourneySlider } from './JourneySlider';



export function JourneySection() {
  return (
    <Section id="journey" className="py-16 sm:py-24 md:py-36">
      <Container>
        {/* ─── Section Header ─── */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <Reveal direction="up" delay={0.05}>
            <SectionLabel number="04">JOURNEY & HACKATHONS</SectionLabel>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-section text-foreground">
                Hackathons &<br className="hidden md:block" /> Expeditions
              </h2>
              <p className="text-body text-muted-foreground max-w-xl mt-3">
                High-stakes national problem solving, 24-hr on-site grand finales, and intensive production builds.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-end">
              <span className="text-caption font-mono text-muted-foreground">
                5 MILESTONES (2025–2026)
              </span>
            </div>
          </Reveal>

          {/* Separator */}
          <motion.div
            className="mt-8 h-px w-full bg-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* ─── Horizontal Milestone Track Slider ─── */}
        <Reveal direction="up" delay={0.15}>
          <JourneySlider events={journeyEvents} />
        </Reveal>
      </Container>
    </Section>
  );
}
