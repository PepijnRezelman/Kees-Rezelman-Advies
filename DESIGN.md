# Design System Specification: The Blueprint Editorial

**Project:** Kees Rezelman Advies  
**Stitch Project ID:** `9928302638073336232` (`projects/9928302638073336232`)  
**Target Device:** Desktop / Web  
**Visual North Star:** *The Blueprint Editorial* (Editorial Architecture)

---

## 1. Overview & Creative North Star

The Creative North Star for Kees Rezelman Advies is **"The Blueprint Editorial."**

In construction consultancy and project advisory, value is created at the intersection of rigid engineering precision and visionary architectural thought. This design system eschews the conventional "generic corporate template" in favor of a high-end editorial layout. The screen functions as an architectural drafting table—clean, expansive, structured, and authoritative.

Key characteristics:
* **Intentional Asymmetry:** Grid designs anchor strong left-aligned typography while allowing architectural photography and project deliverables to bleed across structural bounds.
* **Tonal Weight over Dividers:** Hard lines and 1px dividers are replaced with subtle tonal shifts across nested surface planes.
* **Generous Negative Space:** Expansive whitespace conveys confidence, prestige, and executive authority.

---

## 2. Typography

The typeface system is built exclusively on **Inter**, selected for its geometric clarity, drafting precision, and screen legibility across dense advisory reports.

### Type Scale & Hierarchy

| Role | Font Family | Size | Weight / Tracking | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display LG** | `Inter`, sans-serif | `3.5rem` (56px) | Bold (`700`), `-0.02em` | `1.1` | Hero titles, executive impact statements ("Site Signage") |
| **Display MD** | `Inter`, sans-serif | `2.75rem` (44px) | Bold (`700`), `-0.02em` | `1.15` | Major section milestones, project showcase headers |
| **Headline LG** | `Inter`, sans-serif | `2.0rem` (32px) | Semi-Bold (`600`), `-0.01em` | `1.25` | Section headers, blueprint title blocks |
| **Headline MD** | `Inter`, sans-serif | `1.5rem` (24px) | Semi-Bold (`600`), `normal` | `1.3` | Card headers, milestone titles |
| **Body LG** | `Inter`, sans-serif | `1.0rem` (16px) | Regular (`400`), `normal` | `1.6` | Narrative text, consultancy case studies, longform readouts |
| **Body MD** | `Inter`, sans-serif | `0.875rem` (14px) | Regular (`400`), `normal` | `1.5` | Secondary descriptions, supplementary notes |
| **Label MD** | `Inter`, sans-serif | `0.75rem` (12px) | Medium (`500`), `+0.05em` | `1.0` | Uppercase category tags, architectural drafting annotations |

### Typography CSS Utility Variables

```css
:root {
  --font-family-primary: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display-lg: 700 3.5rem/1.1 var(--font-family-primary);
  --font-headline-lg: 600 2.0rem/1.25 var(--font-family-primary);
  --font-body-lg: 400 1.0rem/1.6 var(--font-family-primary);
  --font-label-md: 500 0.75rem/1.0 var(--font-family-primary);
  --letter-spacing-tight: -0.02em;
  --letter-spacing-wide: 0.05em;
}
```

---

## 3. Color Palette & Token System

The color palette is anchored in deep structural navy blues (`primary`) and architectural drafting slate (`tertiary`), complemented by a warm "Architectural Terracotta" (`secondary`: `#9F4033`) for precision accents, datum lines, and calls to action.

### Color Tokens

#### Primary Suite (Deep Structural Blue)
* `--color-primary`: `#001a37` — Main brand navy, primary headings & primary CTA background.
* `--color-on-primary`: `#ffffff` — Text on primary surfaces.
* `--color-primary-container`: `#002f5b` — Deep focus hero background / container tone.
* `--color-on-primary-container`: `#7698ca` — Accents / subtext within dark primary containers.
* `--color-primary-fixed`: `#d4e3ff` — Soft tinted primary chip background.
* `--color-primary-fixed-dim`: `#a6c8fd` — Muted primary tint.
* `--color-on-primary-fixed`: `#001c3a` — High-contrast text on primary fixed chips.
* `--color-on-primary-fixed-variant`: `#234875` — Medium-contrast text on primary fixed.

