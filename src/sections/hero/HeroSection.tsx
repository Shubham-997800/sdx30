'use client';

import { useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Magnetic } from '@/components/interaction/Magnetic';
import { Button } from '@/components/ui/button';
import { CharReveal } from '@/components/motion/CharReveal';
import { heroContent, personalInfo, socialLinks } from '@/data/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { HeroVisual } from './HeroVisual';

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number, reduced: boolean) => ({
  initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const clipReveal = (delay: number, reduced: boolean) => ({
  initial: reduced
    ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' }
    : { clipPath: 'inset(100% 0 0 0)' },
  animate: { clipPath: 'inset(0% 0 0 0)' },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToWork = useCallback(() => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-[100vh] min-h-[100dvh] flex items-center pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
      {/* Editorial grid overlay */}
      <div className="editorial-grid-overlay">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Large editorial number — background element */}
      <motion.div
        className="absolute -right-8 top-1/2 -translate-y-1/2 text-editorial-number pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05]"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: prefersReducedMotion ? 0.03 : 0.03 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        01
      </motion.div>

      <Container className="w-full relative z-10">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ─── Content ─── */}
          <div className="col-span-4 md:col-span-8 lg:col-span-7 space-y-5 md:space-y-6">
            {/* Availability Status */}
            <motion.div {...fadeUp(0.1, prefersReducedMotion)}>
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

            {/* Name — Character Reveal */}
            {prefersReducedMotion ? (
              <h1 className="text-display text-foreground">
                {heroContent.name}
              </h1>
            ) : (
              <CharReveal
                text={heroContent.name}
                as="h1"
                className="text-display text-foreground"
                delay={0.2}
                staggerDelay={0.04}
              />
            )}

            {/* Role — Character Reveal */}
            {prefersReducedMotion ? (
              <p className="text-subheading text-accent">
                {heroContent.role}
              </p>
            ) : (
              <CharReveal
                text={heroContent.role}
                as="p"
                className="text-subheading text-accent"
                delay={0.6}
                staggerDelay={0.045}
              />
            )}

            {/* Main Statement */}
            <motion.div {...fadeUp(0.9, prefersReducedMotion)}>
              <p className="text-body-lg text-foreground max-w-lg whitespace-pre-line leading-relaxed">
                {heroContent.mainStatement}
              </p>
            </motion.div>

            {/* Introduction */}
            <motion.div {...fadeUp(1.0, prefersReducedMotion)}>
              <p className="text-body text-muted-foreground max-w-md">
                {heroContent.introduction}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3 pt-2"
              {...fadeUp(1.1, prefersReducedMotion)}
            >
              <Magnetic strength={8}>
                <Button
                  variant="shimmer"
                  size="lg"
                  onClick={scrollToWork}
                  className="group/btn"
                >
                  {heroContent.cta.primary}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Magnetic>
              <Magnetic strength={8}>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="glass" size="lg" className="group/btn">
                    <Download className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                    {heroContent.cta.secondary}
                  </Button>
                </a>
              </Magnetic>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-wrap items-center gap-5 pt-1"
              {...fadeUp(1.2, prefersReducedMotion)}
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label text-muted-foreground transition-all duration-200 hover:text-foreground"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 + i * 0.06, ease: EASE }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ─── Visual ─── */}
          <motion.div
            className="col-span-4 lg:col-span-5 hidden lg:flex items-center justify-center"
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
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <span className="text-label text-muted-foreground">
            SCROLL
          </span>
          <motion.div
            className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent"
            animate={prefersReducedMotion ? {} : { scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
