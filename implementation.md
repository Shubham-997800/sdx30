# Portfolio Implementation Roadmap

> The execution blueprint for building the portfolio.
> `theme.md` → visual rules. `design.md` → UX rules. `content.md` → content. `architecture.md` → tech rules. `components.md` → component specs. `implementation.md` → build order.

---

## 1. IMPLEMENTATION OBJECTIVE

Build a production-quality React 19 portfolio for a frontend developer with:

- Digital Editorial visual identity
- Premium dark/light themes
- Strong typography (Geist Variable)
- Swiss-inspired 12-column grid
- Bento layouts where appropriate
- Purposeful motion (Motion library)
- Excellent responsive behavior (4 breakpoints)
- Strong accessibility (WCAG AA)
- Clean TypeScript architecture (strict mode)
- High performance (transform/opacity only)
- Professional developer-level UI polish

The final result must feel custom-designed, not template-generated.

---

## 2. SOURCE-OF-TRUTH HIERARCHY

```
theme.md         ← Visual Design Rules (highest visual authority)
    ↓
design.md        ← UI/UX Rules
    ↓
content.md       ← Content Rules
    ↓
architecture.md  ← Technical Architecture
    ↓
components.md    ← Component Specifications
    ↓
implementation.md ← Implementation Order (this document)
```

### Conflict Resolution

If two documents conflict:

1. Identify the conflict explicitly
2. Do not silently choose one interpretation
3. Prefer the higher-level source of truth
4. Document the decision in this file under "Decisions Log"

---

## 3. PROJECT AUDIT (PHASE 0)

### Current State

| Aspect | Status | Notes |
|---|---|---|
| React | 19.2.8 | Latest stable, installed |
| Vite | 8.2.2 | Latest stable, installed |
| TypeScript | ~6.0.2 | Strict mode enabled |
| Tailwind CSS | 4.3.3 | Vite plugin configured |
| shadcn/ui | 4.19.1 | Initialized, button component present |
| Radix UI | Via shadcn | Installed as dependency |
| Motion | 13.1.1 | Installed |
| TanStack Query | 5.102.8 | Installed |
| TanStack Table | 9.2.4 | Installed (verify if needed) |
| React Hook Form | 7.87.0 | Installed |
| Zod | 3.25.76 | Installed |
| Sonner | 2.0.8 | Installed |
| Lucide React | 1.38.0 | Installed |
| cmdk | 1.1.1 | Installed |
| next-themes | 0.4.6 | Installed |
| Recharts | 3.10.1 | Installed |
| Geist Font | 5.3.0 | Installed |
| ESLint | 10.9.1 | Configured |
| Prettier | 3.9.6 | Configured |

### Existing Files

| File | Status | Action |
|---|---|---|
| `vite.config.ts` | Configured with Tailwind + path alias | Keep |
| `tsconfig.app.json` | Strict mode, path aliases | Keep |
| `tsconfig.json` | References configured | Keep |
| `eslint.config.js` | React + TS configured | Keep |
| `.prettierrc` | Configured | Keep |
| `components.json` | shadcn/ui configured | Keep |
| `src/index.css` | Tailwind + shadcn tokens | Modify (add design tokens) |
| `src/App.tsx` | Default Vite template | Replace |
| `src/main.tsx` | Entry point | Modify (add providers) |
| `src/components/ui/button.tsx` | shadcn button | Keep |
| `src/lib/utils.ts` | cn() utility | Keep |

### Audit Summary

- Project is a clean Vite + React 19 + TypeScript + Tailwind v4 setup
- shadcn/ui initialized with button component
- All required dependencies installed
- Path aliases configured (`@/` → `src/`)
- No existing portfolio UI to preserve (only default Vite template)
- Ready for implementation

---

## 4. IMPLEMENTATION PHASES

### Phase 1 — Foundation

**Goal:** Establish the design system in CSS and configure the app shell.

**Tasks:**

1. Update `src/index.css` with complete design tokens from `theme.md`
   - Dark mode tokens (`:root` and `.dark`)
   - Light mode tokens
   - Typography scale as CSS custom properties
   - Spacing scale
   - Radius scale
   - Border tokens
   - Shadow tokens
   - Motion duration/easing tokens
   - Z-index layers
   - Accent system tokens

