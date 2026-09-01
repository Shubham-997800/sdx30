"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 flex size-10 items-center justify-center rounded-lg bg-background border border-border text-foreground shadow-lg hover:bg-accent hover:text-accent-foreground transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
