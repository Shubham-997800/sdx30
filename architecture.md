# Portfolio Technical Architecture

> The technical implementation blueprint for the portfolio.
> `theme.md` → visual rules. `design.md` → UI/UX rules. `content.md` → content rules. `architecture.md` → technical rules.

---

## 1. PROJECT OVERVIEW

| Aspect | Decision |
|---|---|
| Application type | Single-page application (SPA) with optional route for project case studies |
| Frontend architecture | React 19 component-driven, section-based |
| Rendering strategy | Client-side rendering (CSR) — no SSR/SSG required for a portfolio |
| Build tool | Vite 8 |
| Language | TypeScript 6 (strict mode) |
| Styling approach | Tailwind CSS v4 + CSS custom properties + cn() utility |
| Component system | shadcn/ui (Radix UI primitives) + custom components |
| Animation system | Motion (primary, sole animation library) |
| Data strategy | Static data files + TanStack Query for GitHub API |
| Deployment strategy | Static hosting (Vercel or equivalent) |

### Current Dependency Stack

```
Production:
  react, react-dom (19)
  tailwindcss, @tailwindcss/vite (4)
  shadcn, @base-ui/react, tw-animate-css
  motion
  lucide-react
  react-hook-form, @hookform/resolvers, zod
  @tanstack/react-query, @tanstack/react-table
  recharts
  cmdk
  next-themes
  clsx, tailwind-merge, class-variance-authority
  sonner
  @fontsource-variable/geist

Dev:
  typescript (~6.0)
  vite (8), @vitejs/plugin-react (6)
  eslint (10), typescript-eslint, eslint-config-prettier
  prettier
```

---

## 2. ARCHITECTURAL PRINCIPLES

### Core Principles

1. **Component-driven architecture** — Everything is a component. UI is composed, not monolithic.
2. **Reusability** — Extract once, use everywhere. No duplicate UI.
3. **Separation of concerns** — Components render, hooks manage logic, data files hold content, services handle API calls.
4. **Strong TypeScript typing** — `strict: true`. No `any`. Interfaces for all data structures.
5. **Accessibility-first** — Semantic HTML, keyboard navigation, ARIA when needed. Not an afterthought.
6. **Performance-conscious** — Lazy load below-fold. Use transform/opacity for animation. Avoid layout shift.
7. **Data-driven content** — Content lives in `data/` files, not scattered across JSX.
8. **Minimal dependencies** — Every package must earn its place. No redundant libraries.
9. **Progressive enhancement** — Core content works without JavaScript. Motion enhances, not replaces.
10. **Responsive by default** — Mobile-first. Every component must work at every breakpoint.
11. **Motion with purpose** — Every animation serves hierarchy, feedback, or storytelling.

### What to Avoid

- Monolithic components (one 500-line file per section)
- Business logic inside presentation components
- Hardcoded repeated content across sections
- Unnecessary global state (Redux/Zustand for a portfolio)
- Random dependency installation
- `any` types
- Inline magic numbers
- Circular imports
- Overengineering

---

## 3. FOLDER STRUCTURE

```
src/
├── app/                          # App entry, providers, root layout
│   ├── providers.tsx             # ThemeProvider, QueryClientProvider, Toaster
│   └── App.tsx                   # Root component — composes all sections
│
├── components/
│   ├── ui/                       # shadcn/ui primitives (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   │
│   ├── layout/                   # Structural components
│   │   ├── Container.tsx         # Max-width wrapper with responsive padding
│   │   ├── Section.tsx           # Section wrapper with spacing
│   │   └── Grid.tsx              # 12-column Swiss grid
│   │
│   ├── navigation/               # Navbar, mobile menu
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── NavLink.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── CommandMenu.tsx       # cmdk-based command palette
│   │
│   ├── motion/                   # Animation primitives
│   │   ├── Reveal.tsx            # Scroll-triggered fade up
│   │   ├── FadeIn.tsx            # Opacity entrance
│   │   ├── TextReveal.tsx        # Character/word stagger
│   │   ├── Stagger.tsx           # Container with staggered children
│   │   ├── Parallax.tsx          # Scroll-driven Y translation
│   │   ├── Magnetic.tsx          # Cursor magnetic interaction
│   │   ├── ImageReveal.tsx       # Clip-path image entrance
│   │   └── Marquee.tsx           # Infinite horizontal scroll
│   │
│   ├── project/                  # Project-specific components
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectVisual.tsx
│   │   ├── ProjectMeta.tsx
│   │   └── ProjectNumber.tsx
│   │
│   ├── github/                   # GitHub section components
│   │   ├── ContributionGraph.tsx
│   │   ├── GitHubStats.tsx
│   │   ├── PinnedRepos.tsx
│   │   └── LanguageBreakdown.tsx
│   │
│   └── shared/                   # Cross-section shared components
│       ├── SectionHeading.tsx    # Consistent section title layout
│       ├── Cursor.tsx            # Custom cursor
│       ├── ScrollProgress.tsx    # Top scroll progress bar
│       └── BackToTop.tsx
│
├── sections/                     # Page sections (one folder per section)
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   ├── HeroContent.tsx
│   │   ├── HeroVisual.tsx
│   │   └── HeroActions.tsx
│   │
│   ├── marquee/
│   │   └── MarqueeSection.tsx
│   │
│   ├── proof/
│   │   ├── ProofSection.tsx
│   │   └── ProofCard.tsx
│   │
│   ├── work/
│   │   ├── WorkSection.tsx
│   │   └── ProjectShowcase.tsx
│   │
│   ├── engineering/
│   │   ├── EngineeringSection.tsx
│   │   ├── CategoryCard.tsx
│   │   └── SkillItem.tsx
│   │
│   ├── stack/
│   │   ├── StackSection.tsx
│   │   ├── TechGroup.tsx
│   │   └── TechCard.tsx
│   │
│   ├── journey/
│   │   ├── JourneySection.tsx
│   │   ├── Timeline.tsx
│   │   └── TimelineItem.tsx
│   │
│   ├── about/
│   │   ├── AboutSection.tsx
│   │   ├── AboutText.tsx
│   │   └── CodeCard.tsx
│   │
│   ├── learning/
│   │   ├── LearningSection.tsx
│   │   └── TopicCard.tsx
│   │
│   ├── github/
│   │   └── GitHubSection.tsx
│   │
│   ├── contact/
│   │   ├── ContactSection.tsx
│   │   └── ContactForm.tsx
│   │
│   └── footer/
│       └── FooterSection.tsx
│
├── data/                         # Static content (TypeScript)
│   ├── projects.ts               # Project metadata, descriptions, links
│   ├── journey.ts                # Hackathon timeline entries
│   ├── skills.ts                 # Frontend engineering categories
│   ├── stack.ts                  # Technology inventory
│   ├── learning.ts               # Currently learning topics
│   ├── navigation.ts             # Nav links, social links
│   ├── site.ts                   # Site metadata, SEO, personal info
│   └── proof.ts                  # Quick proof bento cards
│
├── hooks/                        # Custom React hooks
│   ├── useGitHubData.ts          # TanStack Query wrapper for GitHub API
│   ├── useScrollProgress.ts      # Scroll position tracking
│   ├── useActiveSection.ts       # Intersection Observer for nav highlighting
│   ├── useMediaQuery.ts          # Responsive breakpoint detection
│   ├── useReducedMotion.ts       # prefers-reduced-motion detection
│   └── useCommandMenu.ts         # Command palette state
│
├── lib/                          # Utilities, services, config
│   ├── utils.ts                  # cn() utility (shadcn/ui)
│   ├── github.ts                 # GitHub API service
│   └── constants.ts              # App-wide constants
│
├── services/                     # API interaction layer
│   └── github.service.ts         # GitHub API calls
│
├── types/                        # Shared TypeScript types
│   ├── project.ts
│   ├── journey.ts
│   ├── skill.ts
│   ├── technology.ts
│   ├── github.ts
│   └── navigation.ts
│
├── config/                       # App configuration
│   └── site.ts                   # Site-wide config (name, url, etc.)
│
├── styles/
│   └── index.css                 # Tailwind v4 imports, design tokens, global styles
│
├── App.tsx                       # Root component
└── main.tsx                      # Entry point
```

