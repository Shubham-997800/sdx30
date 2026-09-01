# Portfolio UI/UX Design Blueprint

> The complete visual and interaction blueprint for the portfolio.
> `theme.md` defines the design system. `design.md` defines how that system is applied.

---

## 1. DESIGN OBJECTIVE

### What This Portfolio Communicates (Within First 5 Seconds)

1. **Identity** — This is Shubham Dangi's portfolio
2. **Role** — Frontend Developer / Product Builder
3. **Quality** — This interface itself proves the capability
4. **Scope** — Real products, real hackathons, real engineering

### Core Feeling

> Minimal at first glance. Impressive when interacted with.

The website must feel like opening a premium digital product — not browsing a template. Every scroll, every hover, every transition should reinforce: this person builds polished interfaces.

### Design Objective Statement

Communicate frontend engineering expertise through the portfolio's own execution. The medium is the message.

---

## 2. SITE STRUCTURE

```
Portfolio
│
├── Navbar (sticky, minimal)
│
├── Home
│   ├── Hero
│   ├── Marquee / Statement
│   ├── Quick Proof (Bento)
│   └── Selected Work
│
├── Frontend Engineering
├── Tech Stack
├── Hackathon Journey
├── About
├── Currently Learning
├── GitHub
├── Contact
└── Footer
```

### Section Purposes

| Section | Purpose | Priority |
|---|---|---|
| **Hero** | First impression — identity, role, personality | 1 |
| **Marquee** | Energy, rhythm, brand statement | 2 |
| **Quick Proof** | Instant credibility — achievements, capabilities | 3 |
| **Selected Work** | Core portfolio — projects that prove skill | 4 |
| **Frontend Engineering** | Technical depth — how I think about building UI | 5 |
| **Tech Stack** | Technology ecosystem — breadth and depth | 6 |
| **Hackathon Journey** | Storytelling — growth, achievements, momentum | 7 |
| **About** | Personal connection — philosophy, code-card | 8 |
| **Currently Learning** | Growth mindset — what's next | 9 |
| **GitHub** | Developer credibility — real data | 10 |
| **Contact** | Conversion — clear CTA | 11 |
| **Footer** | Close — minimal, professional | 12 |

---

## 3. NAVBAR DESIGN

### Desktop Layout

```
┌──────────────────────────────────────────────────────────┐
│  SD    Work   About   Stack   Journey   Contact    ☀️  ⌘K │
└──────────────────────────────────────────────────────────┘
```

- **Logo:** "SD" monogram — left-aligned, subtle, brand anchor
- **Links:** Work, About, Stack, Journey, Contact — center-right
- **Theme Toggle:** Sun/moon icon — right side, ghost button
- **Command Palette:** ⌘K badge — far right, ghost button

### Mobile Layout

```
┌────────────────────────────┐
│  SD                  ☀️  ☰ │
└────────────────────────────┘
```

- **Logo:** "SD" — left
- **Theme Toggle:** Sun/moon — center-right
- **Menu:** Hamburger — far right

### States

| State | Behavior |
|---|---|
| **Initial** | Transparent background, no border, no shadow |
| **Scrolled (> 50px)** | Background blur (backdrop-blur-md), subtle shadow, border-bottom at 8% opacity |
| **Active Link** | Accent text color, subtle accent underline (2px, 4px wide) |
| **Hover Link** | Accent text color, 200ms transition |
| **Focus** | Accent ring on the link element |

### Navbar Height

64px (consistent across all breakpoints)

### Mobile Menu

- Full-screen overlay with backdrop blur
- Links displayed vertically, centered, large touch targets (44px minimum)
- Font: H2 size, generous spacing (24px between links)
- Close on link click or Escape key
- Entrance: overlay fades in (200ms), links stagger in from bottom (80ms each)
- Exit: reverse (150ms)

### Navbar Animation

- Logo fades in on page load (300ms)
- Links stagger in from right (80ms delay each, 200ms duration)
- Scroll transition: background/shadow transitions at 200ms

---

## 4. HERO DESIGN

