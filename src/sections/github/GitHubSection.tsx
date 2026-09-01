'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { Button } from '@/components/ui/button';
import { githubProfile } from '@/data/github';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

// Contribution cell component
function ContributionCell({ level }: { level: number }) {
  const opacity = level === 0 ? 'opacity-[0.04] dark:opacity-[0.06]' : '';
  const bg =
    level === 0
      ? 'bg-foreground'
      : level === 1
        ? 'bg-accent/20'
        : level === 2
          ? 'bg-accent/40'
          : level === 3
            ? 'bg-accent/60'
            : 'bg-accent';

  return (
    <div
      className={`size-2.5 rounded-[3px] ${bg} ${opacity}`}
      role="img"
      aria-label={`${level} contributions`}
    />
  );
}

// Simulated contribution grid (static fallback)
function ContributionGraph() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  // Generate a deterministic pattern for demo
  const weeks = 20;
  const days = 7;
  const pattern = Array.from({ length: weeks * days }, (_, i) => {
    const seed = (i * 7 + 13) % 16;
    if (seed < 8) return 0;
    if (seed < 12) return 1;
    if (seed < 14) return 2;
    if (seed < 15) return 3;
    return 4;
  });

  return (
    <motion.div
      ref={ref}
      className="rounded-xl border border-border bg-card p-5 md:p-6"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-label text-muted-foreground">
          CONTRIBUTION ACTIVITY
        </span>
        <span className="text-label text-muted-foreground/50">
          Last {weeks} weeks
        </span>
      </div>
      <div className="flex gap-[3px] overflow-x-auto pb-1">
        {Array.from({ length: weeks }, (_, week) => (
          <div key={week} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }, (_, day) => {
              const level = pattern[week * days + day];
              return <ContributionCell key={day} level={level} />;
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end gap-1.5 mt-3">
        <span className="text-[10px] text-muted-foreground/40">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`size-2 rounded-[2px] ${
              level === 0
                ? 'bg-foreground opacity-[0.06]'
                : level === 1
                  ? 'bg-accent/20'
                  : level === 2
                    ? 'bg-accent/40'
                    : level === 3
                      ? 'bg-accent/60'
                      : 'bg-accent'
            }`}
          />
        ))}
        <span className="text-[10px] text-muted-foreground/40">More</span>
      </div>
    </motion.div>
  );
}

// Stats component (with fallback values)
function GitHubStatsGrid() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const stats = [
    { label: 'REPOSITORIES', value: '—' },
    { label: 'CONTRIBUTIONS', value: '—' },
    { label: 'PULL REQUESTS', value: '—' },
    { label: 'STARS', value: '—' },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="rounded-xl border border-border bg-card p-5 text-center"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 + i * 0.06, ease: EASE }}
        >
          <span className="text-label text-muted-foreground">
            {stat.label}
          </span>
          <p
            className="text-feature mt-2 font-bold tracking-[-0.03em] text-foreground"
          >
            {stat.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// Repositories fallback
function RepositoryList() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="rounded-xl border border-border bg-card p-5 md:p-6"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-label text-muted-foreground">
          REPOSITORIES
        </span>
        <span className="text-label text-muted-foreground/50">
          Public
        </span>
      </div>
      <div className="text-center py-10">
        <p className="text-body-sm text-muted-foreground">
          Connect your GitHub profile to display repositories and contribution data.
        </p>
      </div>
    </motion.div>
  );
}

// Activity fallback
function ActivityTimeline() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="rounded-xl border border-border bg-card p-5 md:p-6"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
    >
      <span className="text-label text-muted-foreground">
        RECENT ACTIVITY
      </span>
      <div className="text-center py-10">
        <p className="text-body-sm text-muted-foreground">
          GitHub activity will appear here once connected.
        </p>
      </div>
    </motion.div>
  );
}

export function GitHubSection() {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  const isConfigured = !githubProfile.username.includes('[TODO');

  return (
    <Section id="github" className="py-24 md:py-36">
      <Container>
        {/* ─── Header ─── */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            <SectionLabel>GITHUB</SectionLabel>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            <h2
              className="text-section text-foreground tracking-[-0.04em] leading-[1.05]"
            >
              Code in<br className="hidden md:block" /> Public
            </h2>

            <div className="flex items-center gap-4">
              {isConfigured && (
                <span className="text-body text-muted-foreground">
                  @{githubProfile.username}
                </span>
              )}
              <Button variant="outline" size="lg">
                <a
                  href={isConfigured ? githubProfile.url : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  VIEW PROFILE <span className="text-[10px]">→</span>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 h-px w-full bg-border"
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* ─── Content ─── */}
        <div className="space-y-5">
          <ContributionGraph />
          <GitHubStatsGrid />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <RepositoryList />
            <ActivityTimeline />
          </div>
        </div>
      </Container>
    </Section>
  );
}
