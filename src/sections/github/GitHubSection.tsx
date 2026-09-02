'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { githubProfile } from '@/data/github';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
};

export function GitHubSection() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-80px' });

  const profile = githubProfile;

  return (
    <Section id="github" className="py-24 md:py-36">
      <Container>
        <motion.div
          ref={ref}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading
            number="08"
            label="ACTIVITY"
            title="GitHub"
            description="Open source contributions, pinned repositories, and development activity."
          />
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-5">
          {/* ─── Contribution Stats ─── */}
          <motion.div
            className="col-span-4 lg:col-span-3 rounded-xl border border-border bg-card p-6"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <div className="space-y-1 mb-4">
              <span className="text-label text-muted-foreground">CONTRIBUTIONS</span>
              <p className="text-stat text-foreground">{profile.stats.contributions}</p>
            </div>
            <div className="h-px bg-border mb-4" />
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="w-full group/btn">
                @{profile.username}
                <span className="text-accent transition-transform duration-200 group-hover/btn:translate-x-0.5">↗</span>
              </Button>
            </a>
          </motion.div>

          {/* ─── Languages ─── */}
          <motion.div
            className="col-span-4 lg:col-span-5 rounded-xl border border-border bg-card p-6"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            <span className="text-label text-muted-foreground mb-4 block">TOP LANGUAGES</span>
            <div className="space-y-3">
              {profile.topLanguages.map((lang, i) => (
                <div key={lang.name} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="size-2 rounded-full shrink-0"
                        style={{ background: LANGUAGE_COLORS[lang.name] || 'var(--muted-foreground)' }}
                      />
                      <span className="text-body-sm text-foreground">{lang.name}</span>
                    </div>
                    <span className="text-caption text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: LANGUAGE_COLORS[lang.name] || 'var(--muted-foreground)' }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percentage}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: EASE }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── Pinned Repos ─── */}
          <motion.div
            className="col-span-4 lg:col-span-4 rounded-xl border border-border bg-card p-6"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          >
            <span className="text-label text-muted-foreground mb-4 block">PINNED REPOS</span>
            <div className="space-y-2">
              {profile.pinnedRepos.slice(0, 4).map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-muted/50 -mx-1"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.06, ease: EASE }}
                >
                  <div className="min-w-0 flex-1">
                    <span className="text-body-sm font-medium text-foreground block truncate">
                      {repo.name}
                    </span>
                    <span className="text-caption text-muted-foreground block truncate">
                      {repo.description}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      className="size-1.5 rounded-full"
                      style={{ background: LANGUAGE_COLORS[repo.language] || 'var(--muted-foreground)' }}
                    />
                    <span className="text-caption text-muted-foreground">{repo.language}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ─── Recent Activity ─── */}
          <motion.div
            className="col-span-4 lg:col-span-12 rounded-xl border border-border bg-card p-6"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          >
            <span className="text-label text-muted-foreground mb-4 block">RECENT ACTIVITY</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {profile.recentActivity.slice(0, 6).map((activity, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-muted/50"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.04, ease: EASE }}
                >
                  <span className="mt-1 size-1 rounded-full bg-accent/60 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-body-sm text-foreground block truncate">{activity.message}</span>
                    <span className="text-caption text-muted-foreground">{activity.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