### Content Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  AVAILABLE FOR WORK                                             │
│                                                                 │
│  SHUBHAM                                                        │
│  DANGI                                                          │
│                                                                 │
│  FRONTEND                                                       │
│  DEVELOPER                                                      │
│                                                                 │
│  I build polished                                               │
│  digital products                                               │
│  with modern frontend                                           │
│  technologies.                                                  │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐                            │
│  │ EXPLORE WORK │  │ GET IN TOUCH │                            │
│  └──────────────┘  └──────────────┘                            │
│                                                                 │
│  ────────────────  GitHub  LinkedIn  Twitter                    │
│                                                                 │
│                          ┌──────────────────────┐               │
│                          │                      │               │
│                          │   INTERACTIVE        │               │
│                          │   VISUAL             │               │
│                          │                      │               │
│                          └──────────────────────┘               │
│                                                                 │
│                         ▼ scroll                                │
└─────────────────────────────────────────────────────────────────┘
```

### Content Breakdown

| Element | Typography | Treatment |
|---|---|---|
| "AVAILABLE FOR WORK" | Label (12px, 600, uppercase, 0.03em) | Accent dot + accent text, subtle pulse animation |
| "SHUBHAM" | Display XL (72px, 700) | Full-width, tight tracking (-0.03em) |
| "DANGI" | Display XL (72px, 700) | Full-width, tight tracking (-0.03em) |
| "FRONTEND" | Display LG (56px, 700) | Accent text color |
| "DEVELOPER" | Display LG (56px, 700) | Accent text color |
| Supporting text | Body Large (18px, 400, 1.6) | Muted foreground, max 2 lines |
| Primary CTA | Button (Label, 12px, 600) | Accent background, neo-brutalist variant |
| Secondary CTA | Button (Label, 12px, 600) | Secondary outline |
| Social links | Body Small (14px, 500) | Muted, accent on hover |

### Hero Visual

A geometric abstract composition occupying the right side (desktop) or bottom (mobile):

- **Elements:** Overlapping rectangles, circles, and lines using the accent color at low opacity
- **Interaction:** Subtle parallax — elements move at different speeds on mouse movement
- **Grid overlay:** Faint 12-column grid lines visible at 3% opacity
- **Typography element:** A large "01" number at 200px, extremely muted (5% opacity), positioned as a background element
- **No:** blobs, 3D avatars, stock illustrations, particle systems

### Hero Animation Sequence

| Step | Element | Animation | Duration | Delay |
|---|---|---|---|---|
| 1 | Status indicator | Fade in + scale from 0.8 | 400ms | 200ms |
| 2 | "SHUBHAM" | Clip reveal from bottom | 600ms | 400ms |
| 3 | "DANGI" | Clip reveal from bottom | 600ms | 500ms |
| 4 | "FRONTEND" | Fade up from +20px | 500ms | 700ms |
| 5 | "DEVELOPER" | Fade up from +20px | 500ms | 800ms |
| 6 | Supporting text | Fade in | 500ms | 1000ms |
| 7 | CTAs | Fade up from +20px | 400ms | 1200ms |
| 8 | Social links | Fade in | 400ms | 1400ms |
| 9 | Visual | Clip reveal + scale 1.05 → 1 | 700ms | 600ms |
| 10 | Scroll indicator | Fade in | 400ms | 1800ms |

### Scroll Indicator

- Subtle animated chevron at bottom-center
- Bounces gently (2px Y translate, 1.5s infinite)
- Fades out after user scrolls past hero
- Uses muted foreground color

### Reduced Motion

All text appears instantly (opacity only, no transforms). Stagger removed — all elements visible simultaneously.

---

## 5. MARQUEE / STATEMENT

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  BUILD • SHIP • LEARN • ITERATE • BUILD • SHIP • LEARN •   │
│  ITERATE • BUILD • SHIP • LEARN • ITERATE • BUILD • SHIP   │
│                                                              │
│  I approach every project as a product — from architecture   │
│  to the final pixel.                                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Marquee

- **Typography:** Display LG (56px, 700), uppercase, tight tracking
- **Color:** Muted foreground (subtle, not competing with hero)
- **Direction:** Left to right, continuous infinite loop
- **Speed:** 30px per second (slow enough to read)
- **Separator:** "•" character with generous padding (40px either side)
- **Gap between loops:** None — seamless infinite scroll
- **Hover:** None — the marquee is ambient, not interactive

### Statement

- Positioned below marquee, centered
- **Typography:** Body Large (18px, 400, 1.6)
- **Color:** Muted foreground
- **Max width:** 600px (centered)
- **Entrance:** Fade in, triggered when 15% visible in viewport

### Mobile

- Marquee text scales to H1 (40px)
- Speed reduces to 20px per second
- Statement text scales to Body (16px)

### Reduced Motion

- Marquee stops completely — displays as static text
- Statement fades in instantly

---

## 6. QUICK PROOF SECTION

### Bento Grid Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌─────────────────┐ ┌─────────┐ ┌─────────┐               │
│  │                 │ │         │ │         │               │
│  │  ODOO 2026      │ │ FRONTEND│ │ REACT   │               │
│  │  HACKATHON      │ │  ENG.   │ │   19    │               │
│  │  FINALIST       │ │         │ │         │               │
│  │                 │ │         │ │         │               │
│  │  (Featured -    │ └─────────┘ └─────────┘               │
│  │   8 cols)       │ ┌─────────┐ ┌─────────┐               │
│  │                 │ │         │ │         │               │
│  │                 │ │ PRODUCT │ │  MODERN │               │
│  │                 │ │ BUILDER │ │  STACK  │               │
│  │                 │ │         │ │         │               │
│  └─────────────────┘ └─────────┘ └─────────┘               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Card Details

| Card | Grid Span | Content | Visual |
|---|---|---|---|
| **Odoo 2026 Finalist** | 8 cols × 2 rows (featured) | "Odoo Hackathon 2026", "Grand Finale Finalist", achievement badge | Large card, accent border on hover, editorial number "01" |
| **Frontend Engineering** | 4 cols | Icon (Layout), "Frontend Engineering", brief descriptor | Compact, icon + text |
| **React 19** | 4 cols | Icon (Atom), "React 19", "Latest React features" | Compact, icon + text |
| **Product Builder** | 4 cols | Icon (Package), "Product Builder", "End-to-end thinking" | Compact, icon + text |
| **Modern Stack** | 4 cols | Icon (Layers), "Modern Stack", "TypeScript, Tailwind, Vite" | Compact, icon + text |

### Card Behavior

| State | Behavior |
|---|---|
| Default | Border defined, card background, radius 8px |
| Hover | Scale 1.01, border accent reveal, medium shadow |
| Featured card hover | Same + accent glow (very subtle, 15% opacity) |

### Accent Treatment

- The Odoo card receives the strongest visual emphasis
- On hover, its border transitions to accent color
- A small badge ("FINALIST") uses accent background
- Other cards remain neutral — the featured card is the hero of this section

### Entrance Animation

- Cards stagger in from bottom (80ms delay each)
- Featured card enters first (0ms delay)
- Other cards follow in reading order

### Mobile

- All cards stack vertically (full width)
- Featured card loses 2-row span — becomes same height as others
- Grid becomes single column

---

## 7. SELECTED WORK

### Section Structure

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  SELECTED                                                    │
│  WORK                                                        │
│                                                              │
│  ─────────────────────────────────────────────────           │
│                                                              │
│  01                                                          │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │              PROJECT VISUAL (16:9)                   │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  FlowSync AI                             React  AI  API     │
│  AI-powered workflow automation platform                     │
│  [ VIEW PROJECT → ]                                         │
│                                                              │
│  ─────────────────────────────────────────────────           │
│                                                              │
│  02                                                          │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │              PROJECT VISUAL (16:9)                   │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  WorkOS                               React  TypeScript     │
│  Developer tools and workflow management                     │
│  [ VIEW PROJECT → ]                                         │
│                                                              │
│  ─────────────────────────────────────────────────           │
│                                                              │
│  03                                                          │
│  Assetrix                                                     │
│  [ ... ]                                                     │
│                                                              │
│  04                                                          │
│  CAMPUS360                                                    │
│  [ ... ]                                                     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Section Header

- "SELECTED" — Display XL (72px), normal weight, foreground color
- "WORK" — Display XL (72px), normal weight, foreground color
- Both left-aligned, stacked vertically
- Horizontal rule below (1px, muted border, full width of container)

### Project Presentation System

Each project follows this structure:

| Element | Typography | Treatment |
|---|---|---|
| Project Number | Display LG (56px, 700) | Muted foreground (20% opacity), left-aligned |
| Visual | Full-width, 16:9 aspect ratio | Clip-path reveal on scroll, hover scale 1.03 |
| Project Name | H2 (32px, 600) | Foreground color, left-aligned |
| Description | Body Large (18px, 400) | Muted foreground, max 2 lines |
| Technologies | Badge row | Pill badges, secondary background |
| CTA | Label (12px, 600) | "VIEW PROJECT →" with arrow, accent on hover |

### Project Card Behavior

| State | Behavior |
|---|---|
| Default | Border (1px), card background, full width |
| Hover | Border accent reveal (300ms), image scale 1.03 (400ms), "VIEW PROJECT →" slides in from left, arrow translates X +4px |
| Click | Navigate to project case study page |
| Focus | Accent ring |

### Visual Hierarchy Per Project

- **Project 01 (FlowSync AI):** Largest presentation — full-width visual, prominent typography
- **Project 02 (WorkOS):** Full-width, slightly smaller visual
- **Project 03 (Assetrix):** Full-width, consistent with 02
- **Project 04 (CAMPUS360):** Full-width, consistent with 02

The first project is the strongest statement. It should feel like the "featured" project.

### Image Treatment

- 16:9 aspect ratio, object-fit cover
- No device mockup frames — just the raw interface
- Editorial cropping — show the most interesting viewport
- Lazy loaded with skeleton placeholder
- Hover: scale 1.03, brightness 1.05

### Spacing Between Projects

96px (desktop), 64px (tablet), 48px (mobile)

### Entrance Animation

- Section header fades up when 15% visible
- Each project fades up as it enters viewport (15% threshold)
- Projects stagger naturally based on scroll position — no artificial stagger delay

### Mobile

- Project visuals full-width
- Typography scales down (H3 instead of H2)
- Project number hidden on mobile
- Swipeable carousel for projects (optional, if 4+ projects)

---

## 8. PROJECT CASE STUDY EXPERIENCE

### Structure

```
Project Case Study Page
│
├── Back Navigation ("← Back to Work")
├── Project Hero
│   ├── Project Number (editorial, large)
│   ├── Project Name (Display LG)
│   ├── Project Category (Label)
│   └── Key Visual (full-width)
│
├── Overview
│   ├── Project description (Body Large)
│   ├── Key metrics / highlights
│   └── Live demo + GitHub links
│
├── Problem
│   ├── Problem statement (H2)
│   └── Context and constraints (Body)
│
├── Solution
│   ├── Solution approach (H2)
│   └── Design decisions (Body)
│
├── Key Features
│   ├── Feature list with descriptions
│   └── Feature screenshots (large, editorial)
│
├── UI Showcase
│   ├── Full-width screenshots
│   ├── Gallery layout (2-column or stacked)
│   └── Image reveals on scroll
│
├── Architecture
│   ├── Technical architecture description
│   └── Diagram or visual (if applicable)
│
├── Technology
│   ├── Tech stack badges
│   └── Technology choices explanation
│
├── Challenges
│   ├── Technical challenges
│   └── Solutions implemented
│
├── Outcome
│   ├── Results and learnings
│   └── Future improvements
│
├── Links
│   ├── Live Demo (primary CTA)
│   ├── GitHub Repository
│   └── Case Study PDF (if available)
│
└── Navigation
    ├── Previous Project
    └── Next Project