2. Configure font loading
   - Verify Geist Variable loads correctly
   - Set `font-display: swap`
   - Configure heading/body/mono font families

3. Create `src/app/providers.tsx`
   - ThemeProvider (next-themes)
   - QueryClientProvider (TanStack Query)
   - Toaster (sonner)

4. Update `src/main.tsx`
   - Wrap App with Providers

5. Update `src/App.tsx`
   - Minimal shell: `<main>` with placeholder sections
   - Verify dark/light toggle works

6. Create `src/lib/constants.ts`
   - Site name, URL, default metadata

7. Create `src/config/site.ts`
   - Site configuration object

**Verify:**
- [ ] `npm run dev` starts without errors
- [ ] Dark mode renders correctly
- [ ] Light mode renders correctly
- [ ] Theme toggle works
- [ ] Fonts load (check Network tab)
- [ ] No TypeScript errors
- [ ] No console errors

**Commands:**
```bash
npm run dev
npm run build
```

---

### Phase 2 — Data Layer

**Goal:** Create all data files and TypeScript types before building components.

**Tasks:**

1. Create `src/types/project.ts`
   - Project interface
   - ProjectSlug type

2. Create `src/types/journey.ts`
   - JourneyItem interface

3. Create `src/types/skill.ts`
   - SkillCategory, Skill interfaces

4. Create `src/types/technology.ts`
   - Technology interface

5. Create `src/types/github.ts`
   - GitHubStats, PinnedRepo, ContributionDay interfaces

6. Create `src/types/navigation.ts`
   - NavItem, SocialLink interfaces

7. Create `src/data/site.ts`
   - Personal info, metadata, SEO data, social links
   - Content from `content.md`

8. Create `src/data/navigation.ts`
   - Nav links, section anchors

9. Create `src/data/projects.ts`
   - All 4 projects with metadata
   - Content from `content.md`

10. Create `src/data/proof.ts`
    - 5 proof bento cards
    - Content from `content.md`

11. Create `src/data/skills.ts`
    - 4 engineering categories with skills
    - Content from `content.md`

12. Create `src/data/stack.ts`
    - Technology inventory
    - Content from `content.md`

13. Create `src/data/journey.ts`
    - 5 hackathon entries
    - Content from `content.md`

14. Create `src/data/learning.ts`
    - 7 learning topics
    - Content from `content.md`

**Verify:**
- [ ] All types compile without errors
- [ ] All data files import correctly
- [ ] No `any` types used
- [ ] Content matches `content.md`

---

### Phase 3 — UI Primitives

**Goal:** Install and configure shadcn/ui components.

**Tasks:**

1. Install remaining shadcn/ui components via CLI:
   ```bash
   npx shadcn@latest add badge card input textarea separator tooltip dialog
   ```

2. Verify each component renders correctly in dark/light mode

3. Test Button variants (primary, secondary, ghost, outline)

4. Test focus states on all interactive primitives

**Components to install:**

| Component | Priority | Used By |
|---|---|---|
| badge | Core | ProjectTags, ProofCard, TechCard |
| card | Core | ProofCard, TechCard, ProjectCard |
| input | Core | ContactForm |
| textarea | Core | ContactForm |
| separator | Important | Section dividers |
| tooltip | Important | TechCard, IconButton |
| dialog | Important | CommandMenu (if cmdk needs it) |

**Verify:**
- [ ] All primitives render in dark mode
- [ ] All primitives render in light mode
- [ ] Focus states visible
- [ ] No TypeScript errors

---

### Phase 4 — Layout System

**Goal:** Build structural components that wrap all content.

**Tasks:**

1. Create `src/components/layout/Container.tsx`
   - Max-width 1280px, centered
   - Responsive padding (80/64/32/20px)

2. Create `src/components/layout/Section.tsx`
   - Vertical spacing (160/128/96/64px by breakpoint)
   - `<section>` semantic element

3. Create `src/components/layout/Grid.tsx`
   - 12-column CSS Grid
   - Responsive columns (12/8/4)
   - Gutter (24/16/12px)

4. Create `src/components/navigation/Navbar.tsx`
   - Sticky, transparent → blurred on scroll
   - Logo, nav links, theme toggle, command trigger
   - Mobile: logo + theme + hamburger

5. Create `src/components/navigation/NavLinks.tsx`
   - Desktop inline links
   - Active state detection (IntersectionObserver)