### Folder Responsibilities

| Folder | Belongs | Does NOT Belong |
|---|---|---|
| `components/ui/` | shadcn/ui primitives (auto-managed) | Custom components |
| `components/layout/` | Structural wrappers (Container, Grid) | Content-specific layouts |
| `components/navigation/` | Navbar, mobile menu, command palette | Section navigation |
| `components/motion/` | Reusable animation primitives | Section-specific animations |
| `components/project/` | Project card, visual, meta | Project case study pages |
| `components/github/` | GitHub-specific visualizations | Generic charts |
| `components/shared/` | Used in 3+ sections | Single-use components |
| `sections/` | One folder per page section | UI primitives, utilities |
| `data/` | Static content as TypeScript objects | API responses, runtime state |
| `hooks/` | Reusable stateful logic | Component-specific handlers |
| `lib/` | Pure utility functions, constants | React components |
| `services/` | External API interaction | UI components |
| `types/` | Shared TypeScript interfaces | Component props (define locally) |
| `config/` | App-wide configuration | Per-section config |

---

## 4. COMPONENT ARCHITECTURE

### Component Layers

```
Layer 1: UI Primitives (shadcn/ui)
    ↓
Layer 2: Layout Components (Container, Section, Grid)
    ↓
Layer 3: Motion Primitives (Reveal, FadeIn, Stagger)
    ↓
Layer 4: Shared Components (SectionHeading, Cursor)
    ↓
Layer 5: Feature Components (ProjectCard, TechCard, TimelineItem)
    ↓
Layer 6: Sections (HeroSection, WorkSection, etc.)
    ↓
Layer 7: App (App.tsx — composes sections)
```

### Layer Responsibilities

| Layer | Responsibility | Examples |
|---|---|---|
| **UI Primitives** | Atomic, unstyled or base-styled elements | Button, Card, Input, Badge |
| **Layout** | Structural wrappers, spacing, grid | Container, Section, Grid |
| **Motion Primitives** | Reusable animation behaviors | Reveal, FadeIn, Stagger, Parallax |
| **Shared** | Used across multiple sections | SectionHeading, Cursor, BackToTop |
| **Feature** | Domain-specific, reusable within its feature | ProjectCard, TechCard, TimelineItem |
| **Sections** | Full page sections, compose lower layers | HeroSection, WorkSection |
| **App** | Root composition | App.tsx |

### Rules

- Lower layers must NOT depend on higher layers
- UI Primitives know nothing about the portfolio
- Sections can depend on Feature, Motion, Shared, Layout, and UI
- App depends only on Sections

---

## 5. COMPONENT BOUNDARIES

### When to Create a Component

| Trigger | Action |
|---|---|
| UI repeated in 2+ places | Extract to component |
| Has meaningful independent behavior | Extract to component |
| Complex enough to warrant isolation (>50 lines) | Extract to component |
| Used in multiple sections | Move to `components/shared/` |

### When to Create a Hook

| Trigger | Action |
|---|---|
| Stateful logic reused across components | Extract to hook |
| Side effect management (IntersectionObserver, etc.) | Extract to hook |
| Complex state logic in a component | Extract to hook |

### When to Create a Utility

| Trigger | Action |
|---|---|
| Pure function, no React dependency | Extract to `lib/` |
| Data transformation | Extract to `lib/` |
| Constant value used in multiple places | Extract to `lib/constants.ts` |

