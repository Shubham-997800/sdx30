'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Floating element config
const floatingElements = [
  { label: 'React', x: '15%', y: '20%', delay: 0, layer: 1 },
  { label: 'TypeScript', x: '75%', y: '15%', delay: 0.2, layer: 2 },
  { label: '{ }', x: '85%', y: '65%', delay: 0.4, layer: 1 },
  { label: '01', x: '10%', y: '75%', delay: 0.6, layer: 3 },
  { label: '/ div', x: '60%', y: '80%', delay: 0.8, layer: 2 },
];

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for parallax
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform mouse to parallax values for each layer
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-3, 3]);
  const layer2X = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);
  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || isTouchDevice) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [prefersReducedMotion, isTouchDevice, mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const layerMap = {
    1: { x: layer1X, y: layer1Y },
    2: { x: layer2X, y: layer2Y },
    3: { x: layer3X, y: layer3Y },
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full max-w-lg"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Grid background */}
      <div className="absolute inset-0 rounded-2xl border border-border/50 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03] dark:opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Main geometric composition */}
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Layer 1 — Large rectangle */}
        <motion.div
          className="absolute top-[10%] left-[8%] h-[45%] w-[55%] rounded-xl border border-border bg-gradient-to-br from-accent/5 to-transparent"
          style={!prefersReducedMotion && !isTouchDevice ? { x: layer1X, y: layer1Y } : {}}
        />

        {/* Layer 2 — Square */}
        <motion.div
          className="absolute top-[20%] right-[10%] h-[35%] w-[35%] rounded-lg border border-border/60 bg-gradient-to-bl from-accent/8 to-transparent"
          style={!prefersReducedMotion && !isTouchDevice ? { x: layer2X, y: layer2Y } : {}}
        />

        {/* Layer 3 — Accent line */}
        <motion.div
          className="absolute bottom-[25%] left-[15%] h-px w-[70%] bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          style={!prefersReducedMotion && !isTouchDevice ? { x: layer3X, y: layer3Y } : {}}
        />

        {/* Center monogram */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <span className="text-[5rem] font-bold leading-none tracking-tighter text-foreground/[0.04] dark:text-foreground/[0.06] md:text-[7rem]">
              SD
            </span>
            <div className="absolute -top-1 -right-1 size-2 rounded-full bg-accent" />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      {floatingElements.map((el, i) => {
        const layerKey = el.layer as 1 | 2 | 3;
        const { x: parallaxX, y: parallaxY } = layerMap[layerKey];

        return (
          <motion.div
            key={i}
            className="absolute text-metadata text-muted-foreground/40"
            style={{
              left: el.x,
              top: el.y,
              ...(prefersReducedMotion || isTouchDevice ? {} : { x: parallaxX, y: parallaxY }),
            }}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{
              opacity: 1,
              y: prefersReducedMotion ? 0 : [0, -4, 0],
            }}
            transition={{
              opacity: { duration: 0.4, delay: 0.8 + el.delay },
              y: {
                duration: 4 + i * 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: i * 0.3,
              },
            }}
          >
            {el.label}
          </motion.div>
        );
      })}

      {/* Corner coordinates */}
      <motion.div
        className="absolute top-3 left-3 text-[10px] font-mono text-muted-foreground/30"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        0,0
      </motion.div>
      <motion.div
        className="absolute bottom-3 right-3 text-[10px] font-mono text-muted-foreground/30"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.3 }}
      >
        1,1
      </motion.div>

      {/* Accent dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      />
    </div>
  );
}
