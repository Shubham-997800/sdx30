'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { proofItems } from '@/data/proof';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

function ProofCard({
  item,
  index,
  isInView,
}: {
  item: (typeof proofItems)[number];
  index: number;
  isInView: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isFeatured = item.featured;

  return (
    <motion.div
      className={cn(
        'group relative rounded-xl border border-border bg-card p-6 md:p-8',
        'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'hover:border-accent/50',
        isFeatured && 'col-span-2 row-span-2',
      )}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.08,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      {/* Label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-label text-muted-foreground">
          {item.label}
        </span>
      </div>

      {/* Title */}
      <h3
        className={cn(
          'font-bold tracking-[-0.03em] text-foreground',
          isFeatured
            ? 'text-[clamp(1.5rem,3vw,2.25rem)] leading-tight'
            : 'text-[clamp(1.125rem,2vw,1.5rem)] leading-snug',
        )}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          'mt-3 text-muted-foreground',
          isFeatured ? 'text-body' : 'text-body-sm',
        )}
      >
        {item.description}
      </p>

      {/* Hover arrow */}
      <div className="absolute top-6 right-6 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <svg
          className="size-4 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export function ProofSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <Section id="proof" className="py-20 md:py-32">
      <div ref={sectionRef}>
        <Container>
          {/* Header */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={
              prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
            }
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
          >
            <SectionLabel>VALIDATION</SectionLabel>
            <h2
              className="text-feature mt-4 text-foreground tracking-[-0.03em]"
            >
              Quick Proof
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {proofItems.map((item, i) => (
              <ProofCard key={item.id} item={item} index={i} isInView={isInView} />
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}
