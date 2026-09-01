# Portfolio Design System

> Single source of truth for all visual design, interaction language, and motion decisions.

---

## 1. DESIGN DIRECTION

### Primary Theme: Digital Editorial

The portfolio is a curated editorial experience — not a template, not a playground. Every element earns its place through function, hierarchy, or intentional contrast.

### Supporting Visual Languages

| Language | Role |
|---|---|
| Swiss Grid | Structural backbone — strong alignment, mathematical spacing, asymmetric composition |
| Modern Bento | Content modularity — varied card sizes, deliberate density changes |
| Subtle Neo-Brutalism | Accent moments — sharp corners, bold borders, offset shadows on select elements |
| Cinematic Motion | Storytelling layer — scroll-driven reveals, parallax depth, staggered entrances |
| Premium Developer Aesthetic | Tone — technical credibility without coldness, precision without sterility |

### What This Portfolio Feels Like

- Premium
- Modern
- Confident
- Technical
- Editorial
- Minimal but visually impressive
- Highly interactive
- Professional enough for recruiters and senior developers

### What This Portfolio Avoids

- Generic developer portfolio templates
- Excessive glassmorphism
- Excessive gradients
- Overuse of neon colors
- Excessive 3D elements
- Random animations without purpose
- Decorative elements without function
- Cluttered layouts
- Cartoonish UI

### Core Principle

> Minimal at first glance. Impressive when interacted with.

---

## 2. BRAND PERSONALITY

### Personality Traits

- **Confident** — Decisions are made, not hedged
- **Precise** — Every pixel, every token, every timing is intentional
- **Experimental** — Willing to push boundaries in controlled moments
- **Technical** — Speaks the language of builders
- **Human** — Warmth beneath the precision
- **Product-focused** — Treats the portfolio itself as a shipped product
- **Detail-oriented** — The small things are the big things

### Brand Statement

> "I don't just build websites. I build polished digital products."

### Tone of Voice

The design should communicate craftsmanship, intentionality, and technical depth without arrogance. It should feel like opening a well-designed product — not viewing a marketing page.

---

## 3. COLOR SYSTEM

### 3.1 Accent Color (Brand)

The single controlled accent across both themes is a **cyan/teal** family.

| Token | Value | Usage |
|---|---|---|
| Accent Base | `oklch(0.78 0.15 195)` | Primary accent — links, CTAs, highlights |
| Accent Hover | `oklch(0.72 0.15 195)` | Hover state |
| Accent Active | `oklch(0.65 0.15 195)` | Active/pressed state |
| Accent Muted | `oklch(0.78 0.06 195)` | Subtle accent backgrounds |
| Accent Background | `oklch(0.78 0.03 195)` | Very subtle tinted surfaces |
| Accent Border | `oklch(0.78 0.10 195)` | Accent borders, focus rings |
| Accent Glow | `oklch(0.78 0.15 195 / 0.15)` | Subtle glow effects (sparingly) |

### 3.2 Dark Mode

| Token | Value | Description |
|---|---|---|
| `--background` | `oklch(0.10 0.005 260)` | Near-black base |
| `--foreground` | `oklch(0.97 0 0)` | High-contrast white text |
| `--card` | `oklch(0.14 0.005 260)` | Dark neutral surface |
| `--card-foreground` | `oklch(0.97 0 0)` | Card text |
| `--popover` | `oklch(0.14 0.005 260)` | Dropdown/modal surface |
| `--popover-foreground` | `oklch(0.97 0 0)` | Popover text |
| `--primary` | `oklch(0.97 0 0)` | Primary buttons — white on dark |
| `--primary-foreground` | `oklch(0.10 0.005 260)` | Primary button text |
| `--secondary` | `oklch(0.18 0.005 260)` | Secondary surface |
| `--secondary-foreground` | `oklch(0.85 0 0)` | Secondary text |
| `--muted` | `oklch(0.18 0.005 260)` | Muted surface |
| `--muted-foreground` | `oklch(0.55 0 0)` | Secondary/muted text |
| `--accent` | `oklch(0.18 0.02 195)` | Accent surface (tinted) |
| `--accent-foreground` | `oklch(0.90 0 0)` | Accent surface text |
| `--destructive` | `oklch(0.58 0.22 27)` | Error/danger |
| `--border` | `oklch(1 0 0 / 8%)` | Very subtle borders |
| `--input` | `oklch(1 0 0 / 10%)` | Input borders |
| `--ring` | `oklch(0.78 0.15 195)` | Focus rings — accent |
| `--success` | `oklch(0.72 0.19 155)` | Success states |
| `--warning` | `oklch(0.80 0.16 80)` | Warning states |
| `--error` | `oklch(0.58 0.22 27)` | Error states (same as destructive) |
| `--info` | `oklch(0.78 0.15 195)` | Info — uses accent |

### 3.3 Light Mode