### When to Create a Data File

| Trigger | Action |
|---|---|
| Static content displayed in UI | Move to `data/` |
| Content that might change without code changes | Move to `data/` |
| Structured list of items | Move to `data/` |

### When to Create a Service

| Trigger | Action |
|---|---|
| External API call | Create in `services/` |
| Data fetching logic | Create in `services/` |

### When NOT to Split

- Don't extract a `<p>` tag into a component just because it exists
- Don't extract a single-use styled element that has no logic
- Don't over-abstract — some inline JSX is fine
- Don't create a component for every small visual variation

---

## 6. PAGE ARCHITECTURE

### Route Structure

| Route | Content | Purpose |
|---|---|---|
| `/` | Full single-page portfolio | Primary experience |
| `/work/:slug` | Individual project case study | Project detail (optional, future) |

### Section Anchors

The single page uses hash-based anchors for navigation:

| Section | Anchor |
|---|---|
| Hero | `#hero` (implicit, top) |
| Selected Work | `#work` |
| About | `#about` |
| Tech Stack | `#stack` |
| Hackathon Journey | `#journey` |
| Contact | `#contact` |

### Navigation Behavior

- Clicking nav link scrolls to section anchor
- URL updates with hash (browser history)
- Deep links work (e.g., `portfolio.com/#work`)
- Back/forward browser buttons navigate between scroll positions

### Project Case Study Routes (Future)

If project pages are introduced:

| Route | Content |
|---|---|
| `/work/flowsync-ai` | FlowSync AI case study |
| `/work/workos` | WorkOS case study |
| `/work/assetrix` | Assetrix case study |
| `/work/campus360` | CAMPUS360 case study |

Implementation:
- React Router with lazy-loaded routes
- Back navigation returns to `/#work`
- 404 redirect to `/`

### 404 Strategy

- If no router is used (single-page only): not applicable
- If React Router is introduced: redirect all unknown routes to `/`

---

## 7. SECTION ARCHITECTURE

Each design section maps to a technical component tree:

### Hero

```
HeroSection
├── HeroContent
│   ├── StatusIndicator (availability badge)
│   ├── HeroName (SHUBHAM DANGI)
│   ├── HeroRole (FRONTEND DEVELOPER)
│   ├── HeroDescription (supporting text)
│   └── HeroActions (CTAs + social links)
└── HeroVisual (geometric composition)
```

### Marquee

```
MarqueeSection
└── Marquee (animation primitive)
    └── MarqueeContent (repeated text)
```

### Quick Proof

```
ProofSection
├── SectionHeading
└── ProofGrid (bento layout)
    ├── ProofCard (Odoo — featured)
    ├── ProofCard (Frontend Engineering)
    ├── ProofCard (React 19)
    ├── ProofCard (Product Builder)
    └── ProofCard (Modern Stack)
```

### Selected Work

```
WorkSection
├── SectionHeading
└── ProjectList
    └── ProjectShowcase (per project)
        ├── ProjectNumber
        ├── ProjectVisual
        ├── ProjectMeta
        │   ├── ProjectName
        │   ├── ProjectDescription
        │   └── ProjectTags
        └── ProjectCTA
```

### Frontend Engineering

```
EngineeringSection
├── SectionHeading
└── CategoryGrid
    └── CategoryCard (per category)
        ├── CategoryLabel
        └── SkillList
            └── SkillItem (per skill)
```

### Tech Stack

```
StackSection
├── SectionHeading
└── TechGrid
    ├── TechGroup (Frontend)
    │   └── TechCard (per technology)
    ├── TechGroup (Backend)
    │   └── TechCard
    ├── TechGroup (Database)
    │   └── TechCard
    └── TechGroup (Tools)
        └── TechCard
```

### Hackathon Journey

```
JourneySection
├── SectionHeading
└── Timeline
    └── TimelineItem (per event)
        ├── TimelineDot
        ├── TimelineDate
        └── TimelineContent
            ├── EventName
            ├── EventDescription
            └── EventAchievement
```

### About

```
AboutSection
├── SectionHeading
├── AboutText (editorial introduction)
└── CodeCard (developer code-card)
    └── CodeContent (syntax-highlighted)
```

### Currently Learning

```
LearningSection
├── SectionHeading
└── TopicGrid
    └── TopicCard (per topic)
        ├── TopicName
        └── ProgressBar
```

### GitHub

```
GitHubSection
├── SectionHeading
├── ContributionGraph
├── GitHubStats
│   └── StatCard (per metric)
├── PinnedRepos
│   └── RepoCard (per repo)
└── LanguageBreakdown
```

### Contact

```
ContactSection
├── ContactHeading
├── ContactForm
│   ├── FormField (Name)
│   ├── FormField (Email)
│   ├── FormField (Message)
│   └── SubmitButton
└── SocialLinks
```

### Footer

```
FooterSection
├── FooterBrand
├── FooterSocial
└── FooterCopyright
```

---

## 8. CONTENT ARCHITECTURE

### Principle

Content is separated from presentation. All static content lives in `data/` files as typed TypeScript objects. Components consume this data — they never hardcode content.

### Data Files

| File | Content |
|---|---|
| `data/site.ts` | Personal info, site metadata, SEO data, social links |
| `data/navigation.ts` | Nav links, section anchors, footer links |
| `data/projects.ts` | All project metadata, descriptions, links, tech stacks |
| `data/proof.ts` | Quick proof bento card content |
| `data/skills.ts` | Frontend engineering categories and skills |
| `data/stack.ts` | Technology inventory with context |
| `data/journey.ts` | Hackathon timeline entries |
| `data/learning.ts` | Currently learning topics |

### Data Shape Example

