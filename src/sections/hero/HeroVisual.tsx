'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
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
        opacity: [0.15, 0.3, 0.15],
        scale: [1, 1.15, 1],
      }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [blinkOpen, setBlinkOpen] = useState(true);
  const [typing, setTyping] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 80, damping: 12, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const eyeX = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);
  const eyeY = useTransform(smoothY, [-0.5, 0.5], [-2, 2]);

  // Eye blink
  useEffect(() => {
    if (prefersReducedMotion) return;
    const blink = () => {
      setBlinkOpen(false);
      setTimeout(() => setBlinkOpen(true), 120);
    };
    const interval = setInterval(blink, 2500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Typing indicator
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => setTyping(t => !t), 1200);
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
      <FloatingOrb size={160} x="0%" y="5%" color="var(--color-accent)" delay={0} />
      <FloatingOrb size={100} x="80%" y="70%" color="var(--color-accent)" delay={2} />
      <FloatingOrb size={70} x="90%" y="5%" color="var(--color-accent)" delay={1} />

      {/* ─── Character ─── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
      >
        <svg viewBox="0 0 500 500" className="w-full h-full max-w-[420px] max-h-[420px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-card)" />
              <stop offset="100%" stopColor="var(--color-border)" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="monitorGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.02" />
            </linearGradient>
            {/* ──3D Face Gradients ── */}
            <radialGradient id="faceMain" cx="50%" cy="42%" r="55%" fx="45%" fy="35%">
              <stop offset="0%" stopColor="var(--color-foreground)" stopOpacity="0.14" />
              <stop offset="45%" stopColor="var(--color-foreground)" stopOpacity="0.09" />
              <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0.04" />
            </radialGradient>
            <radialGradient id="faceShadowR" cx="85%" cy="60%" r="40%">
              <stop offset="0%" stopColor="var(--color-foreground)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="faceShadowL" cx="15%" cy="60%" r="40%">
              <stop offset="0%" stopColor="var(--color-foreground)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="faceHighlight" cx="42%" cy="32%" r="35%">
              <stop offset="0%" stopColor="var(--color-background)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="var(--color-background)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cheekBlushL" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cheekBlushR" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="noseShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-foreground)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="neckGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-foreground)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="30%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="var(--color-foreground)" stopOpacity="0.28" />
              <stop offset="50%" stopColor="var(--color-foreground)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0.16" />
            </linearGradient>
            <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-foreground)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="eyeWhite" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="var(--color-background)" stopOpacity="0.95" />
              <stop offset="85%" stopColor="var(--color-background)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-foreground)" stopOpacity="0.3" />
              <stop offset="40%" stopColor="var(--color-accent)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0.7" />
            </radialGradient>
            <filter id="faceSoft" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="1.2" />
            </filter>
            <filter id="shadowBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
            <clipPath id="faceClip">
              <ellipse cx="250" cy="168" rx="52" ry="58" />
            </clipPath>
          </defs>

          {/* ── Desk ── */}
          <rect x="60" y="310" width="380" height="12" rx="6" fill="url(#deskGrad)" />
          <rect x="90" y="322" width="6" height="70" rx="3" fill="var(--color-border)" fillOpacity="0.4" />
          <rect x="404" y="322" width="6" height="70" rx="3" fill="var(--color-border)" fillOpacity="0.4" />

          {/* ── Chair ── */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="160" y="268" width="180" height="50" rx="20" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
            <rect x="170" y="318" width="160" height="8" rx="4" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
            <rect x="248" y="326" width="4" height="40" rx="2" fill="var(--color-border)" fillOpacity="0.3" />
          </motion.g>

          {/* ── Body (Hoodie) ── */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M180 255 Q180 225 205 215 L295 215 Q320 225 320 255 L320 315 L180 315 Z" fill="url(#hoodieGrad)" />
            {/* Hoodie pocket */}
            <rect x="215" y="275" width="70" height="25" rx="8" fill="var(--color-foreground)" fillOpacity="0.06" />
            {/* Hoodie strings */}
            <line x1="240" y1="220" x2="238" y2="250" stroke="var(--color-background)" strokeWidth="1.5" strokeOpacity="0.3" />
            <line x1="260" y1="220" x2="262" y2="250" stroke="var(--color-background)" strokeWidth="1.5" strokeOpacity="0.3" />
            <circle cx="238" cy="252" r="2" fill="var(--color-background)" fillOpacity="0.3" />
            <circle cx="262" cy="252" r="2" fill="var(--color-background)" fillOpacity="0.3" />
            {/* Collar */}
            <path d="M225 215 L250 230 L275 215" fill="none" stroke="var(--color-background)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
          </motion.g>

          {/* ── Arms ── */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M180 235 Q150 265 158 305" fill="none" stroke="url(#hoodieGrad)" strokeWidth="18" strokeLinecap="round" />
            <path d="M320 235 Q350 265 342 305" fill="none" stroke="url(#hoodieGrad)" strokeWidth="18" strokeLinecap="round" />
            {/* Hands */}
            <ellipse cx="160" cy="308" rx="12" ry="8" fill="var(--color-foreground)" fillOpacity="0.1" />
            <ellipse cx="340" cy="308" rx="12" ry="8" fill="var(--color-foreground)" fillOpacity="0.1" />
          </motion.g>

          {/* ── Head ── */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Neck shadow */}
            <ellipse cx="250" cy="218" rx="18" ry="8" fill="var(--color-foreground)" fillOpacity="0.06" filter="url(#shadowBlur)" />
            {/* Neck */}
            <rect x="238" y="200" width="24" height="22" rx="8" fill="url(#neckGrad)" />
            <rect x="246" y="202" width="6" height="18" rx="3" fill="var(--color-background)" fillOpacity="0.04" />

            {/* ── Face base ── */}
            <ellipse cx="250" cy="168" rx="52" ry="58" fill="url(#faceMain)" />
            <ellipse cx="250" cy="168" rx="52" ry="58" fill="url(#faceShadowR)" />
            <ellipse cx="250" cy="168" rx="52" ry="58" fill="url(#faceShadowL)" />
            <ellipse cx="250" cy="168" rx="52" ry="58" fill="url(#faceHighlight)" />

            {/* Jaw shadow — 3D depth */}
            <path d="M200 190 Q210 228 250 230 Q290 228 300 190" fill="var(--color-foreground)" fillOpacity="0.04" />

            {/* Cheek blush */}
            <ellipse cx="215" cy="186" rx="16" ry="10" fill="url(#cheekBlushL)" />
            <ellipse cx="285" cy="186" rx="16" ry="10" fill="url(#cheekBlushR)" />

            {/* ── Hair — volumetric 3D ── */}
            <path d="M198 156 Q196 106 250 100 Q304 106 302 156 Q298 136 250 132 Q202 136 198 156 Z" fill="url(#hairGrad)" />
            {/* Hair volume — layered strands */}
            <path d="M205 130 Q215 98 230 112" fill="none" stroke="var(--color-foreground)" strokeWidth="3" strokeOpacity="0.12" strokeLinecap="round" />
            <path d="M225 118 Q238 88 255 108" fill="none" stroke="var(--color-foreground)" strokeWidth="3.5" strokeOpacity="0.1" strokeLinecap="round" />
            <path d="M250 112 Q262 82 275 105" fill="none" stroke="var(--color-foreground)" strokeWidth="3" strokeOpacity="0.11" strokeLinecap="round" />
            <path d="M270 120 Q285 92 295 115" fill="none" stroke="var(--color-foreground)" strokeWidth="2.5" strokeOpacity="0.1" strokeLinecap="round" />
            {/* Hair highlight sheen */}
            <path d="M218 115 Q250 95 282 115" fill="none" stroke="var(--color-foreground)" strokeWidth="8" strokeOpacity="0.04" strokeLinecap="round" />
            {/* Side hair */}
            <path d="M198 156 Q192 170 190 185" fill="none" stroke="var(--color-foreground)" strokeWidth="8" strokeOpacity="0.1" strokeLinecap="round" />
            <path d="M302 156 Q308 170 310 185" fill="none" stroke="var(--color-foreground)" strokeWidth="8" strokeOpacity="0.08" strokeLinecap="round" />

            {/* ── Ears ── */}
            <ellipse cx="198" cy="170" rx="7" ry="12" fill="var(--color-foreground)" fillOpacity="0.07" />
            <ellipse cx="198" cy="170" rx="4" ry="8" fill="var(--color-foreground)" fillOpacity="0.04" />
            <ellipse cx="302" cy="170" rx="7" ry="12" fill="var(--color-foreground)" fillOpacity="0.07" />
            <ellipse cx="302" cy="170" rx="4" ry="8" fill="var(--color-foreground)" fillOpacity="0.04" />

            {/* ── Headphones ── */}
            <path d="M210 125 Q250 92 290 125" fill="none" stroke="var(--color-foreground)" strokeWidth="5" strokeOpacity="0.12" strokeLinecap="round" />
            <rect x="188" y="150" width="14" height="22" rx="6" fill="var(--color-foreground)" fillOpacity="0.13" />
            <rect x="298" y="150" width="14" height="22" rx="6" fill="var(--color-foreground)" fillOpacity="0.13" />
            <rect x="191" y="155" width="8" height="12" rx="4" fill="var(--color-foreground)" fillOpacity="0.06" />
            <rect x="301" y="155" width="8" height="12" rx="4" fill="var(--color-foreground)" fillOpacity="0.06" />

            {/* ── Glasses — 3D frames ── */}
            <g>
              {/* Left lens */}
              <rect x="216" y="156" width="28" height="20" rx="8" fill="var(--color-background)" fillOpacity="0.04" stroke="var(--color-foreground)" strokeWidth="2.2" strokeOpacity="0.24" />
              {/* Right lens */}
              <rect x="256" y="156" width="28" height="20" rx="8" fill="var(--color-background)" fillOpacity="0.04" stroke="var(--color-foreground)" strokeWidth="2.2" strokeOpacity="0.24" />
              {/* Bridge */}
              <path d="M244 166 Q250 170 256 166" fill="none" stroke="var(--color-foreground)" strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" />
              {/* Arms */}
              <line x1="216" y1="163" x2="205" y2="158" stroke="var(--color-foreground)" strokeWidth="2" strokeOpacity="0.16" strokeLinecap="round" />
              <line x1="284" y1="163" x2="295" y2="158" stroke="var(--color-foreground)" strokeWidth="2" strokeOpacity="0.16" strokeLinecap="round" />
              {/* Lens reflections */}
              <rect x="222" y="160" width="6" height="3" rx="1.5" fill="var(--color-background)" fillOpacity="0.1" />
              <rect x="262" y="160" width="6" height="3" rx="1.5" fill="var(--color-background)" fillOpacity="0.1" />
            </g>

            {/* ── Eyes — 3D realistic ── */}
            <g>
              {blinkOpen ? (
                <>
                  {/* Left eye */}
                  <motion.g style={{ x: eyeX, y: eyeY }}>
                    <ellipse cx="230" cy="168" rx="9" ry="7" fill="url(#eyeWhite)" />
                    <ellipse cx="230" cy="168" rx="4.5" ry="5" fill="url(#irisGrad)" />
                    <circle cx="230" cy="168" r="2.2" fill="var(--color-foreground)" fillOpacity="0.7" />
                    <circle cx="228" cy="166" r="1.2" fill="var(--color-background)" fillOpacity="0.95" />
                    <circle cx="232" cy="170" r="0.6" fill="var(--color-background)" fillOpacity="0.6" />
                    {/* Eyelid */}
                    <path d="M220 165 Q230 159 240 165" fill="none" stroke="var(--color-foreground)" strokeWidth="1.2" strokeOpacity="0.15" strokeLinecap="round" />
                    <path d="M220 171 Q230 176 240 171" fill="none" stroke="var(--color-foreground)" strokeWidth="0.8" strokeOpacity="0.08" strokeLinecap="round" />
                  </motion.g>
                  {/* Right eye */}
                  <motion.g style={{ x: eyeX, y: eyeY }}>
                    <ellipse cx="270" cy="168" rx="9" ry="7" fill="url(#eyeWhite)" />
                    <ellipse cx="270" cy="168" rx="4.5" ry="5" fill="url(#irisGrad)" />
                    <circle cx="270" cy="168" r="2.2" fill="var(--color-foreground)" fillOpacity="0.7" />
                    <circle cx="268" cy="166" r="1.2" fill="var(--color-background)" fillOpacity="0.95" />
                    <circle cx="272" cy="170" r="0.6" fill="var(--color-background)" fillOpacity="0.6" />
                    <path d="M260 165 Q270 159 280 165" fill="none" stroke="var(--color-foreground)" strokeWidth="1.2" strokeOpacity="0.15" strokeLinecap="round" />
                    <path d="M260 171 Q270 176 280 171" fill="none" stroke="var(--color-foreground)" strokeWidth="0.8" strokeOpacity="0.08" strokeLinecap="round" />
                  </motion.g>
                </>
              ) : (
                <>
                  <line x1="222" y1="168" x2="238" y2="168" stroke="var(--color-foreground)" strokeWidth="1.8" strokeOpacity="0.4" strokeLinecap="round" />
                  <line x1="262" y1="168" x2="278" y2="168" stroke="var(--color-foreground)" strokeWidth="1.8" strokeOpacity="0.4" strokeLinecap="round" />
                </>
              )}
            </g>

            {/* ── Eyebrows — 3D texture ── */}
            <path d="M218 150 Q224 145 238 148 Q242 149 244 152" fill="none" stroke="var(--color-foreground)" strokeWidth="2.5" strokeOpacity="0.2" strokeLinecap="round" />
            <path d="M256 152 Q258 149 262 148 Q276 145 282 150" fill="none" stroke="var(--color-foreground)" strokeWidth="2.5" strokeOpacity="0.2" strokeLinecap="round" />

            {/* ── Nose —3D structure ── */}
            <g>
              {/* Nose bridge */}
              <path d="M248 152 Q246 165 244 176" fill="none" stroke="var(--color-foreground)" strokeWidth="1.2" strokeOpacity="0.08" strokeLinecap="round" />
              <path d="M252 152 Q254 165 256 176" fill="none" stroke="var(--color-foreground)" strokeWidth="1.2" strokeOpacity="0.06" strokeLinecap="round" />
              {/* Nose tip —3D shading */}
              <ellipse cx="250" cy="180" rx="6" ry="4" fill="var(--color-foreground)" fillOpacity="0.04" />
              <ellipse cx="248" cy="179" rx="2" ry="1.5" fill="var(--color-foreground)" fillOpacity="0.08" />
              <ellipse cx="252" cy="179" rx="2" ry="1.5" fill="var(--color-foreground)" fillOpacity="0.06" />
              {/* Nostrils */}
              <ellipse cx="245" cy="182" rx="2.5" ry="1.8" fill="var(--color-foreground)" fillOpacity="0.1" />
              <ellipse cx="255" cy="182" rx="2.5" ry="1.8" fill="var(--color-foreground)" fillOpacity="0.08" />
              {/* Nose highlight */}
              <ellipse cx="250" cy="175" rx="2" ry="3" fill="var(--color-background)" fillOpacity="0.06" />
            </g>

            {/* ── Mouth — realistic3D lips ── */}
            <g>
              {/* Upper lip */}
              <path d="M236 192 Q242 188 250 190 Q258 188 264 192" fill="var(--color-foreground)" fillOpacity="0.06" />
              <path d="M236 192 Q242 188 250 190 Q258 188 264 192" fill="none" stroke="var(--color-foreground)" strokeWidth="1.8" strokeOpacity="0.18" strokeLinecap="round" />
              {/* Lower lip */}
              <motion.path
                d="M236 192 Q250 204 264 192"
                fill="var(--color-foreground)"
                fillOpacity="0.03"
                animate={prefersReducedMotion ? {} : {
                  d: ['M236 192 Q250 204 264 192', 'M236 193 Q250 206 264 193', 'M236 192 Q250 204 264 192'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.path
                d="M236 192 Q250 204 264 192"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.45"
                animate={prefersReducedMotion ? {} : {
                  d: ['M236 192 Q250 204 264 192', 'M236 193 Q250 206 264 193', 'M236 192 Q250 204 264 192'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Lip highlight */}
              <ellipse cx="250" cy="196" rx="6" ry="2" fill="var(--color-background)" fillOpacity="0.04" />
              {/* Chin shadow */}
              <ellipse cx="250" cy="210" rx="10" ry="4" fill="var(--color-foreground)" fillOpacity="0.03" />
            </g>
          </motion.g>

          {/* ── Monitor ── */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Monitor frame */}
            <rect x="130" y="240" width="240" height="65" rx="6" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
            {/* Screen */}
            <rect x="135" y="245" width="230" height="50" rx="3" fill="url(#monitorGlow)" />

            {/* Code lines */}
            <motion.g
              animate={prefersReducedMotion ? {} : { opacity: [0.4, 0.85, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <rect x="145" y="253" width="50" height="3.5" rx="1.5" fill="var(--color-accent)" fillOpacity="0.4" />
              <rect x="145" y="260" width="70" height="3.5" rx="1.5" fill="var(--color-foreground)" fillOpacity="0.08" />
              <rect x="155" y="267" width="40" height="3.5" rx="1.5" fill="var(--color-accent)" fillOpacity="0.25" />
              <rect x="155" y="274" width="60" height="3.5" rx="1.5" fill="var(--color-foreground)" fillOpacity="0.06" />
              <rect x="145" y="281" width="35" height="3.5" rx="1.5" fill="var(--color-accent)" fillOpacity="0.35" />
            </motion.g>

            {/* Screen glare */}
            <rect x="135" y="245" width="230" height="14" rx="3" fill="var(--color-background)" fillOpacity="0.03" />

            {/* Monitor stand */}
            <rect x="235" y="305" width="30" height="8" rx="2" fill="var(--color-border)" fillOpacity="0.4" />
            <rect x="225" y="308" width="50" height="4" rx="2" fill="var(--color-border)" fillOpacity="0.3" />

            {/* Keyboard */}
            <rect x="180" y="312" width="140" height="6" rx="3" fill="var(--color-border)" fillOpacity="0.3" />
            {/* Key dots */}
            <motion.g
              animate={prefersReducedMotion ? {} : { opacity: typing ? [1, 0.3, 1] : 1 }}
              transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {[0,1,2,3,4,5,6,7,8].map(i => (
                <circle key={i} cx={192 + i * 14} cy={315} r="1.5" fill="var(--color-foreground)" fillOpacity="0.12" />
              ))}
            </motion.g>
          </motion.g>

          {/* ── Coffee ── */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, -1.5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          >
            <rect x="380" y="292" width="24" height="20" rx="5" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
            <path d="M404 298 Q414 298 414 304 Q414 310 404 310" fill="none" stroke="var(--color-border)" strokeWidth="1.2" />
            <motion.g
              animate={prefersReducedMotion ? {} : { opacity: [0.1, 0.25, 0.1], y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M390 290 Q392 280 390 270" fill="none" stroke="var(--color-foreground)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.12" />
            </motion.g>
            <motion.g
              animate={prefersReducedMotion ? {} : { opacity: [0.08, 0.2, 0.08], y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            >
              <path d="M398 290 Q400 278 398 266" fill="none" stroke="var(--color-foreground)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.08" />
            </motion.g>
          </motion.g>

          {/* ── Plant ── */}
          <motion.g
            animate={prefersReducedMotion ? {} : { rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '105px 310px' }}
          >
            <rect x="90" y="292" width="30" height="22" rx="5" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
            <path d="M105 292 Q96 272 88 258" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.35" />
            <path d="M105 292 Q114 270 122 255" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.3" />
            <path d="M105 292 Q105 274 105 260" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.25" />
            <circle cx="88" cy="256" r="7" fill="var(--color-accent)" fillOpacity="0.12" />
            <circle cx="122" cy="253" r="6" fill="var(--color-accent)" fillOpacity="0.1" />
            <circle cx="105" cy="258" r="5" fill="var(--color-accent)" fillOpacity="0.08" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Floating code tokens */}
      {[
        { label: '</>', x: '3%', y: '5%' },
        { label: '{ }', x: '90%', y: '85%' },
        { label: 'TS', x: '93%', y: '15%' },
        { label: '⚡', x: '1%', y: '92%' },
        { label: '⚛', x: '88%', y: '50%' },
      ].map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-[10px] font-mono text-muted-foreground/20"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: prefersReducedMotion ? 0 : [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1.5 + i * 0.2 },
            y: { duration: 3 + i * 0.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: i * 0.25 },
          }}
        >
          {el.label}
        </motion.div>
      ))}
    </div>
  );
}
