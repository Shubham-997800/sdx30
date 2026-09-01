export const SITE = {
  name: "SHUBHAM.DEV",
  tagline: "Frontend Developer",
  description:
    "Frontend developer crafting premium digital experiences with clean code and intentional design.",
  url: "https://shubham.dev",
  email: "hello@shubham.dev",
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
} as const;

export const Z_INDEX = {
  base: 0,
  content: 10,
  sticky: 100,
  navbar: 200,
  overlay: 300,
  dropdown: 400,
  modal: 500,
  toast: 600,
  cursor: 9999,
} as const;

export const MOTION = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.35,
  emphasis: 0.6,
  cinematic: 0.85,
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
  springGentle: { type: "spring" as const, stiffness: 200, damping: 25 },
} as const;