| Token | Value | Description |
|---|---|---|
| `--background` | `oklch(0.98 0.002 260)` | Off-white base (not pure white) |
| `--foreground` | `oklch(0.12 0.005 260)` | Near-black text |
| `--card` | `oklch(1 0 0)` | White card surface |
| `--card-foreground` | `oklch(0.12 0.005 260)` | Card text |
| `--popover` | `oklch(1 0 0)` | White popover surface |
| `--popover-foreground` | `oklch(0.12 0.005 260)` | Popover text |
| `--primary` | `oklch(0.12 0.005 260)` | Primary — dark on light |
| `--primary-foreground` | `oklch(0.98 0 0)` | Primary button text |
| `--secondary` | `oklch(0.96 0.002 260)` | Light gray surface |
| `--secondary-foreground` | `oklch(0.25 0 0)` | Secondary text |
| `--muted` | `oklch(0.96 0.002 260)` | Muted surface |
| `--muted-foreground` | `oklch(0.50 0 0)` | Muted text |
| `--accent` | `oklch(0.96 0.02 195)` | Accent surface (tinted) |
| `--accent-foreground` | `oklch(0.20 0.01 195)` | Accent surface text |
| `--destructive` | `oklch(0.55 0.22 27)` | Error/danger |
| `--border` | `oklch(0.10 0 0 / 8%)` | Soft borders |
| `--input` | `oklch(0.10 0 0 / 12%)` | Input borders |
| `--ring` | `oklch(0.78 0.15 195)` | Focus rings — accent |
| `--success` | `oklch(0.65 0.19 155)` | Success states |
| `--warning` | `oklch(0.75 0.16 80)` | Warning states |
| `--error` | `oklch(0.55 0.22 27)` | Error states |
| `--info` | `oklch(0.78 0.15 195)` | Info — uses accent |

### 3.4 Color Principles

- Dark and light modes are the **same brand**, not two different websites
- The accent color **guides attention**, never dominates
- No more than one competing accent color at any time
- Muted/secondary text must maintain WCAG AA contrast in both modes
- Border colors in dark mode use opacity, not solid grays

---

## 4. TYPOGRAPHY SYSTEM

### 4.1 Font Families

| Role | Font | Fallback | Source |
|---|---|---|---|
| Display / Headings | Geist Variable | system-ui, sans-serif | @fontsource-variable/geist |
| Body | Geist Variable | system-ui, sans-serif | @fontsource-variable/geist |
| Monospace / Code | Geist Mono | ui-monospace, monospace | @fontsource-variable/geist-mono (install when needed) |

Geist is a modern, technical sans-serif designed for developer products. It communicates precision and modernity without being cold.

### 4.2 Type Scale

| Level | Size (px) | Weight | Line Height | Letter Spacing | Use Case |
|---|---|---|---|---|---|
| Display XL | 72 / 4.5rem | 700 | 1.05 | -0.03em | Hero section, section intros |
| Display LG | 56 / 3.5rem | 700 | 1.1 | -0.025em | Major headings |
| H1 | 40 / 2.5rem | 600 | 1.15 | -0.02em | Page/section titles |
| H2 | 32 / 2rem | 600 | 1.2 | -0.015em | Section headings |
| H3 | 24 / 1.5rem | 600 | 1.3 | -0.01em | Subsection headings |
| H4 | 20 / 1.25rem | 500 | 1.35 | -0.005em | Card titles, small headings |
| Body Large | 18 / 1.125rem | 400 | 1.6 | 0 | Introductory paragraphs, lead text |
| Body | 16 / 1rem | 400 | 1.6 | 0 | Default body text |
| Body Small | 14 / 0.875rem | 400 | 1.5 | 0.005em | Secondary information, metadata |
| Caption | 12 / 0.75rem | 500 | 1.4 | 0.01em | Labels, timestamps, fine print |
| Label | 12 / 0.75rem | 600 | 1.4 | 0.03em | Button labels, tags, uppercase labels |
| Code | 14 / 0.875rem | 400 | 1.6 | 0 | Inline code, code blocks |

### 4.3 Typography Principles

- Headings are a **major visual element** — they carry the editorial weight
- Display sizes should feel cinematic and confident
- Body text prioritizes readability above all else
- Monospace is reserved for code and technical metadata
- Never use font sizes below 12px in the UI
- Line length for body text: 60-80 characters maximum

---

## 5. SPACING SYSTEM

### 5.1 Spacing Scale

Based on a 4px base unit.

| Token | Value | Usage |
|---|---|---|
| `--space-2xs` | 2px | Micro adjustments |
| `--space-xs` | 4px | Tight inline spacing |
| `--space-sm` | 8px | Compact UI — badges, tags, small gaps |
| `--space-md` | 12px | Default compact spacing |
| `--space-base` | 16px | Standard spacing unit |
| `--space-lg` | 20px | Comfortable spacing |
| `--space-xl` | 24px | Section internal spacing |
| `--space-2xl` | 32px | Card padding, component gaps |
| `--space-3xl` | 48px | Between related sections |
| `--space-4xl` | 64px | Major section breaks |
| `--space-5xl` | 96px | Hero spacing, dramatic breaks |
| `--space-6xl` | 128px | Full section margins |

### 5.2 Section Spacing

| Context | Spacing |
|---|---|
| Between sections | 96px–160px (scales down on mobile) |
| Inside sections (header to content) | 48px–64px |
| Between cards in a grid | 16px–24px |
| Between related content blocks | 32px–48px |

### 5.3 Container Padding

| Breakpoint | Horizontal Padding |
|---|---|
| Desktop (1440+) | 80px |
| Desktop (1024–1439) | 64px |
| Tablet (768–1023) | 32px |
| Mobile (< 768) | 20px |

### 5.4 Spacing Principles

- Use the scale, not arbitrary values
- More whitespace = more premium feel
- Dense UI is acceptable for data-heavy sections (tech stack, stats)
- Editorial sections should breathe generously

---

## 6. LAYOUT SYSTEM

### 6.1 Container

| Property | Value |
|---|---|
| Max width | 1280px |
| Horizontal padding | See 5.3 |
| Desktop behavior | Centered, max-width constraint |
| Tablet behavior | Centered, full-width with padding |
| Mobile behavior | Full-width with padding |

### 6.2 Grid System

Swiss-inspired 12-column grid.

