'use client';

import { motion } from 'motion/react';
import { EASE } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { JourneyEvent as JourneyEventType } from '@/types';



function Milestone({
  milestone,
  index,
  isFeatured,
  isInView,
}: {
  milestone: JourneyEventType['milestones'][number];
  index: number;
  isFeatured: boolean;
  isInView: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isAchievement = milestone.type === 'achievement';

  return (
    <motion.div
      className={cn(
        'flex items-center gap-3 py-1.5',
        isAchievement && 'font-medium',
      )}
      initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: EASE }}
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
    </motion.div>
  );
}

export function JourneyEvent({
  event,
  index,
  isInView,
  isLast,
}: {
  event: JourneyEventType;
  index: number;
  isInView: boolean;
  isLast: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isFeatured = !!event.featured;

  return (
    <motion.div
      className="relative grid grid-cols-[2.5rem_1px_1fr] md:grid-cols-[3rem_1px_1fr] gap-0 items-start"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.12, ease: EASE }}
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
          whileHover={{ scale: 1.3, boxShadow: '0 0 12px oklch(from var(--accent) l c h / 0.3)' }}
          transition={{ duration: 0.2 }}
        >
          {isFeatured && (
            <motion.div
              className="absolute inset-0 rounded-full bg-accent/30"
              animate={
                prefersReducedMotion
                  ? {}
                  : { scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }
              }
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </motion.div>

        {/* Timeline line */}
        {!isLast && (
          <motion.div
            className="w-px flex-1 min-h-[3rem] bg-border mt-2 origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.12, ease: EASE }}
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
        <motion.span
          className="text-label text-muted-foreground/70"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.12 }}
        >
          {event.category}
        </motion.span>

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
            {event.milestones.map((milestone, i) => (
              <Milestone
                key={milestone.id}
                milestone={milestone}
                index={i}
                isFeatured={isFeatured}
                isInView={isInView}
              />
            ))}
          </div>
        )}

        {/* Project link for Vibe2Ship → FlowSync AI */}
        {event.project && (
          <motion.a
            href="#work"
            className={cn(
              'inline-flex items-center gap-1.5 mt-4 text-caption',
              'text-accent transition-all duration-200',
              'hover:gap-2.5',
            )}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.12 }}
          >
            VIEW PROJECT <span className="text-label">→</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
