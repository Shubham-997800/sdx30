"use client";

import { useRef, useEffect, useCallback } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const barRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!barRef.current) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    barRef.current.style.transform = `scaleX(${progress})`;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 z-[550] h-0.5 bg-accent origin-left will-change-transform"
    />
  );
}
