'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { EASE } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { TechCategory as TechCategoryType } from '@/types';



interface TechCategoryProps {
  category: TechCategoryType;
  index: number;
}

export function TechCategory({ category, index }: TechCategoryProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
    >
      {/* Category label */}
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-label text-muted-foreground">{category.title}</h3>
        <div className="flex-1 h-px bg-border" />
        <span className="text-label text-muted-foreground/40">
          {category.items.length} {category.items.length === 1 ? 'ITEM' : 'ITEMS'}
        </span>
      </div>

      {/* Technology cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {category.items.map((item, i) => (
          <motion.div
            key={item.name}
            className={cn(
              "group relative rounded-lg border border-border bg-card px-4 py-3 transition-all duration-300",
              "hover:border-accent/30 hover:bg-muted/30"
            )}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.1 + i * 0.03, ease: EASE }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-body-sm font-medium text-foreground truncate">{item.name}</span>
              <span
                className={cn(
                  "size-1.5 rounded-full shrink-0",
                  item.status === 'using' ? 'bg-accent' : 'bg-muted-foreground/30'
                )}
              />
            </div>
            {item.detail && (
              <span className="text-caption text-muted-foreground mt-1 block truncate">{item.detail}</span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
