# React Component Specification

> The implementation specification for every React component in the portfolio.
> `theme.md` → visual rules. `design.md` → UX rules. `content.md` → content. `architecture.md` → tech rules. `components.md` → component rules.

---

## 1. COMPONENT ARCHITECTURE

### Hierarchy

```
Application (App.tsx)
│
├── Providers (ThemeProvider, QueryClientProvider, Toaster)
│
├── Layout
│   ├── Navbar
│   │   ├── Logo
│   │   ├── NavLinks
│   │   ├── ThemeToggle
│   │   ├── CommandMenuTrigger
│   │   └── MobileMenuTrigger
│   │
│   ├── MobileMenu (overlay)
│   │
│   ├── CommandMenu (cmdk dialog)
│   │
│   ├── Main
│   │   ├── HeroSection
│   │   ├── MarqueeSection
│   │   ├── ProofSection
│   │   ├── WorkSection
│   │   ├── EngineeringSection
│   │   ├── StackSection
│   │   ├── JourneySection
│   │   ├── AboutSection
│   │   ├── LearningSection
│   │   ├── GitHubSection
│   │   └── ContactSection
│   │
│   └── Footer
│       ├── FooterBrand
│       └── SocialLinks
│
├── Overlays
│   ├── Cursor
│   ├── ScrollProgress
│   └── BackToTop
│
└── UI Primitives (shadcn/ui)
    ├── Button
    ├── Badge
    ├── Card
    ├── Input
    ├── Textarea
    ├── Separator
    ├── Tooltip
    └── Dialog
```

### Layer Rules

- UI Primitives → domain-agnostic, reusable anywhere
- Layout → structural wrappers, no content
- Navigation → site navigation only
- Motion → reusable animation primitives
- Shared → used in 3+ sections
- Feature → domain-specific, reusable within feature
- Sections → full page sections, compose lower layers
- App → root composition only

---

## 2. COMPONENT CATEGORIES

### UI Primitives (`components/ui/`)

shadcn/ui components. Auto-generated, not hand-written.

| Component | Source |
|---|---|
| Button | shadcn/ui |
| Badge | shadcn/ui |
| Card | shadcn/ui |
| Input | shadcn/ui |
| Textarea | shadcn/ui |
| Separator | shadcn/ui |
| Tooltip | shadcn/ui |
| Dialog | shadcn/ui |

These remain generic. No portfolio-specific logic.

### Layout (`components/layout/`)

| Component | Purpose |
|---|---|
| Container | Max-width wrapper with responsive padding |
| Section | Section wrapper with vertical spacing |
| Grid | 12-column Swiss grid |

### Navigation (`components/navigation/`)

| Component | Purpose |
|---|---|
| Navbar | Sticky top navigation bar |
| NavLinks | Desktop navigation links |
| NavLink | Individual nav link with active state |
| MobileMenu | Full-screen mobile overlay |
| ThemeToggle | Dark/light mode switch |
| CommandMenuTrigger | ⌘K button that opens command palette |
| CommandMenu | cmdk-based command palette |

### Motion (`components/motion/`)

| Component | Purpose |
|---|---|
| Reveal | Scroll-triggered entrance animation |
| FadeIn | Simple opacity entrance |
| TextReveal | Character/word stagger reveal |
| Stagger | Container with sequential child animation |
| Parallax | Scroll-driven Y translation |
| Magnetic | Cursor magnetic pull for CTAs |
| ImageReveal | Clip-path image entrance |
| Marquee | Infinite horizontal scroll |

### Shared (`components/shared/`)

| Component | Purpose |
|---|---|
| SectionHeading | Consistent section title layout |
| SectionLabel | Small label above section heading |
| SocialLinks | Social link icon buttons |
| ExternalLink | Link with `target="_blank"` behavior |
| BackToTop | Scroll-to-top button |
| ScrollProgress | Top progress bar |
| Cursor | Custom cursor |

### Feature — Project (`components/project/`)

| Component | Purpose |
|---|---|
| ProjectCard | Full project showcase card |
| ProjectVisual | Project image with hover effects |
| ProjectMeta | Project number, name, description, tags |
| ProjectNumber | Editorial project number |
| ProjectTags | Technology badge row |
| ProjectCTA | "VIEW PROJECT →" link |

### Feature — Journey (`components/journey/`)

| Component | Purpose |
|---|---|
| JourneyTimeline | Vertical timeline container |
| TimelineItem | Individual timeline entry |
| TimelineDot | Timeline node indicator |
| AchievementBadge | Featured achievement highlight |

### Feature — Stack (`components/stack/`)

| Component | Purpose |
|---|---|
| TechGrid | Technology grid layout |
| TechGroup | Category group (Frontend, Backend, etc.) |
| TechCard | Individual technology card |

### Feature — GitHub (`components/github/`)

| Component | Purpose |
|---|---|
| GitHubStats | Statistics cards |
| StatCard | Individual stat number |
| ContributionGraph | Heatmap visualization |
| PinnedRepo | Repository card |
| LanguageBreakdown | Language bars |

### Feature — Contact (`components/contact/`)

| Component | Purpose |
|---|---|
| ContactForm | Form with validation |
| FormField | Label + input + error wrapper |
| SubmitButton | Button with loading states |

---

## 3. COMPONENT SPECIFICATION FORMAT

Every significant component is specified with:

| Field | Description |
|---|---|
| **Purpose** | What problem it solves |
| **Location** | Folder path |
| **Used By** | Parent components |
| **Props** | Typed interface |
| **Variants** | Visual variations |
| **States** | Interaction states |
| **Responsive** | Breakpoint behavior |
| **Theme** | Dark/light behavior |
| **Motion** | Animation behavior |
| **Accessibility** | A11y requirements |
| **Dependencies** | Libraries used |
| **Composition** | Child components |

---

## 4. UI PRIMITIVES

### Button

**Purpose:** Trigger actions.

**Location:** `components/ui/button.tsx` (shadcn/ui)

**Variants:**

| Variant | Usage |
|---|---|
| Primary | Accent background, dark text. Hero CTAs, form submit. |
| Secondary | Transparent bg, border. Secondary actions. |
| Ghost | No bg/border. Nav links, icon buttons. |
| Outline | Border, no bg. Alternative actions. |

**Sizes:**

| Size | Padding | Font | Usage |
|---|---|---|---|
| sm | 8px 16px | Caption, 600 | Compact actions |
| md | 12px 24px | Label, 600 | Default |
| lg | 14px 32px | Label, 600 | Hero CTAs |
| icon | 40px × 40px | — | Icon-only buttons |

**States:**

| State | Behavior |
|---|---|
| Default | Defined variant styling |
| Hover | Background darken, -1px Y translate (200ms, spring easing) |
| Active | Scale 0.98, darker background |
| Focus | Accent ring (2px, 2px offset) |
| Disabled | 50% opacity, cursor not-allowed, no hover effect |
| Loading | Spinner icon replaces content, disabled |

**Magnetic:** Only on hero primary CTA. Radius 40px, strength 0.3.

**Accessibility:** `<button>` element. `aria-label` if icon-only. Focus ring always visible.