```

### Case Study Hero

- Project number: Display XL (72px, muted)
- Project name: Display LG (56px, foreground)
- Category: Label (12px, uppercase, accent)
- Key visual: Full-width, 16:9, clip-path reveal

### Screenshot Presentation

- Full-width within container
- No decorative frames — just the interface
- Scroll-triggered reveal (clip-path from bottom)
- Consistent aspect ratios
- 2-column gallery for detail shots

### Text Hierarchy

| Element | Typography | Use |
|---|---|---|
| Section titles | H2 (32px, 600) | "Problem", "Solution", etc. |
| Subsection titles | H4 (20px, 500) | Individual features, challenges |
| Body text | Body (16px, 400) | Descriptions, explanations |
| Technical metadata | Code (14px, monospace) | File names, commands, API endpoints |
| Labels | Label (12px, 600, uppercase) | Categories, tags |

### Navigation

- "← Back to Work" — top-left, ghost button, links back to portfolio
- Previous/Next project — bottom of page, large cards
- Back-to-top button — bottom-right, icon button

### Editorial Feel

- Generous whitespace between sections (96px)
- Large typography for section headers
- Full-width screenshots break the text flow
- Technical metadata in monospace creates contrast

---

## 9. FRONTEND ENGINEERING SECTION

### Section Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  FRONTEND                                                    │
│  ENGINEERING                                                 │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │  UI ENGINEERING        REACT ECOSYSTEM               │   │
│  │  ┌────┐ ┌────┐        ┌────┐ ┌────┐                │   │
│  │  │    │ │    │        │    │ │    │                │   │
│  │  └────┘ └────┘        └────┘ └────┘                │   │
│  │  ┌────┐ ┌────┐        ┌────┐ ┌────┐                │   │
│  │  │    │ │    │        │    │ │    │                │   │
│  │  └────┘ └────┘        └────┘ └────┘                │   │
│  │                                                      │   │
│  │  STYLING               APPLICATION DEV               │   │
│  │  ┌────┐ ┌────┐        ┌────┐ ┌────┐                │   │
│  │  │    │ │    │        │    │ │    │                │   │
│  │  └────┘ └────┘        └────┘ └────┘                │   │
│  │  ┌────┐ ┌────┐        ┌────┐ ┌────┐                │   │
│  │  │    │ │    │        │    │ │    │                │   │
│  │  └────┘ └────┘        └────┘ └────┘                │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Categories

| Category | Items | Icon |
|---|---|---|
| **UI Engineering** | Responsive Design, Component Architecture, Accessibility, UI State | Layout |
| **React Ecosystem** | React 19, React Router, TanStack Query, Context API | Atom |
| **Styling** | Tailwind CSS, CSS, Responsive Layouts, Dark / Light Themes | Palette |
| **Application Development** | API Integration, Forms, Validation, Charts, PWA, Deployment | Terminal |

### Card Treatment

- Each category: large card with category label (Label, uppercase, accent)
- Items within: small compact cards (4px radius, border, muted background)
- Icon: Lucide icon, 20px, muted foreground
- Text: Body Small (14px, 500)

### Card Behavior

| State | Behavior |
|---|---|
| Default | Border defined, muted background |
| Hover | Border accent reveal (subtle), shadow elevation |
| Item hover | Background accent-muted, text foreground |

### Motion

- Category cards stagger in (80ms delay)
- Items within each category stagger in (40ms delay) after parent card enters
- Entrance: fade up from +10px

### Section Philosophy

This section demonstrates engineering thinking, not just a skill list. Each category represents a domain of knowledge. The visual structure communicates organized, systematic thinking.

---

## 10. TECH STACK SECTION

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  TECH                                                        │
│  STACK                                                       │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │  FRONTEND                BACKEND                      │   │
│  │  ┌────┐ ┌────┐ ┌────┐  ┌────┐ ┌────┐              │   │
│  │  │ ⚛️ │ │ 🎨 │ │ ⚡ │  │ 🟢 │ │ 🍃 │              │   │
│  │  │Rct │ │Twd │ │Vte │  │Nde │ │Exp │              │   │
│  │  └────┘ └────┘ └────┘  └────┘ └────┘              │   │
│  │                                                      │   │
│  │  DATABASE                TOOLS                        │   │
│  │  ┌────┐ ┌────┐         ┌────┐ ┌────┐ ┌────┐       │   │
│  │  │ 🗄️ │ │ 🐘 │         │ 🔧 │ │ 📦 │ │ 🚀 │       │   │
│  │  │Mng │ │Pst │         │Git │ │Dkr │ │Vrc │       │   │
│  │  └────┘ └────┘         └────┘ └────┘ └────┘       │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Categories

| Category | Technologies |
|---|---|
| **Frontend** | React, TypeScript, Tailwind CSS, Vite, Next.js |
| **Backend** | Node.js, Express, REST APIs |
| **Database** | MongoDB, PostgreSQL |
| **Tools** | Git, Docker, VS Code, Vercel, npm |

### Technology Card

- **Size:** 4 cols (desktop), full width (mobile)
- **Content:** Icon (Lucide, 24px) + Technology name (Body Small, 500)
- **Background:** Muted (subtle)
- **Border:** 1px solid --border
- **Radius:** 8px

### Hover Interaction

On hover, the card expands to reveal:

```
┌─────────────────────────┐
│  ⚛️  React              │
│  ─────────────────────  │
│  UI library for building│
│  component interfaces   │
│                         │
│  Used in: FlowSync AI,  │
│  WorkOS, Assetrix       │
└─────────────────────────┘
```

- Card expands vertically (height transition, 300ms)
- Description text fades in (200ms delay)
- Border transitions to accent
- Shadow elevates

### Visual Hierarchy

- Frontend technologies first (strongest emphasis)
- Backend second
- Database third
- Tools last
- No logo wall — structured grid with categories

### Entrance Animation

- Category labels fade in first
- Technology cards stagger in (60ms delay each)
- Cards enter from bottom (+10px, 350ms)

---

## 11. HACKATHON JOURNEY

### Timeline Structure

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  HACKATHON                                                   │
│  JOURNEY                                                     │
│                                                              │
│  ─────────── 2024 ──────────────────────                    │
│       ●                                                      │
│       │   Vibe2Ship                                          │
│       │   First hackathon experience                         │
│       │                                                      │
│  ─────────── 2025 ──────────────────────                    │
│       ●                                                      │
│       │   FlowSync AI                                        │
│       │   AI-powered workflow platform                       │
│       │                                                      │
│       ●                                                      │
│       │   Bharatiya Antariksh Hackathon                      │
│       │   Space technology innovation                        │
│       │                                                      │
│  ══════════ ODOO HACKATHON 2026 ══════════                 │
│       ◉                                                      │
│       │   GRAND FINALE FINALIST                              │
│       │   Top teams from全国 participants                    │
│       │   [ HIGHLIGHT CARD ]                                 │
│       │                                                      │
│  ─────────── 2026 ──────────────────────                    │
│       ●                                                      │
│       │   AI Agents Intensive                                │
│       │   Advanced AI development                            │
│       │                                                      │
└──────────────────────────────────────────────────────────────┘
```

### Timeline Design

- **Vertical line:** 1px, muted foreground at 30% opacity, runs full section height
- **Node:** 8px circle
  - Past events: muted foreground fill
  - Current/featured: accent fill, larger (12px), glow effect
  - Future: outline only
- **Date labels:** Label (12px, 600, uppercase), positioned left of timeline
- **Content cards:** Right of timeline, border-defined, padding 24px

### Odoo Hackathon Climax

This is the visual climax of the timeline:

- Card uses accent border (not default border)
- Card background: accent-muted (subtle tint)
- "GRAND FINALE FINALIST" badge: accent background, dark text
- Card is larger than others (more padding, larger typography)
- Node is accent-filled with subtle glow
- The timeline line changes to accent color around this section

### Card Content

| Field | Treatment |
|---|---|
| Event name | H4 (20px, 600) |
| Date | Label (12px, 600, uppercase) |
| Description | Body Small (14px, 400) |
| Achievement | Badge (accent variant) |

### Entrance Animation

- Timeline line draws in (clip-path, 1000ms)
- Nodes appear as line reaches them (50ms delay each)
- Content cards fade up (350ms) with stagger (100ms)
- Odoo card: special entrance — scale from 0.95 + fade, 500ms

---

## 12. ABOUT SECTION

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ABOUT                                                       │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────────────┐ │
│  │                      │  │                              │ │
│  │  I'm a frontend      │  │  const shubham = {           │ │
│  │  developer who       │  │    role: "Frontend Dev",     │ │
│  │  cares about         │  │    focus: [                  │ │
│  │  building polished   │  │      "React",                │ │
│  │  digital products.   │  │      "UI Engineering",       │ │
│  │                      │  │      "Product Building"      │ │
│  │  I believe in the    │  │    ],                        │ │
│  │  power of details —  │  │    philosophy: "Build.       │ │
│  │  every pixel, every  │  │      Ship. Iterate."         │ │
│  │  interaction, every  │  │  }                           │ │
│  │  transition matters. │  │                              │ │
│  │                      │  │  // Currently building       │ │
│  │  Currently building  │  │  // frontend products that   │ │
│  │  frontend products   │  │  // solve real problems      │ │
│  │  that solve real     │  │                              │ │
│  │  problems.           │  │                              │ │
│  │                      │  │                              │ │
│  └──────────────────────┘  └──────────────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Left Column — Editorial Introduction

- **Typography:** Body Large (18px, 400, 1.6)
- **Color:** Foreground for key phrases, muted foreground for supporting text
- **Content:** Personal philosophy, approach to building, what drives me
- **Max width:** 480px

### Right Column — Developer Code-Card

- **Background:** Muted surface (slightly different from card background)
- **Border:** 1px solid --border
- **Radius:** 8px
- **Font:** Code (14px, monospace)
- **Padding:** 24px
- **Syntax treatment:**
  - Keywords (const, etc.): accent color
  - Strings: muted foreground
  - Property names: foreground
  - Punctuation: muted foreground
  - Comments: muted foreground at 50%

