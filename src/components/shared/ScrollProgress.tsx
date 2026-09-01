"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[550] h-0.5 bg-accent origin-left"
      style={{ scaleX: progress }}
    />
  );
}
