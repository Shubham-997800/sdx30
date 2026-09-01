'use client';

import { useCallback, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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
  initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.6], [0.05, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const scrollToWork = useCallback(() => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] min-h-[100dvh] flex flex-col justify-center overflow-hidden"
    >
      {/* ─── Giant Background Name ─── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ y: nameY, opacity: nameOpacity }}
      >
        <span className="text-[clamp(6rem,20vw,16rem)] font-heading font-bold tracking-[-0.06em] text-foreground whitespace-nowrap">
          SHUBHAM
        </span>
      </motion.div>

      {/* ─── Grid Overlay ─── */}
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

      <Container className="w-full relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ─── Content (Left) ─── */}
          <motion.div
            className="col-span-1 lg:col-span-6 min-w-0"
            style={{ y: contentY }}
          >
            {/* Availability */}
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

            {/* Name */}
            <div className="mt-6 md:mt-8">
              {prefersReducedMotion ? (
                <h1 className="text-display text-foreground break-words">
                  {heroContent.name}
                </h1>
              ) : (
                <CharReveal
                  text={heroContent.name}
                  as="h1"
                  className="text-display text-foreground break-words"
                  delay={0.2}
                  staggerDelay={0.05}
                />
              )}
            </div>

            {/* Role */}
            <div className="mt-3 md:mt-4">
              {prefersReducedMotion ? (
                <p className="text-feature text-accent font-semibold">
                  {heroContent.role}
                </p>
              ) : (
                <CharReveal
                  text={heroContent.role}
                  as="p"
                  className="text-feature text-accent font-semibold"
                  delay={0.7}
                  staggerDelay={0.04}
                />
              )}
            </div>

            {/* Statement */}
            <motion.div className="mt-6 md:mt-8" {...fadeUp(0.9, prefersReducedMotion)}>
              <p className="text-body-lg text-foreground/80 max-w-[520px] leading-relaxed">
                {heroContent.mainStatement}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div className="mt-3" {...fadeUp(1.0, prefersReducedMotion)}>
              <p className="text-body text-muted-foreground max-w-[460px]">
                {heroContent.introduction}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mt-8 md:mt-10"
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
                  <Button variant="outline" size="lg" className="group/btn">
                    <Download className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                    {heroContent.cta.secondary}
                  </Button>
                </a>
              </Magnetic>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-wrap items-center gap-6 mt-8 md:mt-10"
              {...fadeUp(1.2, prefersReducedMotion)}
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 + i * 0.06, ease: EASE }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Visual (Right) ─── */}
          <motion.div
            className="col-span-1 lg:col-span-6 flex items-center justify-center"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <span className="text-label text-muted-foreground">SCROLL</span>
        <motion.div
          className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent"
          animate={prefersReducedMotion ? {} : { scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