| Breakpoint | Columns | Gutter | Margin |
|---|---|---|---|
| Desktop (1024+) | 12 | 24px | Auto (centered) |
| Tablet (768–1023) | 8 | 16px | 32px |
| Mobile (< 768) | 4 | 12px | 20px |

### 6.3 Grid Behavior

- Sections use full-width backgrounds with centered content containers
- Bento layouts use CSS Grid with named areas where appropriate
- Asymmetric compositions are encouraged (8/4, 7/5, 9/3 splits)
- Strong alignment is non-negotiable — elements should feel magnetically snapped to the grid

### 6.4 Layout Principles

- Intentional whitespace is a design element, not empty space
- Visual hierarchy drives the eye through the page
- Asymmetric compositions create visual interest
- Grid alignment creates trust and professionalism

---

## 7. BENTO SYSTEM

### 7.1 Card Sizes

| Size | Grid Span (Desktop) | Grid Span (Tablet) | Grid Span (Mobile) |
|---|---|---|---|
| Small | 4 cols | 4 cols | Full width |
| Medium | 6 cols | 8 cols | Full width |
| Large | 8 cols | Full width | Full width |
| XL | 12 cols | Full width | Full width |
| Tall | 6 cols × 2 rows | 8 cols × 2 rows | Full width |
| Featured | 12 cols × 2 rows | Full width | Full width |

### 7.2 Bento Rules

- Cards are **not** all the same size — variety creates rhythm
- At least one card per section should be larger/featured
- Gaps between bento cards: 16px (consistent)
- Content density varies by card size — small cards are concise, large cards have room for editorial content
- Border treatment: 1px solid `--border`, consistent across all cards
- Hover behavior: subtle scale (1.01) + border color transition + shadow elevation

### 7.3 Bento Principles

- Bento layouts feel **editorial and intentional**, not like a generic collection
- Each card has a clear purpose and hierarchy
- Empty/decorative cards are forbidden
- Cards should tell a story when read left-to-right, top-to-bottom

---

## 8. BORDER / RADIUS SYSTEM

### 8.1 Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Badges, tags, small elements |
| `--radius-md` | 8px | Inputs, buttons, cards (default) |
| `--radius-lg` | 12px | Large cards, modals |
| `--radius-xl` | 16px | Hero cards, featured elements |
| `--radius-full` | 9999px | Pills, avatars, circular elements |

### 8.2 Primary Radius

The default radius across the UI is **8px** (`--radius-md`). This is the baseline.

### 8.3 Neo-Brutalist Accents

Select elements may use **0px radius** (sharp corners) for Neo-Brutalist accent moments:

- Call-to-action buttons (alternate style)
- Featured project cards
- Section dividers
- Code blocks

When using sharp corners, combine with:
- 2px border thickness
- Offset shadow (2px 2px 0 currentColor at low opacity)
- High-contrast border color

### 8.4 Border Properties

| Property | Dark Mode | Light Mode |
|---|---|---|
| Default border | 1px solid `oklch(1 0 0 / 8%)` | 1px solid `oklch(0.10 0 0 / 8%)` |
| Strong border | 1px solid `oklch(1 0 0 / 15%)` | 1px solid `oklch(0.10 0 0 / 15%)` |
| Accent border | 1px solid `--accent-border` | 1px solid `--accent-border` |
| Focus ring | 2px solid `--ring` with 2px offset | 2px solid `--ring` with 2px offset |

### 8.5 Border Principles

- Borders define structure, not decoration
- Subtle borders in dark mode (opacity-based) prevent visual heaviness
- Accent borders are used sparingly for emphasis
- Never use borders that compete with content

---

## 9. SHADOW SYSTEM

### 9.1 Shadow Scale

| Token | Dark Mode | Light Mode |
|---|---|---|
| `--shadow-none` | none | none |
| `--shadow-subtle` | `0 1px 2px oklch(0 0 0 / 0.3)` | `0 1px 3px oklch(0 0 0 / 0.06)` |
| `--shadow-medium` | `0 4px 12px oklch(0 0 0 / 0.4)` | `0 4px 16px oklch(0 0 0 / 0.08)` |
| `--shadow-elevated` | `0 12px 40px oklch(0 0 0 / 0.5)` | `0 8px 32px oklch(0 0 0 / 0.10)` |

### 9.2 Shadow Usage

| Context | Shadow Level |
|---|---|
| Default cards | none (border-defined) |
| Hovered cards | `--shadow-medium` |
| Dropdowns / popovers | `--shadow-elevated` |
| Modals / dialogs | `--shadow-elevated` |
| Sticky navigation | `--shadow-subtle` |
| Floating elements | `--shadow-medium` |

### 9.3 Neo-Brutalist Shadow

For Neo-Brutalist accent elements:

```
box-shadow: 3px 3px 0 oklch(0.12 0.005 260 / 0.15);  /* dark mode */
box-shadow: 3px 3px 0 oklch(0.12 0.005 260 / 0.10);  /* light mode */
```

### 9.4 Shadow Principles

- Dark mode shadows should be subtle — the dark background already provides depth
- Light mode shadows should feel soft and premium
- Avoid large glowing effects (no neon glow)
- Shadows enhance hierarchy, not decoration

---

## 10. ACCENT SYSTEM

### 10.1 Accent Purpose

The cyan/teal accent is a **guided spotlight**. It draws the eye to:

- Primary CTAs
- Active navigation items
- Links in body text
- Focus indicators
- Progress/completion states
- Selected/active states

### 10.2 Accent Rules