```typescript
// data/projects.ts
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    number: "01",
    name: "FlowSync AI",
    slug: "flowsync-ai",
    category: "AI Application",
    description: "AI-powered workflow automation platform",
    fullDescription: "...",
    techStack: ["React", "TypeScript", "..."],
    liveUrl: "...",
    githubUrl: "...",
    features: ["...", "..."],
    // ...
  },
  // ...
];
```

### Rules

- No content hardcoded in JSX (except truly atomic labels like "OR" or "•")
- All user-facing text comes from `data/` files
- Types defined in `types/` folder
- Content changes require editing `data/` files, not components

---

## 9. TYPE ARCHITECTURE

### Core Types

```typescript
// types/project.ts
export interface Project {
  number: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  problem?: string;
  solution?: string;
  challenges?: string[];
  outcome?: string;
  role?: string;
  timeline?: string;
  team?: string;
}

export type ProjectSlug = "flowsync-ai" | "workos" | "assetrix" | "campus360";
```

```typescript
// types/journey.ts
export interface JourneyItem {
  year: string;
  event: string;
  role: string;
  project?: string;
  achievement?: string;
  description: string;
  technologies?: string[];
  featured?: boolean;
}
```

```typescript
// types/skill.ts
export interface SkillCategory {
  label: string;
  icon: string; // Lucide icon name
  skills: Skill[];
}

export interface Skill {
  name: string;
  description: string;
  technologies?: string[];
}
```

```typescript
// types/technology.ts
export interface Technology {
  name: string;
  category: "frontend" | "backend" | "database" | "ai" | "tools";
  description: string;
  projects?: string[];
  icon?: string;
}
```

```typescript
// types/github.ts
export interface GitHubStats {
  contributions: number;
  pullRequests: number;
  repositories: number;
  stars: number;
}

export interface PinnedRepo {
  name: string;
  description: string;
  language?: string;
  stars: number;
  url: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}
```

```typescript
// types/navigation.ts
export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide icon name
}
```

### Rules

- All types in `types/` folder
- No `any` — ever
- Component props defined locally in the component file
- Shared types exported from `types/`
- Strict null checks enabled

---

## 10. STATE MANAGEMENT

### State Classification

| Category | Examples | Mechanism |
|---|---|---|
| **Local UI State** | Mobile menu open, modal open, active tab, hover state | `useState` in component |
| **URL State** | Section hash, project slug | `window.location.hash` or React Router |
| **Server State** | GitHub API data | TanStack Query |
| **Persistent State** | Theme preference | next-themes (localStorage) |
| **Global UI State** | Command palette open, cursor state | `useState` in layout + context (if needed) |

### Why No Redux/Zustand

This is a single-page portfolio. The state requirements are:

- Is the mobile menu open? → Local `useState`
- Is the command palette open? → Local `useState` or minimal context
- What theme is active? → next-themes handles it
- GitHub data? → TanStack Query
- Form state? → React Hook Form

There is no complex state that crosses many unrelated components. Global state management libraries add bundle size, complexity, and boilerplate for problems this portfolio doesn't have.

If future requirements introduce genuinely shared complex state (e.g., a multi-step wizard across pages, real-time collaboration), evaluate then.

### State Flow

```
Component (UI)
    ↓ events
useState / useReducer (local)
    ↓ server requests
TanStack Query (server state)
    ↓ persistence
next-themes (theme)
```

---

## 11. DATA FETCHING

### Architecture

```
Component
    ↓ calls hook
Custom Hook (useGitHubData)
    ↓ uses
TanStack Query
    ↓ calls
Service (githubService)
    ↓ fetches
GitHub API
```

### GitHub API Integration

```typescript
// hooks/useGitHubData.ts
import { useQuery } from "@tanstack/react-query";
import { githubService } from "@/services/github.service";

export function useGitHubStats(username: string) {
  return useQuery({
    queryKey: ["github", "stats", username],
    queryFn: () => githubService.getStats(username),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
    enabled: !!username,
  });
}
```

### Configuration

| Setting | Value | Reason |
|---|---|---|
| `staleTime` | 5 minutes | GitHub data doesn't change frequently |
| `retry` | 2 | Handle transient failures |
| `retryDelay` | 1 second | Exponential backoff |
| `refetchOnWindowFocus` | false | Avoid unnecessary API calls |

### States

| State | Behavior |
|---|---|
| Loading | Skeleton placeholders |
| Error | Fallback static data + subtle error message |
| Success | Render live data |
| Empty | Graceful placeholder |

### Fallback

If GitHub API fails, show pre-defined fallback data. The section must still look intentional.

---

## 12. FORM ARCHITECTURE

### Flow

```
User
    ↓ interacts
ContactForm
    ↓ manages state
React Hook Form
    ↓ validates
Zod Schema
    ↓ on submit
Submission Service
    ↓ returns
Success / Error
    ↓ notifies
Sonner Toast
```

### Zod Schema

