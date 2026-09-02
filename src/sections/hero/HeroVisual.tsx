'use client';

import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ExternalLink, Code2, Layers, Sparkles } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const TECH_STACK = [
  { name: 'React', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Tailwind', color: '#06b6d4' },
  { name: 'Vite', color: '#646cff' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Next.js', color: '#ffffff' },
];

const FLOATING_SYMBOLS = [
  { char: '{', x: '8%', y: '12%', delay: 0, size: 'text-2xl' },
  { char: '/>', x: '85%', y: '18%', delay: 0.8, size: 'text-lg' },
  { char: '=>', x: '5%', y: '75%', delay: 1.4, size: 'text-base' },
  { char: '[]', x: '88%', y: '72%', delay: 0.4, size: 'text-xl' },
  { char: '()', x: '75%', y: '8%', delay: 1.8, size: 'text-sm' },
  { char: '##', x: '15%', y: '88%', delay: 1.0, size: 'text-base' },
];

function ProjectShowcaseCard() {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl p-5 shadow-2xl shadow-black/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[0.6rem] font-mono uppercase tracking-[0.15em] text-muted-foreground">
            Featured Project
          </span>
        </div>
        <span className="text-[0.55rem] font-mono text-accent/70">01 / 06</span>
      </div>

      {/* Project Name */}
      <h3 className="text-lg font-heading font-bold text-foreground tracking-tight mb-1">
        FlowSync AI
      </h3>
      <p className="text-[0.7rem] text-muted-foreground mb-4 leading-relaxed">
        AI-Powered Productivity Operating System
      </p>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Year', value: '2026' },
          { label: 'Role', value: 'Sole Dev' },
          { label: 'Status', value: 'Live' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="text-[0.5rem] font-mono uppercase tracking-widest text-muted-foreground/60 block mb-0.5">
              {stat.label}
            </span>
            <span className="text-[0.7rem] font-medium text-foreground">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5">
        {['React 19', 'Vite', 'Tailwind', 'Node.js', 'MongoDB'].map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-full text-[0.55rem] font-mono bg-accent/8 text-accent border border-accent/15"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action */}
      <div className="mt-4 pt-3 border-t border-border/40 flex items-center gap-1.5 text-[0.6rem] font-mono text-accent">
        <ExternalLink className="size-3" />
        <span>VIEW PROJECT</span>
      </div>
    </div>
  );
}

function CodeSnippetCard() {
  return (
    <div className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-lg overflow-hidden shadow-xl shadow-black/5">
      {/* Terminal Header */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30">
        <div className="size-[5px] rounded-full bg-[#ff5f57]" />
        <div className="size-[5px] rounded-full bg-[#febc2e]" />
        <div className="size-[5px] rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[0.5rem] font-mono text-muted-foreground/50">shubham.ts</span>
      </div>

      {/* Code */}
      <div className="px-3 py-2.5 font-mono text-[0.6rem] leading-[1.8]">
        <div>
          <span className="text-accent">const</span>{' '}
          <span className="text-foreground/80">developer</span>{' '}
          <span className="text-muted-foreground/40">=</span>{' '}
          <span className="text-muted-foreground/40">{'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-muted-foreground/60">focus</span>
          <span className="text-muted-foreground/40">:</span>{' '}
          <span className="text-accent/80">&quot;Frontend&quot;</span>
          <span className="text-muted-foreground/40">,</span>
        </div>
        <div className="pl-4">
          <span className="text-muted-foreground/60">stack</span>
          <span className="text-muted-foreground/40">:</span>{' '}
          <span className="text-muted-foreground/40">[</span>
          <span className="text-accent/70">&quot;React&quot;</span>
          <span className="text-muted-foreground/40">,</span>{' '}
          <span className="text-accent/70">&quot;TS&quot;</span>
          <span className="text-muted-foreground/40">]</span>
          <span className="text-muted-foreground/40">,</span>
        </div>
        <div className="pl-4">
          <span className="text-muted-foreground/60">status</span>
          <span className="text-muted-foreground/40">:</span>{' '}
          <span className="text-[#10b981]/80">&quot;building&quot;</span>
        </div>
        <div>
          <span className="text-muted-foreground/40">{'}'}</span>
          <span className="text-muted-foreground/40">;</span>
        </div>
      </div>
    </div>
  );
}

function TechStackPills() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {TECH_STACK.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 bg-card/60 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: EASE }}
        >
          <div
            className="size-1.5 rounded-full"
            style={{ background: tech.color }}
          />
          <span className="text-[0.6rem] font-mono text-foreground/70">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

function StatusIndicator() {
  return (
    <motion.div
      className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-border/40 bg-card/50 backdrop-blur-md w-fit"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
    >
      <div className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-[#10b981]" />
      </div>
      <span className="text-[0.6rem] font-mono text-muted-foreground">
        Available for work
      </span>
    </motion.div>
  );
}

function FloatingSymbols() {
  return (
    <>
      {FLOATING_SYMBOLS.map((sym, i) => (
        <motion.span
          key={i}
          className={`absolute font-mono text-accent/[0.12] select-none pointer-events-none ${sym.size}`}
          style={{ left: sym.x, top: sym.y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.12, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: sym.delay,
            ease: 'easeInOut',
          }}
        >
          {sym.char}
        </motion.span>
      ))}
    </>
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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="50%" y1="50%" x2="35%" y2="78%" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 6" />
      <circle cx="20%" cy="30%" r="2" fill="var(--accent)" fillOpacity="0.3" />
      <circle cx="80%" cy="35%" r="2" fill="var(--accent)" fillOpacity="0.3" />
      <circle cx="35%" cy="78%" r="2" fill="var(--accent)" fillOpacity="0.3" />
      <circle cx="75%" cy="75%" r="2" fill="var(--accent)" fillOpacity="0.3" />
    </svg>
  );
}

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-[420px] lg:h-[480px]">
      {/* ── Ambient Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Grid Dots ── */}
      <GridOverlay />

      {/* ── Connection Lines ── */}
      <ConnectionLines />

      {/* ── Floating Code Symbols ── */}
      <FloatingSymbols />

      {/* ── Main Layout ── */}
      <div className="relative z-10 grid grid-cols-2 gap-3 h-full p-2">
        {/* Left Column */}
        <div className="flex flex-col gap-3 justify-center">
          {/* Code Snippet Card */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          >
            <CodeSnippetCard />
          </motion.div>

          {/* Status Indicator */}
          <div className="flex justify-center">
            <StatusIndicator />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3 justify-center">
          {/* Project Showcase Card */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          >
            <ProjectShowcaseCard />
          </motion.div>

          {/* Icons Row */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
          >
            {[
              { Icon: Code2, label: 'Code' },
              { Icon: Layers, label: 'Systems' },
              { Icon: Sparkles, label: 'Design' },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm transition-colors duration-300 hover:border-accent/30 hover:bg-accent/5"
              >
                <Icon className="size-4 text-accent/60" strokeWidth={1.5} />
                <span className="text-[0.5rem] font-mono text-muted-foreground/60 uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Tech Stack Pills (Bottom) ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: EASE }}
      >
        <TechStackPills />
      </motion.div>
    </div>
  );
}