---

### Badge

**Purpose:** Categorize, label, status.

**Location:** `components/ui/badge.tsx` (shadcn/ui)

**Variants:**

| Variant | Background | Text | Usage |
|---|---|---|---|
| Default | secondary | secondary-fg | Default labels |
| Accent | accent | accent-fg | Featured items, achievements |
| Outline | transparent | fg | Subtle tags |
| Status | varies | varies | Success/warning/error |

**Sizes:**

| Size | Padding | Font |
|---|---|---|
| sm | 2px 8px | Caption |
| md | 4px 10px | Caption |

**Accessibility:** Semantic `<span>` or `<div>`. `role="status"` for status badges.

---

### Card

**Purpose:** Contain related content.

**Location:** `components/ui/card.tsx` (shadcn/ui)

**Variants:**

| Variant | Border | Radius | Shadow | Usage |
|---|---|---|---|---|
| Default | 1px solid --border | 8px | none | Standard cards |
| Interactive | 1px solid --border | 8px | none (medium on hover) | Clickable cards |
| Featured | 1px solid --border | 12px | none | Highlighted cards |

**States:**

| State | Behavior |
|---|---|
| Default | Border defined, card bg |
| Hover (interactive) | +1px Y, medium shadow, border accent reveal (300ms) |
| Focus (interactive) | Accent ring |
| Active (interactive) | Scale 0.99 |

**Theme:** Uses `--card` and `--card-foreground` tokens. Automatic dark/light.

---

### Input

**Purpose:** Text input fields.

**Location:** `components/ui/input.tsx` (shadcn/ui)

**States:**

| State | Behavior |
|---|---|
| Default | Border --input, transparent bg |
| Hover | Border slightly stronger |
| Focus | Accent ring, accent border (200ms) |
| Error | Error border, error message below |
| Disabled | Muted bg, reduced opacity |
| Placeholder | Muted foreground color |

**Accessibility:** `<input>` with associated `<label>`. `aria-describedby` for errors. `aria-required` for required fields.

---

### Textarea

**Purpose:** Multi-line text input.

**Location:** `components/ui/textarea.tsx` (shadcn/ui)

**Same rules as Input.** Additional:

- Min-height: 120px
- Resizable: vertical only

---

### IconButton

**Purpose:** Icon-only actions.

**Location:** `components/ui/button.tsx` (using Button with `size="icon"`)

**Rules:**
- Minimum 40px × 40px (44px on mobile)
- Always has `aria-label`
- Tooltip on hover (optional but recommended)
- Same states as Button

---

## 5. NAVIGATION COMPONENTS

### Navbar

**Purpose:** Site navigation, theme toggle, command palette trigger.

**Location:** `components/navigation/Navbar.tsx`

**Used By:** `App.tsx` (layout)

**Props:** None (reads from `data/navigation.ts`)

**Structure:**

```
Navbar
├── Logo ("SD")
├── NavLinks (desktop)
│   └── NavLink (×5)
├── ThemeToggle
├── CommandMenuTrigger
└── MobileMenuTrigger (mobile only)
```

**States:**

| State | Behavior |
|---|---|
| Top | Transparent background, no shadow |
| Scrolled | backdrop-blur-md, subtle shadow, border-bottom 8% opacity |
| Mobile | Logo + ThemeToggle + Hamburger |
| Menu open | Hamburger transforms to X |

**Responsive:**

| Breakpoint | Behavior |
|---|---|
| Desktop (1024+) | Full inline links |
| Tablet (768-1023) | Reduced links, hamburger for extras |
| Mobile (< 768) | Hamburger only |

**Motion:**
- Logo fades in (300ms)
- Links stagger from right (80ms each, 200ms)
- Scroll transition: background/shadow 200ms

**Accessibility:**
- `<header>` landmark
- `<nav>` with `aria-label="Main navigation"`
- Skip link as first focusable element
- Focus ring on all interactive elements
- Escape closes mobile menu

**Dependencies:** next-themes (for ThemeToggle)

---

### NavLink

**Purpose:** Individual navigation link with active state.

**Location:** `components/navigation/NavLink.tsx`

**Props:**

```typescript
interface NavLinkProps {
  label: string;
  href: string;
}
```

**States:**

| State | Behavior |
|---|---|
| Default | Foreground text, no underline |
| Hover | Accent text, underline slides in from left (300ms) |
| Active | Accent text + persistent underline |
| Focus | Accent ring |

**Responsive:** Hidden on mobile (part of MobileMenu).

**Accessibility:** `<a>` element. `aria-current="page"` for active state.

---

### MobileMenu

**Purpose:** Full-screen mobile navigation overlay.

**Location:** `components/navigation/MobileMenu.tsx`

**Props:**

```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**States:**

| State | Behavior |
|---|---|
| Closed | Hidden, `display: none` |
| Opening | Overlay fades in (200ms), links stagger from bottom (80ms each) |
| Open | Full screen, links visible |
| Closing | Links fade (100ms), overlay fades (150ms) |

**Behavior:**
- Links: Work, About, Stack, Journey, Contact
- Click link → close menu → smooth scroll to section
- Escape key → close menu
- Focus trapped inside menu when open
- Scroll locked when open

**Accessibility:**
- `role="dialog"`
- `aria-modal="true"`
- `aria-label="Navigation menu"`
- Focus trap
- Return focus to trigger on close

**Dependencies:** Motion (animation), body scroll lock

---

### ThemeToggle

**Purpose:** Switch between dark and light mode.

**Location:** `components/navigation/ThemeToggle.tsx`

**Props:** None

**States:**

| State | Behavior |
|---|---|
| Dark mode | Sun icon |
| Light mode | Moon icon |
| Hover | Background accent-muted, scale 1.05 (200ms, spring) |
| Focus | Accent ring |
| Toggle | 400ms icon morph with rotation + scale |

**Accessibility:**
- `aria-label="Switch to light mode"` / `"Switch to dark mode"`
- `<button>` element
- Focus ring visible

**Dependencies:** next-themes, Lucide (Sun, Moon icons)

---

### CommandMenu

**Purpose:** Quick navigation and theme commands.

**Location:** `components/navigation/CommandMenu.tsx`

**Props:**

```typescript
interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**Commands:**

| Group | Commands |
|---|---|
| Navigation | Work, About, Stack, Journey, Contact |
| Theme | Switch to Light, Switch to Dark |
| Projects | FlowSync AI, WorkOS, Assetrix, CAMPUS360 |
| Links | GitHub, LinkedIn, [Resume] |

**States:**

| State | Behavior |
|---|---|
| Closed | Hidden |
| Opening | Backdrop blur + fade (200ms), modal scales 0.95 → 1 (300ms) |
| Open | Search input focused, results listed |
| Closing | Reverse (200ms) |

**Behavior:**
- Trigger: ⌘K (macOS) or Ctrl+K (others)
- Search: instant filter as user types
- Result hover: background highlight, accent left border
- Select: close palette, execute action (scroll/navigate)
- Escape: close
- Arrow keys: navigate results
- Enter: select result

