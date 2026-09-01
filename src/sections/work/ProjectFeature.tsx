'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

const EASE = [0.16, 1, 0.3, 1] as const;

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
      {/* Placeholder gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-metadata font-medium text-muted-foreground/60">
          {project.name}
        </span>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/5" />
    </div>
  );
}

function ProjectFeatures({ features }: { features: string[] }) {
  return (
    <div className="space-y-3">
      <span className="text-label text-muted-foreground">
        KEY FEATURES
      </span>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-body-sm text-foreground/80">
            <span className="mt-1.5 size-1 rounded-full bg-accent shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectTechStack({ technologies }: { technologies: string[] }) {
  return (
    <div className="space-y-3">
      <span className="text-label text-muted-foreground">
        TECH STACK
      </span>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-caption font-medium uppercase tracking-[0.06em] text-foreground/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  const hasDemo = project.liveUrl && !project.liveUrl.includes('[TODO');
  const hasGithub = project.githubUrl && !project.githubUrl.includes('[TODO');
  const hasCaseStudy = project.caseStudyUrl;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {hasDemo && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:brightness-95 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          LIVE DEMO
          <ExternalLink className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </a>
      )}
      {hasGithub && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-muted hover:border-accent/50 hover:shadow-md hover:shadow-accent/5 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          GITHUB
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </a>
      )}
      {hasCaseStudy && (
        <a
          href={project.caseStudyUrl}
          className="group/btn inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-muted hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          CASE STUDY
          <span className="text-accent transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
        </a>
      )}
    </div>
  );
}

export function ProjectFeature({ project, index }: { project: Project; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const isMediaLeft = project.layout === 'media-left';
  const isAsymmetric = project.layout === 'asymmetric';
  const num = String(index + 1).padStart(2, '0');

  return (
    <div ref={ref} className="relative">
      {/* Separator */}
      {index > 0 && (
        <div className="mb-16 md:mb-24 h-px w-full bg-border" />
      )}

      <div
        className={cn(
          'grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12 items-start',
        )}
      >
        {/* ─── Left Column (number + content on media-left) ─── */}
        <motion.div
          className={cn(
            'col-span-4 space-y-6',
            isMediaLeft ? 'lg:col-span-5 order-2 lg:order-1' : 'lg:col-span-5 order-2 lg:order-2',
          )}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          {/* Category + Year */}
          <div className="flex items-center gap-3">
            <span className="text-label text-accent">
              {project.category}
            </span>
            <span className="text-label text-muted-foreground">/</span>
            <span className="text-label font-medium text-muted-foreground">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-feature font-bold tracking-[-0.04em] text-foreground leading-[1.05]"
          >
            {project.name}
          </h3>

          {/* Tagline */}
          <p className="text-body text-muted-foreground">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-body-sm text-muted-foreground/80 max-w-lg leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <ProjectFeatures features={project.features} />

          {/* Tech Stack */}
          <ProjectTechStack technologies={project.technologies} />

          {/* Actions */}
          <div className="pt-2">
            <ProjectActions project={project} />
          </div>
        </motion.div>

        {/* ─── Right Column (preview) ─── */}
        <motion.div
          className={cn(
            'col-span-4',
            isMediaLeft ? 'lg:col-span-6 order-1 lg:order-2' : 'lg:col-span-6 order-1 lg:order-1',
            isAsymmetric && 'lg:col-span-7',
          )}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
        >
          <div className="group relative overflow-hidden">
            <ProjectPreview project={project} />
            {/* Number overlay */}
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4">
              <span className="text-[5rem] md:text-[7rem] font-bold leading-none tracking-tighter text-foreground/[0.03] dark:text-foreground/[0.05] select-none">
                {num}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
