'use client';

import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { TechCategory as TechCategoryType } from '@/types';

const EASE = [0.16, 1, 0.3, 1] as const;

function StatusDot({ status }: { status: 'using' | 'learning' }) {
  return (
    <span
      className={cn(
        'inline-block size-1.5 rounded-full shrink-0',
        status === 'using' ? 'bg-accent' : 'bg-muted-foreground/40',
      )}
    />
  );
}

function TechItem({
  item,
  index,
  isUsing,
}: {
  item: TechCategoryType['items'][number];
  index: number;
  isUsing: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        'group flex items-center gap-3 py-2 px-3 -mx-3 rounded-lg',
        'transition-colors duration-200 hover:bg-accent/5',
      )}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.2 + index * 0.04, ease: EASE }}
    >
      <StatusDot status={item.status} />
      <div className="flex-1 min-w-0">
        <span
          className={cn(
            'text-body-lg',
            isUsing ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          {item.name}
        </span>
        {item.detail && (
          <span className="ml-2 text-label text-muted-foreground/60 hidden sm:inline">
            {item.detail}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function TechCategory({
  category,
  index,
  isInView,
}: {
  category: TechCategoryType;
  index: number;
  isInView: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isUsing = category.status === 'using';
  const isLarge = category.items.length > 4;

  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-xl border bg-card p-6 md:p-8',
        'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'hover:border-accent/40',
        isUsing
          ? 'border-accent/20'
          : 'border-border',
        isLarge ? 'md:col-span-2' : '',
      )}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: EASE }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3
          className={cn(
            'text-h4',
            isUsing ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          {category.title}
        </h3>
        <span
          className={cn(
            'text-label px-2 py-0.5 rounded-full',
            isUsing
              ? 'text-accent bg-accent/10'
              : 'text-muted-foreground bg-muted',
          )}
        >
          {isUsing ? 'USING' : 'LEARNING'}
        </span>
      </div>

      {/* Separator */}
      <div className="h-px w-full bg-border mb-4" />

      {/* Items grid */}
      <div
        className={cn(
          'grid gap-0.5',
          isLarge ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1',
        )}
      >
        {category.items.map((item, i) => (
          <TechItem
            key={item.name}
            item={item}
            index={i}
            isUsing={isUsing}
          />
        ))}
      </div>
    </motion.div>
  );
}
