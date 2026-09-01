'use client';

import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

const CARDS = [
  {
    id: 1,
    type: 'color',
    title: 'Palette',
    className: 'absolute top-2 right-4 w-[180px]',
    delay: 0.2,
  },
  {
    id: 2,
    type: 'typography',
    title: 'Typography',
    className: 'absolute top-36 -left-6 w-[200px]',
    delay: 0.45,
  },
  {
    id: 3,
    type: 'component',
    title: 'Button',
    className: 'absolute bottom-16 right-0 w-[190px]',
    delay: 0.65,
  },
  {
    id: 4,
    type: 'spacing',
    title: 'Spacing',
    className: 'absolute bottom-0 left-6 w-[170px]',
    delay: 0.85,
  },
];

function ColorCard() {
  const colors = [
    { name: 'Primary', value: '#0d0d0d', light: '#fafafa' },
    { name: 'Accent', value: '#00d4aa' },
    { name: 'Surface', value: '#1a1a2e' },
    { name: 'Muted', value: '#6b7280' },
  ];
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-md p-3">
      <span className="text-[0.55rem] font-mono uppercase tracking-widest text-white/30">{CARDS[0].title}</span>
      <div className="flex gap-1.5 mt-2">
        {colors.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-1">
            <div
              className="size-7 rounded-[3px] border border-white/10"
              style={{ backgroundColor: c.value }}
            />
            <span className="text-[0.45rem] text-white/25 font-mono">{c.name.slice(0, 3)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypographyCard() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-md p-3">
      <span className="text-[0.55rem] font-mono uppercase tracking-widest text-white/30">{CARDS[1].title}</span>
      <div className="mt-2 space-y-1.5">
        <p className="text-[0.95rem] font-semibold text-white/90 leading-tight font-heading">Aa</p>
        <p className="text-[0.55rem] text-white/40 font-mono">Geist Sans / 700</p>
        <div className="flex gap-1 mt-1">
          {['B', 'R', 'L'].map((w) => (
            <span key={w} className="text-[0.5rem] text-white/20 border border-white/10 rounded-[2px] px-1.5 py-0.5 font-mono">{w}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComponentCard() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-md p-3">
      <span className="text-[0.55rem] font-mono uppercase tracking-widest text-white/30">{CARDS[2].title}</span>
      <div className="mt-2.5 space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-6 px-3 bg-white rounded-[3px] flex items-center justify-center">
            <span className="text-[0.55rem] font-medium text-black/80">Primary</span>
          </div>
          <div className="h-6 px-3 border border-white/20 rounded-[3px] flex items-center justify-center">
            <span className="text-[0.55rem] font-medium text-white/60">Ghost</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 px-3 bg-accent rounded-[3px] flex items-center justify-center">
            <span className="text-[0.55rem] font-medium text-black/80">Accent</span>
          </div>
          <div className="h-5 w-5 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-[0.4rem] text-white/40">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpacingCard() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-md p-3">
      <span className="text-[0.55rem] font-mono uppercase tracking-widest text-white/30">{CARDS[3].title}</span>
      <div className="mt-2 space-y-1">
        {[16, 24, 32, 48].map((px) => (
          <div key={px} className="flex items-center gap-2">
            <div className="h-1.5 bg-accent/40 rounded-full" style={{ width: `${px * 0.7}px` }} />
            <span className="text-[0.45rem] text-white/20 font-mono">{px}px</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const CARD_COMPONENTS: Record<string, React.FC> = {
  color: ColorCard,
  typography: TypographyCard,
  component: ComponentCard,
  spacing: SpacingCard,
};

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-[380px] lg:h-[420px]">
      {/* ── Ambient glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/[0.06] rounded-full blur-[100px] pointer-events-none" />

      {CARDS.map((card) => {
        const CardComponent = CARD_COMPONENTS[card.type];
        return (
          <motion.div
            key={card.id}
            className={card.className}
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            animate={prefersReducedMotion ? {} : {
              opacity: 1,
              y: [0, -6, 0],
              scale: 1,
            }}
            transition={
              prefersReducedMotion
                ? { duration: 0.5, delay: card.delay, ease: EASE }
                : {
                    opacity: { duration: 0.6, delay: card.delay, ease: EASE },
                    y: { duration: 4 + card.delay * 2, repeat: Infinity, ease: 'easeInOut', delay: card.delay + 0.6 },
                    scale: { duration: 0.6, delay: card.delay, ease: EASE },
                  }
            }
          >
            <CardComponent />
          </motion.div>
        );
      })}

      {/* ── Floating connection lines (decorative) ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <line x1="70%" y1="25%" x2="30%" y2="40%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="30%" y1="40%" x2="60%" y2="70%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="60%" y1="70%" x2="40%" y2="85%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}
