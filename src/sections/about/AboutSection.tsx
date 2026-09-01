'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import {
  aboutIntro,
  philosophy,
  productThinking,
  buildShipIterate,
  developerCodeCard,
} from '@/data/about';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

function PhilosophyItem({
  item,
  index,
  isInView,
}: {
  item: (typeof philosophy)[number];
  index: number;
  isInView: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative py-6 border-b border-border last:border-b-0"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: EASE }}
    >
      <div className="grid grid-cols-[2rem_1fr] gap-4 items-start">
        <span className="text-label font-semibold text-muted-foreground/40 mt-1">
          {item.number}
        </span>
        <div className="space-y-2">
          <h4
            className="text-h4 font-bold tracking-[-0.02em] text-foreground"
          >
            {item.title}
          </h4>
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            {item.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProductThinkingFlow({ isInView }: { isInView: boolean }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-wrap items-center gap-x-3 gap-y-2"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {productThinking.map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <span
            className="text-caption font-semibold uppercase tracking-[0.08em] text-foreground/70"
          >
            {step}
          </span>
          {i < productThinking.length - 1 && (
            <span className="text-muted-foreground/30 text-[10px]">→</span>
          )}
        </div>
      ))}
    </motion.div>
  );
}

function BuildShipIterate({ isInView }: { isInView: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const items = [buildShipIterate.build, buildShipIterate.ship, buildShipIterate.iterate];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          className="space-y-3"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: EASE }}
        >
          <div className="flex items-center gap-3">
            <span
              className="text-subheading font-bold tracking-[-0.03em] text-foreground"
            >
              {item.title}
            </span>
            {i < items.length - 1 && (
              <span className="text-accent/40 text-lg hidden md:block">→</span>
            )}
          </div>
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            {item.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function CodeCard({ isInView }: { isInView: boolean }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="rounded-xl border border-border bg-card p-6 font-mono overflow-hidden"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
    >
      {/* Window dots */}
      <div className="flex items-center gap-2 mb-5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
      </div>

      {/* Code */}
      <pre className="text-[13px] leading-relaxed text-muted-foreground overflow-x-auto">
        <code>{developerCodeCard}</code>
      </pre>
    </motion.div>
  );
}

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  const introRef = useRef<HTMLDivElement>(null);
  const isIntroInView = useInView(introRef, { once: true, margin: '-60px' });

  const philosophyRef = useRef<HTMLDivElement>(null);
  const isPhilosophyInView = useInView(philosophyRef, { once: true, margin: '-60px' });

  const productRef = useRef<HTMLDivElement>(null);
  const isProductInView = useInView(productRef, { once: true, margin: '-60px' });

  const buildRef = useRef<HTMLDivElement>(null);
  const isBuildInView = useInView(buildRef, { once: true, margin: '-60px' });

  const codeRef = useRef<HTMLDivElement>(null);
  const isCodeInView = useInView(codeRef, { once: true, margin: '-60px' });

  return (
    <Section id="about" className="py-24 md:py-36">
      <Container>
        {/* ─── Header ─── */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            <SectionLabel>ABOUT</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-section mt-6 text-foreground tracking-[-0.04em] leading-[1.05]"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="mt-8 h-px w-full bg-border"
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* ─── Introduction ─── */}
        <div ref={introRef} className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 md:mb-28">
          <div className="col-span-4 md:col-span-3">
            <motion.span
              className="text-label text-accent"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={isIntroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {aboutIntro.role}
            </motion.span>
          </div>
          <div className="col-span-4 md:col-span-5 space-y-5">
            <motion.h3
              className="text-subheading text-foreground tracking-[-0.02em] leading-snug"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            >
              {aboutIntro.statement}
            </motion.h3>
            <motion.p
              className="text-body text-muted-foreground leading-relaxed"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
            >
              {aboutIntro.body}
            </motion.p>
          </div>
        </div>

        {/* ─── Developer Philosophy ─── */}
        <div ref={philosophyRef} className="mb-20 md:mb-28">
          <motion.div
            className="mb-10"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            <span className="text-label text-muted-foreground">
              DEVELOPER PHILOSOPHY
            </span>
          </motion.div>

          <div className="max-w-2xl">
            {philosophy.map((item, i) => (
              <PhilosophyItem key={item.number} item={item} index={i} isInView={isPhilosophyInView} />
            ))}
          </div>
        </div>

        {/* ─── Product Thinking ─── */}
        <div ref={productRef} className="mb-20 md:mb-28">
          <motion.div
            className="mb-6"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isProductInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            <span className="text-label text-muted-foreground">
              PRODUCT THINKING
            </span>
          </motion.div>
          <ProductThinkingFlow isInView={isProductInView} />
        </div>

        {/* ─── Build → Ship → Iterate + Code Card ─── */}
        <div ref={buildRef} className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 md:mb-28">
          <div ref={codeRef} className="col-span-4 lg:col-span-7">
            <motion.div
              className="mb-8"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={isBuildInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
            >
              <span className="text-label text-muted-foreground">
                HOW I WORK
              </span>
            </motion.div>
            <BuildShipIterate isInView={isBuildInView} />
          </div>
          <div className="col-span-4 lg:col-span-5">
            <CodeCard isInView={isCodeInView} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