```typescript
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

### Form States

| State | UI |
|---|---|
| Idle | Form ready, all fields empty |
| Submitting | Button shows spinner, form disabled at 50% opacity |
| Success | Toast: "Message sent successfully!", form resets |
| Error | Toast: "Something went wrong. Please try again.", form remains filled |
| Validation | Per-field error message below input |

### Anti-Spam Considerations

- Honeypot hidden field (bot fills it, real user doesn't)
- Basic client-side timing check (form submitted too fast = bot)
- No reCAPTCHA (user experience priority)

### Backend

No backend is implemented in this portfolio. Form submission will use one of:

- Formspree / Formsubmit / similar service
- Serverless function (Vercel Edge Function)
- `mailto:` fallback

**[TODO: DECIDE submission endpoint]**

---

## 13. ANIMATION ARCHITECTURE

### System

Motion is the sole animation library. All animations use Motion's API.

### Animation Primitives (`components/motion/`)

| Primitive | Purpose | Motion API |
|---|---|---|
| `Reveal` | Scroll-triggered fade up | `whileInView` + `variants` |
| `FadeIn` | Simple opacity entrance | `initial` + `animate` |
| `TextReveal` | Character/word stagger | `staggerChildren` + `variants` |
| `Stagger` | Container with staggered children | `staggerChildren` |
| `Parallax` | Scroll-driven Y translation | `useScroll` + `useTransform` |
| `Magnetic` | Cursor magnetic pull | `useMotionValue` + `useSpring` |
| `ImageReveal` | Clip-path entrance | `clipPath` animation |
| `Marquee` | Infinite horizontal scroll | `animate` with `repeat: Infinity` |

### Animation Variants

Define reusable variants in a central file:

```typescript
// lib/animations.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const clipReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: { clipPath: "inset(0% 0 0 0)" },
};
```

### Rules

- Animations defined in `lib/animations.ts` or component-level variants
- Not duplicated across components
- `whileInView` for scroll-triggered animations
- `viewport={{ once: true }}` — animate once, not on every scroll
- `prefers-reduced-motion` checked via `useReducedMotion()` hook
- Mobile: simplified animations (fade only, no parallax, no stagger)
- Only `transform` and `opacity` animated (GPU-accelerated)

---

## 14. PERFORMANCE ARCHITECTURE

### Image Optimization

- All project images served as WebP/AVIF
- `loading="lazy"` on all below-fold images
- `width` and `height` attributes to prevent CLS
- `aspect-ratio` CSS for consistent sizing
- 2x resolution for retina displays

### Code Splitting

- React lazy + Suspense for route-level splitting (if project pages added)
- Below-fold sections render on viewport entry (IntersectionObserver)
- No heavy libraries loaded in initial bundle

### Animation Performance

- All animations use `transform` and `opacity`
- Never animate `width`, `height`, `top`, `left`, `margin`, `padding`
- `will-change` used sparingly, removed after animation
- Maximum 3 simultaneous animations
- Scroll animations pause when not in viewport

### Font Loading

- Geist Variable loaded via `@fontsource-variable/geist`
- `font-display: swap` to prevent FOIT
- Minimal font subset if possible

### Bundle Analysis

- Run `npm run build` and check output
- Target: < 200KB gzipped for initial JS bundle
- Monitor with Vite's build output

### What to Avoid

- Continuous CSS animations (infinite loops except marquee)
- Particle systems on mobile
- Heavy WebGL/3D
- Large background effects
- Unnecessary JavaScript execution

---

## 15. IMAGE ARCHITECTURE

### Folder Structure

```
public/
├── images/
│   ├── projects/
│   │   ├── flowsync-ai/
│   │   │   ├── hero.webp
│   │   │   ├── feature-1.webp
│   │   │   └── feature-2.webp
│   │   ├── workos/
│   │   ├── assetrix/
│   │   └── campus360/
│   ├── profile/
│   │   └── avatar.webp
│   └── social/
│       └── og-image.png
├── favicon.svg
└── icons.svg
```

### Naming Convention

- Lowercase kebab-case: `hero.webp`, `feature-1.webp`
- Project folder matches slug: `flowsync-ai/`
- OG image: `social/og-image.png` (1200×630)

### Supported Formats

| Format | Usage |
|---|---|
| WebP | Primary project images |
| AVIF | If supported (better compression) |
| PNG | OG image, icons that need transparency |
| SVG | Icons, logos |

### Dimensions

| Image | Aspect Ratio | Min Width |
|---|---|---|
| Project hero | 16:9 | 1600px |
| Project feature | 16:9 | 1200px |
| Profile avatar | 1:1 | 400px |
| OG image | 1.91:1 (1200×630) | 1200px |

### Alt Text Strategy

- Descriptive alt text for meaningful images
- `alt=""` for decorative images
- Alt text describes what the image shows, not what it is

---

## 16. STYLING ARCHITECTURE

### Approach

Tailwind CSS v4 for utility-first styling. Design tokens as CSS custom properties. cn() for conditional classes.

### Usage Rules

| Situation | Approach |
|---|---|
| Standard spacing, colors, typography | Tailwind utilities |
| Custom design tokens | CSS custom properties in `index.css` |
| Conditional classes | `cn()` from `lib/utils.ts` |
| Component variants | `class-variance-authority` (CVA) |
| Complex responsive patterns | Tailwind responsive prefixes |
| One-off custom styles | CSS module or inline style (rare) |

### The cn() Utility

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Used everywhere to merge Tailwind classes without conflicts.

### Design Tokens

Tokens defined in `styles/index.css` as CSS custom properties, mapped from `theme.md`:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "@fontsource-variable/geist";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... all tokens ... */
}

:root { /* light mode tokens */ }
.dark { /* dark mode tokens */ }
```

### Rules

- No arbitrary colors (`bg-[#123456]`) — use tokens
- No duplicated utility patterns — extract to component
- Keep global CSS minimal — only tokens and resets
- Component-specific styling stays in the component
- Avoid `!important` — fix class specificity instead

---

## 17. THEME ARCHITECTURE

### System

next-themes manages dark/light mode.

### Implementation

```typescript
// app/providers.tsx
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
```

### Rules

- `attribute="class"` — adds `.dark` class to `<html>`
- `defaultTheme="dark"` — dark mode is default
- `enableSystem` — respects `prefers-color-scheme`
- Transition: 400ms crossfade on theme change
- All components use CSS custom properties — they automatically adapt
- No theme-specific logic in component code (use CSS)

### Persistence

next-themes automatically persists to localStorage.

### No Flash

- Theme applied via class on `<html>` before React renders
- CSS custom properties ensure no flash of incorrect theme

---

## 18. ACCESSIBILITY ARCHITECTURE

### Responsibilities by Level