6. Create `src/components/navigation/NavLink.tsx`
   - Individual link with hover/active/focus states

7. Create `src/components/navigation/ThemeToggle.tsx`
   - Sun/moon icon swap
   - 400ms morph animation
   - next-themes integration

8. Create `src/components/navigation/MobileMenu.tsx`
   - Full-screen overlay
   - Focus trap
   - Escape to close
   - Scroll lock

9. Create `src/components/navigation/MobileMenuTrigger.tsx`
   - Hamburger → X animation

10. Create `src/sections/footer/FooterSection.tsx`
    - Minimal footer
    - Brand, social links, copyright

11. Create `src/components/shared/SocialLinks.tsx`
    - Icon buttons for GitHub, LinkedIn, Twitter, Mail

12. Update `src/App.tsx`
    - Compose Navbar + Main sections + Footer
    - Verify layout structure

**Verify:**
- [ ] Navbar sticky behavior works
- [ ] Scroll triggers blur/shadow
- [ ] Mobile menu opens/closes
- [ ] Theme toggle works in navbar
- [ ] Footer renders correctly
- [ ] All breakpoints work
- [ ] Keyboard navigation works
- [ ] Skip link works

**Commands:**
```bash
npm run dev
npm run build
```

---

### Phase 5 — Motion System

**Goal:** Build reusable animation primitives.

**Tasks:**

1. Create `src/lib/animations.ts`
   - Centralized animation variants
   - fadeInUp, fadeIn, clipReveal, staggerContainer
   - Duration/easing constants

2. Create `src/hooks/useReducedMotion.ts`
   - Detects `prefers-reduced-motion: reduce`

3. Create `src/components/motion/Reveal.tsx`
   - Scroll-triggered fade up
   - Props: direction, delay, duration, distance, once

4. Create `src/components/motion/FadeIn.tsx`
   - Simple opacity entrance
   - Props: delay, duration

5. Create `src/components/motion/Stagger.tsx`
   - Container with staggered children
   - Props: staggerDelay

6. Create `src/components/motion/TextReveal.tsx`
   - Character/word stagger reveal
   - Props: text, as (heading level)

7. Create `src/components/motion/ImageReveal.tsx`
   - Clip-path entrance
   - Props: children, className

8. Create `src/components/motion/Parallax.tsx`
   - Scroll-driven Y translation
   - Props: speed
   - Desktop only, disabled with reduced motion

9. Create `src/components/motion/Magnetic.tsx`
   - Cursor magnetic pull
   - Props: radius, strength
   - Touch devices: disabled
   - Reduced motion: disabled

10. Create `src/components/motion/Marquee.tsx`
    - Infinite horizontal scroll
    - CSS animation preferred
    - Reduced motion: static

**Verify:**
- [ ] Reveal works on scroll
- [ ] Stagger animates children sequentially
- [ ] TextReveal animates characters
- [ ] Reduced motion disables animations
- [ ] Parallax works on desktop
- [ ] Parallax disabled on mobile
- [ ] Magnetic works on primary CTA
- [ ] No jank on mid-range devices

---

### Phase 6 — Shared Components

**Goal:** Build components used across multiple sections.

**Tasks:**

1. Create `src/components/shared/SectionHeading.tsx`
   - Consistent section title layout
   - Props: title, label (optional)

2. Create `src/components/shared/SectionLabel.tsx`
   - Small label above section heading
   - Label typography, uppercase, accent

3. Create `src/components/shared/ExternalLink.tsx`
   - `target="_blank"`, `rel="noopener noreferrer"`
   - Consistent styling

4. Create `src/components/shared/BackToTop.tsx`
   - Scroll-to-top button
   - Appears after scrolling down
   - Ghost button, arrow icon

5. Create `src/components/shared/ScrollProgress.tsx`
   - Top progress bar
   - Accent color fill
   - Scroll-driven width

6. Create `src/components/shared/Cursor.tsx`
   - Custom cursor (desktop only)
   - States: default, link, button, project, image
   - Disabled on touch devices
   - Disabled with reduced motion

**Verify:**
- [ ] SectionHeading renders consistently
- [ ] ExternalLinks have correct attributes
- [ ] BackToTop appears/disappears correctly
- [ ] ScrollProgress tracks scroll position
- [ ] Cursor follows mouse (desktop)
- [ ] Cursor disabled on mobile

