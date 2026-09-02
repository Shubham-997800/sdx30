'use client';

import { motion } from 'motion/react';
import { EASE } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ExternalLink, Code2, Layers, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';



const TECH_STACK = [
  { name: 'React', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Tailwind', color: '#06b6d4' },
  { name: 'Vite', color: '#646cff' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Next.js', color: '#111827' },
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
  const featuredProject = projects.find((p) => p.featured) ?? projects[0];

  return (
    <motion.div
      className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl p-5 shadow-2xl shadow-black/5"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div
            className="size-2 rounded-full bg-accent"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[0.6rem] font-mono uppercase tracking-[0.15em] text-muted-foreground">
            Featured Project
          </span>
        </div>
        <motion.span
          className="text-[0.55rem] font-mono text-accent/70"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {featuredProject.number} / 06
        </motion.span>
      </div>

      {/* Project Name */}
      <h3 className="text-lg font-heading font-bold text-foreground tracking-tight mb-1">
        {featuredProject.name}
      </h3>
      <p className="text-[0.7rem] text-muted-foreground mb-4 leading-relaxed">
        {featuredProject.tagline}
      </p>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Year', value: featuredProject.year },
          { label: 'Role', value: 'Sole Dev' },
          { label: 'Status', value: featuredProject.liveUrl ? 'Live' : 'Built' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          >
            <span className="text-[0.5rem] font-mono uppercase tracking-widest text-muted-foreground/60 block mb-0.5">
              {stat.label}
            </span>
            <span className="text-[0.7rem] font-medium text-foreground">{stat.value}</span>
          </motion.div>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5">
        {featuredProject.technologies.slice(0, 5).map((tech, i) => (
          <motion.span
            key={tech}
            className="px-2 py-0.5 rounded-full text-[0.55rem] font-mono bg-accent/8 text-accent border border-accent/15"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + i * 0.05, duration: 0.3 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Action */}
      <motion.div
        className="mt-4 pt-3 border-t border-border/40 flex items-center gap-1.5 text-[0.6rem] font-mono text-accent"
        whileHover={{ x: 4 }}
      >
        <ExternalLink className="size-3" />
        <span>{featuredProject.liveUrl ? 'VIEW PROJECT' : 'VIEW CODE'}</span>
      </motion.div>
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
      { text: '"building"', color: 'text-[#10b981]/80' },
    ]},
    { indent: 0, parts: [
      { text: '}', color: 'text-muted-foreground/40' },
      { text: ';', color: 'text-muted-foreground/40' },
    ]},
  ];

  return (
    <motion.div
      className="rounded-xl border border-border/50 bg-card/60 backdrop-blur-lg overflow-hidden shadow-xl shadow-black/5"
      animate={{ y: [0, 4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30">
        <motion.div
          className="size-[5px] rounded-full bg-[#ff5f57]"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="size-[5px] rounded-full bg-[#febc2e]"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className="size-[5px] rounded-full bg-[#28c840]"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
        <span className="ml-2 text-[0.5rem] font-mono text-muted-foreground/50">shubham.ts</span>
      </div>

      {/* Code */}
      <div className="px-3 py-2.5 font-mono text-[0.6rem] leading-[1.8]">
        {codeLines.map((line, li) => (
          <motion.div
            key={li}
            className={li === 0 ? '' : ''}
            style={{ paddingLeft: `${line.indent * 1}rem` }}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + li * 0.15, duration: 0.4 }}
          >
            {line.parts.map((part, pi) => (
              <span key={pi} className={part.color}>{part.text}</span>
            ))}
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.span
          className="inline-block w-[6px] h-[10px] bg-accent/70 ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </motion.div>
  );
}

function TechStackPills() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {TECH_STACK.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 bg-card/60 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: EASE }}
          whileHover={{ scale: 1.1, borderColor: tech.color }}
        >
          <motion.div
            className="size-1.5 rounded-full"
            style={{ background: tech.color }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
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
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative flex size-2">
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full bg-[#10b981]"
          animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
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
          animate={{
            opacity: [0, 0.15, 0],
            y: [0, -12, 0],
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
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
        <motion.line
          key={i}
          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke="url(#line-grad)"
          strokeWidth="0.5"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: EASE }}
        />
      ))}
      {[
        { cx: '20%', cy: '30%' },
        { cx: '80%', cy: '35%' },
        { cx: '35%', cy: '78%' },
        { cx: '75%', cy: '75%' },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx} cy={dot.cy} r="2"
          fill="var(--accent)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 + i * 0.2 }}
        />
      ))}
    </svg>
  );
}

function OrbitRing() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-accent/10"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-accent/40" />
    </motion.div>
  );
}

function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent pointer-events-none"
      animate={{ top: ['0%', '100%'] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
    />
  );
}

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-[420px] lg:h-[480px]">
      {/* ── Ambient Glow ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Grid Dots ── */}
      <GridOverlay />

      {/* ── Scan Line ── */}
      {!prefersReducedMotion && <ScanLine />}

      {/* ── Connection Lines ── */}
      <ConnectionLines />

      {/* ── Orbit Ring ── */}
      {!prefersReducedMotion && <OrbitRing />}

      {/* ── Floating Code Symbols ── */}
      <FloatingSymbols />

      {/* ── Main Layout ── */}
      <div className="relative z-10 grid grid-cols-2 gap-3 h-full p-2">
        {/* Left Column */}
        <div className="flex flex-col gap-3 justify-center">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          >
            <CodeSnippetCard />
          </motion.div>

          <div className="flex justify-center">
            <StatusIndicator />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3 justify-center">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          >
            <ProjectShowcaseCard />
          </motion.div>

          {/* Icons Row */}
          <div className="flex items-center justify-center gap-3">
            {[
              { Icon: Code2, label: 'Code', color: '#61dafb', delay: 0 },
              { Icon: Layers, label: 'Systems', color: '#a78bfa', delay: 0.15 },
              { Icon: Sparkles, label: 'Design', color: '#f472b6', delay: 0.3 },
            ].map(({ Icon, label, color, delay }) => (
              <motion.div
                key={label}
                className="group relative flex flex-col items-center gap-2 p-3 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + delay, ease: EASE }}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                {/* Hover glow background */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${color}15, transparent 70%)`,
                  }}
                />

                {/* Icon container */}
                <motion.div
                  className="relative z-10 flex items-center justify-center size-9 rounded-xl"
                  style={{ backgroundColor: `${color}10` }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon
                    className="size-5 transition-all duration-300"
                    style={{ color }}
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Label */}
                <span className="relative z-10 text-[0.5rem] font-mono text-muted-foreground/60 uppercase tracking-wider group-hover:text-foreground/70 transition-colors duration-300">
                  {label}
                </span>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
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
