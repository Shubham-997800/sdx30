'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TypeTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  showCursor?: boolean;
}

export function TypeText({
  text,
  speed = 60,
  delay = 0,
  className,
  as: Tag = 'span',
  showCursor = true,
}: TypeTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentText(text);
      setIsComplete(true);
      return;
    }

    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay, prefersReducedMotion, text]);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;

    if (currentText.length < text.length) {
      const timer = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentText, text, speed, hasStarted, prefersReducedMotion]);

  return (
    <Tag className={className}>
      {currentText}
      {showCursor && !isComplete && (
        <motion.span
          className="inline-block w-[3px] h-[0.9em] bg-accent ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      )}
    </Tag>
  );
}