- Maximum 1-2 accent-colored elements visible at any time in a viewport
- Accent never fills large background areas (use accent-muted at most)
- Accent borders are used for focus states and active indicators
- Accent glow is reserved for the hero CTA only, and only on hover

### 10.3 Accent Application Map

| Element | Accent Usage |
|---|---|
| Primary CTA button | Accent background, dark text |
| Links | Accent text color, underline on hover |
| Active nav item | Accent text + subtle accent underline |
| Focus ring | Accent border |
| Tech stack highlights | Accent badge/tag |
| Scroll progress | Accent fill |
| Project hover state | Accent border reveal |

---

## 11. MOTION DESIGN SYSTEM

### 11.1 Motion Principles

1. **Smooth** — Never jarring, never twitchy
2. **Intentional** — Every animation has a reason
3. **Fast enough** — Usability is never sacrificed for beauty
4. **Cinematic** — Hero and storytelling moments deserve drama
5. **Subtle in utility** — Forms, toggles, small interactions stay understated
6. **Expressive in storytelling** — Hero, projects, and scroll-driven sections can be more bold

### 11.2 Duration Scale

| Token | Value | Category | Usage |
|---|---|---|---|
| `--duration-instant` | 50ms | Instant feedback | Button press, toggle |
| `--duration-fast` | 100ms | Micro interaction | Hover states, icon rotation |
| `--duration-normal` | 200ms | Fast transition | Dropdown open, tooltip appear |
| `--duration-medium` | 350ms | Standard transition | Card hover, page element reveal |
| `--duration-slow` | 500ms | Slow cinematic | Section entrance, hero animation |
| `--duration-dramatic` | 800ms | Full cinematic | Hero text reveal, page transitions |
| `--duration-marathon` | 1200ms+ | Scroll-driven | Parallax, long reveals (only with scroll) |

### 11.3 Easing Curves

| Token | Value | Usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Elements entering view |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Smooth state transitions |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful micro-interactions (buttons, toggles) |
| `--ease-elastic` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Magnetic interactions, overshoot (rare) |

### 11.4 Entrance Animations

| Animation | Description | Timing |
|---|---|---|
| **Fade Up** | Element fades in while translating Y from +20px to 0 | 500ms, --ease-out |
| **Fade In** | Simple opacity 0 → 1 | 400ms, --ease-out |
| **Clip Reveal** | Clip-path animates from bottom (or side) to reveal content | 600ms, --ease-out |
| **Text Reveal** | Characters or words animate in sequentially | 800ms total, staggered 30ms |
| **Staggered Children** | Parent triggers, children animate in sequence | 350ms each, 80ms stagger |
| **Image Reveal** | Clip-path + scale from 1.05 → 1, opacity 0 → 1 | 700ms, --ease-out |

### 11.5 Scroll Animations

| Animation | Description | Trigger |
|---|---|---|
| **Section Reveal** | Entire section fades up on scroll entry | When 15% visible |
| **Parallax** | Background/foreground elements move at different speeds | Continuous scroll |
| **Scale on Scroll** | Element scales from 0.95 → 1 as it enters | 20%-80% viewport |
| **Opacity on Scroll** | Element fades in/out based on scroll position | 10%-40% viewport |
| **Horizontal Movement** | Elements slide in from left/right | When 20% visible |
| **Sticky Storytelling** | Section pins while content transforms within | Scroll-driven |

### 11.6 Hover Animations

| Element | Animation | Timing |
|---|---|---|
| **Card Hover** | Scale 1.0 → 1.01, border color transition, shadow elevation | 300ms, --ease-out |
| **Image Hover** | Scale 1.0 → 1.03, slight brightness increase | 400ms, --ease-out |
| **Button Hover** | Background shift, subtle Y translate (-1px) | 200ms, --ease-spring |
| **Arrow Hover** | Translate X +4px | 200ms, --ease-out |
| **Border Transition** | Border color accent reveal on hover | 300ms, --ease-out |
| **Accent Reveal** | Underline or background slides in from left | 300ms, --ease-out |

### 11.7 Magnetic Interactions

Magnetic interactions pull the cursor toward the element center within a defined radius.

**Allowed on:**
- Primary CTA buttons (hero section)
- Theme toggle
- Command palette trigger

**NOT allowed on:**
- Regular navigation links
- Cards (use hover states instead)
- Form inputs
- Every interactive element

**Magnetic radius:** 40px from element center
**Magnetic strength:** 0.3 (subtle pull, not aggressive)
**Return speed:** 200ms, --ease-spring

### 11.8 Page Transitions

| Phase | Duration | Description |
|---|---|---|
| Exit | 150ms | Current page fades out (opacity) |
| Gap | 50ms | Brief blank moment |
| Enter | 300ms | New page fades in + slight Y translate |

Total transition: ~500ms maximum. Never delay content access beyond this.

### 11.9 Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- Disable all parallax
- Disable all continuous/looping animations
- Replace entrance animations with instant reveals (opacity only)
- Keep functional transitions (dropdown open, modal appear) at 100ms max
- Disable stagger animations (show all at once)
- Disable magnetic interactions
- Keep scroll-triggered content visible at all times

---

## 12. CUSTOM CURSOR

### 12.1 Cursor States

| State | Appearance | Size |
|---|---|---|
| Default | Small filled circle | 8px |
| Link | Circle expands + accent ring | 40px |
| Button | Circle with inner dot | 40px |
| Project | "View" text label follows cursor | 80px pill |
| Image | Circle with + icon | 48px |
| Drag | Grabbing hand indicator | 32px |
| Disabled | Circle with line-through | 40px |

### 12.2 Cursor Behavior