---

### Phase 7 — Hero Section

**Goal:** Build the first-impression hero with cinematic entrance.

**Tasks:**

1. Create `src/sections/hero/HeroSection.tsx`
   - Full viewport height
   - Two-column layout (desktop), stacked (mobile)

2. Create `src/sections/hero/HeroContent.tsx`
   - Status indicator ("AVAILABLE FOR WORK")
   - Name (SHUBHAM DANGI) — Display XL
   - Role (FRONTEND DEVELOPER) — Display LG, accent
   - Description — Body Large, muted
   - Content from `data/site.ts`

3. Create `src/sections/hero/HeroActions.tsx`
   - Primary CTA: "EXPLORE WORK" (accent, magnetic)
   - Secondary CTA: "DOWNLOAD RESUME" or "GET IN TOUCH"
   - Social links row

4. Create `src/sections/hero/HeroVisual.tsx`
   - Geometric abstract composition
   - Parallax on mouse movement (desktop)
   - Clip-path reveal entrance

5. Implement page-load animation sequence
   - Status: 200ms delay
   - Name: 400ms, clip reveal
   - Role: 700ms, fade up
   - Description: 1000ms, fade in
   - CTAs: 1200ms, fade up
   - Visual: 600ms, clip reveal

**Verify:**
- [ ] First-screen visual hierarchy correct
- [ ] Typography matches design.md
- [ ] Animation sequence plays on load
- [ ] Reduced motion: all appears instantly
- [ ] Mobile layout correct
- [ ] Dark mode correct
- [ ] Light mode correct
- [ ] Magnetic CTA works (desktop)

**Commands:**
```bash
npm run dev
npm run build
```

---

### Phase 8 — Marquee Section

**Goal:** Infinite scrolling brand statement.

**Tasks:**

1. Create `src/sections/marquee/MarqueeSection.tsx`
   - Marquee component with repeated text
   - Statement text below

2. Content: "BUILD • SHIP • LEARN • ITERATE •"
3. Speed: 30px/sec (desktop), 20px/sec (mobile)
4. Typography: Display LG, uppercase, muted
5. Statement: Body Large, centered, max-width 600px

**Verify:**
- [ ] Smooth infinite loop
- [ ] No visible jump at loop point
- [ ] Mobile speed reduced
- [ ] Reduced motion: static text
- [ ] Statement fades in on scroll

---

### Phase 9 — Proof Section

**Goal:** Bento grid of credibility items.

**Tasks:**

1. Create `src/sections/proof/ProofSection.tsx`
   - SectionHeading + ProofGrid

2. Create `src/sections/proof/ProofGrid.tsx`
   - CSS Grid with bento spans
   - Desktop: varied spans (8+4, 4+4, 4+4)
   - Mobile: single column

3. Create `src/sections/proof/ProofCard.tsx`
   - Props: label, title, description, icon, featured
   - Featured variant: larger, accent border on hover
   - Hover: scale 1.01, border accent, shadow

4. Content from `data/proof.ts`
5. Odoo card: featured treatment (8 cols × 2 rows)

**Verify:**
- [ ] Bento grid renders correctly
- [ ] Featured card has correct span
- [ ] Hover states work
- [ ] Stagger animation works
- [ ] Mobile: all cards full width
- [ ] Dark/light mode correct

---

### Phase 10 — Selected Work

**Goal:** Project showcase with strong visual hierarchy.

**Tasks:**

1. Create `src/sections/work/WorkSection.tsx`
   - SectionHeading + project list

2. Create `src/sections/work/ProjectShowcase.tsx`
   - Maps over projects from `data/projects.ts`
   - Renders ProjectCard for each

3. Create `src/components/project/ProjectCard.tsx`
   - Full project showcase
   - Number, visual, meta, tags, CTA

4. Create `src/components/project/ProjectVisual.tsx`
   - 16:9 aspect ratio
   - Skeleton placeholder
   - Hover scale 1.03
   - Lazy loading

5. Create `src/components/project/ProjectNumber.tsx`
   - Editorial number (01, 02)
   - Display LG, muted

6. Create `src/components/project/ProjectMeta.tsx`
   - Name (H2), description (Body Large)

