'use client';

import { motion } from 'motion/react';
import { EASE, DURATION } from '@/lib/animations';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { Reveal, RevealGroup } from '@/components/motion/RevealSystem';
import { githubProfile } from '@/data/github';



const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
};

export function GitHubSection() {
  const profile = githubProfile;

  return (
    <Section id="github" className="py-16 sm:py-24 md:py-36">
      <Container>
        <Reveal direction="up">
          <SectionHeading
            number="07"
            label="ACTIVITY"
            title="GitHub"
            description="Open source contributions, pinned repositories, and development activity."
          />
        </Reveal>

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-5">
          {/* ─── Contribution Stats ─── */}
          <Reveal direction="up" delay={0.1} className="col-span-4 lg:col-span-3 rounded-xl border border-border bg-card p-6">
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
          </Reveal>

          {/* ─── Languages ─── */}
          <Reveal direction="up" delay={0.2} className="col-span-4 lg:col-span-5 rounded-xl border border-border bg-card p-6">
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
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: DURATION.medium, delay: 0.15 + i * 0.06, ease: EASE }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ─── Pinned Repos ─── */}
          <RevealGroup className="col-span-4 lg:col-span-4 rounded-xl border border-border bg-card p-6">
            <span className="text-label text-muted-foreground mb-4 block">PINNED REPOS</span>
            <div className="space-y-2">
              {profile.pinnedRepos.slice(0, 4).map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-muted/50 -mx-1"
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
                </a>
              ))}
            </div>
          </RevealGroup>

          {/* ─── Recent Activity ─── */}
          <RevealGroup className="col-span-4 lg:col-span-12 rounded-xl border border-border bg-card p-6">
            <span className="text-label text-muted-foreground mb-4 block">RECENT ACTIVITY</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {profile.recentActivity.slice(0, 6).map((activity, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-muted/50"
                >
                  <span className="mt-1 size-1 rounded-full bg-accent/60 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-body-sm text-foreground block truncate">{activity.message}</span>
                    <span className="text-caption text-muted-foreground">{activity.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}