- The custom cursor follows the real cursor with slight lag (150ms lerp)
- Cursor color inverts based on background (white on dark, dark on light)
- Accent ring appears on interactive elements
- Cursor scales up smoothly on hover, scales down on leave

### 12.3 Cursor Rules

- Never block content with the cursor element
- Never reduce usability (the real cursor still works)
- Disabled entirely on touch devices (`pointer: coarse`)
- Respect `prefers-reduced-motion` — disable custom cursor
- Cursor element has `pointer-events: none` always

### 12.4 Cursor Z-Index

Cursor renders at `z-index: 9999` with `position: fixed`.

---

## 13. INTERACTION LANGUAGE

### 13.1 Buttons

| State | Behavior |
|---|---|
| Default | Solid fill or outline, defined radius |
| Hover | Background darken/lighten, -1px Y translate, cursor change |
| Focus | Accent ring (2px offset), visible outline |
| Active | Scale 0.98, background darken further |
| Disabled | 50% opacity, cursor not-allowed, no hover effect |

### 13.2 Links

| State | Behavior |
|---|---|
| Default | Body text color, no underline |
| Hover | Accent color, underline slides in from left |
| Focus | Accent ring |
| Active | Accent color, slightly darker |
| Disabled | Muted color, no pointer |

### 13.3 Cards

| State | Behavior |
|---|---|
| Default | Border defined, no shadow, radius applied |
| Hover | +1px Y translate, medium shadow, border color shifts to accent (subtle) |
| Focus (if interactive) | Accent ring |
| Active | Scale 0.99 |
| Disabled | 50% opacity |

### 13.4 Images

| State | Behavior |
|---|---|
| Default | Aspect-ratio maintained, object-fit cover |
| Hover | Scale 1.03, slight brightness increase (1.05) |
| Lazy loaded | Opacity 0 → 1 on load, placeholder skeleton |

### 13.5 Navigation

| State | Behavior |
|---|---|
| Default | Text color matches foreground |
| Hover | Accent color, underline or background indicator |
| Active | Accent color + persistent indicator (underline/dot) |
| Focus | Accent ring |
| Sticky state | Background blur + subtle shadow |

### 13.6 Forms / Inputs

| State | Behavior |
|---|---|
| Default | Border defined, background transparent, radius applied |
| Hover | Border color slightly stronger |
| Focus | Accent ring, border color accent |
| Error | Error border color, error message below |
| Disabled | Muted background, reduced opacity |
| Placeholder | Muted foreground color |

### 13.7 Theme Toggle

| State | Behavior |
|---|---|
| Default | Icon centered, radius applied |
| Hover | Background accent-muted, scale 1.05 |
| Toggle animation | 400ms icon morph (sun ↔ moon) with rotation + scale |
| Focus | Accent ring |

### 13.8 Command Palette

| State | Behavior |
|---|---|
| Trigger | Keyboard shortcut (Cmd/Ctrl + K) or button |
| Open | Backdrop blur + fade, modal scales from 0.95 → 1 |
| Search | Instant filter, results fade in |
| Result hover | Background highlight, accent left border |
| Select | Smooth close, action executes |
| Close | Reverse of open (200ms) |

---

## 14. COMPONENT VISUAL LANGUAGE

### 14.1 Buttons

**Primary:**
- Accent background, dark foreground text
- Radius: 8px
- Padding: 12px 24px
- Font: Label (12px, 600, 0.03em tracking)
- Hover: darker accent, -1px Y
- Neo-Brutalist variant: 0px radius, 2px border, offset shadow

**Secondary:**
- Transparent background, border foreground
- Same sizing as primary
- Hover: foreground background at 8% opacity

**Ghost:**
- No border, no background
- Hover: foreground background at 5%
- Used for navigation, secondary actions

**Icon:**
- Square aspect ratio (40px × 40px)
- Icon centered
- Same variants as above

### 14.2 Cards

- Background: `--card`
- Border: 1px solid `--border`
- Radius: 8px (default), 12px (featured)
- Padding: 24px
- No shadow by default
- Hover: medium shadow, border color shift

### 14.3 Badges

- Background: `--secondary`
- Text: `--secondary-foreground`
- Radius: 4px (sharp) or 9999px (pill)
- Padding: 4px 10px
- Font: Caption (12px, 500)
- Accent variant: accent background, accent foreground

### 14.4 Tags

- Background: transparent
- Border: 1px solid `--border`
- Radius: 4px
- Padding: 2px 8px
- Font: Caption (12px, 500)
- Hover: accent border, accent text

### 14.5 Inputs

- Background: transparent
- Border: 1px solid `--input`
- Radius: 8px
- Padding: 10px 14px
- Font: Body (16px, 400)
- Focus: accent ring, accent border
- Error: error border, error message

### 14.6 Textareas

- Same styling as inputs
- Min-height: 120px
- Resizable: vertical only

### 14.7 Tooltips

- Background: `--card`
- Border: 1px solid `--border`
- Radius: 6px
- Padding: 8px 12px
- Font: Caption (12px, 400)
- Shadow: `--shadow-elevated`
- Entrance: fade + translateY(4px), 150ms
- Max-width: 240px

### 14.8 Dialogs / Modals

- Background: `--card`
- Border: 1px solid `--border`
- Radius: 12px
- Padding: 32px
- Shadow: `--shadow-elevated`
- Backdrop: `oklch(0 0 0 / 0.6)` with blur
- Entrance: scale 0.95 → 1 + fade, 300ms
- Exit: reverse, 200ms

### 14.9 Navigation

- Height: 64px
- Background: transparent (becomes blurred at scroll)
- Sticky: backdrop-blur-md + subtle shadow
- Font: Body Small (14px, 500)
- Links: ghost buttons with hover state
- Active: accent indicator

