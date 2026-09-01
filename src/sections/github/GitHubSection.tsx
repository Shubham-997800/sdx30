'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { githubProfile } from '@/data/github';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

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

function ContributionGraph() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

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

function GitHubStatsGrid() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const stats = [
    { label: 'CONTRIBUTIONS', value: githubProfile.stats.contributions },
    { label: 'REPOSITORIES', value: String(githubProfile.pinnedRepos.length) },
    { label: 'PULL REQUESTS', value: githubProfile.stats.prs },
    { label: 'STARS', value: githubProfile.stats.stars },
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

function PinnedRepositories() {
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
          ALL REPOSITORIES
        </span>
        <span className="text-label text-muted-foreground/50">
          {githubProfile.pinnedRepos.length} repos
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {githubProfile.pinnedRepos.map((repo) => (
          <div
            key={repo.name}
            className="group rounded-lg border border-border p-4 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-body-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                    {repo.name}
                  </h4>
                  <span className="text-caption text-muted-foreground/40">
                    ★ {repo.stars}
                  </span>
                </div>
                <p className="text-caption text-muted-foreground mt-0.5 line-clamp-1">
                  {repo.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-label text-muted-foreground/60">
                {repo.language}
              </span>
              <div className="flex items-center gap-2">
                {repo.liveUrl && (
                  <a
                    href={repo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium text-accent bg-accent/10 transition-all duration-200 hover:bg-accent/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    LIVE <ExternalLink className="size-2.5" />
                  </a>
                )}
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium text-muted-foreground bg-muted transition-all duration-200 hover:text-foreground"
                  onClick={(e) => e.stopPropagation()}
                >
                  CODE <ArrowUpRight className="size-2.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

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
      <div className="mt-4 space-y-4">
        {githubProfile.recentActivity.map((activity, i) => (
          <div key={i} className="group flex items-start gap-3">
            <span className="text-label text-accent mt-0.5 shrink-0">→</span>
            <div className="min-w-0 flex-1">
              <p className="text-body-sm text-foreground/80 group-hover:text-foreground transition-colors">
                {activity.message}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-label text-muted-foreground/40">
                  {activity.repo}
                </span>
                <span className="text-muted-foreground/20">·</span>
                <span className="text-label text-muted-foreground/40">
                  {activity.date}
                </span>
              </div>
            </div>
          </div>
        ))}
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
            <h2 className="text-section text-foreground">
              Code in<br className="hidden md:block" /> Public
            </h2>

            <div className="flex items-center gap-4">
              {isConfigured && (
                <span className="text-body text-muted-foreground">
                  @{githubProfile.username}
                </span>
              )}
              <a
                href={isConfigured ? githubProfile.url : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted hover:border-accent/50 hover:shadow-md hover:shadow-accent/5 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                VIEW PROFILE
                <span className="text-accent transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
              </a>
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

        <div className="space-y-5">
          <ContributionGraph />
          <GitHubStatsGrid />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <PinnedRepositories />
            <ActivityTimeline />
          </div>
        </div>
      </Container>
    </Section>
  );
}