**Accessibility:**
- `role="dialog"`
- `aria-modal="true"`
- `aria-label="Command palette"`
- Focus trap
- Search input has `role="combobox"`

**Dependencies:** cmdk

---

## 6. HERO COMPONENTS

### HeroSection

**Purpose:** First impression — identity, role, personality.

**Location:** `sections/hero/HeroSection.tsx`

**Used By:** `App.tsx`

**Structure:**

```
HeroSection
├── HeroContent
│   ├── StatusIndicator
│   ├── HeroName
│   ├── HeroRole
│   ├── HeroDescription
│   └── HeroActions
└── HeroVisual
```

**Layout:** Full viewport height (or near). Two-column on desktop (content left, visual right). Stacked on mobile.

**Responsive:**

| Breakpoint | Layout |
|---|---|
| Desktop | Two-column, 60/40 split |
| Tablet | Stacked, visual below content |
| Mobile | Stacked, visual below content |

**Motion:** Cinematic entrance sequence (see HeroContent, HeroVisual).

---

### HeroContent

**Purpose:** Render hero text content.

**Location:** `sections/hero/HeroContent.tsx`

**Props:** None (reads from `data/site.ts`)

**Content:**

| Element | Typography | Animation |
|---|---|---|
| Status | Label, accent | Fade in + scale (400ms, delay 200ms) |
| Name (SHUBHAM) | Display XL | Clip reveal (600ms, delay 400ms) |
| Name (DANGI) | Display XL | Clip reveal (600ms, delay 500ms) |
| Role (FRONTEND) | Display LG, accent | Fade up (500ms, delay 700ms) |
| Role (DEVELOPER) | Display LG, accent | Fade up (500ms, delay 800ms) |
| Description | Body Large, muted | Fade in (500ms, delay 1000ms) |

**Reduced Motion:** All text appears instantly (opacity only, no transforms).

---

### HeroVisual

**Purpose:** Geometric abstract composition.

**Location:** `sections/hero/HeroVisual.tsx`

**Props:** None

**Visual Elements:**
- Overlapping rectangles, circles, lines at low accent opacity
- Faint 12-column grid lines (3% opacity)
- Large "01" number (200px, 5% opacity) as background element

**Interaction:**
- Mouse movement → parallax on elements (different speeds)
- Reduced on tablet, disabled on mobile

**Motion:**
- Clip reveal + scale 1.05 → 1 (700ms, delay 600ms)
- Continuous subtle parallax on mouse move (desktop only)

**Reduced Motion:** Static, no parallax, no continuous animation.

---

### HeroActions

**Purpose:** CTA buttons and social links.

**Location:** `sections/hero/HeroActions.tsx`

**Props:** None (reads from `data/site.ts`)

**Content:**
- Primary CTA: "EXPLORE WORK" (accent button, magnetic)
- Secondary CTA: "DOWNLOAD RESUME" or "GET IN TOUCH" (secondary button)
- Social links: GitHub, LinkedIn, Twitter

**Motion:**
- Buttons fade up (400ms, delay 1200ms)
- Social links fade in (400ms, delay 1400ms)

**Accessibility:** Buttons are `<button>` or `<a>`. Social links have `aria-label`.

---

## 7. MARQUEE COMPONENT

### MarqueeSection

**Purpose:** Horizontal scrolling brand statement.

**Location:** `sections/marquee/MarqueeSection.tsx`

**Used By:** `App.tsx`

**Structure:**

```
MarqueeSection
├── Marquee (component/motion)
│   └── "BUILD • SHIP • LEARN • ITERATE •" (repeated)
└── StatementText
```

**Props:** None (content from `data/site.ts`)

**Marquee Configuration:**

| Setting | Value |
|---|---|
| Content | "BUILD • SHIP • LEARN • ITERATE •" |
| Direction | Left to right |
| Speed | 30px/sec (desktop), 20px/sec (mobile) |
| Typography | Display LG, uppercase, muted foreground |
| Gap | 40px around separator "•" |
| Loop | Infinite |

**Statement:**
- Below marquee, centered
- Body Large, muted foreground
- Max width: 600px
- Fade in on scroll (15% visible)

**Reduced Motion:** Marquee stops — displays as static text.

**Dependencies:** CSS animation (preferred) or Motion for the marquee loop.

---

## 8. PROOF COMPONENTS

### ProofSection

**Purpose:** Quick credibility — bento grid of achievements/capabilities.

**Location:** `sections/proof/ProofSection.tsx`

**Used By:** `App.tsx`

**Structure:**

```
ProofSection
├── SectionHeading
└── ProofGrid (CSS Grid)
    ├── ProofCard (Odoo — featured, 8 cols × 2 rows)
    ├── ProofCard (Frontend Engineering, 4 cols)
    ├── ProofCard (React 19, 4 cols)
    ├── ProofCard (Product Builder, 4 cols)
    └── ProofCard (Modern Stack, 4 cols)
```

**Props:** None (reads from `data/proof.ts`)

**Grid:** Bento layout with varied spans. See design.md section 6.

---

### ProofCard

**Purpose:** Individual proof item in bento grid.

**Location:** `sections/proof/ProofCard.tsx`

**Props:**

```typescript
interface ProofCardProps {
  label: string;
  title: string;
  description: string;
  icon?: string; // Lucide icon name
  featured?: boolean;
  metadata?: string;
}
```

**Variants:**

| Variant | Grid Span | Treatment |
|---|---|---|
| Default | 4 cols | Standard card |
| Featured | 8 cols × 2 rows | Larger, accent border on hover |

**States:**

| State | Behavior |
|---|---|
| Default | Border, card bg, radius 8px |
| Hover | Scale 1.01, border accent, medium shadow (300ms) |
| Featured hover | Same + accent glow (15% opacity) |

**Motion:**
- Stagger from bottom (80ms each)
- Featured card enters first (0ms delay)

**Responsive:** All cards full width on mobile.

---

## 9. PROJECT COMPONENT SYSTEM

### ProjectCard

**Purpose:** Full project showcase — visual + meta + CTA.

**Location:** `components/project/ProjectCard.tsx`

**Props:**

```typescript
interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}
```

**Structure:**

```
ProjectCard
├── ProjectNumber
├── ProjectVisual
├── ProjectMeta
│   ├── ProjectName
│   ├── ProjectDescription
│   └── ProjectTags
└── ProjectCTA
```

**States:**

| State | Behavior |
|---|---|
| Default | Border, card bg, full width |
| Hover | Border accent (300ms), image scale 1.03 (400ms), CTA slides in |
| Focus | Accent ring |
| Click | Navigate to case study (or external link) |

**Motion:**
- Fade up on scroll entry (15% visible)
- No artificial stagger — natural scroll position determines timing

**Responsive:**

| Breakpoint | Changes |
|---|---|
| Desktop | Full layout, all elements |
| Tablet | Slightly smaller visual |
| Mobile | Full-width visual, H3 instead of H2, project number hidden |

---

### ProjectVisual

**Purpose:** Project image with hover effects.

**Location:** `components/project/ProjectVisual.tsx`

**Props:**

```typescript
interface ProjectVisualProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3";
}
```

