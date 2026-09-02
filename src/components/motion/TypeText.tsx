'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TypeTextProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  delay?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function TypeText({
  text,
  speed = 60,
  deleteSpeed = 40,
  pauseDuration = 2000,
  delay = 0,
  className,
  as: Tag = 'span',
}: TypeTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentText(text);
      return;
    }
    const timer = setTimeout(() => setHasStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay, prefersReducedMotion, text]);

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (currentText.length < text.length) {
        setCurrentText(text.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, -1));
      } else {
        setIsDeleting(false);
      }
    }
  }, [currentText, isDeleting, text, pauseDuration]);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;
    const speed_ = isDeleting ? deleteSpeed : speed;
    const timer = setTimeout(tick, speed_);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, speed, deleteSpeed, hasStarted, prefersReducedMotion]);

  return (
    <Tag className={className}>
      {currentText}
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
    </Tag>
  );
}
