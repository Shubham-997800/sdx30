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
  CheckCircle2,
  Route,
  ArrowUpRight,
  GitFork,
  Radio,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button } from '@/components/ui/button';
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

export function JourneyRoadmap({ events }: JourneyRoadmapProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full space-y-12 sm:space-y-16">
      {/* ─── 1. Highway Quick Stats Bar ─── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-xs p-3.5 sm:p-4">
          <span className="text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground block">
            National Circuit
          </span>
          <span className="text-h3 font-heading font-bold text-foreground mt-0.5 block">
            6 Stops
          </span>
          <span className="text-[0.72rem] text-accent mt-0.5 block">High-stakes hackathons</span>
        </div>

        <div className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-xs p-3.5 sm:p-4">
          <span className="text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground block">
            Selection Rate
          </span>
          <span className="text-h3 font-heading font-bold text-foreground mt-0.5 block">
            Top 1%
          </span>
          <span className="text-[0.72rem] text-muted-foreground mt-0.5 block">From 20k+ applicants</span>
        </div>

        <div className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-xs p-3.5 sm:p-4">
          <span className="text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground block">
            Shipped in Hackathons
          </span>
          <span className="text-h3 font-heading font-bold text-foreground mt-0.5 block">
            3 Repos
          </span>
          <span className="text-[0.72rem] text-accent mt-0.5 block">B2B ERP · Agentic · OS</span>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-xs p-3.5 sm:p-4">
          <span className="text-[0.68rem] font-mono uppercase tracking-wider text-emerald-400 block flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
            Latest Checkpoint
          </span>
          <span className="text-h3 font-heading font-bold text-foreground mt-0.5 block">
            SIH 2026
          </span>
          <span className="text-[0.72rem] text-emerald-400 font-medium mt-0.5 block">
            Concluded Yesterday
          </span>
        </div>
      </div>

      {/* ─── 2. Road Track Container ─── */}
      <div className="relative w-full py-4">
        {/* Highway Entrance Signpost (Desktop Center / Mobile Left) */}
        <div className="relative z-10 flex items-center justify-start md:justify-center mb-8 pl-4 md:pl-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card/90 px-4 py-1.5 shadow-sm">
            <Radio className="size-3.5 text-emerald-400 animate-pulse" />
            <span className="text-[0.72rem] font-mono font-bold tracking-wider uppercase text-foreground">
              START POINT · LATEST MILE (SIH CONCLUDED YESTERDAY)
            </span>
          </div>
        </div>

        {/* ─── Central Asphalt Road Spine (Desktop: Center | Mobile: Left-6) ─── */}
        <div
          aria-hidden="true"
          className={cn(
            'absolute top-14 bottom-14 pointer-events-none z-0',
            // Mobile: sits at left-6
            'left-6 -translate-x-1/2 w-8',
            // Desktop: sits right at 50%
            'md:left-1/2 md:-translate-x-1/2 md:w-14'
          )}
        >
          {/* Road Asphalt Bed */}
          <div className="relative h-full w-full rounded-full border-x-2 border-border/70 bg-secondary/30 backdrop-blur-xs flex items-center justify-center overflow-hidden">
            {/* Dashed Center Dividing Highway Strip */}
            <div className="h-full w-0.5 border-r-2 border-dashed border-accent/50 opacity-80" />
            {/* Subtle road side markers */}
            <div className="absolute inset-y-0 left-0.5 w-0.5 bg-border/40" />
            <div className="absolute inset-y-0 right-0.5 w-0.5 bg-border/40" />
          </div>
        </div>

        {/* ─── Alternating Road Milestone Stops ─── */}
        <div className="space-y-12 sm:space-y-16 relative z-10">
          {events.map((event, idx) => {
            const isEven = idx % 2 === 0; // Even: LEFT on desktop | Odd: RIGHT on desktop
            const isSih = event.id.includes('sih');

            return (
              <div
                key={event.id}
                className={cn(
                  'relative flex flex-col md:flex-row items-start',
                  // Mobile: card is always offset to the right of the road line
                  'pl-12 sm:pl-16 md:pl-0',
                  // Desktop alignment
                  isEven ? 'md:justify-start' : 'md:justify-end'
                )}
              >
                {/* ─── Center Road Waypoint / Stop Node ─── */}
                <div
                  className={cn(
                    'absolute top-5 z-20 flex items-center justify-center',
                    // Mobile: aligns with left-6 road line
                    'left-6 -translate-x-1/2',
                    // Desktop: dead-center on highway line
                    'md:left-1/2 md:-translate-x-1/2'
                  )}
                >
                  <motion.div
                    initial={prefersReducedMotion ? false : { scale: 0.8, opacity: 0 }}
                    whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className={cn(
                      'relative size-11 sm:size-12 rounded-full border-2 bg-card flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110',
                      isSih
                        ? 'border-emerald-500 shadow-[0_0_20px_oklch(0.65_0.22_155_/_0.4)]'
                        : 'border-accent/70 hover:border-accent shadow-[0_0_14px_oklch(from_var(--accent)_l_c_h_/_0.25)]'
                    )}
                  >
                    {/* Live pulse radar for SIH */}
                    {isSih && (
                      <span className="absolute -inset-1 rounded-full bg-emerald-500/25 animate-ping" />
                    )}

                    <EventStopIcon
                      id={event.id}
                      className={cn(
                        'size-5 sm:size-5.5',
                        isSih ? 'text-emerald-400' : 'text-accent'
                      )}
                    />

                    {/* Milestone Stop Pill above Node */}
                    <span className="absolute -top-3 rounded-full border border-border/80 bg-background/95 px-1.5 py-0.2 text-[0.6rem] font-mono font-bold text-muted-foreground shadow-xs">
                      {event.number}
                    </span>
                  </motion.div>
                </div>

                {/* ─── Horizontal Connector Arm from Road Node to Card ─── */}
                {/* Desktop Left Connector (for Even cards on Left) */}
                {isEven && (
                  <div
                    aria-hidden="true"
                    className="hidden md:block absolute right-[calc(50%+1.3rem)] top-10.5 w-[calc(50%-1.3rem-theme(spacing.4))] max-w-10 h-0.5 bg-gradient-to-l from-accent/70 to-border pointer-events-none"
                  />
                )}

                {/* Desktop Right Connector (for Odd cards on Right) */}
                {!isEven && (
                  <div
                    aria-hidden="true"
                    className="hidden md:block absolute left-[calc(50%+1.3rem)] top-10.5 w-[calc(50%-1.3rem-theme(spacing.4))] max-w-10 h-0.5 bg-gradient-to-r from-accent/70 to-border pointer-events-none"
                  />
                )}

                {/* Mobile Connector (Left road to Right card) */}
                <div
                  aria-hidden="true"
                  className="block md:hidden absolute left-6 top-10.5 w-6 h-0.5 bg-gradient-to-r from-accent/70 to-border pointer-events-none"
                />

                {/* ─── Milestone Card (Alternating Left / Right) ─── */}
                <motion.div
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, x: isEven ? -24 : 24, y: 12 }
                  }
                  whileInView={
                    prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }
                  }
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className={cn(
                    'w-full md:w-[calc(50%-3.2rem)]',
                    'rounded-2xl border border-border/80 bg-card/85 backdrop-blur-md p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-accent/40 transition-all duration-300 group'
                  )}
                >
                  {/* Card Header: Stop Number & Status Pill */}
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[0.68rem] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        STOP #{event.number}
                      </span>
                      <span className="text-muted-foreground/40 text-xs">·</span>
                      <span className="text-[0.68rem] font-mono text-accent">
                        {event.category}
                      </span>
                    </div>

                    {event.statusBadge && (
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[0.68rem] font-mono font-bold uppercase tracking-wide',
                          getStatusBadgeStyle(event.id)
                        )}
                      >
                        {isSih && <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />}
                        {event.statusBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Title */}
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {event.title}
                  </h3>

                  {/* Org, Venue & Date */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-y-1.5 gap-x-3 text-caption text-muted-foreground">
                    <span className="font-medium text-foreground/90">
                      {event.organization}
                    </span>

                    {event.venue && (
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3 text-accent shrink-0" />
                        {event.venue}
                      </span>
                    )}

                    {event.date && (
                      <span className="flex items-center gap-1 font-mono text-[0.72rem]">
                        <Calendar className="size-3 text-muted-foreground shrink-0" />
                        {event.date}
                      </span>
                    )}
                  </div>

                  {/* Summary / Description */}
                  {event.projectDescription && (
                    <p className="mt-3 text-body-sm text-foreground/80 leading-relaxed">
                      {event.projectDescription}
                    </p>
                  )}

                  {/* ─── "What I Built" Project Spotlight Box (If project exists) ─── */}
                  {event.project && (
                    <div className="mt-4 rounded-xl border border-accent/25 bg-accent/[0.04] p-3.5 sm:p-4 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[0.68rem] font-mono font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                          <GitFork className="size-3" />
                          Built In Hackathon
                        </span>
                        <span className="text-[0.68rem] font-mono text-muted-foreground/70">
                          Production Ready
                        </span>
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-heading font-bold text-foreground">
                          {event.project}
                        </h4>
                      </div>

                      {/* Direct Repository & Live Links */}
                      <div className="flex items-center gap-2 pt-1 flex-wrap">
                        {event.githubUrl && (
                          <a
                            href={event.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button
                              variant="outline"
                              size="xs"
                              className="text-[0.72rem] font-mono group/btn hover:border-accent"
                            >
                              <span>{event.linkText || 'VIEW REPO'}</span>
                              <ArrowUpRight className="size-3 text-accent transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                            </Button>
                          </a>
                        )}

                        {event.liveUrl && (
                          <a
                            href={event.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button
                              variant="glow"
                              size="xs"
                              className="text-[0.72rem] font-mono group/btn"
                            >
                              <span>LIVE DEMO</span>
                              <ExternalLink className="size-3 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* ─── Key Deliverables / Milestones ─── */}
                  <div className="mt-4 space-y-2 border-t border-border/60 pt-3.5">
                    <span className="text-[0.68rem] font-mono font-semibold uppercase tracking-wider text-muted-foreground/80 block">
                      KEY ACHIEVEMENTS
                    </span>
                    <ul className="space-y-1.5">
                      {event.milestones.map((m) => {
                        const isAchievement = m.type === 'achievement';
                        return (
                          <li
                            key={m.id}
                            className="flex items-start gap-2 text-body-sm"
                          >
                            <CheckCircle2
                              className={cn(
                                'size-3.5 mt-0.5 shrink-0',
                                isAchievement ? 'text-accent' : 'text-muted-foreground/50'
                              )}
                            />
                            <span
                              className={cn(
                                isAchievement
                                  ? 'text-foreground font-medium'
                                  : 'text-foreground/80'
                              )}
                            >
                              {m.label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* ─── Tech Tags ─── */}
                  {event.tags && event.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border/70 bg-secondary/40 px-2 py-0.5 text-[0.65rem] font-mono text-muted-foreground hover:border-accent/40 transition-colors"
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

        {/* Highway Terminus / Continuing Road Signpost */}
        <div className="relative z-10 flex items-center justify-start md:justify-center mt-12 pl-4 md:pl-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-1.5 shadow-sm text-muted-foreground">
            <Route className="size-3.5 text-accent" />
            <span className="text-[0.72rem] font-mono font-bold tracking-wider uppercase">
              HIGHWAY CONTINUES · NEW EXPEDITIONS & BUILDS IN PROGRESS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
