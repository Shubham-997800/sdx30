'use client';

import { useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Magnetic } from '@/components/interaction/Magnetic';
import { heroContent, personalInfo, socialLinks } from '@/data/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { HeroVisual } from './HeroVisual';

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number, reduced: boolean) => ({
  initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

const clipReveal = (delay: number, reduced: boolean) => ({
  initial: reduced
    ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' }
    : { clipPath: 'inset(100% 0 0 0)' },
  animate: { clipPath: 'inset(0% 0 0 0)' },
  transition: { duration: 0.8, delay, ease: EASE },
});

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToWork = useCallback(() => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-[100vh] min-h-[100dvh] flex items-center pt-20 pb-16 md:pt-24 md:pb-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-bg-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-bg-grid)" />
          </svg>
        </div>
      </div>

      <Container className="w-full relative z-10">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ─── Content ─── */}
          <div className="col-span-4 md:col-span-8 lg:col-span-6 space-y-6 md:space-y-8">
            {/* Availability Status */}
            <motion.div {...fadeUp(0.15, prefersReducedMotion)}>
              <span className="inline-flex items-center gap-2.5 text-label text-accent">
                <span className="relative flex size-2">
                  {!prefersReducedMotion && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  )}
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {heroContent.availability}
              </span>
            </motion.div>

            {/* Name */}
            <div {...clipReveal(0.25, prefersReducedMotion)}>
              <h1
                className="text-display font-bold leading-[0.9] tracking-[-0.05em] text-foreground"
              >
                {heroContent.name}
              </h1>
            </div>

            {/* Role */}
            <motion.div {...fadeUp(0.45, prefersReducedMotion)}>
              <p
                className="text-subheading font-semibold tracking-[-0.03em] text-accent leading-[1.1]"
              >
                {heroContent.role}
              </p>
            </motion.div>

            {/* Main Statement */}
            <motion.div {...fadeUp(0.55, prefersReducedMotion)}>
              <p
                className="text-body-lg text-foreground/80 max-w-lg whitespace-pre-line leading-[1.6]"
              >
                {heroContent.mainStatement}
              </p>
            </motion.div>

            {/* Introduction */}
            <motion.div {...fadeUp(0.65, prefersReducedMotion)}>
              <p className="text-body text-muted-foreground max-w-md">
                {heroContent.introduction}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-2"
              {...fadeUp(0.75, prefersReducedMotion)}
            >
              <Magnetic strength={6}>
                <button
                  onClick={scrollToWork}
                  className="group/btn inline-flex h-12 items-center gap-2.5 rounded-xl bg-primary px-6 text-[0.9rem] font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:brightness-95 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {heroContent.cta.primary}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </Magnetic>
              <Magnetic strength={6}>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex h-12 items-center gap-2.5 rounded-xl border border-border bg-background px-6 text-[0.9rem] font-semibold text-foreground transition-all duration-300 hover:bg-muted hover:border-accent/50 hover:shadow-md hover:shadow-accent/5 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <Download className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                  {heroContent.cta.secondary}
                </a>
              </Magnetic>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-2"
              {...fadeUp(0.85, prefersReducedMotion)}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-caption font-medium uppercase tracking-[0.06em] text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-y-[-1px]"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ─── Visual ─── */}
          <motion.div
            className="col-span-4 lg:col-span-6 hidden lg:flex items-center justify-center"
            {...clipReveal(0.4, prefersReducedMotion)}
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/50">
            Scroll
          </span>
          <motion.div
            className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent"
            animate={prefersReducedMotion ? {} : { scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