7. Create `src/components/project/ProjectTags.tsx`
   - Badge row of technologies

8. Create `src/components/project/ProjectCTA.tsx`
   - "VIEW PROJECT →"
   - Arrow animation on hover

9. Content from `data/projects.ts`

**Verify:**
- [ ] All 4 projects render
- [ ] First project feels featured
- [ ] Image aspect ratios correct
- [ ] Hover interactions smooth
- [ ] Mobile layout correct
- [ ] Project number hidden on mobile
- [ ] Lazy loading works
- [ ] Keyboard accessible

---

### Phase 11 — Engineering Section

**Goal:** Frontend engineering capabilities.

**Tasks:**

1. Create `src/sections/engineering/EngineeringSection.tsx`
   - SectionHeading + CategoryGrid

2. Create `src/sections/engineering/CategoryCard.tsx`
   - Category label, icon, skill list
   - Hover: border accent, shadow

3. Content from `data/skills.ts`

**Verify:**
- [ ] 4 categories render
- [ ] Skills listed correctly
- [ ] Hover states work
- [ ] Stagger animation works
- [ ] Mobile: single column

---

### Phase 12 — Tech Stack

**Goal:** Interactive technology ecosystem.

**Tasks:**

1. Create `src/sections/stack/StackSection.tsx`
   - SectionHeading + TechGrid

2. Create `src/sections/stack/TechGrid.tsx`
   - Category groups

3. Create `src/sections/stack/TechGroup.tsx`
   - Group label + technology cards

4. Create `src/sections/stack/TechCard.tsx`
   - Compact: icon + name
   - Hover: expand to show description
   - Touch: tap to expand

5. Content from `data/stack.ts`

**Verify:**
- [ ] Technologies grouped correctly
- [ ] Hover expand works (desktop)
- [ ] Tap expand works (mobile)
- [ ] Icons render correctly
- [ ] Stagger animation works

---

### Phase 13 — Hackathon Journey

**Goal:** Timeline storytelling with Odoo climax.

**Tasks:**

1. Create `src/sections/journey/JourneySection.tsx`
   - SectionHeading + JourneyTimeline

2. Create `src/sections/journey/JourneyTimeline.tsx`
   - Vertical line (draws in on scroll)
   - Maps over journey items

3. Create `src/sections/journey/TimelineItem.tsx`
   - Dot, date, content
   - Featured variant for Odoo

4. Create `src/sections/journey/TimelineDot.tsx`
   - Default: 8px muted
   - Featured: 12px accent + glow

5. Create `src/sections/journey/AchievementBadge.tsx`
   - Accent background, "FINALIST" text

6. Content from `data/journey.ts`

**Verify:**
- [ ] Timeline renders vertically
- [ ] Line draws in on scroll
- [ ] Odoo item has featured treatment
- [ ] Achievement badge renders
- [ ] Mobile timeline works
- [ ] Reduced motion: static

---

### Phase 14 — About Section

**Goal:** Personal intro + developer code-card.

**Tasks:**

1. Create `src/sections/about/AboutSection.tsx`
   - Two-column layout (desktop), stacked (mobile)

2. Create `src/sections/about/AboutText.tsx`
   - Editorial introduction
   - Content from `content.md`

3. Create `src/sections/about/CodeCard.tsx`
   - Terminal-style card
   - Syntax highlighting via CSS
   - Typing animation on scroll

**Verify:**
- [ ] Two-column layout correct
- [ ] Code card renders with syntax colors
- [ ] Typing animation works
- [ ] Reduced motion: instant reveal
- [ ] Mobile: stacked layout
- [ ] Font scales on mobile

---

### Phase 15 — Currently Learning

**Goal:** Learning topics with progress bars.

**Tasks:**

1. Create `src/sections/learning/LearningSection.tsx`
   - SectionHeading + TopicGrid

2. Create `src/sections/learning/TopicCard.tsx`
   - Topic name + progress bar
   - Hover: border accent, scale 1.02

3. Content from `data/learning.ts`

**Verify:**
- [ ] All topics render
- [ ] Progress bars animate on scroll
- [ ] Hover states work
- [ ] Mobile: single column

---

### Phase 16 — GitHub Section

**Goal:** Data-driven GitHub activity.

**Tasks:**

1. Create `src/services/github.service.ts`
   - API calls to GitHub
   - Error handling

