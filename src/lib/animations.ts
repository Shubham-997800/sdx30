/* ═══════════════════════════════════════════════
   GLOBAL MOTION LANGUAGE
   ─ One system, one hierarchy, one feel.
   ═══════════════════════════════════════════════ */

/** Core easing — deceleration curve for most entrances */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** Smooth in-out for symmetric transitions */
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

/** Spring configs — for interactive/physical motion */
export const SPRING = { stiffness: 300, damping: 20, mass: 0.5 } as const;
export const SPRING_SLOW = { stiffness: 150, damping: 20, mass: 0.8 } as const;
export const SPRING_SNAPPY = { stiffness: 400, damping: 28, mass: 0.5 } as const;

/** Duration tokens — every animation uses one of these */
export const DURATION = {
  instant: 0.12,
  fast: 0.2,
  normal: 0.35,
  medium: 0.45,
  slow: 0.6,
} as const;

/** Stagger tokens — for grouped entrances */
export const STAGGER = {
  fast: 0.04,
  normal: 0.06,
  slow: 0.08,
} as const;

/** Distance tokens — translate values, kept tight */
export const DISTANCE = {
  small: 8,
  medium: 14,
  large: 24,
} as const;