**States:**

| State | Behavior |
|---|---|
| Default | Full opacity, aspect-ratio locked, object-fit cover |
| Loading | Skeleton placeholder (muted bg, shimmer) |
| Hover | Scale 1.03, brightness 1.05 (400ms, ease-out) |
| Loaded | Opacity 0 → 1 (400ms) |

**Accessibility:** `alt` text required. `loading="lazy"` for below-fold.

---

### ProjectNumber

**Purpose:** Editorial project number (01, 02, etc.).

**Location:** `components/project/ProjectNumber.tsx`

**Props:**

```typescript
interface ProjectNumberProps {
  number: string;
}
```

**Typography:** Display LG (56px, 700), muted foreground at 20% opacity.

**Responsive:** Hidden on mobile.

---

### ProjectTags

**Purpose:** Technology badge row.

**Location:** `components/project/ProjectTags.tsx`

**Props:**

```typescript
interface ProjectTagsProps {
  tags: string[];
}
```

**Render:** Row of Badge components (outline variant).

---

### ProjectCTA

**Purpose:** "VIEW PROJECT →" link.

**Location:** `components/project/ProjectCTA.tsx`

**Props:**

```typescript
interface ProjectCTAProps {
  href: string;
  label?: string;
}
```

**Default label:** "VIEW PROJECT →"

**States:**

| State | Behavior |
|---|---|
| Default | Label text |
| Hover | Accent text, arrow translates X +4px (200ms) |
| Focus | Accent ring |

---

## 10. CASE STUDY COMPONENTS

**Decision:** Case study pages (`/work/:slug`) are optional and should only be implemented if the project data supports it. These components are defined here for completeness but are marked as **Phase 7** in implementation.

### ProjectHero

**Purpose:** Case study page header.

**Props:** `project: Project`

**Content:** Project number, name, category, key visual.

---

### ProjectOverview

**Purpose:** Project summary.

**Props:** `project: Project`

---

### ProjectProblem

**Purpose:** Problem statement.

**Props:** `problem: string`

---

### ProjectSolution

**Purpose:** Solution approach.

**Props:** `solution: string`

---

### ProjectFeatures

**Purpose:** Key features list.

**Props:** `features: string[]`

---

### ProjectShowcase

**Purpose:** Full-width screenshot gallery.

**Props:** `images: string[]`

---

### ProjectArchitecture

**Purpose:** Technical architecture description.

**Props:** `architecture: string`

---

### ProjectTechnology

**Purpose:** Tech stack badges.

**Props:** `techStack: string[]`

---

### ProjectChallenges

**Purpose:** Implementation challenges.

**Props:** `challenges: string[]`

---

### ProjectOutcome

**Purpose:** Results and learnings.

**Props:** `outcome: string`

---

### CaseStudyNavigation

**Purpose:** Previous/Next project navigation.

**Props:** `previous?: Project`, `next?: Project`

---

## 11. ENGINEERING COMPONENTS

### EngineeringSection

**Purpose:** Frontend engineering capabilities.

**Location:** `sections/engineering/EngineeringSection.tsx`

**Used By:** `App.tsx`

**Structure:**

```
EngineeringSection
├── SectionHeading
└── CategoryGrid (2×2 on desktop, stacked on mobile)
    ├── CategoryCard (UI Engineering)
    ├── CategoryCard (React Ecosystem)
    ├── CategoryCard (Styling)
    └── CategoryCard (Application Dev)
```

**Props:** None (reads from `data/skills.ts`)

---

### CategoryCard

**Purpose:** Engineering category with skills list.

**Location:** `sections/engineering/CategoryCard.tsx`

**Props:**

```typescript
interface CategoryCardProps {
  category: SkillCategory;
}
```

**Content:**
- Category label (Label, uppercase, accent)
- Icon (Lucide, 20px)
- Skill list: name + brief description

**States:**

| State | Behavior |
|---|---|
| Default | Border, muted bg |
| Hover | Border accent reveal, shadow elevation |

**Motion:**
- Cards stagger in (80ms each)
- Skills within stagger (40ms each) after parent enters

---

## 12. TECHNOLOGY COMPONENTS

### TechGrid

**Purpose:** Technology ecosystem layout.

**Location:** `sections/stack/TechGrid.tsx`

**Structure:**

```
TechGrid
├── TechGroup (Frontend)
│   └── TechCard (×N)
├── TechGroup (Backend)
│   └── TechCard (×N)
├── TechGroup (Database)
│   └── TechCard (×N)
└── TechGroup (Tools)
    └── TechCard (×N)
```

**Props:** None (reads from `data/stack.ts`)

---

### TechGroup

**Purpose:** Category group with label.

**Location:** `sections/stack/TechGroup.tsx`

**Props:**

```typescript
interface TechGroupProps {
  label: string;
  technologies: Technology[];
}
```

---

### TechCard

**Purpose:** Individual technology card with expand on hover.

**Location:** `sections/stack/TechCard.tsx`

**Props:**

```typescript
interface TechCardProps {
  technology: Technology;
}
```

**States:**

| State | Behavior |
|---|---|
| Default | Border, muted bg, compact (icon + name) |
| Hover | Expand vertically, show description + related projects (300ms) |
| Focus | Accent ring |

**Responsive:** Full width on mobile, no expand (tap to expand instead).

**Motion:**
- Cards stagger in (60ms each)
- Expand animation (300ms, ease-out)

---

## 13. JOURNEY COMPONENTS

### JourneySection

**Purpose:** Hackathon timeline storytelling.

**Location:** `sections/journey/JourneySection.tsx`

**Used By:** `App.tsx`

**Structure:**

```
JourneySection
├── SectionHeading
└── JourneyTimeline
    └── TimelineItem (×N)
```

**Props:** None (reads from `data/journey.ts`)

---

### JourneyTimeline

**Purpose:** Vertical timeline container.

**Location:** `sections/journey/JourneyTimeline.tsx`

**Props:**

```typescript
interface JourneyTimelineProps {
  items: JourneyItem[];
}
```

**Visual:**
- Vertical line: 1px, muted foreground at 30% opacity
- Line draws in on scroll (clip-path, 1000ms)

---

### TimelineItem

**Purpose:** Individual timeline entry.

**Location:** `sections/journey/TimelineItem.tsx`

**Props:**

```typescript
interface TimelineItemProps {
  item: JourneyItem;
  index: number;
}
```

**Structure:**

```
TimelineItem
├── TimelineDot
├── TimelineDate
└── TimelineContent
    ├── EventName
    ├── EventDescription
    └── AchievementBadge (if featured)
```

**States:**

| State | Behavior |
|---|---|
| Default | Muted dot, standard card |
| Featured (Odoo) | Accent dot, accent border, accent bg, "FINALIST" badge |
| Past | Muted dot |

**Motion:**
- Node appears as line reaches it (50ms delay)
- Content fades up (350ms, 100ms stagger)
- Featured card: scale 0.95 → 1 + fade (500ms)

---

### TimelineDot

**Purpose:** Visual node indicator.

**Location:** `sections/journey/TimelineDot.tsx`

**Props:**

