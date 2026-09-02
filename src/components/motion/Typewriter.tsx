'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function Typewriter({
  words,
  typingSpeed = 60,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className,
}: TypewriterProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[currentWordIndex];

  const tick = useCallback(() => {
    if (prefersReducedMotion) {
      setCurrentText(currentWord);
      return;
    }

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      if (currentText.length > 0) {
        setCurrentText(currentWord.slice(0, currentText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [currentText, isDeleting, currentWord, words.length, pauseDuration, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentText(currentWord);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed, prefersReducedMotion, currentWord]);

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle"
        animate={prefersReducedMotion ? {} : { opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </span>
  );
}
