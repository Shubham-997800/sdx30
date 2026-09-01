'use client';

import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { EngineeringCategory as EngineeringCategoryType } from '@/types';

const EASE = [0.16, 1, 0.3, 1] as const;

function SkillItem({ name, detail, index }: { name: string; detail?: string; index: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      className="group/skill flex items-start gap-3 py-2"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.05, ease: EASE }}
    >
      <span className="mt-2 size-1 rounded-full bg-accent shrink-0" />
      <div className="space-y-0.5">
        <span className="text-body-sm font-medium text-foreground">
          {name}
        </span>
        {detail && (
          <span className="block text-label text-muted-foreground/60">
            {detail}
          </span>
        )}
      </div>
    </motion.li>
  );
}

export function EngineeringCategory({
  category,
  index,
  isInView,
}: {
  category: EngineeringCategoryType;
  index: number;
  isInView: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-xl border border-border bg-card p-6 md:p-8',
        'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'hover:border-accent/40',
      )}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: EASE }}
    >
      {/* Category number */}
      <span className="text-[4rem] md:text-[5rem] font-bold leading-none tracking-tighter text-foreground/[0.03] dark:text-foreground/[0.05] select-none absolute top-4 right-6">
        {category.number}
      </span>

      {/* Header */}
      <div className="relative space-y-3 mb-6">
        <span className="text-label text-accent">
          {category.number} / {category.title.split(' ')[0]}
        </span>
        <h3
          className="text-subheading font-bold tracking-[-0.03em] text-foreground"
        >
          {category.title}
        </h3>
        <p className="text-body-sm text-muted-foreground max-w-sm">
          {category.description}
        </p>
      </div>

      {/* Separator */}
      <div className="h-px w-full bg-border mb-5" />

      {/* Skills */}
      <ul className="space-y-1">
        {category.skills.map((skill, i) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            detail={skill.detail}
            index={i}
          />
        ))}
      </ul>

      {/* Hover arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">
        <span className="text-accent text-body-sm">→</span>
      </div>
    </motion.div>
  );
}