```typescript
interface TimelineDotProps {
  featured?: boolean;
}
```

**Visual:**
- Default: 8px, muted foreground fill
- Featured: 12px, accent fill, subtle glow

---

### AchievementBadge

**Purpose:** Highlight achievement (e.g., "GRAND FINALE FINALIST").

**Location:** `sections/journey/AchievementBadge.tsx`

**Props:**

```typescript
interface AchievementBadgeProps {
  text: string;
}
```

**Visual:** Accent background, dark text, Label typography, radius 4px.

---

## 14. ABOUT COMPONENTS

### AboutSection

**Purpose:** Personal introduction + code-card.

**Location:** `sections/about/AboutSection.tsx`

**Used By:** `App.tsx`

**Structure:**

```
AboutSection
├── SectionHeading
├── AboutText (editorial intro, left column)
└── CodeCard (developer code-card, right column)
```

**Layout:** Two-column on desktop (50/50), stacked on mobile (text above, code-card below).

**Props:** None (reads from `data/site.ts` and `content.md`)

---

### AboutText

**Purpose:** Editorial introduction.

**Location:** `sections/about/AboutText.tsx`

**Props:** None (content from `content.md`)

**Typography:** Body Large (18px, 400, 1.6). Max width: 480px.

**Motion:** Fade up on scroll entry.

---

### CodeCard

**Purpose:** Developer code-card (terminal-style).

**Location:** `sections/about/CodeCard.tsx`

**Props:** None (content from `data/site.ts`)

**Visual:**
- Background: muted surface
- Border: 1px solid --border
- Radius: 8px
- Font: Code (14px, monospace)
- Padding: 24px

**Syntax Treatment:**
- Keywords: accent color
- Strings: muted foreground
- Property names: foreground
- Comments: muted foreground at 50%

**Motion:**
- Types in character by character (50ms per character)
- Starts when card enters viewport (15% threshold)
- Cursor blinks during typing, disappears after

**Responsive:**
- Font scales to 12px on mobile
- Full width on mobile

**Reduced Motion:** Appears instantly, no typing animation.

---

## 15. LEARNING COMPONENTS

### LearningSection

**Purpose:** Currently learning topics with progress.

**Location:** `sections/learning/LearningSection.tsx`

**Used By:** `App.tsx`

**Structure:**

```
LearningSection
├── SectionHeading
└── TopicGrid (3-column desktop, 2-column tablet, 1-column mobile)
    └── TopicCard (×N)
```

**Props:** None (reads from `data/learning.ts`)

---

### TopicCard

**Purpose:** Individual learning topic with progress bar.

**Location:** `sections/learning/TopicCard.tsx`

**Props:**

```typescript
interface TopicCardProps {
  topic: LearningTopic;
}
```

**Content:**
- Topic name (H4, 20px, 500)
- Progress bar (4px height, accent fill)

**States:**

| State | Behavior |
|---|---|
| Default | Border, muted bg |
| Hover | Border accent, scale 1.02 |
| Focus | Accent ring |

**Motion:**
- Cards stagger in (80ms each)
- Progress bars fill on scroll entry (400ms, ease-out)

---

## 16. GITHUB COMPONENTS

### GitHubSection

**Purpose:** GitHub activity — stats, contributions, repos.

**Location:** `sections/github/GitHubSection.tsx`

**Used By:** `App.tsx`

**Data Source:** `useGitHubData()` hook → TanStack Query → GitHub API

**States:**

| State | Behavior |
|---|---|
| Loading | Skeleton placeholders |
| Error | Fallback static data + subtle message |
| Success | Live data |
| Empty | Graceful placeholder |

**Structure:**

```
GitHubSection
├── SectionHeading
├── ContributionGraph
├── GitHubStats
│   └── StatCard (×4)
├── PinnedRepos
│   └── PinnedRepo (×4)
└── LanguageBreakdown
```

---

### GitHubStats

**Purpose:** Statistics cards row.

**Location:** `components/github/GitHubStats.tsx`

**Props:**

```typescript
interface GitHubStatsProps {
  stats: GitHubStats;
}
```

**Content:** 4 StatCard components (Contributions, PRs, Repos, Stars).

---

### StatCard

**Purpose:** Individual stat number.

**Location:** `components/github/StatCard.tsx`

**Props:**

```typescript
interface StatCardProps {
  value: number;
  label: string;
}
```

**Typography:** Number in Display LG (48px, 700). Label in Body Small (14px, muted).

**Motion:** Number counts up on scroll entry (1000ms, ease-out).

---

### ContributionGraph

**Purpose:** GitHub-style heatmap.

**Location:** `components/github/ContributionGraph.tsx`

**Props:**

```typescript
interface ContributionGraphProps {
  data: ContributionDay[];
}
```

**Visual:**
- 52 columns × 7 rows (weeks × days)
- Color scale: muted → accent (based on contribution count)
- Cell size: 12px × 12px, 2px gap
- Hover: tooltip with date and count

---

### PinnedRepo

**Purpose:** Repository card.

**Location:** `components/github/PinnedRepo.tsx`

**Props:**

```typescript
interface PinnedRepoProps {
  repo: PinnedRepo;
}
```

**Content:** Repo name (H4), description (Body Small), language badge, star count.

**States:**

| State | Behavior |
|---|---|
| Default | Border, card bg |
| Hover | Border accent reveal |

---

### LanguageBreakdown

**Purpose:** Language proportion bars.

**Location:** `components/github/LanguageBreakdown.tsx`

**Props:**

```typescript
interface LanguageBreakdownProps {
  languages: { name: string; percentage: number; color: string }[];
}
```

**Visual:** Horizontal bars (8px height), label + percentage right-aligned.

---

## 17. CONTACT COMPONENTS

### ContactSection

**Purpose:** Contact form + social links.

**Location:** `sections/contact/ContactSection.tsx`

**Used By:** `App.tsx`

**Structure:**

```
ContactSection
├── ContactHeading ("LET'S BUILD SOMETHING TOGETHER.")
├── ContactForm
│   ├── FormField (Name)
│   ├── FormField (Email)
│   ├── FormField (Message)
│   └── SubmitButton
└── SocialLinks
```

**Props:** None (reads from `content.md` and `data/site.ts`)

**Layout:** Centered, max-width 640px.

**Motion:**
- Heading reveals word by word (200ms stagger)
- Form fades up (500ms after heading)
- Social links fade in (200ms after form)

---

### ContactForm

**Purpose:** Contact form with validation and submission.

**Location:** `components/contact/ContactForm.tsx`

**Dependencies:** React Hook Form, Zod, Sonner

**Fields:**

| Field | Type | Validation |
|---|---|---|
| Name | text input | min 2 characters |
| Email | email input | valid email format |
| Message | textarea | min 10 characters |

**States:**

| State | Behavior |
|---|---|
| Idle | Form ready, all fields empty |
| Editing | User typing |
| Submitting | Button spinner, form disabled at 50% opacity |
| Success | Toast "Message sent!", form resets |
| Error | Toast "Something went wrong", form remains filled |

