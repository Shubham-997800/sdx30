'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code2,
  MapPin,
  Calendar,
  Sparkles,
  Shield,
  Rocket,
  Cpu,
  Trophy,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Button } from '@/components/ui/button';
import type { JourneyEvent } from '@/types';

interface JourneySliderProps {
  events: JourneyEvent[];
}

function EventIcon({ id, className }: { id: string; className?: string }) {
  if (id.includes('odoo')) return <Trophy className={className} />;
  if (id.includes('sih')) return <Shield className={className} />;
  if (id.includes('antariksh')) return <Rocket className={className} />;
  if (id.includes('agents')) return <Cpu className={className} />;
  return <Sparkles className={className} />;
}

export function JourneySlider({ events }: JourneySliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const activeEvent = events[activeIndex];

  const handleSelect = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex((prev) => prev - 1);
    }
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex < events.length - 1) {
      setDirection(1);
      setActiveIndex((prev) => prev + 1);
    }
  }, [activeIndex, events.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <div ref={containerRef} className="w-full space-y-8 md:space-y-10">
      {/* ─── 1. Quick Stats Summary Bar ─── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-xl border border-border/80 bg-card/50 p-3.5 sm:p-4">
          <span className="text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground block">
            Competitions
          </span>
          <span className="text-h3 font-heading font-bold text-foreground mt-0.5 block">
            5 National
          </span>
          <span className="text-[0.72rem] text-accent mt-0.5 block">High-stakes builds</span>
        </div>

        <div className="rounded-xl border border-border/80 bg-card/50 p-3.5 sm:p-4">
          <span className="text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground block">
            Selection Rate
          </span>
          <span className="text-h3 font-heading font-bold text-foreground mt-0.5 block">
            Top 1%
          </span>
          <span className="text-[0.72rem] text-muted-foreground mt-0.5 block">From 20,000+ applicants</span>
        </div>

        <div className="rounded-xl border border-border/80 bg-card/50 p-3.5 sm:p-4">
          <span className="text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground block">
            Venues & Teams
          </span>
          <span className="text-h3 font-heading font-bold text-foreground mt-0.5 block">
            IIT-H & Odoo
          </span>
          <span className="text-[0.72rem] text-accent mt-0.5 block">Nodal center builds</span>
        </div>

        <div className="rounded-xl border border-border/80 bg-card/50 p-3.5 sm:p-4">
          <span className="text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground block">
            Domains Solved
          </span>
          <span className="text-h3 font-heading font-bold text-foreground mt-0.5 block">
            ERP & Security
          </span>
          <span className="text-[0.72rem] text-muted-foreground mt-0.5 block">SpaceTech & AI OS</span>
        </div>
      </div>

      {/* ─── 2. Horizontal Interactive Milestone Track ─── */}
      <div className="relative">
        {/* Track Connecting Rail */}
        <div className="absolute top-[22px] left-8 right-8 h-[2px] bg-border/80 -z-0 hidden md:block" />

        <div
          className="flex items-center justify-between gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x"
          role="tablist"
          aria-label="Hackathon journey milestones"
        >
          {events.map((ev, i) => {
            const isSelected = i === activeIndex;
            const isCompleted = i < activeIndex;

            return (
              <button
                key={ev.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelect(i)}
                className={cn(
                  'group relative flex flex-col items-center gap-2 rounded-xl p-2.5 sm:p-3 transition-all duration-200 cursor-pointer snap-start shrink-0 min-w-[140px] md:min-w-0 md:flex-1 text-center',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
                  isSelected
                    ? 'bg-accent/[0.08] border border-accent/40 shadow-sm'
                    : 'bg-card/40 border border-border/60 hover:border-border hover:bg-card/80',
                )}
              >
                {/* Node indicator */}
                <div
                  className={cn(
                    'relative z-10 flex size-7 sm:size-8 items-center justify-center rounded-full text-[0.75rem] font-mono font-bold transition-all duration-200',
                    isSelected
                      ? 'bg-accent text-accent-foreground shadow-md shadow-accent/20 scale-110'
                      : isCompleted
                        ? 'bg-accent/20 text-accent border border-accent/30'
                        : 'bg-muted text-muted-foreground border border-border',
                  )}
                >
                  {ev.number}
                </div>

                {/* Short label */}
                <div className="flex flex-col items-center">
                  <span
                    className={cn(
                      'text-[0.78rem] font-medium leading-tight transition-colors duration-150',
                      isSelected
                        ? 'text-foreground font-semibold'
                        : 'text-muted-foreground group-hover:text-foreground',
                    )}
                  >
                    {ev.shortTitle}
                  </span>
                  <span className="text-[0.65rem] font-mono text-muted-foreground/70 mt-0.5">
                    {ev.date || '2026'}
                  </span>
                </div>

                {/* Active Indicator Underline (Desktop) */}
                {isSelected && (
                  <motion.div
                    layoutId="activeMilestoneTrack"
                    className="absolute -bottom-1.5 h-[3px] w-12 bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 3. Active Milestone Hero Stage Card ─── */}
      <div className="relative min-h-[380px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeEvent.id}
            custom={direction}
            initial={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, x: direction * 28, filter: 'blur(4px)' }
            }
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction * -28, filter: 'blur(4px)' }
            }
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'relative rounded-2xl border border-border/90 bg-card/80 p-6 sm:p-8 md:p-10 shadow-xl backdrop-blur-sm',
              'before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/60 before:to-transparent',
            )}
          >
            {/* Top Bar: Number + Category + Status Badge + Date */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-label font-mono text-muted-foreground/70">
                  STOP {activeEvent.number} OF {String(events.length).padStart(2, '0')}
                </span>
                <span className="h-3 w-px bg-border" />
                <span className="text-caption font-mono uppercase tracking-wider text-accent font-semibold">
                  {activeEvent.category}
                </span>

                {activeEvent.statusBadge && (
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/30 px-2.5 py-0.5 text-[0.68rem] font-mono text-accent font-medium">
                    <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                    <span>{activeEvent.statusBadge}</span>
                  </div>
                )}
              </div>

              {/* Date & Venue */}
              <div className="flex items-center gap-3 text-caption text-muted-foreground/80">
                {activeEvent.venue && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3 text-accent/80" />
                    {activeEvent.venue}
                  </span>
                )}
                {activeEvent.date && (
                  <span className="inline-flex items-center gap-1 font-mono">
                    <Calendar className="size-3 text-muted-foreground/60" />
                    {activeEvent.date}
                  </span>
                )}
              </div>
            </div>

            {/* Main Title & Organization */}
            <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                    <EventIcon id={activeEvent.id} className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-h2 font-heading font-bold text-foreground tracking-tight">
                      {activeEvent.title}
                    </h3>
                    <p className="text-body-sm text-accent font-medium mt-0.5">
                      {activeEvent.organization}
                    </p>
                  </div>
                </div>

                {/* Brief project description if present */}
                {activeEvent.projectDescription && (
                  <p className="text-body text-muted-foreground max-w-2xl mt-4 leading-relaxed">
                    {activeEvent.projectDescription}
                  </p>
                )}
              </div>

              {/* Action buttons (Repo / Live Demo) */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start">
                {activeEvent.githubUrl && (
                  <a
                    href={activeEvent.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="group/btn">
                      <Code2 className="size-3.5 transition-transform group-hover/btn:rotate-12" />
                      {activeEvent.linkText || 'VIEW REPO'}
                      <ExternalLink className="size-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </Button>
                  </a>
                )}

                {activeEvent.liveUrl && (
                  <a
                    href={activeEvent.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="glow" size="sm" className="group/btn">
                      LIVE DEMO
                      <ExternalLink className="size-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* What I Built Highlight Box (If project exists) */}
            {activeEvent.project && (
              <div className="mt-6 rounded-xl border border-accent/25 bg-accent/[0.04] p-4 sm:p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[0.7rem] font-mono font-semibold uppercase tracking-wider text-accent">
                    Featured Project Built
                  </span>
                  <span className="text-caption font-mono text-muted-foreground/60">
                    Production Architecture
                  </span>
                </div>
                <h4 className="text-body-lg font-heading font-semibold text-foreground mt-1">
                  {activeEvent.project}
                </h4>
                {activeEvent.projectDescription && (
                  <p className="text-body-sm text-foreground/80 mt-1">
                    {activeEvent.projectDescription}
                  </p>
                )}
              </div>
            )}

            {/* Key Milestones & Takeaways */}
            <div className="mt-6 space-y-2.5">
              <span className="text-label text-muted-foreground block">
                KEY ACHIEVEMENTS & CONTRIBUTIONS
              </span>
              <ul className="space-y-2">
                {activeEvent.milestones.map((m) => {
                  const isAchievement = m.type === 'achievement';
                  return (
                    <li
                      key={m.id}
                      className={cn(
                        'flex items-start gap-2.5 text-body-sm',
                        isAchievement ? 'text-foreground' : 'text-muted-foreground',
                      )}
                    >
                      <span
                        className={cn(
                          'mt-1 size-1.5 rounded-full shrink-0',
                          isAchievement ? 'bg-accent shadow-xs shadow-accent/50' : 'bg-muted-foreground/40',
                        )}
                      />
                      <span className={isAchievement ? 'font-medium' : ''}>
                        {m.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Tags footer */}
            {activeEvent.tags && activeEvent.tags.length > 0 && (
              <div className="mt-6 pt-5 border-t border-border/50 flex flex-wrap items-center gap-1.5">
                <span className="text-caption font-mono text-muted-foreground/60 mr-2">
                  Tags:
                </span>
                {activeEvent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2.5 py-0.5 text-[0.72rem] font-mono text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── 4. Slider Bottom Controls ─── */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        {/* Step Indicator & Hint */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                aria-label={`Jump to milestone ${i + 1}`}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300 cursor-pointer',
                  i === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-muted-foreground',
                )}
              />
            ))}
          </div>
          <span className="text-caption font-mono text-muted-foreground">
            {activeIndex + 1} of {events.length}
          </span>
        </div>

        {/* Previous / Next Arrow Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="gap-1 cursor-pointer disabled:opacity-30"
            aria-label="Previous milestone"
          >
            <ChevronLeft className="size-4" />
            <span className="hidden sm:inline">Prev</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={activeIndex === events.length - 1}
            className="gap-1 cursor-pointer disabled:opacity-30"
            aria-label="Next milestone"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
