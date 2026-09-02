'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PageLoaderProps {
  isLoading: boolean;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!';

export function PageLoader({ isLoading }: PageLoaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState('SHUBHAM.DEV');
  const [showBurst, setShowBurst] = useState(false);

  // Scramble effect on logo
  useEffect(() => {
    if (prefersReducedMotion || !isLoading) return;

    const target = 'SHUBHAM.DEV';
    let iteration = 0;

    const timer = setInterval(() => {
      setDisplay(
        target
          .split('')
          .map((char, i) => {
            if (i < iteration) return target[i];
            if (char === '.') return '.';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(''),
      );

      iteration += 1 / 2;

      if (iteration > target.length) {
        clearInterval(timer);
        setDisplay(target);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [isLoading, prefersReducedMotion]);

  // Burst on exit
  useEffect(() => {
    if (!isLoading && !prefersReducedMotion) {
      setShowBurst(true);
      setTimeout(() => setShowBurst(false), 600);
    }
  }, [isLoading, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
          role="status"
          aria-live="polite"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Scramble text */}
            <span className="text-body font-bold tracking-tight text-foreground font-heading">
              {display.split('.').map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && <span className="text-accent">.</span>}
                </span>
              ))}
            </span>

            {/* Progress bar */}
            <div className="h-px w-12 bg-accent/40 overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Completion burst */}
      {showBurst && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent"
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 8) * 60,
                y: Math.sin((i * Math.PI * 2) / 8) * 60,
                scale: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