**Accessibility:**
- All inputs have associated `<label>`
- Errors linked via `aria-describedby`
- Required fields: `aria-required`
- Error announcements via `aria-live="polite"`

**Anti-Spam:** Honeypot hidden field + timing check.

---

### FormField

**Purpose:** Reusable field wrapper (label + input + error).

**Location:** `components/contact/FormField.tsx`

**Props:**

```typescript
interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  description?: string;
  children: React.ReactNode; // Input or Textarea
}
```

**Render:**
- Label (Label, 12px, 600, uppercase)
- Input/Textarea
- Error message (Body Small, error color) — only if error exists

---

### SubmitButton

**Purpose:** Form submit button with states.

**Location:** `components/contact/SubmitButton.tsx`

**Props:**

```typescript
interface SubmitButtonProps {
  isSubmitting: boolean;
}
```

**States:**

| State | Label | Behavior |
|---|---|---|
| Idle | SEND MESSAGE | Primary CTA |
| Submitting | Sending... | Spinner, disabled |

---

## 18. FOOTER COMPONENTS

### Footer

**Purpose:** Minimal footer.

**Location:** `sections/footer/FooterSection.tsx`

**Used By:** `App.tsx`

**Structure:**

```
Footer
├── FooterBrand ("SD · Frontend Developer · Product Builder")
├── SocialLinks
└── FooterCopyright ("© 2026 [Name]")
```

**Props:** None (reads from `data/site.ts`)

**Layout:** Single row, space-between. Height: 80px. Border-top: 1px solid --border.

**Responsive:** Stacked on mobile.

**Motion:** No entrance animation — always visible.

---

### SocialLinks

**Purpose:** Social link icon buttons.

**Location:** `components/shared/SocialLinks.tsx`

**Props:**

```typescript
interface SocialLinksProps {
  links: SocialLink[];
  variant?: "default" | "footer";
}
```

**Render:** Row of IconButton components (GitHub, LinkedIn, Twitter, Mail).

**Accessibility:** Each link has `aria-label` (e.g., "GitHub profile"). External links: `rel="noopener noreferrer"`, `target="_blank"`.

---

## 19. MOTION COMPONENT SYSTEM

### Reveal

**Purpose:** Scroll-triggered entrance animation.

**Location:** `components/motion/Reveal.tsx`

**Props:**

```typescript
interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}
```

**Default:** direction="up", delay=0, duration=500, distance=20, once=true

**Implementation:** Motion `whileInView` with fade + translate.

**Reduced Motion:** Appears instantly (opacity only).

---

### FadeIn

**Purpose:** Simple opacity entrance.

**Location:** `components/motion/FadeIn.tsx`

**Props:**

```typescript
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}
```

---

### TextReveal

**Purpose:** Editorial heading reveal (character/word stagger).

**Location:** `components/motion/TextReveal.tsx`

**Props:**

```typescript
interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}
```

**Implementation:** Split text into characters/words, stagger animation.

**Reduced Motion:** Appears instantly.

---

### Stagger

**Purpose:** Container that staggers children animation.

**Location:** `components/motion/Stagger.tsx`

**Props:**

```typescript
interface StaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}
```

**Default:** staggerDelay=80ms

---

### Parallax

**Purpose:** Scroll-driven Y translation.

**Location:** `components/motion/Parallax.tsx`

**Props:**

```typescript
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}
```

**Default:** speed=0.5 (half scroll speed)

**Reduced Motion:** Disabled — no parallax.

**Desktop only:** Disabled on tablet and mobile.

---

### Magnetic

**Purpose:** Cursor magnetic pull for important CTAs.

**Location:** `components/motion/Magnetic.tsx`

**Props:**

```typescript
interface MagneticProps {
  children: React.ReactNode;
  radius?: number;
  strength?: number;
  className?: string;
}
```

**Default:** radius=40px, strength=0.3

**Rules:**
- Only for primary CTA, theme toggle, command palette trigger
- Disabled on touch devices (`pointer: coarse`)
- Disabled with reduced motion

---

### ImageReveal

**Purpose:** Clip-path image entrance.

**Location:** `components/motion/ImageReveal.tsx`

**Props:**

```typescript
interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
}
```

**Animation:** clipPath from `inset(100% 0 0 0)` to `inset(0% 0 0 0)` (600ms, ease-out).

---

### Marquee

**Purpose:** Infinite horizontal scroll.

**Location:** `components/motion/Marquee.tsx`

**Props:**

```typescript
interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}
```

**Implementation:** CSS animation preferred (transform: translateX). Motion as fallback.

**Reduced Motion:** Static — no scrolling.

---

## 20. COMPONENT STATE MATRIX

| Component | Default | Hover | Active | Focus | Disabled | Loading | Error |
|---|---|---|---|---|---|---|---|
| **Button** | Variant styling | Bg darken, -1px Y | Scale 0.98 | Accent ring | 50% opacity | Spinner | — |
| **Input** | Border --input | Border stronger | — | Accent ring, accent border | Muted bg | — | Error border |
| **ProjectCard** | Border, card bg | Border accent, +1px Y, shadow | Scale 0.99 | Accent ring | — | — | — |
| **TechCard** | Border, muted bg | Border accent, expand | — | Accent ring | — | — | — |
| **NavLink** | FG text | Accent text, underline | — | Accent ring | — | — | — |
| **ThemeToggle** | Icon, ghost bg | Accent bg, scale 1.05 | Rotation | Accent ring | — | — | — |
| **ContactForm** | Ready | — | — | — | 50% opacity | Spinner on button | Toast error |
| **ProofCard** | Border, card bg | Scale 1.01, border accent | — | Accent ring | — | — | — |
| **TimelineItem** | Muted dot | — | — | — | — | — | — |
| **TopicCard** | Border, muted bg | Border accent, scale 1.02 | — | Accent ring | — | — | — |

---

## 21. RESPONSIVE COMPONENT MATRIX

| Component | Desktop (1024+) | Tablet (768-1023) | Mobile (< 768) |
|---|---|---|---|
| **Navbar** | Full inline links | Reduced links + hamburger | Hamburger only |
| **MobileMenu** | Hidden | Hidden | Full-screen overlay |
| **HeroSection** | Two-column (60/40) | Stacked | Stacked |
| **HeroContent** | Display XL (72px) | Display XL (48px) | Display XL (36px) |
| **HeroVisual** | Full parallax | Reduced parallax | Static |
| **Marquee** | 30px/sec | 30px/sec | 20px/sec, smaller text |
| **ProofGrid** | Bento (varied spans) | Simplified grid | Single column |
| **ProjectCard** | Full layout | Smaller visual | Full-width visual, no number |
| **CategoryGrid** | 2×2 | 2-col | Single column |
| **TechGrid** | 4-col per group | 2-col per group | Single column |
| **TechCard** | Hover expand | Hover expand | Tap to expand |
| **JourneyTimeline** | Vertical, content right | Vertical | Vertical |
| **AboutSection** | Two-column (50/50) | Stacked | Stacked |
| **CodeCard** | 14px font | 14px font | 12px font |
| **LearningGrid** | 3-col | 2-col | Single column |
| **GitHubStats** | 4-col row | 2×2 grid | Single column |
| **ContactForm** | Max-width 640px, centered | Full-width | Full-width |
| **Footer** | Single row | Single row | Stacked |
| **Cursor** | Custom cursor | Custom cursor | Disabled |
| **ScrollProgress** | Visible | Visible | Hidden |