#### Secondary Suite (Architectural Terracotta / Rust)
* `--color-secondary`: `#9f4033` — Precision accent, high-value conversion points, highlights.
* `--color-on-secondary`: `#ffffff` — Text on secondary actions.
* `--color-secondary-container`: `#fd8775` — Secondary highlight container.
* `--color-on-secondary-container`: `#731f16` — Text on secondary container.
* `--color-secondary-fixed`: `#ffdad4` — Soft terracotta chip background.
* `--color-secondary-fixed-dim`: `#ffb4a8` — Dim secondary tint.
* `--color-on-secondary-fixed`: `#410000` — Text on secondary chips.
* `--color-on-secondary-fixed-variant`: `#80291e` — Variant text on secondary chips.

#### Tertiary Suite (Slate / Drafting Charcoal)
* `--color-tertiary`: `#1a1a1a` — Slate drafting black for high-legibility body text.
* `--color-on-tertiary`: `#ffffff` — Text on tertiary surfaces.
* `--color-tertiary-container`: `#2f2f2f` — Dark drawing / blueprint viewer overlay background.
* `--color-on-tertiary-container`: `#979696` — Technical drawing metadata text.
* `--color-tertiary-fixed`: `#e4e2e1` — Slate badge background.
* `--color-tertiary-fixed-dim`: `#c8c6c6` — Slate dim badge background.
* `--color-on-tertiary-fixed`: `#1b1c1c` — Charcoal text on slate badges.
* `--color-on-tertiary-fixed-variant`: `#474747` — Mid-contrast charcoal text.

#### Surface & Background Hierarchy (The Layering Principle)
* `--color-background`: `#f9f9f9` — Overall viewport canvas.
* `--color-on-background`: `#1a1c1c` — Base canvas text.
* `--color-surface`: `#f9f9f9` — Primary base canvas layer.
* `--color-on-surface`: `#1a1c1c` — Primary surface content color.
* `--color-surface-container-lowest`: `#ffffff` — Pure white elevated cards ("drafting paper" elements).
* `--color-surface-container-low`: `#f3f3f3` — Inset zones, section backdrops.
* `--color-surface-container`: `#eeeeee` — Standard container surface.
* `--color-surface-container-high`: `#e8e8e8` — Form inputs, elevated panels.
* `--color-surface-container-highest`: `#e2e2e2` — Maximum tonal contrast container.
* `--color-surface-variant`: `#e2e2e2` — Variant surface background.
* `--color-on-surface-variant`: `#43474f` — Subtle narrative & descriptive text.
* `--color-surface-dim`: `#dadada` — Dimmed surface state.
* `--color-surface-bright`: `#f9f9f9` — Bright surface state.
* `--color-surface-tint`: `#3d608e` — Ambient structural tint.
* `--color-inverse-surface`: `#2f3131` — Dark inversions / tooltips.
* `--color-inverse-on-surface`: `#f1f1f1` — Text on inverted surfaces.
* `--color-inverse-primary`: `#a6c8fd` — Primary accent on dark backgrounds.

#### Outline & Utility Tokens
* `--color-outline`: `#737780` — Explicit utility borders when strictly required.
* `--color-outline-variant`: `#c3c6d0` — Base for "Ghost Borders" (used at 20% opacity).
* `--color-error`: `#ba1a1a` — Validation errors.
* `--color-on-error`: `#ffffff` — Text on error surfaces.
* `--color-error-container`: `#ffdad6` — Error banners and callouts.
* `--color-on-error-container`: `#93000a` — Text on error banners.

---

## 4. Master CSS Theme Variables