### 14.10 Tabs

- Font: Body Small (14px, 500)
- Active: accent underline, accent text
- Inactive: muted foreground text
- Hover: foreground text
- Underline animation: slide from active to active, 300ms

### 14.11 Command Palette

- Max width: 640px
- Max height: 480px
- Background: `--card`
- Border: 1px solid `--border`
- Radius: 12px
- Shadow: `--shadow-elevated`
- Backdrop: blur + dark overlay
- Search input: full width, large font
- Results: compact list, hover highlight
- Keyboard shortcut: displayed inline in muted text

### 14.12 Toasts / Sonner

- Position: bottom-right
- Background: `--card`
- Border: 1px solid `--border`
- Radius: 8px
- Padding: 16px
- Shadow: `--shadow-elevated`
- Entrance: slide in from right + fade
- Auto-dismiss: 4 seconds (success), 6 seconds (error)
- Max 3 visible at once

### 14.13 Project Cards

- Large visual (16:9 or custom aspect ratio)
- Project number (editorial style, large, muted)
- Title (H3)
- Description (Body Small)
- Tags (badge row)
- Hover: image scale, border accent reveal, "View Project →" arrow appears
- Click: navigates to project detail

### 14.14 Timeline Items

- Vertical line (1px, muted foreground at 30% opacity)
- Dot indicator (8px, accent when active, muted when past)
- Content: date label, title, description
- Staggered entrance on scroll

---

## 15. ICONOGRAPHY

### 15.1 Icon Library

**Lucide React** — primary and only icon library.

### 15.2 Icon Sizes

| Size | Dimensions | Usage |
|---|---|---|
| xs | 12px × 12px | Inline with small text, badges |
| sm | 16px × 16px | Inline with body text, buttons |
| md | 20px × 20px | Default icon size, navigation |
| lg | 24px × 24px | Standalone icons, feature callouts |
| xl | 32px × 32px | Section headers, large features |
| 2xl | 48px × 48px | Hero icons, major features |

### 15.3 Icon Rules

- Consistent stroke width: 1.5px (Lucide default)
- No mixing icon styles (stick to Lucide only)
- Icons support text — they don't replace important labels
- Use icons sparingly — every icon should have a reason
- Icon color inherits from parent text color by default
- Accent-colored icons are used for emphasis only

---

## 16. IMAGE / PROJECT VISUAL SYSTEM

### 16.1 Project Visual Rules

- Large screenshots take center stage — minimum 800px wide display
- Editorial cropping — show the most interesting part, not the full page
- Browser/device mockups used **only** when context requires it (e.g., showing a responsive design)
- Consistent aspect ratios: 16:9 (landscape), 4:3 (portrait projects)
- High-quality visuals only — minimum 2x resolution for retina

### 16.2 Image Behavior

| State | Behavior |
|---|---|
| Default | Full opacity, aspect-ratio locked |
| Hover | Scale 1.03, slight brightness boost |
| Loading | Skeleton placeholder (muted background, animated shimmer) |
| Lazy loaded | Opacity transition 0 → 1, 400ms |

### 16.3 Image Avoidance

- No random stock images
- No generic device mockups
- No excessive device frames
- No low-quality screenshots
- No decorative images without purpose

---

## 17. SECTION DESIGN LANGUAGE

### 17.1 Hero

- **Typography:** Display XL (72px), bold, tight line height
- **Layout:** Full viewport height or near it, centered or left-aligned
- **Visual:** Interactive element (animated text, cursor-reactive background, or subtle particle)
- **Entrance:** Cinematic — text reveals character by character or word by word, followed by subtitle fade-up
- **CTA:** Single primary button with magnetic interaction
- **Scroll indicator:** Subtle animated chevron at bottom

### 17.2 Selected Work

- **Typography:** H1 for section title, H3 for project titles
- **Layout:** Stacked large project cards, each full-width or near-full-width
- **Visual:** Large project screenshots (16:9), editorial numbering (01, 02, 03...)
- **Entrance:** Staggered — each project fades up as it enters viewport
- **Interaction:** Card hover reveals "View Project →" with arrow animation
- **Spacing:** 96px between projects

### 17.3 Tech Stack

- **Typography:** H2 for section title, Label for category headers
- **Layout:** Bento grid — categorized groups (Frontend, Backend, Tools, etc.)
- **Visual:** Icon + label per technology, grouped by category
- **Entrance:** Staggered grid reveal
- **Interaction:** Hover highlights individual tech, shows tooltip with context
- **Avoid:** Logo-wall appearance — categorize and structure

### 17.4 Hackathon Journey

- **Typography:** H2 for title, H4 for hackathon names, Body for descriptions
- **Layout:** Vertical timeline with alternating content
- **Visual:** Timeline line (1px, muted), dot indicators, date labels
- **Entrance:** Timeline draws in, then content reveals staggered
- **Interaction:** Hover on timeline item expands details

### 17.5 About

- **Typography:** Display LG for name, Body Large for bio
- **Layout:** Two-column — visual/code-card left, text right
- **Visual:** Developer "code-card" concept (terminal-style card with stats)
- **Entrance:** Code-card types in, text fades up
- **Personal touch:** Photo or illustration (optional, high-quality)

### 17.6 GitHub

- **Typography:** H2 for section, data numbers in Display LG
- **Layout:** Bento grid — contribution graph, stats, pinned repos
- **Visual:** Contribution-style heatmap (simplified), stat cards, language breakdown
- **Data-driven:** Show real GitHub data where possible
- **Entrance:** Stats count up, graph draws in