### Code-Card Animation

- Types in character by character (50ms per character)
- Starts when card enters viewport (15% threshold)
- Cursor blinks during typing, disappears after completion

### Mobile

- Stacked layout: text on top, code-card below
- Code-card font scales to 12px
- Text scales to Body (16px)

---

## 13. CURRENTLY LEARNING

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  CURRENTLY                                                   │
│  LEARNING                                                    │
│                                                              │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐              │
│  │ Advanced   │ │ TypeScript │ │ Frontend   │              │
│  │ React      │ │ Deep Dive  │ │ Architecture│             │
│  │ ████░░░░░░ │ │ ██████░░░░ │ │ ████░░░░░░ │              │
│  └────────────┘ └────────────┘ └────────────┘              │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐              │
│  │ Performance│ │ Accessibil-│ │ Testing    │              │
│  │            │ │ ity        │ │            │              │
│  │ ██░░░░░░░░ │ │ ████░░░░░░ │ │ █░░░░░░░░░ │              │
│  └────────────┘ └────────────┘ └────────────┘              │
│  ┌────────────┐ ┌────────────┐                              │
│  │ Design     │ │ AI         │                              │
│  │ Systems    │ │ Applications│                             │
│  │ █████░░░░░ │ │ ███░░░░░░░ │                              │
│  └────────────┘ └────────────┘                              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Card Treatment

- **Size:** 4 cols (desktop), 4 cols (tablet), full width (mobile)
- **Content:** Topic name (H4, 20px, 500) + progress bar
- **Progress bar:** 4px height, muted background, accent fill (proportional to proficiency)
- **Border:** 1px solid --border
- **Radius:** 8px
- **Padding:** 20px

### Progress Indication

Progress bars represent relative comfort level, not absolute percentage:

| Level | Fill | Meaning |
|---|---|---|
| Exploring | 20% | Just starting |
| Learning | 40% | Actively studying |
| Comfortable | 60% | Can build with guidance |
| Proficient | 80% | Can build independently |
| Advanced | 95% | Deep understanding |

### Hover Interaction

- Card border transitions to accent
- Progress bar fill animates from 0 to actual width (400ms)
- Card scales 1.02

### Entrance Animation

- Cards stagger in (80ms delay)
- Progress bars animate fill on scroll entry (400ms, --ease-out)

---

## 14. GITHUB SECTION

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  GITHUB                                                      │
│  ACTIVITY                                                    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │  CONTRIBUTION GRAPH (simplified heatmap)              │   │
│  │  ░░░▓▓░░░▓░░░░▓▓▓░░░▓░░░░▓▓░░░░░░▓▓░░░▓░░░░       │   │
│  │  ░▓▓░░░▓░░▓▓░░░░▓▓░░░░▓░░░▓▓▓░░░░░░▓▓░░░░▓░       │   │
│  │  ░░░▓▓░░░░░▓▓░░░░░▓▓░░░░▓░░░░▓▓░░░░░░▓▓░░░░       │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ 1,234    │ │ 56       │ │ 89       │ │ 23       │       │
│  │ Contribu-│ │ Pull     │ │ Repos    │ │ Stars    │       │
│  │ tions    │ │ Requests │ │          │ │          │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│                                                              │
│  ┌──────────────────────┐ ┌──────────────────────┐          │
│  │ PINNED REPOSITORIES  │ │ LANGUAGES            │          │
│  │ ┌────┐ ┌────┐       │ │ ████████ TypeScript   │          │
│  │ │    │ │    │       │ │ ██████   JavaScript   │          │
│  │ └────┘ └────┘       │ │ ████     CSS          │          │
│  │ ┌────┐ ┌────┐       │ │ ██       Python       │          │
│  │ │    │ │    │       │ │                      │          │
│  │ └────┘ └────┘       │ │                      │          │
│  └──────────────────────┘ └──────────────────────┘          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Contribution Graph

- Simplified heatmap (not pixel-perfect GitHub replica)
- 52 columns × 7 rows (weeks × days)
- Color scale: muted (no contributions) → accent (high contributions)
- Hover on cell: tooltip with date and count
- Grid cells: 12px × 12px with 2px gap

### Statistics Cards

| Stat | Value | Label |
|---|---|---|
| Contributions | Count | "Contributions" |
| Pull Requests | Count | "Pull Requests" |
| Repositories | Count | "Repos" |
| Stars | Count | "Stars" |

- Cards: 3 cols each (12-col grid = 4 cards in a row)
- Number: Display LG (48px, 700)
- Label: Body Small (14px, 400, muted)
- Stat numbers count up on scroll entry (1000ms, --ease-out)

### Pinned Repositories

- 2×2 grid of repository cards
- Each card: repo name (H4), description (Body Small), language badge, star count
- Border: 1px solid --border
- Hover: border accent reveal

### Language Breakdown

- Horizontal bars showing language proportion
- Bar height: 8px
- Color: language-specific (TypeScript = blue, JS = yellow, etc.)
- Label + percentage right-aligned

### Loading State

- Skeleton placeholders (muted background, shimmer animation)
- Contribution graph: skeleton grid
- Stats: skeleton numbers
- Repos: skeleton cards

### Error State

- Graceful fallback if GitHub API fails
- Static placeholder data
- Subtle message: "Unable to load GitHub data"
- No broken UI — section still looks intentional

---

## 15. CONTACT SECTION

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│  LET'S BUILD                                                 │
│  SOMETHING                                                    │
│  TOGETHER.                                                    │
│                                                              │
│  Have a project in mind? Let's talk about it.                │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │  Name                                                │   │
│  │  ┌──────────────────────────────────────────────┐   │   │
│  │  │                                              │   │   │
│  │  └──────────────────────────────────────────────┘   │   │
│  │                                                      │   │
│  │  Email                                               │   │
│  │  ┌──────────────────────────────────────────────┐   │   │
│  │  │                                              │   │   │
│  │  └──────────────────────────────────────────────┘   │   │
│  │                                                      │   │
│  │  Message                                             │   │
│  │  ┌──────────────────────────────────────────────┐   │   │
│  │  │                                              │   │   │
│  │  │                                              │   │   │
│  │  └──────────────────────────────────────────────┘   │   │
│  │                                                      │   │
│  │  ┌──────────────────────┐                           │   │
│  │  │    SEND MESSAGE      │                           │   │
│  │  └──────────────────────┘                           │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ──────────────── OR ────────────────                       │
│                                                              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                      │
│  │ GH   │ │ LI   │ │ TW   │ │ EM   │                      │
│  └──────┘ └──────┘ └──────┘ └──────┘                      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Typography

- "LET'S BUILD" — Display LG (56px, 700)
- "SOMETHING" — Display LG (56px, 700)
- "TOGETHER." — Display LG (56px, 700, accent color)
- Supporting text — Body Large (18px, 400, muted)

### Form Design

| Element | Treatment |
|---|---|
| Labels | Label (12px, 600, uppercase, muted) |
| Inputs | Border 1px, radius 8px, padding 10px 14px, Body (16px) |
| Textarea | Same as input, min-height 120px, resizable vertical |
| Submit button | Primary CTA, accent background, neo-brutalist variant |

### Form States

| State | Behavior |
|---|---|
| Default | Border --input, transparent background |
| Hover | Border slightly stronger |
| Focus | Accent ring, accent border, 200ms |
| Error | Error border, error message below (Body Small, error color) |
| Submitting | Button shows spinner, form disabled at 50% opacity |
| Success | Toast notification: "Message sent successfully!" (sonner) |
| Failure | Toast notification: "Something went wrong. Try again." |

### Social Links

- 4 icon buttons in a row
- Size: 48px × 48px (touch target)
- Icons: Lucide (GitHub, Linkedin, Twitter/X, Mail)
- Border: 1px solid --border
- Radius: 8px
- Hover: accent border, icon color accent

### Entrance Animation

- Heading text reveals word by word (200ms stagger)
- Form fades up (500ms delay after heading)
- Social links fade in (200ms after form)

---

## 16. FOOTER

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  SD  ·  Frontend Developer  ·  Product Builder              │
│                                                              │
│  © 2026 Shubham Dangi        GitHub  LinkedIn  Twitter  ↑   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Treatment

- **Height:** 80px
- **Border-top:** 1px solid --border
- **Typography:** Caption (12px, 500)
- **Color:** Muted foreground
- **Background:** Same as page background
- **Layout:** Single row, space-between
- **Back to top:** Arrow icon button, right-aligned, ghost style

### No Entrance Animation

The footer is always visible when scrolled to the bottom — no animation needed.

---

## 17. GLOBAL MOTION DESIGN

### Page Load Sequence

