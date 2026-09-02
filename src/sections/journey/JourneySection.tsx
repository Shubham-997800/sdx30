'use client';

import { motion } from 'motion/react';
import { EASE } from '@/lib/animations';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { Reveal } from '@/components/motion/RevealSystem';
import { journeyEvents } from '@/data/journey';
import { JourneyEvent } from './JourneyEvent';



export function JourneySection() {
  return (
    <Section id="journey" className="py-16 sm:py-24 md:py-36">
      <Container>
        {/* ─── Section Header ─── */}
        <div className="mb-10 sm:mb-16 md:mb-24">
          <Reveal direction="up" delay={0.05}>
            <SectionLabel>JOURNEY</SectionLabel>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-section text-foreground"
            >
              Hackathon<br className="hidden md:block" /> Journey
            </h2>

            <p className="text-body text-muted-foreground max-w-md">
              Real-world building experience through hackathons and intensive technical challenges.
            </p>
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

        {/* ─── Timeline ─── */}
        <div className="max-w-2xl">
          {journeyEvents.map((event, i) => (
            <JourneyEvent
              key={event.id}
              event={event}
              index={i}
              isLast={i === journeyEvents.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