2. Create `src/hooks/useGitHubData.ts`
   - TanStack Query wrapper
   - Caching, retry, stale time

3. Create `src/sections/github/GitHubSection.tsx`
   - Loading/error/data states

4. Create `src/components/github/GitHubStats.tsx`
   - 4 stat cards

5. Create `src/components/github/StatCard.tsx`
   - Number + label
   - Count-up animation

6. Create `src/components/github/ContributionGraph.tsx`
   - Heatmap visualization
   - Hover tooltips

7. Create `src/components/github/PinnedRepo.tsx`
   - Repository card

8. Create `src/components/github/LanguageBreakdown.tsx`
   - Language bars

**Verify:**
- [ ] Loading state shows skeletons
- [ ] Error state shows fallback
- [ ] Data renders correctly
- [ ] Stats count up on scroll
- [ ] Contribution graph renders
- [ ] Fallback works if API fails

---

### Phase 17 — Contact Section

**Goal:** Contact form with validation.

**Tasks:**

1. Create `src/sections/contact/ContactSection.tsx`
   - Heading + form + social links

2. Create `src/components/contact/ContactForm.tsx`
   - React Hook Form + Zod
   - Fields: name, email, message

3. Create `src/components/contact/FormField.tsx`
   - Label + input + error

4. Create `src/components/contact/SubmitButton.tsx`
   - Idle/loading states

5. Content from `content.md`

**Verify:**
- [ ] Form renders correctly
- [ ] Validation works (client-side)
- [ ] Error messages display
- [ ] Submitting state works
- [ ] Success toast appears
- [ ] Error toast appears
- [ ] Keyboard accessible
- [ ] Screen reader friendly

---

### Phase 18 — Command Palette

**Goal:** Quick navigation via cmdk.

**Tasks:**

1. Create `src/components/navigation/CommandMenuTrigger.tsx`
   - ⌘K badge button

2. Create `src/components/navigation/CommandMenu.tsx`
   - cmdk-based dialog
   - Navigation, theme, project commands
   - Search filtering
   - Keyboard navigation

3. Create `src/hooks/useCommandMenu.ts`
   - Open/close state
   - ⌘K / Ctrl+K listener

**Verify:**
- [ ] ⌘K opens palette
- [ ] Search filters commands
- [ ] Arrow keys navigate
- [ ] Enter selects
- [ ] Escape closes
- [ ] Focus trapped
- [ ] Theme commands work
- [ ] Navigation commands scroll to section

---

### Phase 19 — Responsive Pass

**Goal:** Dedicated responsive testing and refinement.

**Tasks:**

1. Test every section at all breakpoints:
   - Large Desktop (1440+)
   - Desktop (1024-1439)
   - Tablet (768-1023)
   - Mobile (< 768)

2. Fix any layout issues
3. Verify typography scaling
4. Verify spacing adjustments
5. Verify navigation behavior
6. Verify touch interactions
7. Verify animation reduction

**Check:**
- [ ] Large Desktop: full grid, full animations
- [ ] Desktop: full grid, full animations
- [ ] Tablet: simplified grid, reduced animations
- [ ] Mobile: single column, minimal animations
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets 44px minimum
- [ ] No content overflow

---

### Phase 20 — Dark/Light Polish

**Goal:** Perfect both themes.

**Tasks:**

1. Test every component in dark mode
2. Test every component in light mode
3. Verify contrast ratios
4. Verify border visibility
5. Verify shadow subtlety
6. Verify accent color consistency
7. Verify image treatment
8. Verify hover/focus states

**Check:**
- [ ] Dark mode: premium, cinematic
- [ ] Light mode: clean, editorial
- [ ] Same brand identity in both
- [ ] No hardcoded colors in components
- [ ] All tokens used correctly
- [ ] Theme transition smooth (400ms)

---

### Phase 21 — Accessibility Pass

**Goal:** Full accessibility audit.

**Tasks:**

1. Keyboard navigation test (Tab through entire page)
2. Screen reader test (if available)
3. Focus visibility test
4. Heading hierarchy check (h1 → h2 → h3)
5. Alt text audit
6. Color contrast audit (WCAG AA)
7. Form accessibility test
8. Reduced motion test
9. Touch target audit

