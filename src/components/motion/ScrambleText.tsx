'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrambleTextProps {
  text: string;
  speed?: number;
  pauseDuration?: number;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!';

export function ScrambleText({
  text,
  speed = 40,
  pauseDuration = 2500,
  delay = 0,
  className,
  as: Tag = 'span',
}: ScrambleTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState('');
  const [phase, setPhase] = useState<'idle' | 'scrambling' | 'paused'>('idle');

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(text);
      return;
    }
    const t = setTimeout(() => setPhase('scrambling'), delay);
    return () => clearTimeout(t);
  }, [delay, prefersReducedMotion, text]);

  // Scrambling phase
  useEffect(() => {
    if (phase !== 'scrambling' || prefersReducedMotion) return;

    let iteration = 0;
    const timer = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (i < iteration) return text[i];
            if (char === ' ') return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(''),
      );

      iteration += 1 / 3;

      if (iteration > text.length) {
        clearInterval(timer);
        setDisplay(text);
        setPhase('paused');
      }
    }, speed);

    return () => clearInterval(timer);
  }, [phase, text, speed, prefersReducedMotion]);

  // Paused phase → restart
  useEffect(() => {
    if (phase !== 'paused' || prefersReducedMotion) return;
    const t = setTimeout(() => setPhase('scrambling'), pauseDuration);
    return () => clearTimeout(t);
  }, [phase, pauseDuration, prefersReducedMotion]);

  return (
    <Tag className={className}>
      {display}
      {!prefersReducedMotion && phase === 'scrambling' && (
        <motion.span
          className="inline-block w-[3px] h-[0.85em] bg-accent ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </Tag>
  );
}
