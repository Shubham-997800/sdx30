'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const EASE = [0.16, 1, 0.3, 1] as const;

const isTouchDevice = typeof window !== 'undefined'
  ? 'ontouchstart' in window || navigator.maxTouchPoints > 0
  : false;

function FloatingOrb({ size, x, y, color, delay }: { size: number; x: string; y: string; color: string; delay: number }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{ width: size, height: size, left: x, top: y, background: color }}
      animate={prefersReducedMotion ? { opacity: 0.3, scale: 1 } : {
        opacity: [0.2, 0.35, 0.2],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [blinkOpen, setBlinkOpen] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Eye blink
  useEffect(() => {
    if (prefersReducedMotion) return;
    const blink = () => {
      setBlinkOpen(false);
      setTimeout(() => setBlinkOpen(true), 150);
    };
    const interval = setInterval(blink, 3000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || isTouchDevice || !isDesktop) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [prefersReducedMotion, isDesktop, mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => { mouseX.set(0); mouseY.set(0); }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full max-w-lg overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <FloatingOrb size={140} x="5%" y="10%" color="var(--color-accent)" delay={0} />
      <FloatingOrb size={90} x="75%" y="65%" color="var(--color-accent)" delay={1.5} />
      <FloatingOrb size={60} x="85%" y="10%" color="var(--color-accent)" delay={0.8} />

      {/* ─── Character SVG ─── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
      >
        <svg viewBox="0 0 420 420" className="w-full h-full max-w-[380px] max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="desk" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-card)" />
              <stop offset="100%" stopColor="var(--color-border)" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="shirt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.02" />
            </linearGradient>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="var(--color-foreground)" floodOpacity="0.06" />
            </filter>
          </defs>

          {/* Desk */}
          <g filter="url(#softShadow)">
            <rect x="70" y="270" width="280" height="10" rx="5" fill="url(#desk)" />
            <rect x="95" y="280" width="5" height="60" rx="2" fill="var(--color-border)" fillOpacity="0.5" />
            <rect x="320" y="280" width="5" height="60" rx="2" fill="var(--color-border)" fillOpacity="0.5" />
          </g>

          {/* Chair */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="150" y="238" width="120" height="42" rx="16" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
            <rect x="158" y="280" width="104" height="6" rx="3" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
            <rect x="208" y="286" width="4" height="30" rx="1" fill="var(--color-border)" fillOpacity="0.4" />
          </motion.g>

          {/* Body */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -1.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M165 228 Q165 205 182 198 L238 198 Q255 205 255 228 L255 275 L165 275 Z" fill="url(#shirt)" />
            <path d="M192 198 L210 212 L228 198" fill="none" stroke="var(--color-background)" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>

          {/* Arms */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -1.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M165 215 Q142 238 148 265" fill="none" stroke="url(#shirt)" strokeWidth="14" strokeLinecap="round" />
            <path d="M255 215 Q278 238 272 265" fill="none" stroke="url(#shirt)" strokeWidth="14" strokeLinecap="round" />
            <ellipse cx="150" cy="268" rx="9" ry="6" fill="var(--color-foreground)" fillOpacity="0.12" />
            <ellipse cx="270" cy="268" rx="9" ry="6" fill="var(--color-foreground)" fillOpacity="0.12" />
          </motion.g>

          {/* Head */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -2.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="200" y="178" width="20" height="22" rx="6" fill="var(--color-foreground)" fillOpacity="0.1" />
            <ellipse cx="210" cy="152" rx="42" ry="46" fill="var(--color-foreground)" fillOpacity="0.08" />

            {/* Hair */}
            <path d="M168 142 Q168 100 210 100 Q252 100 252 142 Q248 125 210 125 Q172 125 168 142 Z" fill="var(--color-foreground)" fillOpacity="0.18" />
            <path d="M168 142 Q166 135 172 130 Q180 126 190 128" fill="none" stroke="var(--color-foreground)" strokeWidth="2" strokeOpacity="0.08" />

            {/* Glasses */}
            <rect x="185" y="145" width="20" height="14" rx="5" fill="none" stroke="var(--color-foreground)" strokeWidth="1.8" strokeOpacity="0.2" />
            <rect x="215" y="145" width="20" height="14" rx="5" fill="none" stroke="var(--color-foreground)" strokeWidth="1.8" strokeOpacity="0.2" />
            <line x1="205" y1="152" x2="215" y2="152" stroke="var(--color-foreground)" strokeWidth="1.5" strokeOpacity="0.2" />
            <line x1="185" y1="150" x2="178" y2="147" stroke="var(--color-foreground)" strokeWidth="1.5" strokeOpacity="0.15" />
            <line x1="235" y1="150" x2="242" y2="147" stroke="var(--color-foreground)" strokeWidth="1.5" strokeOpacity="0.15" />

            {/* Eyes — blink */}
            <g>
              {blinkOpen ? (
                <>
                  <ellipse cx="195" cy="153" rx="3.5" ry="4.5" fill="var(--color-foreground)" fillOpacity="0.55" />
                  <ellipse cx="225" cy="153" rx="3.5" ry="4.5" fill="var(--color-foreground)" fillOpacity="0.55" />
                  <circle cx="193.5" cy="151.5" r="1.2" fill="var(--color-background)" fillOpacity="0.9" />
                  <circle cx="223.5" cy="151.5" r="1.2" fill="var(--color-background)" fillOpacity="0.9" />
                </>
              ) : (
                <>
                  <line x1="191" y1="153" x2="199" y2="153" stroke="var(--color-foreground)" strokeWidth="1.8" strokeOpacity="0.4" strokeLinecap="round" />
                  <line x1="221" y1="153" x2="229" y2="153" stroke="var(--color-foreground)" strokeWidth="1.8" strokeOpacity="0.4" strokeLinecap="round" />
                </>
              )}
            </g>

            {/* Eyebrows */}
            <line x1="189" y1="141" x2="201" y2="142" stroke="var(--color-foreground)" strokeWidth="1.8" strokeOpacity="0.2" strokeLinecap="round" />
            <line x1="219" y1="142" x2="231" y2="141" stroke="var(--color-foreground)" strokeWidth="1.8" strokeOpacity="0.2" strokeLinecap="round" />

            {/* Nose */}
            <path d="M208 158 Q210 163 212 158" fill="none" stroke="var(--color-foreground)" strokeOpacity="0.12" strokeWidth="1.2" strokeLinecap="round" />

            {/* Smile */}
            <motion.path
              d="M198 170 Q210 179 222 170"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeOpacity="0.6"
              animate={prefersReducedMotion ? {} : {
                d: ['M198 170 Q210 179 222 170', 'M198 171 Q210 180 222 171', 'M198 170 Q210 179 222 170'],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.g>

          {/* Laptop */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -1.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="155" y="225" width="110" height="46" rx="5" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
            <rect x="159" y="229" width="102" height="38" rx="3" fill="url(#screenGlow)" />

            {/* Code lines */}
            <motion.g
              animate={prefersReducedMotion ? {} : { opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <rect x="166" y="235" width="38" height="3" rx="1" fill="var(--color-accent)" fillOpacity="0.45" />
              <rect x="166" y="241" width="52" height="3" rx="1" fill="var(--color-foreground)" fillOpacity="0.1" />
              <rect x="172" y="247" width="30" height="3" rx="1" fill="var(--color-accent)" fillOpacity="0.25" />
              <rect x="172" y="253" width="44" height="3" rx="1" fill="var(--color-foreground)" fillOpacity="0.08" />
              <rect x="166" y="259" width="24" height="3" rx="1" fill="var(--color-accent)" fillOpacity="0.35" />
            </motion.g>

            <rect x="159" y="229" width="102" height="12" rx="3" fill="var(--color-background)" fillOpacity="0.04" />
            <rect x="142" y="271" width="136" height="6" rx="3" fill="var(--color-border)" fillOpacity="0.5" />

            {/* Keyboard */}
            <motion.g
              animate={prefersReducedMotion ? {} : { opacity: [1, 0.4, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            >
              {[0,1,2,3,4,5].map(i => (
                <circle key={i} cx={162 + i * 14} cy={273} r="1.5" fill="var(--color-foreground)" fillOpacity="0.15" />
              ))}
            </motion.g>
          </motion.g>

          {/* Coffee */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          >
            <rect x="300" y="256" width="20" height="16" rx="4" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
            <path d="M320 260 Q328 260 328 266 Q328 270 320 270" fill="none" stroke="var(--color-border)" strokeWidth="1" />
            <motion.path
              d="M308 254 Q310 246 308 238"
              fill="none" stroke="var(--color-foreground)" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.12"
              animate={prefersReducedMotion ? {} : { opacity: [0.12, 0.25, 0.12], y: [0, -3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path
              d="M314 254 Q316 244 314 234"
              fill="none" stroke="var(--color-foreground)" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.08"
              animate={prefersReducedMotion ? {} : { opacity: [0.08, 0.2, 0.08], y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
          </motion.g>

          {/* Plant */}
          <motion.g
            animate={prefersReducedMotion ? {} : { rotate: [0, 1.5, 0, -1.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '95px 270px' }}
          >
            <rect x="84" y="254" width="22" height="18" rx="4" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
            <path d="M95 254 Q88 238 82 226" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
            <path d="M95 254 Q102 236 108 224" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.35" />
            <path d="M95 254 Q95 240 95 228" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3" />
            <circle cx="82" cy="224" r="5" fill="var(--color-accent)" fillOpacity="0.15" />
            <circle cx="108" cy="222" r="4.5" fill="var(--color-accent)" fillOpacity="0.12" />
            <circle cx="95" cy="226" r="3.5" fill="var(--color-accent)" fillOpacity="0.1" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Floating code tokens */}
      {[
        { label: '</>', x: '5%', y: '8%', delay: 0 },
        { label: '{ }', x: '88%', y: '82%', delay: 0.4 },
        { label: 'TS', x: '92%', y: '20%', delay: 0.8 },
        { label: '⚡', x: '3%', y: '90%', delay: 1.2 },
      ].map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-[10px] font-mono text-muted-foreground/25"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: prefersReducedMotion ? 0 : [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 1.5 + el.delay },
            y: { duration: 3 + i * 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: i * 0.3 },
          }}
        >
          {el.label}
        </motion.div>
      ))}
    </div>
  );
}