| Phase | Duration | Elements |
|---|---|---|
| 1. Screen ready | 0ms | Background, layout stable |
| 2. Navbar | 200–500ms | Logo + links fade in, staggered |
| 3. Hero text | 400–1400ms | Name reveals, role reveals, CTA appears |
| 4. Hero visual | 600–1300ms | Geometric composition clip-reveals |
| 5. Scroll indicator | 1800ms | Chevron fades in |

Total page load animation: ~2 seconds.

### Scroll Animations

| Element | Trigger | Animation | Duration |
|---|---|---|---|
| Section headers | 15% visible | Fade up (+20px) | 500ms |
| Section content | 15% visible | Fade up (+20px) | 500ms, 100ms delay |
| Project visuals | 15% visible | Clip reveal from bottom | 600ms |
| Bento cards | 15% visible | Fade up (+10px), staggered | 350ms each |
| Timeline | Line reaches node | Node appears, content fades | 300ms |
| Tech cards | 15% visible | Fade up (+10px), staggered | 350ms each |
| GitHub stats | 15% visible | Number count up | 1000ms |
| Progress bars | 15% visible | Fill animation | 400ms |

### Hover Animations

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Navbar links | Color to accent | 200ms | --ease-out |
| Primary button | -1px Y, bg darken | 200ms | --ease-spring |
| Secondary button | Bg foreground 8% | 200ms | --ease-out |
| Cards | +1px Y, shadow, border | 300ms | --ease-out |
| Project images | Scale 1.03, brightness | 400ms | --ease-out |
| Links | Color accent, underline slides | 300ms | --ease-out |
| Theme toggle | Scale 1.05, bg accent-muted | 200ms | --ease-spring |
| Arrow icons | Translate X +4px | 200ms | --ease-out |

### Magnetic Interactions

| Element | Radius | Strength | Return |
|---|---|---|---|
| Hero CTA | 40px | 0.3 | 200ms, --ease-spring |
| Theme toggle | 30px | 0.2 | 200ms, --ease-spring |
| Command palette trigger | 30px | 0.2 | 200ms, --ease-spring |

### Custom Cursor

| Context | Cursor State |
|---|---|
| Default | 8px filled circle |
| Navbar links | 40px circle + accent ring |
| Buttons | 40px circle + inner dot |
| Project cards | 80px pill with "View" text |
| Project images | 48px circle + icon |
| Form inputs | Default (browser cursor) |
| Footer links | 40px circle + accent ring |

### Theme Transition

- 400ms crossfade between dark and light mode
- Background, foreground, and all tokens transition simultaneously
- No flash — transition is smooth and immediate
- Icon morph: sun ↔ moon with rotation + scale (400ms)

### Page Transitions

Not applicable — single-page application. All navigation is smooth scroll within the same page.

---

## 18. DARK MODE DESIGN

### Overall Feel

Premium, cinematic, depth-rich. The near-black background creates a theater-like experience where content floats.

### Section-by-Section Treatment

| Section | Dark Mode Treatment |
|---|---|
| **Navbar** | Transparent → blurred dark glass on scroll, subtle border at 8% opacity |
| **Hero** | Near-black background, white text, accent CTAs, geometric visual with low-opacity accent elements |
| **Marquee** | Muted text on dark, ambient feel |
| **Quick Proof** | Dark card surfaces, subtle borders, accent glow on featured card |
| **Selected Work** | Dark card surfaces, white text, large visuals with no background treatment |
| **Frontend Engineering** | Dark cards, muted category headers, accent item hover |
| **Tech Stack** | Dark cards, white icons/text, accent hover borders |
| **Hackathon Journey** | Dark timeline, muted line, accent node for Odoo |
| **About** | Dark code-card with syntax highlighting, white body text |
| **Currently Learning** | Dark cards, accent progress bars |
| **GitHub** | Dark contribution graph, accent cells, white stat numbers |
| **Contact** | Dark form surfaces, accent CTA, white text |
| **Footer** | Muted text, minimal treatment |

### Dark Mode Specifics

- Background: `oklch(0.10 0.005 260)` — near-black with slight blue undertone
- Cards: `oklch(0.14 0.005 260)` — slightly lighter, creating depth
- Borders: white at 8% opacity — subtle structure without heaviness
- Shadows: darker and more pronounced than light mode
- Accent: slightly more vibrant in dark mode (higher chroma)
- Text: high-contrast white (0.97) for primary, muted gray (0.55) for secondary

---

## 19. LIGHT MODE DESIGN

### Overall Feel

Clean, editorial, spacious. Off-white background with white cards creates a paper-like quality.

### Section-by-Section Treatment

| Section | Light Mode Treatment |
|---|---|
| **Navbar** | Transparent → blurred white glass on scroll, subtle border |
| **Hero** | Off-white background, near-black text, accent CTAs, geometric visual with low-opacity accent elements |
| **Marquee** | Muted text on off-white, subtle feel |
| **Quick Proof** | White card surfaces, soft borders, featured card with accent border |
| **Selected Work** | White card surfaces, dark text, large visuals |
| **Frontend Engineering** | White cards, dark category headers, accent item hover |
| **Tech Stack** | White cards, dark icons/text, accent hover borders |
| **Hackathon Journey** | Light timeline, muted line, accent node for Odoo |
| **About** | White code-card with syntax highlighting, dark body text |
| **Currently Learning** | White cards, accent progress bars |
| **GitHub** | White contribution graph, accent cells, dark stat numbers |
| **Contact** | White form surfaces, accent CTA, dark text |
| **Footer** | Muted text, minimal treatment |

### Light Mode Specifics

- Background: `oklch(0.98 0.002 260)` — off-white, not pure white
- Cards: `oklch(1 0 0)` — pure white, creating lift from background
- Borders: dark at 8% opacity — soft, not harsh
- Shadows: softer and more diffuse than dark mode
- Accent: same cyan/teal, slightly adjusted for light background contrast
- Text: near-black (0.12) for primary, neutral gray (0.50) for secondary

### Light Mode ≠ Inverted Dark Mode

- Same brand identity
- Same component structure
- Same accent color
- Different surface treatment (white cards on off-white vs. dark cards on near-black)
- Shadows are softer, borders are lighter
- The portfolio feels like the same product, just in daylight

---

## 20. RESPONSIVE DESIGN

### Large Desktop (1440px+)

- Container max-width: 1280px, centered
- Full 12-column grid
- All animations active (parallax, magnetic, custom cursor)
- Display XL at 72px
- Generous spacing (160px between sections)

### Desktop (1024px–1439px)

- Container max-width: 1280px, centered
- Full 12-column grid
- All animations active
- Display XL scales to 60px
- Spacing: 128px between sections

### Tablet (768px–1023px)

- 8-column grid
- Container padding: 32px
- Custom cursor disabled
- Magnetic interactions disabled
- Simpler entrance animations (fade only, no stagger)
- Display XL scales to 48px
- Spacing: 96px between sections
- Navbar: reduced links, hamburger for extras
- Bento: simplified grid, fewer column options

### Mobile (< 768px)

- 4-column grid
- Container padding: 20px
- Custom cursor disabled
- Magnetic interactions disabled
- All parallax disabled
- Animations: fade/slide only
- Display XL scales to 36px
- Spacing: 64px between sections
- Navbar: hamburger menu (full-screen overlay)
- Bento: single column, all cards full width
- Touch targets: minimum 44px × 44px

### Mobile-First Principles

- Mobile is a **first-class experience**
- Bottom-anchored CTAs for thumb reach
- Swipe gestures for project carousel
- Reduced information density — clarity over completeness
- Hamburger menu with large touch targets (minimum 48px between items)
- Single-column layouts that breathe

### Section Behavior by Breakpoint

| Section | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero | Two-column (text + visual) | Stacked | Stacked, visual below |
| Marquee | Full-width horizontal | Scaled down | Scaled down, text wraps |
| Quick Proof | Bento grid (varied spans) | Simplified grid | Single column |
| Selected Work | Full-width stacked | Stacked, smaller visuals | Stacked, full-width visuals |
| Frontend Engineering | 2×2 category grid | 2-column | Single column |
| Tech Stack | 4-column grid | 2-column | Single column |
| Hackathon Journey | Vertical timeline | Vertical timeline | Vertical timeline |
| About | Two-column | Stacked | Stacked |
| Currently Learning | 3-column grid | 2-column | Single column |
| GitHub | Full bento layout | Simplified | Single column |
| Contact | Centered form | Centered form | Full-width form |
| Footer | Single row | Single row | Stacked |

---

## 21. INTERACTION MAP

