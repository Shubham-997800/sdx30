'use client';

import { STAGGER } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/motion/RevealSystem';
import type { EngineeringCategory as EngineeringCategoryType } from '@/types';



interface EngineeringCategoryProps {
  category: EngineeringCategoryType;
  index: number;
}

export function EngineeringCategory({ category, index }: EngineeringCategoryProps) {
  return (
    <Reveal
      direction="up"
      delay={index * STAGGER.fast}
      className={cn(
        "group relative rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-200",
        "hover:border-accent/30"
      )}
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
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-muted/50"
          >
            <span className="mt-1 size-1 rounded-full bg-accent/60 shrink-0" />
            <div className="space-y-0.5">
              <span className="text-body-sm font-medium text-foreground block">{skill.name}</span>
              {skill.detail && (
                <span className="text-caption text-muted-foreground">{skill.detail}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
        <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-accent/40 to-transparent" />
      </div>
    </Reveal>
  );
}