### 17.7 Contact

- **Typography:** Display LG for heading ("Let's Build Together" or similar), Body Large for subtext
- **Layout:** Centered, minimal — large heading + form or CTA
- **Visual:** Single email link or minimal form (name, email, message)
- **CTA:** Large accent button
- **Entrance:** Text reveals, form fades up
- **No excessive decoration** — let the typography and CTA speak

### 17.8 Footer

- **Typography:** Caption / Body Small
- **Layout:** Single row — copyright left, social links right
- **Visual:** Minimal, muted, no heavy treatment
- **No entrance animation** — always visible

---

## 18. RESPONSIVE DESIGN

### 18.1 Breakpoints

| Name | Min Width | Label |
|---|---|---|
| Mobile | 0px | Base |
| Tablet | 768px | `md` |
| Desktop | 1024px | `lg` |
| Large Desktop | 1440px | `xl` |

### 18.2 Typography Scaling

| Level | Large Desktop | Desktop | Tablet | Mobile |
|---|---|---|---|---|
| Display XL | 72px | 60px | 48px | 36px |
| Display LG | 56px | 48px | 40px | 32px |
| H1 | 40px | 36px | 32px | 28px |
| H2 | 32px | 28px | 24px | 22px |
| H3 | 24px | 22px | 20px | 18px |
| H4 | 20px | 18px | 18px | 16px |
| Body Large | 18px | 18px | 16px | 16px |
| Body | 16px | 16px | 16px | 15px |

### 18.3 Grid Behavior

| Breakpoint | Columns | Gutter | Container Padding |
|---|---|---|---|
| Large Desktop | 12 | 24px | 80px |
| Desktop | 12 | 24px | 64px |
| Tablet | 8 | 16px | 32px |
| Mobile | 4 | 12px | 20px |

### 18.4 Section Spacing

| Breakpoint | Between Sections | Inside Sections |
|---|---|---|
| Large Desktop | 160px | 64px |
| Desktop | 128px | 48px |
| Tablet | 96px | 40px |
| Mobile | 64px | 32px |

### 18.5 Navigation Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop+ | Horizontal inline links, visible |
| Tablet | Horizontal with reduced links, hamburger for extras |
| Mobile | Hamburger menu (full-screen overlay with large touch targets) |

### 18.6 Project Layout

| Breakpoint | Layout |
|---|---|
| Desktop+ | Full-width stacked cards, large visuals |
| Tablet | Stacked cards, slightly smaller visuals |
| Mobile | Stacked cards, full-width visuals, reduced padding |

### 18.7 Bento Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop+ | Full bento grid with varied spans |
| Tablet | Simplified grid, fewer column options |
| Mobile | Single column — all cards full width, vertically stacked |

### 18.8 Animation Intensity

| Breakpoint | Intensity |
|---|---|
| Desktop+ | Full — all animations, parallax, magnetic interactions, custom cursor |
| Tablet | Reduced — simpler entrances, no magnetic, no custom cursor |
| Mobile | Minimal — fade/slide only, no parallax, no continuous animations |

### 18.9 Mobile-First Principles

- Mobile is a **first-class design experience**, not a compressed desktop
- Touch targets minimum 44px × 44px
- Swipe gestures where appropriate (project carousel)
- Bottom-anchored CTAs for thumb reach
- Reduced information density — prioritize clarity

---

## 19. ACCESSIBILITY

### 19.1 Contrast Requirements

- Body text: minimum WCAG AA (4.5:1 ratio)
- Large text (18px+ bold, 24px+): minimum WCAG AA (3:1 ratio)
- Interactive elements: minimum 3:1 against background
- Focus indicators: minimum 3:1 against adjacent colors

### 19.2 Keyboard Navigation

- All interactive elements must be keyboard-focusable
- Focus order follows visual/DOM order
- Focus indicators are always visible (accent ring)
- Skip-to-content link as first focusable element
- Escape key closes modals, dropdowns, command palette
- Arrow keys navigate within menus and tab groups

### 19.3 Semantic Hierarchy

- One `<h1>` per page
- Heading levels never skip (h1 → h2 → h3, not h1 → h3)
- Landmark regions: `<header>`, `<nav>`, `<main>`, `<footer>`
- Lists use `<ul>` / `<ol>`, not styled divs
- Images have descriptive `alt` text (or `alt=""` for decorative)
- Form inputs have associated `<label>` elements

### 19.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Additional:
- Disable parallax completely
- Disable stagger animations (show all at once)
- Disable magnetic interactions
- Disable custom cursor
- Keep functional transitions (modal open) at 100ms

### 19.5 Touch Target Sizing

- Minimum interactive target: 44px × 44px (WCAG 2.5.5)
- Button minimum height: 44px
- Link tap targets: padded to meet minimum
- Icon buttons: 44px minimum

### 19.6 Form Accessibility

- All inputs have visible labels (not just placeholders)
- Error messages associated with inputs via `aria-describedby`
- Required fields indicated with `aria-required`
- Error summary announced to screen readers via `aria-live`
- Form submission provides clear feedback

### 19.7 Screen Reader Patterns

- Custom components use appropriate ARIA roles
- Live regions for dynamic content updates (`aria-live="polite"`)
- Image-heavy sections have text alternatives
- Skip links for bypassing repetitive navigation
- Project cards have descriptive link text (not "click here")

---

## 20. PERFORMANCE RULES

### 20.1 Animation Performance

- Use `transform` and `opacity` for all animations (GPU-accelerated)
- Never animate `width`, `height`, `top`, `left`, `margin`, `padding`
- Use `will-change` sparingly and remove after animation completes
- Avoid animating more than 3 elements simultaneously
- Use `requestAnimationFrame` for scroll-driven animations