| Element | Default | Hover | Active | Focus | Animation |
|---|---|---|---|---|---|
| **Navbar link** | FG text | Accent text | Accent text | Accent ring | Color 200ms |
| **Navbar logo** | FG text | FG text | FG text | Accent ring | None |
| **Primary button** | Accent bg, dark text | Darker accent, -1px Y | Scale 0.98 | Accent ring | 200ms spring |
| **Secondary button** | Border, transparent bg | FG bg 8% | Scale 0.98 | Accent ring | 200ms |
| **Ghost button** | No bg/border | FG bg 5% | Scale 0.98 | Accent ring | 150ms |
| **Project card** | Border, card bg | Border accent, +1px Y, shadow | Scale 0.99 | Accent ring | 300ms |
| **Project image** | 16:9, object-cover | Scale 1.03, brightness 1.05 | None | None | 400ms |
| **Tech card** | Border, muted bg | Border accent, expand | None | None | 300ms |
| **Timeline node** | 8px muted circle | None | None | None | None |
| **Theme toggle** | Icon, ghost bg | Accent bg, scale 1.05 | Rotation | Accent ring | 200ms spring |
| **Command palette** | ⌘K badge | Ghost bg | None | Accent ring | None |
| **Form input** | Border --input | Border stronger | None | Accent ring, border | 200ms |
| **Form textarea** | Border --input | Border stronger | None | Accent ring, border | 200ms |
| **Submit button** | Primary CTA | Darker accent, -1px Y | Scale 0.98 | Accent ring | 200ms spring |
| **Social link** | Border, icon FG | Border accent, icon accent | Scale 0.95 | Accent ring | 200ms |
| **Footer link** | Muted text | Accent text | Accent text | Accent ring | 200ms |
| **Back to top** | Arrow, ghost bg | Accent bg | Scale 0.95 | Accent ring | 200ms |

---

## 22. PAGE TRANSITION MAP

### In-Page Navigation (Scroll)

| From | To | Behavior |
|---|---|---|
| Any section | Any section | Smooth scroll (800ms, --ease-in-out) |
| Navbar link | Section | Smooth scroll to section anchor |

### Theme Change

| From | To | Behavior |
|---|---|---|
| Dark mode | Light mode | 400ms crossfade, all tokens transition |
| Light mode | Dark mode | 400ms crossfade, all tokens transition |

### Mobile Menu

| Action | Behavior |
|---|---|
| Open | Overlay fades in (200ms), links stagger from bottom (80ms each) |
| Close | Links fade out (100ms), overlay fades out (150ms) |
| Link click | Close menu (150ms), then smooth scroll to section |

### Command Palette

| Action | Behavior |
|---|---|
| Open | Backdrop blur + fade (200ms), modal scales 0.95 → 1 (300ms) |
| Close | Modal scales 1 → 0.95 (200ms), backdrop fades (150ms) |
| Result select | Close palette (200ms), execute action (smooth scroll or navigate) |

---

## 23. LOADING STATES

### Initial Page

- No full-screen loading spinner
- Hero content renders immediately (critical path)
- Below-fold sections use Intersection Observer for lazy rendering
- Fonts load with `font-display: swap` — no FOIT

### GitHub Data

- Skeleton placeholders while API loads
- Contribution graph: skeleton grid (muted, shimmer)
- Stats: skeleton numbers (muted rectangles)
- Repos: skeleton cards
- Graceful fallback if API fails

### Project Images

- Skeleton placeholder (muted background, shimmer animation)
- Opacity transition 0 → 1 on load (400ms)
- `loading="lazy"` attribute on all below-fold images
- Width/height attributes prevent layout shift

### Contact Submission

- Button shows spinner icon during submission
- Form disabled at 50% opacity
- On success: toast notification, form resets
- On failure: toast notification, form remains filled

---

## 24. EMPTY / ERROR STATES

### GitHub API Failure

- Static placeholder data (pre-defined)
- Subtle message: "Unable to load GitHub data"
- Section still renders with intentional layout
- No broken UI

### Missing Project Image

- Muted background with icon (ImageIcon from Lucide)
- Text: "Project screenshot"
- Maintains aspect ratio
- Consistent with design system

### Contact Submission Failure

- Toast notification: "Something went wrong. Please try again."
- Error color border on form
- Form remains filled — user doesn't lose input
- Retry button or re-submit

### Invalid Form Input

- Red border on invalid field (error color)
- Error message below field (Body Small, error color)
- Error associated via `aria-describedby`
- Screen reader announces error via `aria-live`

### 404 (if applicable)

- Centered, minimal
- "404" in Display XL (muted)
- "Page not found" in Body Large
- "Go Home" CTA button

---

## 25. ACCESSIBILITY EXPERIENCE

### Keyboard Navigation

- **Tab order:** Logo → nav links → theme toggle → command palette → hero CTA → hero secondary CTA → social links → ... (section by section)
- **Skip link:** "Skip to content" as first focusable element, visually hidden until focused
- **Focus indicators:** Accent ring (2px, 2px offset) on all interactive elements
- **Escape key:** Closes modals, dropdowns, command palette, mobile menu
- **Arrow keys:** Navigate within menus, tabs, timeline

### Screen Reader Considerations

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- One `<h1>` per page (hero name)
- Heading hierarchy: h1 → h2 → h3 → h4 (never skip)
- Images: descriptive `alt` text for project screenshots
- Decorative images: `alt=""`
- Form inputs: associated `<label>` elements
- Dynamic content: `aria-live="polite"` for toasts
- Custom components: appropriate ARIA roles

### Color Contrast

- Body text: WCAG AA (4.5:1 minimum)
- Large text: WCAG AA (3:1 minimum)
- Interactive elements: 3:1 against background
- Focus indicators: 3:1 against adjacent colors
- Both dark and light modes pass contrast checks

### Reduced Motion

- All parallax disabled
- All continuous animations disabled
- Entrance animations replaced with instant reveals
- Stagger animations removed (all elements appear at once)
- Magnetic interactions disabled
- Custom cursor disabled
- Functional transitions (dropdown, modal) kept at 100ms
- Scroll-triggered content always visible

### Touch Targets

- All interactive elements: minimum 44px × 44px
- Buttons: minimum 44px height
- Icon buttons: 44px × 44px minimum
- Links: padded to meet minimum tap target
- Mobile menu items: 48px minimum height

---

## 26. PERFORMANCE EXPERIENCE

### Image Loading

- Lazy-load all below-fold images (`loading="lazy"`)
- Provide `width` and `height` to prevent CLS
- Modern formats: WebP primary, AVIF when supported
- 2x resolution for retina displays
- Skeleton placeholders during load
- `aspect-ratio` CSS to prevent layout shift

### Animation Performance

- All animations use `transform` and `opacity` (GPU-accelerated)
- Never animate `width`, `height`, `top`, `left`, `margin`, `padding`
- `will-change` used sparingly, removed after animation
- Maximum 3 simultaneous animations
- `requestAnimationFrame` for scroll-driven animations
- Scroll animations pause when not in viewport

### Initial Page Load

- Hero content: critical path, loads first
- Below-fold content: lazy-loaded via Intersection Observer
- Fonts: `font-display: swap` (no FOIT)
- No render-blocking scripts in `<head>`
- Minimal initial JavaScript bundle

### Mobile Performance

- Reduced animation complexity
- No particle systems
- No continuous/looping animations
- Simpler entrance animations (fade only)
- No parallax
- Reduced shadow complexity

### The Rule

> The visual design must never compromise usability or performance.

---

## 27. CONTENT HIERARCHY

### Visual Priority (What Users Notice First)

| Priority | Element | Reason |
|---|---|---|
| 1 | **Name + Role** | Identity — who is this? |
| 2 | **Hero headline** | Positioning — what do they do? |
| 3 | **Primary CTA** | Action — what should I do next? |
| 4 | **Selected Work** | Proof — what have they built? |
| 5 | **Odoo Achievement** | Credibility — external validation |
| 6 | **Frontend Engineering** | Depth — how do they think? |
| 7 | **Tech Stack** | Breadth — what tools do they use? |
| 8 | **About** | Connection — who is this person? |
| 9 | **GitHub** | Data — real activity |
| 10 | **Contact** | Conversion — let's connect |

### Visual Hierarchy Techniques

- **Typography size:** Larger = higher priority
- **Color:** Accent = attention, muted = secondary
- **Spacing:** More whitespace = more importance
- **Position:** Top of page = first impression
- **Animation:** More dramatic = more emphasis
- **Contrast:** Higher contrast = more prominence

---

## 28. DESKTOP WIREFRAME