---

## 22. THEME COMPONENT MATRIX

| Component | Dark Mode | Light Mode | Notes |
|---|---|---|---|
| **All components** | Uses dark tokens | Uses light tokens | CSS custom properties handle this automatically |
| **Background** | oklch(0.10) near-black | oklch(0.98) off-white | Page background |
| **Cards** | oklch(0.14) dark surface | oklch(1.0) white | Card background |
| **Borders** | white at 8% opacity | dark at 8% opacity | Subtle structure |
| **Text** | oklch(0.97) white | oklch(0.12) near-black | Primary text |
| **Muted text** | oklch(0.55) gray | oklch(0.50) gray | Secondary text |
| **Accent** | oklch(0.78 0.15 195) | oklch(0.78 0.15 195) | Same cyan/teal |
| **CodeCard** | Dark bg, light syntax | White bg, dark syntax | Syntax colors adapt |
| **ContributionGraph** | Accent cells on dark | Accent cells on white | Same accent |
| **Cursor** | White circle | Dark circle | Inverts based on theme |

**Rule:** No component-specific hardcoded colors. All use CSS custom properties from `theme.md`.

---

## 23. ACCESSIBILITY MATRIX

| Component | Semantic HTML | Keyboard | Focus | ARIA | Reduced Motion |
|---|---|---|---|---|---|
| **Navbar** | `<header>`, `<nav>` | Tab navigation, Enter to select | Visible ring | `aria-label="Main navigation"` | — |
| **NavLink** | `<a>` | Tab, Enter | Visible ring | `aria-current="page"` for active | — |
| **MobileMenu** | `role="dialog"` | Tab trap, Escape to close | Focus trap | `aria-modal`, `aria-label` | Simplified animation |
| **Button** | `<button>` | Tab, Enter/Space | Visible ring | `aria-label` if icon-only | — |
| **Input** | `<input>` + `<label>` | Tab, type | Visible ring | `aria-describedby` for errors, `aria-required` | — |
| **ThemeToggle** | `<button>` | Tab, Enter/Space | Visible ring | `aria-label="Switch to light/dark mode"` | Instant switch |
| **CommandMenu** | `role="dialog"` | Tab trap, Escape, Arrow keys, Enter | Focus trap | `aria-modal`, `role="combobox"` | Simplified animation |
| **ProjectCard** | `<article>`, `<a>` | Tab, Enter | Visible ring | — | Instant reveal |
| **ContactForm** | `<form>` | Tab through fields, Enter to submit | Visible ring | `aria-live` for errors | — |
| **TimelineItem** | `<li>` | — | — | — | Instant reveal |
| **TechCard** | `<article>` | Tab, Enter (to expand) | Visible ring | — | No expand animation |
| **GitHubStats** | `<section>`, `<ul>` | — | — | — | No count-up animation |
| **Footer** | `<footer>` | Tab navigation | Visible ring | — | — |
| **Reveal** | — | — | — | — | Instant (opacity only) |
| **Parallax** | — | — | — | — | Disabled |
| **Magnetic** | — | — | — | — | Disabled |
| **Marquee** | — | — | — | — | Static |

---

## 24. COMPONENT COMPOSITION RULES

### Hierarchy

```
Sections compose Feature components
Feature components compose Shared components
Shared components use UI Primitives
UI Primitives are domain-agnostic
```

### Rules

1. **Sections** import from Feature, Shared, Motion, Layout, and UI
2. **Feature** imports from Shared, Motion, and UI
3. **Shared** imports from Motion and UI
4. **Motion** imports from Motion library only
5. **UI** imports from Radix/shadcn only
6. **Lower layers must NOT import from higher layers**
7. **No circular dependencies**

### Content Flow

```
data/*.ts files
    ↓ imported by
Sections
    ↓ passed as props to
Feature Components
    ↓ rendered by
UI
```

### API Flow

```
hooks/useGitHubData.ts
    ↓ consumed by
GitHubSection
    ↓ passes data to
GitHubStats, ContributionGraph, etc.
```

---

## 25. PROPS DESIGN RULES

### Do

- Use typed interfaces for all props
- Prefer composition over prop drilling
- Use variant props for visual variations
- Keep props minimal — only what's needed
- Use `children` for composition

### Don't

- Boolean prop explosion (`<Card featured large dark animated special />`)
- Pass entire data objects when only 2 fields are needed
- Use `any` for prop types
- Create components with 10+ props

### Good Example

```typescript
interface ProjectCardProps {
  project: Project;  // Typed object
  featured?: boolean; // Variant
}
```

### Bad Example

```typescript
interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  number: string;
  featured: boolean;
  large: boolean;
  dark: boolean;
}
```

---

## 26. COMPONENT FILE NAMING

### Convention

| File Type | Convention | Example |
|---|---|---|
| Component | PascalCase.tsx | `ProjectCard.tsx` |
| Types (co-located) | ComponentName.types.ts | `ProjectCard.types.ts` (only if complex) |
| Test | ComponentName.test.tsx | `ProjectCard.test.tsx` |
| Hook | useSomething.ts | `useGitHubData.ts` |
| Utility | camelCase.ts | `utils.ts` |
| Data | camelCase.ts | `projects.ts` |

### Rules

- One component per file (except small related sub-components)
- File name matches component name
- Only create separate type files when complexity justifies it
- Do not over-fragment simple components

---

## 27. COMPONENT DEPENDENCY RULES

### Allowed Direction

```
UI Primitives (components/ui/)
    ↓
Motion Primitives (components/motion/)
    ↓
Layout (components/layout/)
    ↓
Shared (components/shared/)
    ↓
Feature (components/project/, components/github/, etc.)
    ↓
Sections (sections/)
    ↓
App (App.tsx)
```

### Forbidden

- UI importing from Feature/Section
- Shared importing from Section
- Motion importing from any component layer
- Circular imports between any layers
- Sections importing from other sections

---

## 28. IMPLEMENTATION ORDER

### Phase 1 — Foundation

| Task | Components |
|---|---|
| Design tokens in CSS | `styles/index.css` |
| Global styles | `styles/index.css` |
| Theme setup | `app/providers.tsx` |
| UI primitives | `components/ui/*` (shadcn) |
| Layout | Container, Section, Grid |
| Utilities | `lib/utils.ts`, `lib/constants.ts` |
| Types | `types/*` |
| Data files | `data/*` |

### Phase 2 — Navigation

| Task | Components |
|---|---|
| Navbar | Navbar, NavLinks, NavLink |
| Mobile menu | MobileMenu |
| Theme toggle | ThemeToggle |
| Command palette | CommandMenu, CommandMenuTrigger |

### Phase 3 — Motion

