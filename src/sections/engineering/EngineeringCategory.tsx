'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { EngineeringCategory as EngineeringCategoryType } from '@/types';

const EASE = [0.16, 1, 0.3, 1] as const;

interface EngineeringCategoryProps {
  category: EngineeringCategoryType;
  index: number;
}

export function EngineeringCategory({ category, index }: EngineeringCategoryProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "group relative rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-300",
        "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
      )}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
    >
      {/* Category header */}
      <div className="flex items-start justify-between mb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-label text-accent">{category.number}</span>
            <span className="w-px h-3 bg-border" />
            <h3 className="text-h4 text-foreground">{category.title}</h3>
          </div>
          <p className="text-body-sm text-muted-foreground">{category.description}</p>
        </div>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {category.skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-muted/50"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.04, ease: EASE }}
          >
            <span className="mt-1 size-1 rounded-full bg-accent/60 shrink-0" />
            <div className="space-y-0.5">
              <span className="text-body-sm font-medium text-foreground block">{skill.name}</span>
              {skill.detail && (
                <span className="text-caption text-muted-foreground">{skill.detail}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
        <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-accent/40 to-transparent" />
      </div>
    </motion.div>
  );
}
