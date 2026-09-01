/**
 * Global Motion Configuration
 *
 * Centralized motion tokens for the portfolio.
 * All components should reference these values
 * for consistent animation behavior.
 */

export const motionConfig = {
  // Easing curves
  ease: {
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.65, 0, 0.35, 1] as const,
    spring: { stiffness: 300, damping: 20, mass: 0.5 },
    springSlow: { stiffness: 150, damping: 20, mass: 0.8 },
  },

  // Durations (seconds)
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.35,
    medium: 0.5,
    slow: 0.7,
    cinematic: 1.0,
  },

  // Stagger delays
  stagger: {
    fast: 0.05,
    normal: 0.08,
    slow: 0.12,
    section: 0.15,
  },

  // Distances
  distance: {
    small: 12,
    medium: 20,
    large: 32,
  },
} as const;
