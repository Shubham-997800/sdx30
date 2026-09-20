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
            'relative z-10 size-3 rounded-full border-2 cursor-pointer',
            isFeatured
              ? 'border-accent bg-accent/20'
              : 'border-border bg-background hover:border-accent/50',
          )}
          whileHover={{ scale: 1.1, boxShadow: '0 0 12px oklch(from var(--accent) l c h / 0.3)' }}
          transition={{ duration: 0.2 }}
        >
          {isFeatured && (
            <motion.div
              className="absolute inset-0 rounded-full bg-accent/30"
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
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
            isFeatured ? 'bg-accent/30' : 'bg-border/60',
          )}
        />
      </div>

      <div
        className={cn(
          'py-1 pl-4 md:pl-6 pb-10',
          isLast && 'pb-0',
        )}
      >
        {/* Category label */}
        <span className="text-label text-muted-foreground/70">
          {event.category}
        </span>

        {/* Title */}
        <h3
          className={cn(
            'text-h3 mt-2 text-foreground',
            isFeatured ? 'text-foreground' : 'text-foreground/90',
          )}
        >
          {event.title}
        </h3>

        {/* Project or Organization */}
        {(event.project || event.organization) && (
          <p className="mt-1.5 text-body-sm text-muted-foreground">
            {event.project || event.organization}
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

        {/* Project link for Vibe2Ship → FlowSync AI */}
        {event.project && (
          <a
            href="#work"
            className={cn(
              'inline-flex items-center gap-1.5 mt-4 text-caption',
              'text-accent transition-all duration-200',
              'hover:gap-2.5',
            )}
          >
            VIEW PROJECT <span className="text-label">→</span>
          </a>
        )}
      </div>
    </Reveal>
  );
}
