'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink, ArrowUpRight, Eye, Code2 } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types';
import { ProjectThumbnail } from './ProjectThumbnail';

const EASE = [0.16, 1, 0.3, 1] as const;

function ProjectFeatures({ features }: { features: string[] }) {
  return (
    <div className="space-y-3">
      <span className="text-label text-muted-foreground">
        KEY FEATURES
      </span>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-body-sm text-foreground/90">
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
          <span key={tech} className="text-label text-foreground/70">
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
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="glow" size="sm" className="group/btn">
            <Eye className="size-3.5 transition-all duration-300 group-hover/btn:scale-110" />
            LIVE DEMO
            <ExternalLink className="size-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </Button>
        </a>
      )}
      {hasGithub && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="group/btn">
            <Code2 className="size-3.5 transition-all duration-300 group-hover/btn:rotate-12" />
            GITHUB
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </Button>
        </a>
      )}
      {hasCaseStudy && (
        <a href={project.caseStudyUrl}>
          <Button variant="ghost" size="sm" className="group/btn text-muted-foreground hover:text-foreground">
            CASE STUDY
            <span className="text-accent transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
          </Button>
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
        <motion.div
          className="mb-16 md:mb-24 h-px w-full bg-border"
          initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          style={{ transformOrigin: 'left' }}
        />
      )}

      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* ─── Left Column ─── */}
        <motion.div
          className={cn(
            'col-span-4 space-y-6',
            isMediaLeft ? 'lg:col-span-5 order-2 lg:order-2' : 'lg:col-span-5 order-2 lg:order-1',
          )}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        >
          {/* Category + Year */}
          <div className="flex items-center gap-3">
            <span className="text-label text-accent">
              {project.category}
            </span>
            <span className="text-label text-muted-foreground">/</span>
            <span className="text-label text-muted-foreground">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-feature text-foreground">
            {project.name}
          </h3>

          {/* Tagline */}
          <p className="text-body text-muted-foreground">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-body-sm text-muted-foreground max-w-lg leading-relaxed">
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

        {/* ─── Right Column (thumbnail) ─── */}
        <motion.div
          className={cn(
            'col-span-4',
            isMediaLeft ? 'lg:col-span-6 order-1 lg:order-1' : 'lg:col-span-6 order-1 lg:order-2',
            isAsymmetric && 'lg:col-span-7',
          )}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
        >
          <div className="group relative overflow-hidden rounded-xl">
            <ProjectThumbnail projectId={project.id} projectName={project.name} />

            {/* Number overlay */}
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4">
              <span className="text-[5rem] md:text-[7rem] leading-none text-foreground/[0.03] dark:text-foreground/[0.05] select-none font-heading">
                {num}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
