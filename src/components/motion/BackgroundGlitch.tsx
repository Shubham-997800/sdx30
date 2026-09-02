'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface BackgroundGlitchProps {
  text: string;
  className?: string;
}

export function BackgroundGlitch({ text, className }: BackgroundGlitchProps) {
  const prefersReducedMotion = useReducedMotion();
  const [layers, setLayers] = useState<{ x: number; y: number; clipTop: number; clipBot: number; visible: boolean }[]>([
    { x: 0, y: 0, clipTop: 0, clipBot: 85, visible: false },
    { x: 0, y: 0, clipTop: 85, clipBot: 100, visible: false },
  ]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const glitch = () => {
      const newLayers = [
        {
          x: (Math.random() - 0.5) * 6,
          y: (Math.random() - 0.5) * 3,
          clipTop: Math.random() * 60,
          clipBot: 100 - Math.random() * 40,
          visible: Math.random() > 0.5,
        },
        {
          x: (Math.random() - 0.5) * 6,
          y: (Math.random() - 0.5) * 3,
          clipTop: Math.random() * 50,
          clipBot: 100 - Math.random() * 50,
          visible: Math.random() > 0.4,
        },
      ];
      setLayers(newLayers);

      setTimeout(() => {
        setLayers([
          { x: 0, y: 0, clipTop: 0, clipBot: 85, visible: false },
          { x: 0, y: 0, clipTop: 85, clipBot: 100, visible: false },
        ]);
      }, 120);
    };

    const interval = setInterval(glitch, 4000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <span className={className}>
      {/* Base text */}
      <span>{text}</span>

      {/* Glitch layer 1 — accent */}
      <span
        className="absolute inset-0 pointer-events-none transition-none"
        style={{
          transform: `translate(${layers[0].x}px, ${layers[0].y}px)`,
          clipPath: `inset(${layers[0].clipTop}% 0 ${100 - layers[0].clipBot}% 0)`,
          opacity: layers[0].visible ? 0.7 : 0,
          color: 'var(--accent)',
        }}
        aria-hidden
      >
        {text}
      </span>

      {/* Glitch layer 2 — accent muted */}
      <span
        className="absolute inset-0 pointer-events-none transition-none"
        style={{
          transform: `translate(${layers[1].x}px, ${layers[1].y}px)`,
          clipPath: `inset(${layers[1].clipTop}% 0 ${100 - layers[1].clipBot}% 0)`,
          opacity: layers[1].visible ? 0.4 : 0,
          color: 'var(--accent)',
          filter: 'blur(0.5px)',
        }}
        aria-hidden
      >
        {text}
      </span>
    </span>
  );
}
