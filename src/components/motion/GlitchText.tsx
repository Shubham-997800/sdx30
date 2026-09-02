'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface GlitchTextProps {
  text: string;
  speed?: number;
  pauseDuration?: number;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

export function GlitchText({
  text,
  speed = 35,
  pauseDuration = 2000,
  delay = 0,
  className,
  as: Tag = 'span',
}: GlitchTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState('');
  const [phase, setPhase] = useState<'idle' | 'typing' | 'glitching' | 'paused'>('idle');

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(text);
      return;
    }
    const t = setTimeout(() => setPhase('typing'), delay);
    return () => clearTimeout(t);
  }, [delay, prefersReducedMotion, text]);

  // Typing phase
  useEffect(() => {
    if (phase !== 'typing' || prefersReducedMotion) return;

    let iteration = 0;
    const timer = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (i < iteration) return text[i];
            if (char === ' ') return ' ';
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join(''),
      );

      iteration += 1 / 2;

      if (iteration > text.length) {
        clearInterval(timer);
        setDisplay(text);
        setPhase('glitching');
      }
    }, speed);

    return () => clearInterval(timer);
  }, [phase, text, speed, prefersReducedMotion]);

  // Glitching phase
  useEffect(() => {
    if (phase !== 'glitching' || prefersReducedMotion) return;

    let count = 0;
    const timer = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (Math.random() > 0.88) {
              return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            }
            return text[i];
          })
          .join(''),
      );
      count++;
      if (count > 6) {
        clearInterval(timer);
        setDisplay(text);
        setPhase('paused');
      }
    }, 60);

    return () => clearInterval(timer);
  }, [phase, text, prefersReducedMotion]);

  // Paused phase → restart
  useEffect(() => {
    if (phase !== 'paused' || prefersReducedMotion) return;
    const t = setTimeout(() => setPhase('typing'), pauseDuration);
    return () => clearTimeout(t);
  }, [phase, pauseDuration, prefersReducedMotion]);

  return (
    <Tag className={className}>
      <span className="relative">
        {display}
        {!prefersReducedMotion && phase !== 'idle' && (
          <>
            <motion.span
              className="absolute top-0 left-0 text-accent/70"
              animate={
                phase === 'glitching'
                  ? { x: [0, -2, 2, -1, 0], opacity: [1, 0.8, 1, 0.9, 1] }
                  : {}
              }
              transition={{ duration: 0.15, repeat: phase === 'glitching' ? Infinity : 0 }}
              aria-hidden
            >
              {display}
            </motion.span>
            <motion.span
              className="absolute top-0 left-0 text-accent/30"
              animate={
                phase === 'glitching'
                  ? { x: [0, 2, -2, 1, 0], opacity: [0.5, 0.7, 0.5, 0.6, 0.5] }
                  : {}
              }
              transition={{ duration: 0.15, repeat: phase === 'glitching' ? Infinity : 0 }}
              aria-hidden
            >
              {display}
            </motion.span>
          </>
        )}
      </span>
    </Tag>
  );
}