### 20.2 Image Performance

- Lazy-load all images below the fold
- Use `loading="lazy"` attribute
- Provide `width` and `height` to prevent layout shift
- Use modern formats: WebP primary, AVIF if supported
- Serve 2x resolution for retina displays
- Use `aspect-ratio` CSS to prevent layout shift

### 20.3 Initial Load

- Hero content loads first (critical path)
- Below-fold content lazy-loaded
- Fonts: use `font-display: swap` to prevent FOIT
- No render-blocking scripts in `<head>`
- Minimal initial JavaScript bundle

### 20.4 Continuous Effects

- No continuous CSS animations (infinite loops)
- No particle systems on mobile
- No heavy WebGL/3D
- Scroll animations pause when not in viewport
- Reduce animation complexity on low-power devices

### 20.5 The Rule

> The visual design must never compromise usability or performance.

---

## 21. DESIGN TOKENS (CONSOLIDATED REFERENCE)

### Colors

```
--background
--foreground
--card
--card-foreground
--popover
--popover-foreground
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--muted-foreground
--accent
--accent-foreground
--destructive
--border
--input
--ring
--success
--warning
--error
--info
```

### Accent

```
--accent-base
--accent-hover
--accent-active
--accent-muted
--accent-background
--accent-border
--accent-glow
```

### Typography

```
--font-heading
--font-body
--font-mono
--text-display-xl
--text-display-lg
--text-h1
--text-h2
--text-h3
--text-h4
--text-body-lg
--text-body
--text-body-sm
--text-caption
--text-label
--text-code
```

### Spacing

```
--space-2xs    (2px)
--space-xs     (4px)
--space-sm     (8px)
--space-md     (12px)
--space-base   (16px)
--space-lg     (20px)
--space-xl     (24px)
--space-2xl    (32px)
--space-3xl    (48px)
--space-4xl    (64px)
--space-5xl    (96px)
--space-6xl    (128px)
```

### Radius

```
--radius-sm    (4px)
--radius-md    (8px)
--radius-lg    (12px)
--radius-xl    (16px)
--radius-full  (9999px)
```

### Borders

```
--border-default     (1px solid)
--border-strong      (1px solid, higher opacity)
--border-accent      (1px solid, accent color)
--border-width       (1px)
--border-width-thick (2px, for neo-brutalist)
```

### Shadows

```
--shadow-none
--shadow-subtle
--shadow-medium
--shadow-elevated
```

### Motion

```
--duration-instant    (50ms)
--duration-fast       (100ms)
--duration-normal     (200ms)
--duration-medium     (350ms)
--duration-slow       (500ms)
--duration-dramatic   (800ms)
--duration-marathon   (1200ms+)

--ease-out            (cubic-bezier(0.16, 1, 0.3, 1))
--ease-in-out         (cubic-bezier(0.65, 0, 0.35, 1))
--ease-spring         (cubic-bezier(0.34, 1.56, 0.64, 1))
--ease-elastic        (cubic-bezier(0.68, -0.55, 0.265, 1.55))
```

### Breakpoints

```
--bp-mobile           (0px)
--bp-tablet           (768px)
--bp-desktop          (1024px)
--bp-large-desktop    (1440px)
```

### Container

```
--container-max       (1280px)
--container-padding-desktop    (64px)
--container-padding-tablet     (32px)
--container-padding-mobile     (20px)
```

### Z-Index Layers

```
--z-base        (0)
--z-dropdown    (1000)
--z-sticky      (1020)
--z-overlay     (1040)
--z-modal       (1060)
--z-popover     (1080)
--z-tooltip     (1100)
--z-toast       (1200)
--z-cursor      (9999)
```

---

## 22. NON-NEGOTIABLE DESIGN RULES

1. **Digital Editorial is the primary visual identity.** Everything else supports this direction.

2. **Dark and light modes share the same brand identity.** They are two expressions of one portfolio, not two different websites.

3. **Typography is a major visual element.** Headings carry editorial weight. They are not just styled text — they are compositional elements.

4. **Animation must have a purpose.** Every animation serves hierarchy, feedback, or storytelling. No decorative animation.

5. **Do not overuse gradients.** Gradients are not a design language. They are an occasional tool.

6. **Do not overuse glassmorphism.** Glass effects are used at most 2-3 times across the entire portfolio, and only where layering context demands it.

7. **Do not animate everything.** If everything moves, nothing moves. Animation budget is limited per section.

8. **Do not sacrifice accessibility for visual effects.** If an effect breaks keyboard navigation, contrast, or screen reader access, it gets cut.

9. **Do not sacrifice performance for animation.** If an animation causes jank on mid-range devices, it gets simplified or removed.

10. **Use cyan/teal as a controlled accent.** Maximum 1-2 accent elements visible per viewport section. Accent guides attention — it does not dominate.

11. **Maintain consistent spacing and alignment.** Use the spacing scale. Align to the grid. Visual order comes from mathematical order.

12. **Prefer high-quality project visuals over decorative graphics.** Project screenshots and demos are the portfolio's visual core. Everything else is secondary.

13. **Mobile experience must be intentionally designed.** Mobile is not a compressed desktop — it is a first-class experience with its own design decisions.

14. **Use Motion as the primary animation system.** No other animation libraries. Motion handles all entrance, scroll, hover, and page transitions.

15. **The interface should feel like a premium digital product, not a template.** Every detail communicates craftsmanship. Every decision is intentional. The portfolio itself is the strongest proof of capability.
