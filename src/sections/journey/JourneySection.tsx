'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { journeyEvents } from '@/data/journey';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { JourneyEvent } from './JourneyEvent';

const EASE = [0.16, 1, 0.3, 1] as const;

export function JourneySection() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: '-60px' });

  return (
    <Section id="journey" className="py-24 md:py-36">
      <Container>
        {/* ─── Section Header ─── */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
            }
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            <SectionLabel>JOURNEY</SectionLabel>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            <h2
              className="text-section text-foreground tracking-[-0.04em] leading-[1.05]"
            >
              Hackathon<br className="hidden md:block" /> Journey
            </h2>

            <p className="text-body text-muted-foreground max-w-md">
              Real-world building experience through hackathons and intensive technical challenges.
            </p>
          </motion.div>

          {/* Separator */}
          <motion.div
            className="mt-8 h-px w-full bg-border"
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* ─── Timeline ─── */}
        <div ref={timelineRef}>
          <div className="max-w-2xl">
            {journeyEvents.map((event, i) => (
              <JourneyEvent
                key={event.id}
                event={event}
                index={i}
                isInView={isTimelineInView}
                isLast={i === journeyEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
