'use client';

import { motion } from 'motion/react';
import { EASE, DURATION, STAGGER } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/RevealSystem';
import type { JourneyEvent as JourneyEventType } from '@/types';



function Milestone({
  milestone,
  isFeatured,
}: {
  milestone: JourneyEventType['milestones'][number];
  isFeatured: boolean;
}) {
  const isAchievement = milestone.type === 'achievement';

  return (
    <div
      className={cn(
        'flex items-center gap-3 py-1.5',
        isAchievement && 'font-medium',
      )}
    >
      {/* Milestone indicator */}
      <span
        className={cn(
          'shrink-0',
          isAchievement ? 'text-accent' : 'text-muted-foreground/60',
        )}
      >
        {isAchievement ? '◆' : '→'}
      </span>

      {/* Label */}
      <span
        className={cn(
          'text-body-sm',
          isAchievement
            ? isFeatured
              ? 'text-foreground font-semibold'
              : 'text-foreground font-medium'
            : 'text-foreground/80',
        )}
      >
        {milestone.label}
      </span>
    </div>
  );
}

export function JourneyEvent({
  event,
  index,
  isLast,
}: {
  event: JourneyEventType;
  index: number;
  isLast: boolean;
}) {
  const isFeatured = !!event.featured;

  return (
    <Reveal
      direction="up"
      delay={0.1 + index * STAGGER.fast}
      className="relative grid grid-cols-[2.5rem_1px_1fr] md:grid-cols-[3rem_1px_1fr] gap-0 items-start"
    >
      {/* ─── Left: Number + Node ─── */}
      <div className="relative flex flex-col items-center">
        {/* Number */}
        <span className="text-label text-muted-foreground/70 mb-3">
          {event.number}
        </span>

        {/* Timeline node */}
        <motion.div
          className={cn(
            'relative z-10 size-3.5 rounded-full border-2 cursor-pointer transition-all duration-200',
            isFeatured
              ? 'border-accent bg-accent/25 ring-4 ring-accent/15 shadow-sm shadow-accent/25'
              : 'border-border bg-background hover:border-accent/60',
          )}
          whileHover={{ scale: 1.2, boxShadow: '0 0 16px oklch(from var(--accent) l c h / 0.4)' }}
          transition={{ duration: 0.2 }}
        >
          {isFeatured && (
            <motion.div
              className="absolute inset-0 rounded-full bg-accent/40"
              animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </motion.div>

        {/* Timeline line */}
        {!isLast && (
          <motion.div
            className="w-px flex-1 min-h-[3rem] bg-border mt-2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: DURATION.normal, delay: 0.15 + index * STAGGER.fast, ease: EASE }}
          />
        )}
      </div>

      {/* ─── Right: Content ─── */}
      <div className="flex flex-col items-center py-0.5">
        {/* Horizontal connector line */}
        <div
          className={cn(
            'w-full h-px',
            isFeatured ? 'bg-accent/40' : 'bg-border/60',
          )}
        />
      </div>

      <div
        className={cn(
          'py-1 pl-4 md:pl-6 pb-10',
          isLast && 'pb-0',
        )}
      >
        {/* Category & Date Metadata */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-label text-accent font-mono font-medium">
            {event.category}
          </span>
          {event.date && (
            <>
              <span className="text-muted-foreground/30 text-[10px]">·</span>
              <span className="text-caption font-mono text-muted-foreground/80 text-[0.72rem]">
                {event.date}
              </span>
            </>
          )}
          {event.venue && (
            <>
              <span className="text-muted-foreground/30 text-[10px] hidden sm:inline">·</span>
              <span className="text-caption font-mono text-muted-foreground/60 text-[0.7rem] hidden sm:inline">
                {event.venue}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3
          className={cn(
            'text-h3 mt-1.5 text-foreground',
            isFeatured ? 'text-foreground' : 'text-foreground/90',
          )}
        >
          {event.title}
        </h3>

        {/* Project or Organization */}
        {(event.project || event.organization) && (
          <p className="mt-1 text-body-sm text-muted-foreground">
            {event.project ? (
              <>
                <span className="font-semibold text-foreground/90">{event.project}</span>
                {event.organization && <span> · {event.organization}</span>}
              </>
            ) : (
              event.organization
            )}
          </p>
        )}

        {/* Milestones */}
        {event.milestones.length > 0 && (
          <div className="mt-4 space-y-0.5">
            {event.milestones.map((milestone) => (
              <Milestone
                key={milestone.id}
                milestone={milestone}
                isFeatured={isFeatured}
              />
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          {event.githubUrl && (
            <a
              href={event.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5 text-caption font-mono',
                'text-accent transition-all duration-200',
                'hover:gap-2.5 hover:underline',
              )}
            >
              {event.linkText || 'VIEW REPOSITORY'} <span className="text-label">↗</span>
            </a>
          )}
          {event.liveUrl && (
            <a
              href={event.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-1.5 text-caption font-mono',
                'text-accent transition-all duration-200',
                'hover:gap-2.5 hover:underline',
              )}
            >
              LIVE DEMO <span className="text-label">↗</span>
            </a>
          )}
          {event.project && !event.githubUrl && !event.liveUrl && (
            <a
              href="#work"
              className={cn(
                'inline-flex items-center gap-1.5 text-caption',
                'text-accent transition-all duration-200',
                'hover:gap-2.5',
              )}
            >
              VIEW PROJECT <span className="text-label">→</span>
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
