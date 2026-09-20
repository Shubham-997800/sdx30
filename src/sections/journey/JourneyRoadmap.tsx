'use client';

import { motion } from 'motion/react';
import {
  ExternalLink,
  MapPin,
  Calendar,
  Sparkles,
  Shield,
  Rocket,
  Cpu,
  Trophy,
  ArrowUpRight,
  GitFork,
  Radio,
  Route,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { JourneyEvent } from '@/types';

interface JourneyRoadmapProps {
  events: JourneyEvent[];
}

function EventStopIcon({ id, className }: { id: string; className?: string }) {
  if (id.includes('sih')) return <Shield className={className} />;
  if (id.includes('odoo')) return <Trophy className={className} />;
  if (id.includes('antariksh')) return <Rocket className={className} />;
  if (id.includes('cybersecurity') || id.includes('psb') || id.includes('iith'))
    return <Shield className={className} />;
  if (id.includes('agents') || id.includes('kaggle')) return <Cpu className={className} />;
  return <Sparkles className={className} />;
}

function getStatusBadgeStyle(id: string) {
  if (id.includes('sih')) {
    return 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400';
  }
  if (id.includes('odoo')) {
    return 'border-amber-500/40 bg-amber-500/10 text-amber-300';
  }
  if (id.includes('antariksh')) {
    return 'border-sky-500/40 bg-sky-500/10 text-sky-300';
  }
  if (id.includes('cybersecurity') || id.includes('psb')) {
    return 'border-purple-500/40 bg-purple-500/10 text-purple-300';
  }
  if (id.includes('vibe')) {
    return 'border-teal-500/40 bg-teal-500/10 text-teal-300';
  }
  return 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300';
}

// Crisp 1-line senior summary for each stop (no fluff)
function getHighlight(event: JourneyEvent): string {
  if (event.id.includes('sih')) {
    return 'Competed on complex national problem statements under strict regulatory standards.';
  }
  if (event.id.includes('odoo')) {
    return 'Selected among top 1% of 20,000+ teams for the 24-hr on-site Grand Finale.';
  }
  if (event.id.includes('antariksh')) {
    return 'Engineered computational telemetry and geospatial pipelines for ISRO challenges.';
  }
  if (event.id.includes('cybersecurity') || event.id.includes('psb')) {
    return 'Security build at IIT Hyderabad evaluating automated threat detection for PSB banks.';
  }
  if (event.id.includes('vibe')) {
    return 'Solo build: architected and shipped full-stack productivity OS with multi-model AI.';
  }
  if (event.id.includes('agents') || event.id.includes('kaggle')) {
    return 'Engineered autonomous multi-agent launch system with tool loops & memory persistence.';
  }
  return event.milestones[0]?.label || '';
}

export function JourneyRoadmap({ events }: JourneyRoadmapProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full space-y-8 sm:space-y-10">
      {/* ─── 1. Compact Executive Stats Bar ─── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        <div className="rounded-lg border border-border/70 bg-card/60 px-3.5 py-2.5">
          <span className="text-[0.65rem] font-mono uppercase tracking-wider text-muted-foreground block">
            Circuit
          </span>
          <span className="text-base sm:text-lg font-heading font-bold text-foreground">
            6 Stops
          </span>
          <span className="text-[0.68rem] text-accent block">2026 Expeditions</span>
        </div>

        <div className="rounded-lg border border-border/70 bg-card/60 px-3.5 py-2.5">
          <span className="text-[0.65rem] font-mono uppercase tracking-wider text-muted-foreground block">
            Selection
          </span>
          <span className="text-base sm:text-lg font-heading font-bold text-foreground">
            Top 1%
          </span>
          <span className="text-[0.68rem] text-muted-foreground block">From 20k+ applicants</span>
        </div>

        <div className="rounded-lg border border-border/70 bg-card/60 px-3.5 py-2.5">
          <span className="text-[0.65rem] font-mono uppercase tracking-wider text-muted-foreground block">
            Shipped
          </span>
          <span className="text-base sm:text-lg font-heading font-bold text-foreground">
            3 Repos
          </span>
          <span className="text-[0.68rem] text-accent block">B2B · Agents · OS</span>
        </div>

        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3.5 py-2.5">
          <span className="text-[0.65rem] font-mono uppercase tracking-wider text-emerald-400 block flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
            Latest Stop
          </span>
          <span className="text-base sm:text-lg font-heading font-bold text-foreground">
            SIH 2026
          </span>
          <span className="text-[0.68rem] text-emerald-400 font-medium block">
            Concluded Yesterday
          </span>
        </div>
      </div>

      {/* ─── 2. Compact Road Track Container ─── */}
      <div className="relative w-full py-2">
        {/* Road Start Checkpoint (Top) */}
        <div className="relative z-10 flex items-center justify-start md:justify-center mb-6 pl-2 md:pl-0">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-card/90 px-3 py-1 text-[0.68rem] font-mono font-semibold text-foreground shadow-2xs">
            <Radio className="size-3 text-emerald-400 animate-pulse" />
            <span>START POINT · SIH 2026 (CONCLUDED YESTERDAY)</span>
          </div>
        </div>

        {/* ─── Central Asphalt Road Spine ─── */}
        <div
          aria-hidden="true"
          className={cn(
            'absolute top-10 bottom-10 pointer-events-none z-0',
            // Mobile: sits at left-5
            'left-5 -translate-x-1/2 w-6',
            // Desktop: sits right at center
            'md:left-1/2 md:-translate-x-1/2 md:w-10'
          )}
        >
          <div className="relative h-full w-full rounded-full border-x border-border/70 bg-secondary/30 flex items-center justify-center overflow-hidden">
            {/* Dashed Center Dividing Line */}
            <div className="h-full w-0.5 border-r border-dashed border-accent/40" />
          </div>
        </div>

        {/* ─── Alternating Road Milestone Stops (Tight Spacing) ─── */}
        <div className="space-y-6 sm:space-y-7 relative z-10">
          {events.map((event, idx) => {
            const isEven = idx % 2 === 0; // Even: LEFT on desktop | Odd: RIGHT on desktop
            const isSih = event.id.includes('sih');
            const highlight = getHighlight(event);

            return (
              <div
                key={event.id}
                className={cn(
                  'relative flex flex-col md:flex-row items-start',
                  // Mobile: offset right of road
                  'pl-11 sm:pl-14 md:pl-0',
                  // Desktop alignment
                  isEven ? 'md:justify-start' : 'md:justify-end'
                )}
              >
                {/* ─── Compact Road Waypoint Stop Node ─── */}
                <div
                  className={cn(
                    'absolute top-4 z-20 flex items-center justify-center',
                    'left-5 -translate-x-1/2',
                    'md:left-1/2 md:-translate-x-1/2'
                  )}
                >
                  <motion.div
                    initial={prefersReducedMotion ? false : { scale: 0.8, opacity: 0 }}
                    whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={cn(
                      'relative size-9 sm:size-10 rounded-full border-2 bg-card flex items-center justify-center shadow-xs transition-transform duration-200 hover:scale-110',
                      isSih
                        ? 'border-emerald-500 shadow-[0_0_14px_oklch(0.65_0.22_155_/_0.35)]'
                        : 'border-accent/70 hover:border-accent shadow-[0_0_10px_oklch(from_var(--accent)_l_c_h_/_0.2)]'
                    )}
                  >
                    {isSih && (
                      <span className="absolute -inset-1 rounded-full bg-emerald-500/25 animate-ping" />
                    )}

                    <EventStopIcon
                      id={event.id}
                      className={cn(
                        'size-4 sm:size-4.5',
                        isSih ? 'text-emerald-400' : 'text-accent'
                      )}
                    />

                    {/* Small number tag */}
                    <span className="absolute -bottom-2 rounded-full border border-border/80 bg-background/95 px-1 py-0.2 text-[0.55rem] font-mono font-bold text-muted-foreground">
                      {event.number}
                    </span>
                  </motion.div>
                </div>

                {/* ─── Compact Horizontal Connector ─── */}
                {isEven && (
                  <div
                    aria-hidden="true"
                    className="hidden md:block absolute right-[calc(50%+1.1rem)] top-8.5 w-6 h-px bg-accent/60 pointer-events-none"
                  />
                )}
                {!isEven && (
                  <div
                    aria-hidden="true"
                    className="hidden md:block absolute left-[calc(50%+1.1rem)] top-8.5 w-6 h-px bg-accent/60 pointer-events-none"
                  />
                )}
                <div
                  aria-hidden="true"
                  className="block md:hidden absolute left-5 top-8.5 w-5 h-px bg-accent/60 pointer-events-none"
                />

                {/* ─── Senior Compact Milestone Card ─── */}
                <motion.div
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, x: isEven ? -16 : 16, y: 8 }
                  }
                  whileInView={
                    prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }
                  }
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className={cn(
                    'w-full md:w-[calc(50%-2.6rem)]',
                    'rounded-xl border border-border/80 bg-card/85 backdrop-blur-md p-4 sm:p-4.5 shadow-xs hover:shadow-md hover:border-accent/40 transition-all duration-200 group'
                  )}
                >
                  {/* Row 1: Stop # + Status Pill */}
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-1.5">
                    <div className="flex items-center gap-1.5 text-[0.65rem] font-mono text-muted-foreground">
                      <span className="font-bold text-foreground">STOP #{event.number}</span>
                      <span>·</span>
                      <span className="text-accent">{event.category}</span>
                    </div>

                    {event.statusBadge && (
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 rounded-full border px-2 py-0.2 text-[0.62rem] font-mono font-bold uppercase tracking-wide',
                          getStatusBadgeStyle(event.id)
                        )}
                      >
                        {isSih && <span className="size-1 rounded-full bg-emerald-400 animate-ping" />}
                        {event.statusBadge}
                      </span>
                    )}
                  </div>

                  {/* Row 2: Title */}
                  <h3 className="text-base sm:text-lg font-heading font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {event.title}
                  </h3>

                  {/* Row 3: Meta (Org, Venue, Date) */}
                  <div className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.72rem] text-muted-foreground">
                    <span className="font-medium text-foreground/85">
                      {event.organization}
                    </span>

                    {event.venue && (
                      <span className="flex items-center gap-1 text-muted-foreground/80">
                        <MapPin className="size-2.5 text-accent shrink-0" />
                        {event.venue}
                      </span>
                    )}

                    {event.date && (
                      <span className="flex items-center gap-1 font-mono text-[0.68rem] text-muted-foreground/80">
                        <Calendar className="size-2.5 shrink-0" />
                        {event.date}
                      </span>
                    )}
                  </div>

                  {/* Row 4: Crisp 1-Liner Highlight */}
                  <p className="mt-2 text-[0.8rem] text-foreground/80 leading-relaxed">
                    {highlight}
                  </p>

                  {/* Row 5: Project Spotlight Chip (If project was built) */}
                  {event.project && (
                    <div className="mt-2.5 flex items-center justify-between gap-2 rounded-lg border border-accent/20 bg-accent/[0.03] px-2.5 py-1.5 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <GitFork className="size-3 text-accent shrink-0" />
                        <span className="text-[0.72rem] font-mono text-muted-foreground">Built:</span>
                        <span className="text-[0.75rem] font-heading font-bold text-foreground">
                          {event.project}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {event.githubUrl && (
                          <a
                            href={event.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-0.5 text-[0.68rem] font-mono text-accent hover:underline"
                          >
                            <span>Repo</span>
                            <ArrowUpRight className="size-2.5" />
                          </a>
                        )}

                        {event.liveUrl && (
                          <a
                            href={event.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-0.5 text-[0.68rem] font-mono text-foreground/90 hover:text-accent"
                          >
                            <span>Live</span>
                            <ExternalLink className="size-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Row 6: Compact Tech Tags */}
                  {event.tags && event.tags.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {event.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-border/70 bg-secondary/30 px-1.5 py-0.2 text-[0.6rem] font-mono text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Road Terminus Checkpoint (Bottom) */}
        <div className="relative z-10 flex items-center justify-start md:justify-center mt-6 pl-2 md:pl-0">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1 text-[0.68rem] font-mono text-muted-foreground shadow-2xs">
            <Route className="size-3 text-accent" />
            <span>CIRCUIT CONTINUES · NEXT BUILDS IN PROGRESS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