```css
:root {
  /* Primary */
  --color-primary: #001a37;
  --color-on-primary: #ffffff;
  --color-primary-container: #002f5b;
  --color-on-primary-container: #7698ca;
  --color-primary-fixed: #d4e3ff;
  --color-primary-fixed-dim: #a6c8fd;
  --color-on-primary-fixed: #001c3a;
  --color-on-primary-fixed-variant: #234875;
  --color-inverse-primary: #a6c8fd;

  /* Secondary */
  --color-secondary: #9f4033;
  --color-on-secondary: #ffffff;
  --color-secondary-container: #fd8775;
  --color-on-secondary-container: #731f16;
  --color-secondary-fixed: #ffdad4;
  --color-secondary-fixed-dim: #ffb4a8;
  --color-on-secondary-fixed: #410000;
  --color-on-secondary-fixed-variant: #80291e;

  /* Tertiary */
  --color-tertiary: #1a1a1a;
  --color-on-tertiary: #ffffff;
  --color-tertiary-container: #2f2f2f;
  --color-on-tertiary-container: #979696;
  --color-tertiary-fixed: #e4e2e1;
  --color-tertiary-fixed-dim: #c8c6c6;
  --color-on-tertiary-fixed: #1b1c1c;
  --color-on-tertiary-fixed-variant: #474747;

  /* Surfaces & Canvas */
  --color-background: #f9f9f9;
  --color-on-background: #1a1c1c;
  --color-surface: #f9f9f9;
  --color-on-surface: #1a1c1c;
  --color-surface-dim: #dadada;
  --color-surface-bright: #f9f9f9;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f3f3f3;
  --color-surface-container: #eeeeee;
  --color-surface-container-high: #e8e8e8;
  --color-surface-container-highest: #e2e2e2;
  --color-surface-variant: #e2e2e2;
  --color-on-surface-variant: #43474f;
  --color-surface-tint: #3d608e;
  --color-inverse-surface: #2f3131;
  --color-inverse-on-surface: #f1f1f1;

  /* Outlines & Status */
  --color-outline: #737780;
  --color-outline-variant: #c3c6d0;
  --color-error: #ba1a1a;
  --color-on-error: #ffffff;
  --color-error-container: #ffdad6;
  --color-on-error-container: #93000a;

  /* Elevation & Structural Shadows */
  --shadow-structural: 0 12px 40px rgba(0, 26, 55, 0.06);
  --shadow-elevated: 0 20px 50px rgba(0, 26, 55, 0.09);

  /* Border Radii */
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.375rem;  /* 6px - Buttons & interactive elements */
  --radius-lg: 0.5rem;    /* 8px */
  --radius-xl: 0.75rem;   /* 12px - Cards & structural containers */
  --radius-full: 9999px;  /* Badges & pill tags */
}
```

---

## 5. Architectural UI Rules & Patterns

### 1. The "No-Line" Rule
* **Strict Prohibition:** 1px solid borders are forbidden for dividing sections.
* **Tonal Shifts:** Separate content zones purely by alternating surface backgrounds (e.g., a `surface-container-lowest` card against a `surface-container-low` backdrop).

### 2. Glassmorphism & Structural Depth
* **Floating Bars & Headers:**
  * Background: `rgba(249, 249, 249, 0.8)` (`--color-surface` at 80% opacity)
  * Backdrop Filter: `blur(12px)`
  * Shadow: `var(--shadow-structural)`
* **Primary CTAs:** Optional 135° linear gradient from `var(--color-primary)` (`#001a37`) to `var(--color-primary-container)` (`#002f5b`) for visual tactility.

### 3. Ghost Borders for Inputs
* Use `--color-outline-variant` at **20% opacity** (`rgba(195, 198, 208, 0.2)`) on `--color-surface-container-high` (`#e8e8e8`).
* On `:focus`, transition to 100% opacity using `--color-primary` (`#001a37`).

### 4. Spacing & Rhythm
* **Card & Section Spacing:** Generous whitespace with `1.5rem` to `3rem` gutters.
* **Component Padding:** Standard scaling step multiplier of `2` (`0.5rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, `4rem`).
