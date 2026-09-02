'use client';

import { motion } from 'motion/react';
import { EASE } from '@/lib/animations';
import { ExternalLink, Code2, Layers, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const TECH_STACK = [
  { name: 'React', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Tailwind', color: '#06b6d4' },
  { name: 'Vite', color: '#646cff' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Next.js', color: '#111827' },
];

function ProjectShowcaseCard() {
  const featuredProject = projects.find((p) => p.featured) ?? projects[0];

  return (
    <motion.div
      className="editorial-card rounded-xl border border-border/60 backdrop-blur-xl p-4 sm:p-5"
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent" />
          <span className="text-caption font-mono uppercase tracking-[0.15em] text-muted-foreground">
            Featured Project
          </span>
        </div>
        <span className="text-caption font-mono text-accent/70">
          {featuredProject.number} / 06
        </span>
      </div>

      {/* Project Name */}
      <h3 className="text-base sm:text-lg font-heading font-bold text-foreground tracking-tight mb-1">
        {featuredProject.name}
      </h3>
      <p className="text-label text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
        {featuredProject.tagline}
      </p>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
        {[
          { label: 'Year', value: featuredProject.year },
          { label: 'Role', value: 'Sole Dev' },
          { label: 'Status', value: featuredProject.liveUrl ? 'Live' : 'Built' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="text-caption font-mono uppercase tracking-widest text-muted-foreground/60 block mb-0.5">
              {stat.label}
            </span>
            <span className="text-label font-medium text-foreground">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5">
        {featuredProject.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md text-caption font-mono bg-accent/8 text-accent border border-accent/15"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action */}
      <div className="mt-3 sm:mt-4 pt-3 border-t border-border/40 flex items-center gap-1.5 text-caption font-mono text-accent">
        <ExternalLink className="size-3" />
        <span>{featuredProject.liveUrl ? 'VIEW PROJECT' : 'VIEW CODE'}</span>
      </div>
    </motion.div>
  );
}

function CodeSnippetCard() {
  const codeLines = [
    { indent: 0, parts: [
      { text: 'const', color: 'text-accent' },
      { text: ' developer', color: 'text-foreground/80' },
      { text: ' = ', color: 'text-muted-foreground/40' },
      { text: '{', color: 'text-muted-foreground/40' },
    ]},
    { indent: 1, parts: [
      { text: 'focus', color: 'text-muted-foreground/60' },
      { text: ': ', color: 'text-muted-foreground/40' },
      { text: '"Frontend"', color: 'text-accent/80' },
      { text: ',', color: 'text-muted-foreground/40' },
    ]},
    { indent: 1, parts: [
      { text: 'stack', color: 'text-muted-foreground/60' },
      { text: ': ', color: 'text-muted-foreground/40' },
      { text: '["React", "TS"]', color: 'text-accent/70' },
      { text: ',', color: 'text-muted-foreground/40' },
    ]},
    { indent: 1, parts: [
      { text: 'status', color: 'text-muted-foreground/60' },
      { text: ': ', color: 'text-muted-foreground/40' },
      { text: '"building"', color: 'text-[var(--color-success)]/80' },
    ]},
    { indent: 0, parts: [
      { text: '}', color: 'text-muted-foreground/40' },
      { text: ';', color: 'text-muted-foreground/40' },
    ]},
  ];

  return (
    <div className="code-card rounded-xl border border-border/50 backdrop-blur-lg overflow-hidden">
      {/* Terminal Header */}
      <div className="code-card-header flex items-center gap-1.5 px-3 py-2 border-b border-border/30">
        <span className="size-[5px] rounded-full bg-[#ff5f57]" />
        <span className="size-[5px] rounded-full bg-[#febc2e]" />
        <span className="size-[5px] rounded-full bg-[#28c840]" />
        <span className="ml-2 text-caption font-mono text-muted-foreground/50">shubham.ts</span>
      </div>

      {/* Code */}
      <div className="code-card-body px-3 py-2.5 font-mono text-caption leading-[1.8]">
        {codeLines.map((line, li) => (
          <div
            key={li}
            style={{ paddingLeft: `${line.indent * 1}rem` }}
          >
            {line.parts.map((part, pi) => (
              <span key={pi} className={part.color}>{part.text}</span>
            ))}
          </div>
        ))}
        <span className="inline-block w-[6px] h-[10px] bg-accent/70 ml-0.5 align-middle" />
      </div>
    </div>
  );
}

function TechStackPills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
      {TECH_STACK.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-border/50 bg-card/60 backdrop-blur-md"
          initial={prefersReducedMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : 0.35 + i * 0.04, ease: EASE }}
          whileHover={{ scale: 1.05, borderColor: tech.color }}
        >
          <span
            className="size-1.5 rounded-full"
            style={{ background: tech.color }}
          />
          <span className="text-caption font-mono text-foreground/70">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

function StatusIndicator() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-border/40 bg-card/50 backdrop-blur-md w-fit">
      <div className="relative flex size-2">
        {!prefersReducedMotion && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)] animate-ping" />
        )}
        <span className="relative inline-flex size-2 rounded-full bg-[var(--color-success)]" />
      </div>
      <span className="text-caption font-mono text-muted-foreground">
        Available for work
      </span>
    </div>
  );
}

function GridOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] dark:opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hero-dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-dot-grid)" />
    </svg>
  );
}

function ConnectionLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[
        { x1: '20%', y1: '30%', x2: '50%', y2: '50%' },
        { x1: '50%', y1: '50%', x2: '80%', y2: '35%' },
        { x1: '50%', y1: '50%', x2: '35%', y2: '78%' },
        { x1: '50%', y1: '50%', x2: '75%', y2: '75%' },
      ].map((line, i) => (
        <line
          key={i}
          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke="url(#line-grad)"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
      ))}
      {[
        { cx: '20%', cy: '30%' },
        { cx: '80%', cy: '35%' },
        { cx: '35%', cy: '78%' },
        { cx: '75%', cy: '75%' },
      ].map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx} cy={dot.cy} r="2"
          fill="var(--accent)"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-auto min-h-[260px] sm:min-h-[300px] md:min-h-[420px] lg:min-h-[480px]">
      {/* ── Ambient Glow — static on reduced motion ── */}
      <motion.div
        className="hero-ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-accent/[0.04] rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"
        animate={prefersReducedMotion ? { opacity: 0.05 } : { scale: [1, 1.15, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Grid Dots — Static ── */}
      <GridOverlay />

      {/* ── Connection Lines — Static ── */}
      <ConnectionLines />

      {/* ── Main Layout — single col mobile, 2 col sm+ ── */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 h-full p-2">
        {/* Left Column — content visible immediately */}
        <div className="flex flex-col gap-3 justify-center">
          <CodeSnippetCard />

          <div className="flex justify-center">
            <StatusIndicator />
          </div>
        </div>

        {/* Right Column — content visible immediately */}
        <div className="flex flex-col gap-3 justify-center">
          <ProjectShowcaseCard />

          {/* Icons Row — Static, hover only */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {[
              { Icon: Code2, label: 'Code', color: '#61dafb' },
              { Icon: Layers, label: 'Systems', color: '#a78bfa' },
              { Icon: Sparkles, label: 'Design', color: '#f472b6' },
            ].map(({ Icon, label, color }) => (
              <div
                key={label}
                className="group relative flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-200 hover:border-border/60 hover:-translate-y-0.5"
              >
                {/* Icon container */}
                <div
                  className="relative z-10 flex items-center justify-center size-8 sm:size-9 rounded-lg"
                  style={{ backgroundColor: `${color}10` }}
                >
                  <Icon
                    className="size-4 sm:size-5 transition-all duration-300"
                    style={{ color }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Label */}
                <span className="relative z-10 text-caption font-mono text-muted-foreground/60 uppercase tracking-wider group-hover:text-foreground/70 transition-colors duration-200">
                  {label}
                </span>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full w-0 group-hover:w-[60%] transition-all duration-200"
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tech Stack Pills (Bottom) — content visible immediately ── */}
      <div className="relative sm:absolute sm:bottom-0 sm:left-0 sm:right-0 z-10 mt-3 sm:mt-0">
        <TechStackPills />
      </div>
    </div>
  );
}