```
┌─────────────────────────────────────────────────────────────────────┐
│  SD    Work   About   Stack   Journey   Contact      ☀️     ⌘K     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  AVAILABLE FOR WORK                                                 │
│                                                                     │
│  SHUBHAM                                                            │
│  DANGI                                                              │
│                                                                     │
│  FRONTEND                                                           │
│  DEVELOPER                                                          │
│                                                                     │
│  I build polished digital products with modern frontend             │
│  technologies.                                                      │
│                                                                     │
│  [ EXPLORE WORK ]  [ GET IN TOUCH ]                                 │
│                                                                     │
│  ────────  GitHub  LinkedIn  Twitter                                │
│                                                                     │
│                              ┌──────────────────────────────┐       │
│                              │                              │       │
│                              │    GEOMETRIC VISUAL          │       │
│                              │    (abstract shapes,         │       │
│                              │     accent colors,           │       │
│                              │     mouse-reactive)          │       │
│                              │                              │       │
│                              └──────────────────────────────┘       │
│                                                                     │
│  ▼                                                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  BUILD • SHIP • LEARN • ITERATE • BUILD • SHIP • LEARN • ITERATE  │
│                                                                     │
│  I approach every project as a product — from architecture          │
│  to the final pixel.                                                │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌────────────────────────────┐ ┌──────────┐ ┌──────────┐         │
│  │                            │ │          │ │          │         │
│  │  ODOO 2026 HACKATHON       │ │ FRONTEND │ │ REACT 19 │         │
│  │  GRAND FINALE FINALIST     │ │  ENG.    │ │          │         │
│  │                            │ │          │ │          │         │
│  │  (Featured - 8 cols)       │ └──────────┘ └──────────┘         │
│  │                            │ ┌──────────┐ ┌──────────┐         │
│  │                            │ │ PRODUCT  │ │ MODERN   │         │
│  │                            │ │ BUILDER  │ │ STACK    │         │
│  │                            │ │          │ │          │         │
│  └────────────────────────────┘ └──────────┘ └──────────┘         │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  SELECTED                                                           │
│  WORK                                                               │
│                                                                     │
│  ──────────────────────────────────────────────────────             │
│                                                                     │
│  01                                                                 │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │              FLOWSYNC AI SCREENSHOT (16:9)                   │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│  FlowSync AI                                   React  AI  API     │
│  AI-powered workflow automation platform                           │
│  [ VIEW PROJECT → ]                                               │
│                                                                     │
│  ──────────────────────────────────────────────────────             │
│                                                                     │
│  02                                                                 │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │              WORKOS SCREENSHOT (16:9)                        │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│  WorkOS                                     React  TypeScript      │
│  Developer tools and workflow management                           │
│  [ VIEW PROJECT → ]                                               │
│                                                                     │
│  ──────────────────────────────────────────────────────             │
│                                                                     │
│  03  Assetrix           [ ... ]                                    │
│  04  CAMPUS360          [ ... ]                                    │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  FRONTEND                                                          │
│  ENGINEERING                                                       │
│                                                                     │
│  ┌───────────────────────────┐ ┌───────────────────────────┐      │
│  │ UI ENGINEERING            │ │ REACT ECOSYSTEM           │      │
│  │ ┌─────┐ ┌─────┐          │ │ ┌─────┐ ┌─────┐          │      │
│  │ │Resp.│ │Comp.│          │ │ │R19  │ │Rtr  │          │      │
│  │ └─────┘ └─────┘          │ │ └─────┘ └─────┘          │      │
│  │ ┌─────┐ ┌─────┐          │ │ ┌─────┐ ┌─────┐          │      │
│  │ │A11y │ │State│          │ │ │TQ   │ │Ctx  │          │      │
│  │ └─────┘ └─────┘          │ │ └─────┘ └─────┘          │      │
│  └───────────────────────────┘ └───────────────────────────┘      │
│  ┌───────────────────────────┐ ┌───────────────────────────┐      │
│  │ STYLING                   │ │ APPLICATION DEV            │      │
│  │ ┌─────┐ ┌─────┐          │ │ ┌─────┐ ┌─────┐          │      │
│  │ │Tail.│ │CSS  │          │ │ │API  │ │Forms│          │      │
│  │ └─────┘ └─────┘          │ │ └─────┘ └─────┘          │      │
│  │ ┌─────┐ ┌─────┐          │ │ ┌─────┐ ┌─────┐          │      │
│  │ │Resp.│ │Theme│          │ │ │Charts│ │PWA │          │      │
│  │ └─────┘ └─────┘          │ │ └─────┘ └─────┘          │      │
│  └───────────────────────────┘ └───────────────────────────┘      │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  TECH                                                              │
│  STACK                                                             │
│                                                                     │
│  FRONTEND: React · TypeScript · Tailwind · Vite · Next.js         │
│  BACKEND: Node.js · Express · REST APIs                            │
│  DATABASE: MongoDB · PostgreSQL                                    │
│  TOOLS: Git · Docker · VS Code · Vercel · npm                     │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  HACKATHON                                                         │
│  JOURNEY                                                           │
│                                                                     │
│  ───── 2024 ─────                                                  │
│       ● Vibe2Ship                                                  │
│  ───── 2025 ─────                                                  │
│       ● FlowSync AI                                                │
│       ● Bharatiya Antariksh Hackathon                              │
│  ════ ODOO HACKATHON 2026 ════                                    │
│       ◉ GRAND FINALE FINALIST                                      │
│  ───── 2026 ─────                                                  │
│       ● AI Agents Intensive                                        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ABOUT                                                             │
│                                                                     │
│  ┌──────────────────────┐ ┌──────────────────────────────┐        │
│  │ I'm a frontend dev   │ │ const shubham = {             │        │
│  │ who builds polished  │ │   role: "Frontend Dev",      │        │
│  │ digital products.    │ │   focus: ["React", ...]      │        │
│  │                      │ │ }                             │        │
│  └──────────────────────┘ └──────────────────────────────┘        │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  CURRENTLY                                                         │
│  LEARNING                                                          │
│                                                                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                          │
│  │ Adv.Ract │ │ TS Deep  │ │ Frontend │                          │
│  │ ████░░░░ │ │ ██████░░ │ │ Arch.    │                          │
│  └──────────┘ └──────────┘ │ ████░░░░ │                          │
│  ┌──────────┐ ┌──────────┐ └──────────┘                          │
│  │ Perf.    │ │ A11y     │ ┌──────────┐                          │
│  │ ██░░░░░░ │ │ ████░░░░ │ │ Testing  │                          │
│  └──────────┘ └──────────┘ │ █░░░░░░░ │                          │
│  ┌──────────┐ ┌──────────┐ └──────────┘                          │
│  │ Design   │ │ AI Apps  │                                       │
│  │ Systems  │ │ ███░░░░░ │                                       │
│  │ █████░░░ │ └──────────┘                                       │
│  └──────────┘                                                     │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  GITHUB                                                            │
│  ACTIVITY                                                          │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ CONTRIBUTION GRAPH (heatmap)                                  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                            │
│  │1,234 │ │ 56   │ │ 89   │ │ 23   │                            │
│  │Cont. │ │ PRs  │ │ Repos│ │Stars │                            │
│  └──────┘ └──────┘ └──────┘ └──────┘                            │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                                                                     │
│  LET'S BUILD                                                       │
│  SOMETHING                                                          │
│  TOGETHER.                                                          │
│                                                                     │
│  Have a project in mind? Let's talk about it.                      │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Name    [_______________]                                   │  │
│  │  Email   [_______________]                                   │  │
│  │  Message [_______________________________]                   │  │
│  │                                                              │  │
│  │  [ SEND MESSAGE ]                                            │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ──────── OR ────────                                              │
│                                                                     │
│  [GH] [LI] [TW] [EM]                                              │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  SD  ·  Frontend Developer  ·  Product Builder                    │
│  © 2026 Shubham Dangi             GitHub  LinkedIn  Twitter  ↑    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 29. MOBILE WIREFRAME

```
┌───────────────────┐
│  SD          ☀️  ☰ │
├───────────────────┤
│                   │
│ AVAILABLE FOR     │
│ WORK              │
│                   │
│ SHUBHAM           │
│ DANGI             │
│                   │
│ FRONTEND          │
│ DEVELOPER         │
│                   │
│ I build polished  │
│ digital products  │
│ with modern       │
│ frontend tech.    │
│                   │
│ [EXPLORE WORK]    │
│ [GET IN TOUCH]    │
│                   │
│ GitHub LinkedIn   │
│ Twitter           │
│                   │
│ ┌───────────────┐ │
│ │   GEOMETRIC   │ │
│ │   VISUAL      │ │
│ └───────────────┘ │
│                   │
│ ▼                 │
├───────────────────┤
│                   │
│ BUILD • SHIP •    │
│ LEARN • ITERATE   │
│                   │
│ I approach every  │
│ project as a      │
│ product.          │
│                   │
├───────────────────┤
│                   │
│ ┌───────────────┐ │
│ │ ODOO 2026     │ │
│ │ HACKATHON     │ │
│ │ FINALIST      │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ FRONTEND ENG. │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ REACT 19      │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ PRODUCT BUILDER│ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ MODERN STACK  │ │
│ └───────────────┘ │
│                   │
├───────────────────┤
│                   │
│ SELECTED          │
│ WORK              │
│                   │
│ ┌───────────────┐ │
│ │               │ │
│ │  01 VISUAL    │ │
│ │               │ │
│ └───────────────┘ │
│ FlowSync AI       │
│ React  AI  API    │
│ [VIEW PROJECT →]  │
│                   │
│ ┌───────────────┐ │
│ │               │ │
│ │  02 VISUAL    │ │
│ │               │ │
│ └───────────────┘ │
│ WorkOS            │
│ React  TypeScript │
│ [VIEW PROJECT →]  │
│                   │
│ ┌───────────────┐ │
│ │  03 VISUAL    │ │
│ └───────────────┘ │
│ Assetrix          │
│                   │
│ ┌───────────────┐ │
│ │  04 VISUAL    │ │
│ └───────────────┘ │
│ CAMPUS360         │
│                   │
├───────────────────┤
│                   │
│ FRONTEND          │
│ ENGINEERING       │
│                   │
│ ┌───────────────┐ │
│ │ UI ENGINEERING│ │
│ │ ┌────┐ ┌────┐│ │
│ │ │    │ │    ││ │
│ │ └────┘ └────┘│ │
│ │ ┌────┐ ┌────┐│ │
│ │ │    │ │    ││ │
│ │ └────┘ └────┘│ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ REACT ECOSYS. │ │
│ │ ┌────┐ ┌────┐│ │
│ │ │    │ │    ││ │
│ │ └────┘ └────┘│ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ STYLING       │ │
│ │ ┌────┐ ┌────┐│ │
│ │ │    │ │    ││ │
│ │ └────┘ └────┘│ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ APP DEV       │ │
│ │ ┌────┐ ┌────┐│ │
│ │ │    │ │    ││ │
│ │ └────┘ └────┘│ │
│ └───────────────┘ │
│                   │
├───────────────────┤
│                   │
│ TECH              │
│ STACK             │
│                   │
│ FRONTEND          │
│ React · TS ·      │
│ Tailwind · Vite   │
│                   │
│ BACKEND           │
│ Node.js · Express │
│                   │
│ DATABASE          │
│ MongoDB · Psql    │
│                   │
│ TOOLS             │
│ Git · Docker ·    │
│ VS Code · Vercel  │
│                   │
├───────────────────┤
│                   │
│ HACKATHON         │
│ JOURNEY           │
│                   │
│ ● Vibe2Ship       │
│ │                 │
│ ● FlowSync AI     │
│ │                 │
│ ● Bharatiya ASH   │
│ │                 │
│ ◉ ODOO 2026       │
│ │   FINALIST      │
│ │                 │
│ ● AI Agents       │
│                   │
├───────────────────┤
│                   │
│ ABOUT             │
│                   │
│ I'm a frontend    │
│ developer who     │
│ builds polished   │
│ digital products. │
│                   │
│ ┌───────────────┐ │
│ │ const shubham │ │
│ │ = {           │ │
│ │  role: "..."  │ │
│ │ }             │ │
│ └───────────────┘ │
│                   │
├───────────────────┤
│                   │
│ CURRENTLY         │
│ LEARNING          │
│                   │
│ ┌───────────────┐ │
│ │ Adv. React    │ │
│ │ ████░░░░░░    │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ TypeScript    │ │
│ │ ██████░░░░    │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ Frontend Arch │ │
│ │ ████░░░░░░    │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ Performance   │ │
│ │ ██░░░░░░░░    │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ Accessibility │ │
│ │ ████░░░░░░    │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ Testing       │ │
│ │ █░░░░░░░░░    │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ Design Systems│ │
│ │ █████░░░░░    │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ AI Apps       │ │
│ │ ███░░░░░░░    │ │
│ └───────────────┘ │
│                   │
├───────────────────┤
│                   │
│ GITHUB            │
│ ACTIVITY          │
│                   │
│ ┌───────────────┐ │
│ │ CONTRIBUTION  │ │
│ │ GRAPH         │ │
│ └───────────────┘ │
│                   │
│ ┌─────┐ ┌─────┐  │
│ │1234 │ │ 56  │  │
│ │Cont.│ │ PRs │  │
│ └─────┘ └─────┘  │
│ ┌─────┐ ┌─────┐  │
│ │ 89  │ │ 23  │  │
│ │Repos│ │Stars│  │
│ └─────┘ └─────┘  │
│                   │
├───────────────────┤
│                   │
│ LET'S BUILD       │
│ SOMETHING          │
│ TOGETHER.          │
│                   │
│ ┌───────────────┐ │
│ │ Name          │ │
│ │ [___________] │ │
│ │               │ │
│ │ Email         │ │
│ │ [___________] │ │
│ │               │ │
│ │ Message       │ │
│ │ [___________] │ │
│ │ [___________] │ │
│ │               │ │
│ │ [SEND MESSAGE]│ │
│ └───────────────┘ │
│                   │
│ ──── OR ────      │
│                   │
│ [GH] [LI]        │
│ [TW] [EM]        │
│                   │
├───────────────────┤
│                   │
│ SD · Frontend Dev │
│ · Product Builder │
│                   │
│ © 2026   ↑       │
│                   │
└───────────────────┘
```

### Key Mobile Changes

- Hero: stacked layout (text above, visual below)
- Quick Proof: single-column cards (no bento grid)
- Selected Work: full-width visuals, no project numbers
- Frontend Engineering: single-column category cards
- Tech Stack: grouped list instead of grid
- Hackathon: same vertical timeline
- About: stacked (text above, code-card below)
- Currently Learning: single-column cards
- GitHub: simplified layout
- Contact: full-width form
- Footer: stacked layout

---

## 30. VISUAL QUALITY CHECKLIST

### Visual

- [ ] Typography follows the type scale exactly
- [ ] All spacing uses the spacing scale (no arbitrary values)
- [ ] Grid alignment is consistent across all sections
- [ ] Color contrast passes WCAG AA in both dark and light modes
- [ ] Consistent border radius across all components
- [ ] Consistent icon sizing (Lucide only)
- [ ] No orphaned or widowed text
- [ ] Line lengths: 60-80 characters for body text

### Motion

- [ ] All animations serve hierarchy, feedback, or storytelling
- [ ] No decorative animation
- [ ] Reduced motion preference respected
- [ ] No jank on mid-range devices
- [ ] Scroll animations pause when not in viewport
- [ ] No continuous/looping animations (except marquee)
- [ ] Animation timing follows the duration scale

### UX

- [ ] Navbar is sticky and functional
- [ ] All interactive elements have visible focus states
- [ ] Skip-to-content link works
- [ ] Command palette opens/closes with ⌘K
- [ ] Theme toggle works smoothly
- [ ] Mobile menu is accessible
- [ ] Forms validate and provide feedback
- [ ] Contact form submits with toast feedback
- [ ] Back-to-top button works
- [ ] Smooth scroll to sections works

### Responsive

- [ ] Desktop (1440+): all features active
- [ ] Desktop (1024-1439): all features active
- [ ] Tablet (768-1023): simplified animations, no custom cursor
- [ ] Mobile (< 768): hamburger menu, single-column, minimal animations
- [ ] Touch targets: 44px minimum on mobile
- [ ] No horizontal scroll on any breakpoint
- [ ] Typography scales properly
- [ ] Images maintain aspect ratio

### Performance

- [ ] Images lazy-loaded
- [ ] No layout shift (CLS < 0.1)
- [ ] Fonts load with `font-display: swap`
- [ ] No render-blocking resources
- [ ] Animations use transform/opacity only
- [ ] No unnecessary JavaScript

### Branding

- [ ] Digital Editorial identity is clear
- [ ] Cyan/teal accent used sparingly and consistently
- [ ] Dark and light modes share the same brand
- [ ] Professional developer positioning maintained
- [ ] The portfolio itself proves the capability

---

## FINAL RULE

`design.md` is the complete UI/UX blueprint.

`theme.md` defines the design system — tokens, rules, principles.

`design.md` defines how that system is applied to every section, every component, every interaction, and every breakpoint of the portfolio.

A frontend developer should be able to implement the entire portfolio from these two documents without inventing major visual or interaction decisions.

No React components or UI were modified in the creation of this document.
