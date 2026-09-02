'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

export function AnimatedDeveloperCharacter() {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25, mass: 0.6 });

  const rotateX = useTransform(springY, [-25, 25], [2.5, -2.5]);
  const rotateY = useTransform(springX, [-25, 25], [-2.5, 2.5]);
  const translateX = useTransform(springX, [-25, 25], [-6, 6]);
  const translateY = useTransform(springY, [-25, 25], [-4, 4]);

  useEffect(() => {
    setIsMounted(true);
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      const clampedX = Math.max(-25, Math.min(25, deltaX * 25));
      const clampedY = Math.max(-25, Math.min(25, deltaY * 25));
      mouseX.set(clampedX);
      mouseY.set(clampedY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    containerRef.current?.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  const floatY = useMotionValue(0);
  const breatheScale = useMotionValue(1);
  const blinkState = useMotionValue(1);
  const headTilt = useMotionValue(0);

  useEffect(() => {
    if (prefersReducedMotion || !isMounted) return;

    let floatFrame: number;
    let breatheFrame: number;
    let blinkFrame: number;
    let headFrame: number;

    const startFloat = () => {
      let time = 0;
      const animate = () => {
        time += 0.006;
        floatY.set(Math.sin(time) * 4 + Math.sin(time * 0.7) * 1.5);
        floatFrame = requestAnimationFrame(animate);
      };
      floatFrame = requestAnimationFrame(animate);
    };

    const startBreathe = () => {
      let time = 0;
      const animate = () => {
        time += 0.004;
        breatheScale.set(1 + Math.sin(time) * 0.012);
        breatheFrame = requestAnimationFrame(animate);
      };
      breatheFrame = requestAnimationFrame(animate);
    };

    const startBlink = () => {
      let time = 0;
      let blinkDelay = 4000 + Math.random() * 2000;
      const animate = () => {
        time += 16;
        if (time >= blinkDelay) {
          blinkState.set(0);
          setTimeout(() => {
            blinkState.set(1);
            time = 0;
            blinkDelay = 4000 + Math.random() * 2000;
          }, 120);
        }
        blinkFrame = requestAnimationFrame(animate);
      };
      blinkFrame = requestAnimationFrame(animate);
    };

    const startHeadTilt = () => {
      let time = 0;
      const animate = () => {
        time += 0.002;
        headTilt.set(Math.sin(time) * 1.5 + Math.sin(time * 0.5) * 0.8);
        headFrame = requestAnimationFrame(animate);
      };
      headFrame = requestAnimationFrame(animate);
    };

    startFloat();
    startBreathe();
    startBlink();
    startHeadTilt();

    return () => {
      cancelAnimationFrame(floatFrame);
      cancelAnimationFrame(breatheFrame);
      cancelAnimationFrame(blinkFrame);
      cancelAnimationFrame(headFrame);
    };
  }, [floatY, breatheScale, blinkState, headTilt, prefersReducedMotion, isMounted]);

  if (!isMounted) {
    return (
      <div
        ref={containerRef}
        className="relative w-full h-full min-h-[380px] lg:min-h-[420px] flex items-center justify-center"
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-full min-h-[380px] lg:min-h-[420px] flex items-center justify-center"
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.0, delay: 0.5, ease: EASE }}
      style={{
        x: prefersReducedMotion ? 0 : translateX,
        y: prefersReducedMotion ? 0 : translateY,
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      aria-hidden="true"
    >
      <motion.div
        style={{
          y: prefersReducedMotion ? 0 : floatY,
          scale: prefersReducedMotion ? 1 : breatheScale,
          rotateZ: prefersReducedMotion ? 0 : headTilt,
        }}
        className="relative"
      >
        <svg
          viewBox="0 0 280 400"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full max-w-[340px] lg:max-w-[400px]"
          role="img"
          aria-hidden="true"
          style={{
            color: 'var(--foreground)',
            colorScheme: 'light dark',
          }}
        >
          <defs>
            <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--skin-light, #f4d4c1)" />
              <stop offset="100%" stopColor="var(--skin-dark, #e8c4a8)" />
            </linearGradient>
            <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--hair-dark, #121218)" />
              <stop offset="100%" stopColor="var(--hair-light, #1e1e2a)" />
            </linearGradient>
            <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--shirt-dark, #0a0a0f)" />
              <stop offset="100%" stopColor="var(--shirt-light, #16161d)" />
            </linearGradient>
            <linearGradient id="shirtHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--shirt-highlight-1, #1a1a24)" />
              <stop offset="50%" stopColor="var(--shirt-highlight-2, #0f0f15)" />
              <stop offset="100%" stopColor="var(--shirt-highlight-1, #1a1a24)" />
            </linearGradient>
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="oklch(from var(--accent) l c h / 0.6)" />
            </linearGradient>
            <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="var(--shadow-color, #000000)" floodOpacity="0.2" />
            </filter>
            <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <style>{`
            :root {
              --skin-light: #f4d4c1;
              --skin-dark: #e8c4a8;
              --hair-dark: #121218;
              --hair-light: #1e1e2a;
              --shirt-dark: #0a0a0f;
              --shirt-light: #16161d;
              --shirt-highlight-1: #1a1a24;
              --shirt-highlight-2: #0f0f15;
              --shadow-color: #000000;
              --eye-white: #fafafa;
              --eye-dark: #121218;
              --glasses-stroke: #121218;
              --headphone-dark: #0a0a0f;
              --headphone-mid: #1a1a24;
            }
            
            .dark {
              --skin-light: #d4a57a;
              --skin-dark: #c4956a;
              --hair-dark: #08080c;
              --hair-light: #121218;
              --shirt-dark: #040406;
              --shirt-light: #0a0a0f;
              --shirt-highlight-1: #121218;
              --shirt-highlight-2: #08080c;
              --shadow-color: #000000;
              --eye-white: #ffffff;
              --eye-dark: #08080c;
              --glasses-stroke: #08080c;
              --headphone-dark: #040406;
              --headphone-mid: #0f0f15;
            }
            
            .light {
              --skin-light: #f4d4c1;
              --skin-dark: #e8c4a8;
              --hair-dark: #2d2d3a;
              --hair-light: #3d3d4a;
              --shirt-dark: #1a1a2e;
              --shirt-light: #24243e;
              --shirt-highlight-1: #2d2d44;
              --shirt-highlight-2: #24243e;
              --shadow-color: #000000;
              --eye-white: #ffffff;
              --eye-dark: #1a1a2e;
              --glasses-stroke: #1a1a2e;
              --headphone-dark: #1a1a2e;
              --headphone-mid: #24243e;
            }
          `}</style>

          <g filter="url(#softShadow)">
            <g className="character-body">
              <path
                d="M140 360 L140 300"
                stroke="url(#shirtGradient)"
                strokeWidth="28"
                strokeLinecap="round"
                fill="none"
              />
              <ellipse
                cx="140"
                cy="300"
                rx="78"
                ry="48"
                fill="url(#shirtGradient)"
              />
              <ellipse
                cx="140"
                cy="300"
                rx="72"
                ry="42"
                fill="url(#shirtHighlight)"
                opacity="0.3"
              />

              <path
                d="M80 300 Q100 275 120 295 Q130 305 140 300"
                fill="none"
                stroke="url(#accentGradient)"
                strokeWidth="1"
                strokeDasharray="8 6"
                opacity="0.35"
              />
              <path
                d="M200 300 Q180 275 160 295 Q150 305 140 300"
                fill="none"
                stroke="url(#accentGradient)"
                strokeWidth="1"
                strokeDasharray="8 6"
                opacity="0.35"
              />

              <g className="arms">
                <path
                  d="M50 305 Q40 325 48 350"
                  stroke="url(#skinGradient)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M230 305 Q240 325 232 350"
                  stroke="url(#skinGradient)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  fill="none"
                />
                <ellipse cx="48" cy="350" rx="14" ry="11" fill="url(#skinGradient)" />
                <ellipse cx="232" cy="350" rx="14" ry="11" fill="url(#skinGradient)" />
                <ellipse cx="48" cy="350" rx="10" ry="8" fill="url(#shirtGradient)" />
                <ellipse cx="232" cy="350" rx="10" ry="8" fill="url(#shirtGradient)" />
              </g>

              <ellipse
                cx="140"
                cy="175"
                rx="68"
                ry="78"
                fill="url(#skinGradient)"
              />

              <path
                d="M72 175 Q72 135 102 135 Q118 135 118 162"
                fill="url(#hairGradient)"
              />
              <path
                d="M208 175 Q208 135 178 135 Q162 135 162 162"
                fill="url(#hairGradient)"
              />
              <path
                d="M102 135 Q140 105 178 135"
                fill="url(#hairGradient)"
              />
              <path
                d="M92 162 Q115 148 140 153 Q165 148 188 162"
                fill="url(#hairGradient)"
                opacity="0.95"
              />
              <path
                d="M85 150 Q95 140 115 145 Q135 148 140 153"
                fill="url(#hairGradient)"
                opacity="0.7"
              />
              <path
                d="M195 150 Q185 140 165 145 Q145 148 140 153"
                fill="url(#hairGradient)"
                opacity="0.7"
              />

              <ellipse
                cx="110"
                cy="162"
                rx="17"
                ry="13"
                fill="var(--eye-white)"
              />
              <ellipse
                cx="170"
                cy="162"
                rx="17"
                ry="13"
                fill="var(--eye-white)"
              />

              <g className="eyes" style={{ transformOrigin: '140px 162px' }}>
                <motion.ellipse
                  cx="110"
                  cy="162"
                  rx="8"
                  ry={blinkState}
                  fill="var(--eye-dark)"
                  style={{ scaleY: blinkState }}
                />
                <motion.ellipse
                  cx="170"
                  cy="162"
                  rx="8"
                  ry={blinkState}
                  fill="var(--eye-dark)"
                  style={{ scaleY: blinkState }}
                />
                <ellipse cx="108" cy="158" rx="2.5" ry="2.5" fill="#ffffff" opacity="0.9" />
                <ellipse cx="168" cy="158" rx="2.5" ry="2.5" fill="#ffffff" opacity="0.9" />
                <ellipse cx="112" cy="165" rx="1.5" ry="1.5" fill="#ffffff" opacity="0.5" />
                <ellipse cx="172" cy="165" rx="1.5" ry="1.5" fill="#ffffff" opacity="0.5" />
              </g>

              <path
                d="M118 192 Q140 202 162 192"
                fill="none"
                stroke="var(--eye-dark)"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
              />

              <g className="glasses" filter="url(#subtleGlow)">
                <ellipse
                  cx="110"
                  cy="162"
                  rx="23"
                  ry="17"
                  fill="none"
                  stroke="var(--glasses-stroke)"
                  strokeWidth="2.8"
                  opacity="0.65"
                />
                <ellipse
                  cx="170"
                  cy="162"
                  rx="23"
                  ry="17"
                  fill="none"
                  stroke="var(--glasses-stroke)"
                  strokeWidth="2.8"
                  opacity="0.65"
                />
                <path
                  d="M133 162 L147 162"
                  stroke="var(--glasses-stroke)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  opacity="0.65"
                />
                <path
                  d="M87 162 L72 157"
                  stroke="var(--glasses-stroke)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  opacity="0.65"
                />
                <path
                  d="M193 162 L208 157"
                  stroke="var(--glasses-stroke)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              </g>

              <g className="headphones">
                <path
                  d="M48 115 Q32 115 32 155 Q32 185 48 185"
                  fill="none"
                  stroke="var(--headphone-dark)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <path
                  d="M232 115 Q248 115 248 155 Q248 185 232 185"
                  fill="none"
                  stroke="var(--headphone-dark)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <ellipse cx="48" cy="150" rx="20" ry="18" fill="var(--headphone-dark)" />
                <ellipse cx="232" cy="150" rx="20" ry="18" fill="var(--headphone-dark)" />
                <ellipse cx="48" cy="150" rx="14" ry="12" fill="var(--headphone-mid)" />
                <ellipse cx="232" cy="150" rx="14" ry="12" fill="var(--headphone-mid)" />
                <ellipse cx="48" cy="150" rx="6" ry="5" fill="url(#accentGradient)" opacity="0.25" />
                <ellipse cx="232" cy="150" rx="6" ry="5" fill="url(#accentGradient)" opacity="0.25" />
              </g>

              <g className="neck" style={{ transformOrigin: '140px 253px' }}>
                <path
                  d="M122 253 L120 270"
                  stroke="url(#skinGradient)"
                  strokeWidth="16"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M158 253 L160 270"
                  stroke="url(#skinGradient)"
                  strokeWidth="16"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </g>

            <g className="ambient-elements" style={{ opacity: 0.08 }}>
              <g className="code-elements" fill="var(--accent)">
                <text x="25" y="95" fontFamily="monospace" fontSize="22" fontWeight="600">{'{'}</text>
                <text x="25" y="125" fontFamily="monospace" fontSize="22" fontWeight="600">{'}'}</text>
                <text x="235" y="85" fontFamily="monospace" fontSize="18" fontWeight="500">const</text>
                <text x="230" y="205" fontFamily="monospace" fontSize="20" fontWeight="600">{'/>'}</text>
                <circle cx="50" cy="65" r="2.5">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="240" cy="75" r="2">
                  <animate
                    attributeName="opacity"
                    values="0.2;0.6;0.2"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="40" cy="230" r="2">
                  <animate
                    attributeName="opacity"
                    values="0.2;0.6;0.2"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="248" cy="260" r="2.5">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              <g className="grid-accent" stroke="var(--accent)" strokeWidth="0.6" opacity="0.08">
                <line x1="15" y1="340" x2="75" y2="340" strokeDasharray="6 6" />
                <line x1="205" y1="340" x2="265" y2="340" strokeDasharray="6 6" />
                <line x1="45" y1="315" x2="45" y2="365" strokeDasharray="6 6" />
                <line x1="235" y1="315" x2="235" y2="365" strokeDasharray="6 6" />
                <rect x="130" y="320" width="20" height="20" fill="none" strokeDasharray="4 4" />
              </g>
            </g>
          </g>
        </svg>

        <motion.div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[220px] h-1.5 bg-gradient-to-r from-transparent via-accent/15 to-transparent rounded-full blur-sm"
          initial={prefersReducedMotion ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.4 }}
          animate={prefersReducedMotion ? {} : { scaleX: [1, 0.92, 1], opacity: [0.25, 0.1, 0.25] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ filter: 'blur(10px)' }}
        />
      </motion.div>
    </motion.div>
  );
}