**Check:**
- [ ] All interactive elements focusable
- [ ] Focus ring visible on all
- [ ] Skip link works
- [ ] Heading hierarchy correct
- [ ] Forms have labels
- [ ] Errors announced to screen readers
- [ ] Contrast passes WCAG AA
- [ ] Reduced motion respected
- [ ] Touch targets ≥ 44px

---

### Phase 22 — Performance Pass

**Goal:** Optimize for speed.

**Tasks:**

1. Run `npm run build` — check output size
2. Audit images (WebP, lazy loading, dimensions)
3. Check for unnecessary re-renders
4. Verify animation performance (transform/opacity only)
5. Check font loading
6. Verify code splitting (if applicable)

**Targets:**
- Initial JS bundle: < 200KB gzipped
- No layout shift (CLS < 0.1)
- First contentful paint: < 1.5s
- Time to interactive: < 3s

**Check:**
- [ ] Build size acceptable
- [ ] No layout shift
- [ ] Images optimized
- [ ] Animations smooth
- [ ] No unnecessary JavaScript

---

### Phase 23 — SEO Pass

**Goal:** Search engine optimization.

**Tasks:**

1. Update `index.html`:
   - `<title>` from `content.md`
   - `<meta name="description">` from `content.md`
   - Open Graph tags
   - Twitter card tags
   - Canonical URL
   - Favicon

2. Verify semantic HTML
3. Create `public/robots.txt`
4. Create OG image (1200×630)

**Check:**
- [ ] Title correct
- [ ] Description correct
- [ ] OG tags present
- [ ] Twitter tags present
- [ ] Semantic HTML correct
- [ ] robots.txt present

---

### Phase 24 — Error/Edge Cases

**Goal:** Graceful failure handling.

**Tasks:**

1. Test missing project images
2. Test GitHub API failure
3. Test contact form failure
4. Test invalid form input
5. Test mobile menu edge cases
6. Test theme persistence
7. Test unknown routes (if router added)

**Check:**
- [ ] Missing image: placeholder renders
- [ ] GitHub failure: fallback data shows
- [ ] Form failure: toast + form preserved
- [ ] Invalid input: error messages clear
- [ ] Theme persists across reload
- [ ] No blank screens

---

### Phase 25 — Quality Pass

**Goal:** Final code quality check.

**Tasks:**

1. Run TypeScript check:
   ```bash
   npm run build
   ```

2. Run ESLint:
   ```bash
   npm run lint
   ```

3. Run Prettier:
   ```bash
   npm run format
   ```

4. Fix any errors
5. Fix any warnings
6. Remove unused imports
7. Remove console.logs

**Check:**
- [ ] Zero TypeScript errors
- [ ] Zero ESLint errors
- [ ] Code formatted
- [ ] No console errors
- [ ] No unused variables

---

### Phase 26 — Visual Polish

**Goal:** Final design review.

**Tasks:**

1. Typography review
   - Hierarchy correct
   - Line heights correct
   - Letter spacing correct
   - Editorial feel achieved

2. Layout review
   - Grid alignment perfect
   - Whitespace intentional
   - Section rhythm consistent

3. Component review
   - Consistency across all
   - Hover states polished
   - Focus states visible
   - Border treatment consistent

4. Motion review
   - Timing feels right
   - Easing curves smooth
   - Stagger not too fast/slow
   - Scroll behavior natural

5. Branding review
   - Digital Editorial identity clear
   - Developer identity clear
   - Dark/light consistency

**Check:**
- [ ] Typography feels editorial
- [ ] Layout feels Swiss-inspired
- [ ] Components feel premium
- [ ] Motion feels cinematic
- [ ] Brand identity clear

---

### Phase 27 — Production Verification

**Goal:** Final build and deployment check.

**Tasks:**

1. Clean build:
   ```bash
   npm run build
   ```

2. Preview production build:
   ```bash
   npm run preview
   ```

3. Test production build in browser
4. Verify all features work in production
5. Verify no development artifacts

**Check:**
- [ ] `npm run build` succeeds
- [ ] `npm run preview` works
- [ ] All sections render
- [ ] All interactions work
- [ ] No 404 assets
- [ ] Ready for deployment

---

## 5. IMPLEMENTATION CHECKPOINTS

After every phase:

1. Run `npm run build` — verify no TypeScript errors
2. Run `npm run lint` — verify no ESLint errors
3. Run `npm run dev` — verify in browser
4. Check browser console — no errors
5. Test the implemented feature
6. Fix regressions before moving forward

**Never stack broken phases.** Each phase must be complete and verified before starting the next.

---

## 6. DEFINITION OF DONE

A phase is complete only when:

- [ ] UI matches `design.md`
- [ ] Content matches `content.md`
- [ ] Architecture matches `architecture.md`
- [ ] Component behavior matches `components.md`
- [ ] Dark mode works
- [ ] Light mode works
- [ ] Responsive behavior works
- [ ] Accessibility requirements satisfied
- [ ] No unnecessary warnings/errors
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes

---

## 7. AI IMPLEMENTATION RULES

### MUST

- Read relevant documentation before modifying a component
- Reuse existing components
- Reuse existing design tokens
- Reuse existing motion primitives
- Keep content data-driven
- Use TypeScript strictly
- Preserve accessibility
- Test after meaningful changes
- Follow the phase order

### MUST NOT

- Rewrite the entire project unnecessarily
- Replace the selected stack without reason
- Install random packages
- Create duplicate components
- Duplicate content
- Add fake information
- Add fake achievements
- Add fake metrics
- Add unnecessary animations
- Add unnecessary 3D/WebGL
- Add unnecessary global state
- Ignore mobile
- Ignore reduced motion
- Ignore keyboard accessibility
- Skip phases

---

## 8. CHANGE MANAGEMENT

Before making a major architectural change:

```
Problem: [What is wrong]
Current approach: [How it works now]
Why insufficient: [Why it needs to change]
Proposed approach: [What to change to]
Impact: [What is affected]
Alternative considered: [Other options]
```

Do not silently change architecture.

---

## 9. DEBUGGING STRATEGY

When an issue appears:

1. Reproduce it
2. Identify the smallest failing component
3. Check console errors
4. Check TypeScript errors
5. Check data flow
6. Check CSS/layout
7. Check animation
8. Fix the root cause
9. Verify adjacent components

Avoid random changes until the error disappears.

---

## 10. COMMANDS REFERENCE

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build (tsc + vite) |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint check |
| `npm run lint:fix` | ESLint auto-fix |
| `npm run format` | Prettier format |

---

## 11. DECISIONS LOG

Record architectural decisions made during implementation:

| Date | Decision | Reason | Impact |
|---|---|---|---|
| — | — | — | — |

(Entries added as decisions are made during implementation.)

---

## 12. FINAL PROJECT CHECKLIST

### Foundation

- [ ] React 19 configured
- [ ] TypeScript strict mode
- [ ] Tailwind CSS v4 configured
- [ ] Design tokens in CSS
- [ ] Theme system working
- [ ] Typography loading

### Layout

- [ ] Navbar (desktop + mobile)
- [ ] Footer
- [ ] Container system
- [ ] Section spacing
- [ ] 12-column grid

### Motion

- [ ] Reveal
- [ ] Stagger
- [ ] TextReveal
- [ ] ImageReveal
- [ ] Parallax
- [ ] Magnetic
- [ ] Marquee
- [ ] Reduced motion support

### Content

- [ ] Hero
- [ ] Marquee
- [ ] Proof
- [ ] Work
- [ ] Engineering
- [ ] Stack
- [ ] Journey
- [ ] About
- [ ] Learning
- [ ] GitHub
- [ ] Contact
- [ ] Footer

### Navigation

- [ ] Desktop nav
- [ ] Mobile menu
- [ ] Theme toggle
- [ ] Command palette
- [ ] Anchor scrolling

### Quality

- [ ] Dark mode
- [ ] Light mode
- [ ] Mobile responsive
- [ ] Tablet responsive
- [ ] Accessibility
- [ ] Performance
- [ ] SEO
- [ ] Error handling
- [ ] Build passes
- [ ] Lint passes

---

## FINAL RULE

`implementation.md` is the execution roadmap.

Every phase is incremental and verifiable. Every phase has clear tasks and clear success criteria.

The project is built phase by phase, verified at each step, never stacked broken.

The relationship:

```
theme.md → what it looks like
design.md → where content goes
content.md → what content says
architecture.md → how it's built
components.md → what components exist
implementation.md → when to build each piece
```

No actual portfolio UI was implemented in the creation of this document.