| Task | Components |
|---|---|
| Animation variants | `lib/animations.ts` |
| Reveal | Reveal |
| FadeIn | FadeIn |
| Stagger | Stagger |
| TextReveal | TextReveal |
| ImageReveal | ImageReveal |
| Parallax | Parallax |
| Magnetic | Magnetic |
| Marquee | Marquee |

### Phase 4 — Shared

| Task | Components |
|---|---|
| SectionHeading | SectionHeading |
| SectionLabel | SectionLabel |
| SocialLinks | SocialLinks |
| ExternalLink | ExternalLink |
| BackToTop | BackToTop |
| ScrollProgress | ScrollProgress |
| Cursor | Cursor |

### Phase 5 — Hero

| Task | Components |
|---|---|
| HeroSection | HeroSection |
| HeroContent | HeroContent |
| HeroVisual | HeroVisual |
| HeroActions | HeroActions |

### Phase 6 — Sections

| Order | Section | Key Components |
|---|---|---|
| 1 | MarqueeSection | Marquee |
| 2 | ProofSection | ProofCard |
| 3 | WorkSection | ProjectCard, ProjectVisual, ProjectMeta, ProjectTags, ProjectCTA |
| 4 | EngineeringSection | CategoryCard |
| 5 | StackSection | TechGrid, TechGroup, TechCard |
| 6 | JourneySection | JourneyTimeline, TimelineItem, TimelineDot, AchievementBadge |
| 7 | AboutSection | AboutText, CodeCard |
| 8 | LearningSection | TopicCard |
| 9 | GitHubSection | GitHubStats, StatCard, ContributionGraph, PinnedRepo, LanguageBreakdown |
| 10 | ContactSection | ContactForm, FormField, SubmitButton |
| 11 | FooterSection | Footer, SocialLinks |

### Phase 7 — Case Studies (Optional)

| Task | Components |
|---|---|
| Project pages | ProjectHero, ProjectOverview, ProjectProblem, etc. |
| Routing | React Router setup |
| Navigation | CaseStudyNavigation |

### Phase 8 — Quality

| Task | Focus |
|---|---|
| Accessibility audit | Full a11y pass |
| Responsive refinement | Breakpoint testing |
| Performance | Bundle analysis, optimization |
| SEO | Meta tags, OG data |
| Testing | Critical path tests |

---

## 29. COMPONENT QUALITY CHECKLIST

Before considering a component complete:

- [ ] Single clear responsibility
- [ ] Correct TypeScript types (no `any`)
- [ ] No unnecessary dependencies
- [ ] Responsive at all breakpoints
- [ ] Dark mode supported
- [ ] Light mode supported
- [ ] Keyboard accessible where interactive
- [ ] Focus state implemented
- [ ] Reduced motion supported
- [ ] No duplicated logic
- [ ] No unnecessary abstraction
- [ ] No hardcoded content (uses data files)
- [ ] No API calls inside presentation
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Content from `data/` or `content.md`
- [ ] Animation uses transform/opacity only
- [ ] Semantic HTML used correctly

---

## 30. FINAL COMPONENT INVENTORY

| Component | Category | Priority | Reusable | Interactive | Data-driven |
|---|---|---|---|---|---|
| Button | UI | Core | Yes | Yes | No |
| Badge | UI | Core | Yes | No | No |
| Card | UI | Core | Yes | Yes | No |
| Input | UI | Core | Yes | Yes | No |
| Textarea | UI | Core | Yes | Yes | No |
| Separator | UI | Important | Yes | No | No |
| Tooltip | UI | Important | Yes | Yes | No |
| Dialog | UI | Important | Yes | Yes | No |
| Container | Layout | Core | Yes | No | No |
| Section | Layout | Core | Yes | No | No |
| Grid | Layout | Core | Yes | No | No |
| Navbar | Navigation | Core | No | Yes | Yes |
| NavLinks | Navigation | Core | Yes | Yes | Yes |
| NavLink | Navigation | Core | Yes | Yes | Yes |
| MobileMenu | Navigation | Core | No | Yes | Yes |
| ThemeToggle | Navigation | Core | Yes | Yes | No |
| CommandMenuTrigger | Navigation | Important | Yes | Yes | No |
| CommandMenu | Navigation | Important | No | Yes | Yes |
| Reveal | Motion | Core | Yes | No | No |
| FadeIn | Motion | Core | Yes | No | No |
| TextReveal | Motion | Important | Yes | No | No |
| Stagger | Motion | Core | Yes | No | No |
| Parallax | Motion | Important | Yes | No | No |
| Magnetic | Motion | Important | Yes | Yes | No |
| ImageReveal | Motion | Important | Yes | No | No |
| Marquee | Motion | Important | Yes | No | No |
| SectionHeading | Shared | Core | Yes | No | Yes |
| SectionLabel | Shared | Important | Yes | No | Yes |
| SocialLinks | Shared | Core | Yes | Yes | Yes |
| ExternalLink | Shared | Important | Yes | Yes | Yes |
| BackToTop | Shared | Important | Yes | Yes | No |
| ScrollProgress | Shared | Optional | Yes | No | No |
| Cursor | Shared | Optional | Yes | Yes | No |
| ProjectCard | Feature | Core | No | Yes | Yes |
| ProjectVisual | Feature | Core | Yes | Yes | Yes |
| ProjectMeta | Feature | Core | Yes | No | Yes |
| ProjectNumber | Feature | Important | Yes | No | Yes |
| ProjectTags | Feature | Important | Yes | No | Yes |
| ProjectCTA | Feature | Important | Yes | Yes | Yes |
| CategoryCard | Feature | Important | No | Yes | Yes |
| TechGrid | Feature | Important | No | No | Yes |
| TechGroup | Feature | Important | No | No | Yes |
| TechCard | Feature | Important | No | Yes | Yes |
| JourneyTimeline | Feature | Important | No | No | Yes |
| TimelineItem | Feature | Important | No | Yes | Yes |
| TimelineDot | Feature | Important | Yes | No | Yes |
| AchievementBadge | Feature | Important | Yes | No | Yes |
| AboutText | Feature | Important | No | No | Yes |
| CodeCard | Feature | Important | No | No | Yes |
| TopicCard | Feature | Important | No | Yes | Yes |
| GitHubStats | Feature | Important | No | No | Yes |
| StatCard | Feature | Important | Yes | No | Yes |
| ContributionGraph | Feature | Important | No | Yes | Yes |
| PinnedRepo | Feature | Important | No | Yes | Yes |
| LanguageBreakdown | Feature | Important | No | No | Yes |
| ContactForm | Feature | Core | No | Yes | No |
| FormField | Feature | Core | Yes | Yes | No |
| SubmitButton | Feature | Core | Yes | Yes | No |
| Footer | Layout | Core | No | No | Yes |

---

## FINAL RULE

`components.md` is the implementation specification.

Every component has a clear purpose, defined props, defined states, and defined behavior.

No component exists without justification. No component is over-engineered.

The relationship:

```
theme.md → visual rules
design.md → UX rules
content.md → content rules
architecture.md → tech rules
components.md → component rules
```

A developer should be able to implement every component from this specification without inventing UI decisions.

No actual portfolio UI was implemented in the creation of this document.