| Level | Responsibility |
|---|---|
| **Layout** | Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`), heading hierarchy |
| **Components** | Keyboard interaction, focus management, ARIA attributes |
| **Sections** | Section labels, skip links, reduced motion |

### Rules

1. **Semantic HTML first** — Use `<button>`, `<a>`, `<nav>`, `<section>`, not `<div>` with click handlers
2. **Heading hierarchy** — One `<h1>`, then `<h2>` → `<h3>` → `<h4>`, never skip levels
3. **Keyboard navigation** — All interactive elements focusable, visible focus ring, logical tab order
4. **Focus management** — Focus trapped in modals, restored on close
5. **ARIA only when needed** — Don't add ARIA to semantic HTML (it's redundant)
6. **Accessible forms** — Labels associated with inputs, error messages linked via `aria-describedby`
7. **Reduced motion** — `useReducedMotion()` hook disables animations when preferred
8. **Contrast** — All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
9. **Touch targets** — Minimum 44px × 44px on mobile

### Reduced Motion Strategy

```typescript
// hooks/useReducedMotion.ts
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(query.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
```

Motion primitives check this hook and disable animations when true.

---

## 19. ERROR HANDLING

### Strategies

| Error | Handling |
|---|---|
| React rendering error | Error boundary catches, shows fallback UI |
| GitHub API failure | Fallback static data + subtle error message |
| Contact submission failure | Toast notification, form remains filled |
| Missing project data | Graceful placeholder, section still renders |
| Missing images | Skeleton or placeholder with icon |

### Error Boundary

```typescript
// app/ErrorBoundary.tsx
class ErrorBoundary extends React.Component {
  // Catches rendering errors
  // Shows: "Something went wrong" with retry button
  // Does NOT destroy the entire page
}
```

### Rules

- Errors fail gracefully — never show blank white screen
- Fallback data is pre-defined and looks intentional
- Error messages are helpful, not technical
- Console errors in development, silent in production

---

## 20. SECURITY

### Rules

| Rule | Detail |
|---|---|
| No secrets in client code | Vite env vars prefixed with `VITE_` are public — never store API keys |
| Environment variables | Use `.env.local` for secrets (not committed to git) |
| External links | Use `rel="noopener noreferrer"` on `target="_blank"` links |
| Form validation | Validate on client AND server (if backend exists) |
| Dependency hygiene | Regular `npm audit`, update vulnerable packages |
| No inline scripts | Avoid `dangerouslySetInnerHTML` |

### Environment Variables

```bash
# .env.local (NEVER committed)
VITE_GITHUB_TOKEN=ghp_xxx  # Only if using authenticated GitHub API

# .env (committed, safe defaults)
VITE_GITHUB_USERNAME=shubham-dangi
```

### Important

Vite client-side environment variables (`VITE_*`) are bundled into the JavaScript and visible in the browser. Never put secrets here.

---

## 21. SEO ARCHITECTURE

### Implementation

Since this is a React SPA, SEO is limited but still important:

| Element | Implementation |
|---|---|
| Document title | `<title>` updated via `document.title` or a simple hook |
| Meta description | `<meta name="description">` in `index.html` |
| Open Graph | `<meta property="og:*">` in `index.html` |
| Canonical URL | `<link rel="canonical">` in `index.html` |
| Semantic HTML | Proper heading hierarchy, landmarks |
| Sitemap | Not needed for single-page SPA |
| Robots | `robots.txt` in `public/` |

### index.html Structure

```html
<head>
  <title>Shubham Dangi — Frontend Developer</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="/images/social/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://your-domain.com" />
</head>
```

### If Project Pages Are Added

Use React Helmet or manual `document.title` updates per route.

---

## 22. ANALYTICS

### Decision

Do NOT add analytics automatically. If added later:

### Requirements

- Privacy-conscious (no Google Analytics by default)
- Minimal performance impact
- Environment-controlled (opt-in)
- Self-hosted preferred (Plausible, Umami, or similar)

### Where to Integrate

```
app/providers.tsx
├── ThemeProvider
├── QueryClientProvider
└── AnalyticsProvider (optional, future)
```

Analytics should be a provider that wraps the app, not scattered tracking code.

---

## 23. ENVIRONMENT CONFIGURATION

### Files

| File | Purpose | Committed |
|---|---|---|
| `.env` | Safe defaults, public values | Yes |
| `.env.local` | Local overrides, secrets | No (gitignored) |
| `.env.production` | Production-specific values | Yes (if needed) |

### Naming Convention

```
VITE_GITHUB_USERNAME=shubham-dangi
VITE_GITHUB_TOKEN=ghp_xxx         # Secret — .env.local only
VITE_SITE_URL=https://your-domain.com
```

### Rules

- All client-side env vars must be prefixed with `VITE_`
- Never commit `.env.local`
- Never expose API tokens in client code
- Document all env vars in README

---

## 24. NAMING CONVENTIONS

### Components

PascalCase: `HeroSection.tsx`, `ProjectCard.tsx`, `TechCard.tsx`

### Hooks

camelCase with `use` prefix: `useGitHubData.ts`, `useScrollProgress.ts`

### Functions

camelCase: `getGitHubStats()`, `formatDate()`

### Constants

UPPER_SNAKE_CASE for true constants: `MAX_PROJECTS`, `GITHUB_API_URL`

### Files

- Components: `PascalCase.tsx`
- Hooks: `camelCase.ts`
- Types: `camelCase.ts` (matching the domain)
- Data: `camelCase.ts`
- Utilities: `camelCase.ts`

### Types

PascalCase: `Project`, `JourneyItem`, `GitHubStats`

### CSS Classes

Tailwind utilities: `className="text-lg font-bold"`

Custom classes: `cn()` for conditional merging

---

## 25. IMPORT ARCHITECTURE

### Path Aliases

```typescript
// tsconfig.app.json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Import Convention

```typescript
// GOOD — absolute imports
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

// BAD — relative imports (fragile)
import { Button } from "../../components/ui/button";
```

### Dependency Direction

```
UI Primitives (components/ui/)
    ↑
Layout (components/layout/)
    ↑
Motion (components/motion/)
    ↑
Shared (components/shared/)
    ↑
Feature (components/project/, components/github/)
    ↑
Sections (sections/)
    ↑
App (App.tsx)
```

### Rules

- Lower layers must NOT import from higher layers
- No circular dependencies
- No deep internal imports (e.g., `@/sections/hero/HeroVisual`)
- Data files imported by sections, not by UI primitives
- Types imported from `@/types/`, not duplicated locally

---

## 26. DEPENDENCY RULES

### Before Installing a Package

Ask these questions:

1. **Is it actually required?** Can the existing stack solve this?
2. **Is it maintained?** Last publish within 6 months, active issues resolved.
3. **Does it support React 19?** Check compatibility.
4. **Does it increase bundle size unnecessarily?** Check bundlephobia.com.
5. **Does it duplicate an existing dependency?** Don't install two animation libraries.

### Current Stack Justification

| Package | Why It Exists |
|---|---|
| motion | Sole animation library — entrance, scroll, hover, magnetic |
| shadcn/ui + Radix | Accessible, composable UI primitives |
| Tailwind CSS v4 | Utility-first styling, design tokens |
| TanStack Query | Server state (GitHub API) |
| React Hook Form + Zod | Form state and validation |
| Lucide React | Icon library |
| next-themes | Dark/light mode |
| cmdk | Command palette |
| sonner | Toast notifications |
| clsx + tailwind-merge | Conditional class merging |
| CVA | Component variants |
| Recharts | Data visualization (GitHub section) |
| Geist font | Typography |

### Rules

- Do not add libraries "just in case"
- Do not add libraries for one small feature (implement it manually)
- Prefer built-in browser APIs over libraries
- Check bundle size before installing

---

## 27. TESTING STRATEGY

### Priority

| Priority | What to Test | Why |
|---|---|---|
| 1 | Contact form validation | User-facing errors |
| 2 | Navigation scroll behavior | Core UX |
| 3 | Theme toggle | Persistent state |
| 4 | Utility functions (`cn`, formatters) | Pure logic |
| 5 | GitHub data fetching states | Loading/error/success |
| 6 | Responsive behavior | Breakpoint correctness |

### What NOT to Test

- Static markup rendering
- Every component's visual appearance (use visual review instead)
- Animation timing (manual review)
- Third-party component behavior (trust shadcn/ui, Radix)

### Framework

When testing is added:

- Vitest for unit tests
- React Testing Library for component tests
- No E2E tests initially (overkill for a portfolio)

---

## 28. BUILD & DEPLOYMENT

### Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Local development server (port 5173) |
| `npm run build` | Production build (`tsc -b && vite build`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint check |
| `npm run lint:fix` | ESLint auto-fix |
| `npm run format` | Prettier format |

### Build Output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [fonts/images]
└── [public files]
```

### Deployment

| Aspect | Decision |
|---|---|
| Platform | Vercel (or equivalent static hosting) |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 18+ |
| Environment variables | Set in Vercel dashboard |

### Vercel Configuration

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Rules

- No deployment-specific code in the application
- Environment variables configured in hosting platform, not in code
- Preview deployments for PRs (if using Git)

---

## 29. DEVELOPMENT WORKFLOW

### Implementation Order

| Phase | Tasks |
|---|---|
| **1. Foundation** | Design tokens in CSS, global styles, theme setup |
| **2. Layout** | Container, Section, Grid, Navbar, Footer |
| **3. Motion** | Animation primitives (Reveal, FadeIn, Stagger, etc.) |
| **4. Shared** | SectionHeading, Cursor, BackToTop |
| **5. Hero** | Hero section with full animation |
| **6. Marquee** | Infinite scroll statement |
| **7. Proof** | Quick proof bento grid |
| **8. Work** | Project cards and showcase |
| **9. Engineering** | Frontend engineering categories |
| **10. Stack** | Tech stack grid |
| **11. Journey** | Timeline |
| **12. About** | About section + code card |
| **13. Learning** | Currently learning cards |
| **14. GitHub** | GitHub data integration |
| **15. Contact** | Contact form |
| **16. Command Palette** | cmdk integration |
| **17. Custom Cursor** | Cursor component |
| **18. Accessibility** | Full a11y audit and fixes |
| **19. Performance** | Optimization pass |
| **20. SEO** | Meta tags, OG data |
| **21. Testing** | Critical path tests |
| **22. Build** | Production build verification |
| **23. Deploy** | Deploy to Vercel |

### Rules

- Complete each phase before moving to the next
- Test at each phase (visual review in browser)
- Commit after each phase
- Don't skip accessibility — build it in from the start

---

## 30. ARCHITECTURE DECISION RECORD

### React 19

**Decision:** Use React 19 (latest stable).

**Reason:** Latest features (server components, actions, improved hooks), active ecosystem, strong TypeScript support. The portfolio benefits from React's component model and ecosystem.

### Vite 8

**Decision:** Use Vite as the build tool.

**Reason:** Fast HMR, optimized builds, native ES modules, simple configuration. Best DX for React SPAs. No Next.js complexity needed for a static portfolio.

### TypeScript (Strict)

**Decision:** TypeScript with `strict: true`.

**Reason:** Type safety catches errors at compile time. Interfaces enforce data contracts. Better IDE experience. No `any`.

### Tailwind CSS v4

**Decision:** Use Tailwind CSS v4 with the Vite plugin.

**Reason:** Utility-first approach, consistent design tokens, responsive utilities, shadcn/ui compatibility. v4 is faster and simpler than v3.

### shadcn/ui + Radix UI

**Decision:** Use shadcn/ui as the component foundation.

**Reason:** Accessible primitives (Radix), composable, customizable, owns the code (copies into project, no runtime dependency). Best-in-class for React component libraries.

### Motion

**Decision:** Use Motion as the sole animation library.

**Reason:** Comprehensive API (scroll, gesture, layout, entrance), React-native integration, performant (GPU-accelerated), actively maintained. No need for Framer Motion + additional libraries.

### TanStack Query

**Decision:** Use TanStack Query only for server state (GitHub API).

**Reason:** Built-in caching, retry, stale management. Overkill for local state but perfect for external API data. Keeps data fetching logic clean and separated.

### React Hook Form + Zod

**Decision:** Use React Hook Form for form state, Zod for validation.

**Reason:** Minimal re-renders (uncontrolled components), schema-based validation, TypeScript integration, shadcn/ui compatibility. Industry standard for React forms.

### No Redux/Zustand

**Decision:** Do not add global state management.

**Reason:** The portfolio has no complex shared state. Local `useState`, URL state, TanStack Query (server state), and next-themes (persistent state) cover all needs. Adding Redux/Zustand would be overengineering.

---

## 31. ARCHITECTURE DIAGRAMS

### Application Architecture

```
User
    ↓
Browser
    ↓
React Application (App.tsx)
    ↓
Providers (Theme, Query, Toaster)
    ↓
Layout (Navbar + Main + Footer)
    ↓
Sections (Hero, Marquee, Proof, Work, ...)
    ↓
Components (Feature + Shared + Motion + Layout)
    ↓
UI Primitives (shadcn/ui)
    ↓
CSS (Tailwind + Design Tokens)
```

### Data Flow (GitHub)

```
GitHubSection
    ↓ renders
useGitHubStats(username)
    ↓ uses
TanStack Query
    ↓ calls
githubService.getStats()
    ↓ fetches
GitHub API
    ↓ returns
GitHubStats
    ↓ renders
GitHubStats / ContributionGraph / PinnedRepos
```

### Form Flow

```
User Input
    ↓
ContactForm
    ↓ manages
React Hook Form
    ↓ validates
Zod Schema
    ↓ on submit
handleSubmit()
    ↓ calls
Submission Service (Formspree / Edge Function)
    ↓ returns
Success / Error
    ↓ notifies
Sonner Toast
    ↓ updates
Form State (reset or error)
```

### Animation Flow

```
Section enters viewport
    ↓ triggers
IntersectionObserver (via Motion whileInView)
    ↓ activates
Animation Variant (fadeInUp, clipReveal, etc.)
    ↓ applies
Motion Animation (transform + opacity)
    ↓ completes
Element visible
```

### Theme Flow

```
User clicks ThemeToggle
    ↓
next-themes.setTheme("dark" | "light")
    ↓
Updates class on <html>
    ↓
CSS custom properties change
    ↓
All components re-render with new tokens
    ↓
400ms transition
```

---

## 32. ARCHITECTURE ANTI-PATTERNS

### Explicitly Forbidden

| Anti-Pattern | Why |
|---|---|
| One giant `App.tsx` with all sections inline | Unmaintainable, not composable |
| API calls inside JSX | Violates separation of concerns |
| Hardcoded repeated project data | DRY violation, error-prone |
| Global state for local UI state (mobile menu, etc.) | Overengineering |
| Duplicate animation logic in every component | Use animation primitives |
| Random dependency installation | Each dependency must earn its place |
| Inline magic numbers | Use constants or design tokens |
| `any` everywhere | Defeats the purpose of TypeScript |
| Excessive abstraction | Don't create a component for a `<p>` tag |
| Premature optimization | Build first, optimize second |
| Overengineering | A portfolio doesn't need microservices architecture |
| Content hardcoded in components | Use `data/` files |
| CSS modules + Tailwind + inline styles (pick one approach) | Consistency |
| Importing from `node_modules` internals | Use public API only |
| Circular imports | Dependency direction must be one-way |

---

## 33. FINAL ARCHITECTURE CHECKLIST

- [ ] Folder structure defined and justified
- [ ] Component boundaries defined
- [ ] Component layers defined (UI → Layout → Motion → Shared → Feature → Section → App)
- [ ] Routing strategy defined (single page + optional project routes)
- [ ] Content architecture defined (data files, not hardcoded)
- [ ] Type architecture defined (strict TypeScript, no `any`)
- [ ] State strategy defined (local + TanStack Query + next-themes)
- [ ] Data fetching architecture defined (GitHub API via service → hook → component)
- [ ] Form architecture defined (React Hook Form + Zod)
- [ ] Animation architecture defined (Motion primitives, centralized variants)
- [ ] Theme architecture defined (next-themes, CSS custom properties)
- [ ] Accessibility architecture defined (semantic HTML, keyboard, reduced motion)
- [ ] Error handling defined (boundaries, fallbacks, graceful degradation)
- [ ] Security rules defined (no secrets in client, external link safety)
- [ ] SEO architecture defined (meta tags, semantic HTML)
- [ ] Testing strategy defined (prioritized, realistic)
- [ ] Deployment strategy defined (Vercel, static hosting)
- [ ] Naming conventions defined (PascalCase components, camelCase hooks)
- [ ] Dependency rules defined (before installing, ask 6 questions)
- [ ] Import architecture defined (`@/` aliases, no circular deps)
- [ ] No unnecessary architecture complexity
- [ ] Architecture follows theme.md, design.md, content.md

---

## FINAL RULE

`architecture.md` is the technical implementation blueprint.

`theme.md` → how it looks.
`design.md` → where it goes.
`content.md` → what it says.
`architecture.md` → how it's built.

A frontend developer should be able to structure the entire React application from this document without making major architectural decisions.

No portfolio UI was implemented in the creation of this document.
