# Design System Specification: High-End AI Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Synthetic Architect"**

This design system is built to convey a sense of absolute precision, lean intelligence, and institutional credibility. Moving away from the "cluttered dashboard" aesthetic of early AI, we embrace a "Synthetic Architect" persona—an approach that treats digital space as a physical gallery. 

The design breaks the standard "template" look through **intentional asymmetry** and **high-contrast typography scales**. We use expansive whitespace not just as a gap, but as a deliberate structural element that forces the user to focus on a single, high-impact insight at a time. The goal is a UI that feels less like a tool and more like an elite consultancy.

---

## 2. Colors & Tonal Depth
The palette is rooted in deep, obsidian charcoals (`surface`) and electric, neon-infused highlights (`primary`). 

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts or subtle tonal transitions. Use `surface-container-low` sections against `surface` backgrounds to create a sense of place without the "boxiness" of traditional web design.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of darkened obsidian or matte glass.
- **Surface (Base):** The foundation of the experience.
- **Surface-Container-Low:** Used for large, secondary content blocks.
- **Surface-Container-High:** Used for interactive modules or highlighted data sets.
- **Glassmorphism:** For floating elements (navigation bars, tooltips), use semi-transparent `surface` colors with a 20px-30px backdrop-blur. This softens the interface and makes the layout feel integrated and fluid.

### Signature Textures
Main CTAs and hero backgrounds should utilize a subtle linear gradient transitioning from `primary` (#00dbe9) to `primary_container` (#00f0ff) at a 135-degree angle. This provides a "glow" that suggests the active energy of an AI engine.

---

## 3. Typography
The typography strategy pairs the technical precision of **Space Grotesk** with the humanist clarity of **Inter**.

- **Display & Headlines (Space Grotesk):** These are the "Editorial Voice." Large scales (`display-lg` at 3.5rem) should be used with tight letter-spacing (-2%) to feel sharp and authoritative. Use "Medium" or "Bold" weights to anchor the page.
- **Body & Titles (Inter):** These represent the "Analytical Voice." Use `body-md` for high-density information. The generous x-height of Inter ensures legibility against dark backgrounds.
- **Hierarchy as Identity:** Dramatic scale jumps (e.g., a `display-lg` headline sitting directly above a `label-md` caption) create a premium, magazine-style layout that distinguishes this system from generic SaaS templates.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** rather than traditional drop shadows.

- **The Layering Principle:** To create "lift," place a `surface-container-lowest` card (#0e0e0f) on a `surface-container-low` section (#1b1b1c). This creates a recessed, high-end effect.
- **Ambient Shadows:** If an element must float (e.g., a modal), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);`. The shadow should never be pure black; it should feel like an ambient occlusion effect.
- **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `on_primary` text, `md` (0.375rem) corner radius. Use for main conversion points.
- **Secondary:** Ghost style. `outline` border at 20% opacity with `primary` text.
- **Tertiary:** Text-only with a subtle `primary` underline that expands on hover.

### Cards & Lists
- **The Divider Ban:** Explicitly forbid divider lines. Separate list items or card sections using vertical whitespace (e.g., 24px or 32px gaps) or subtle shifts between `surface-container` tiers.
- **Interactive Cards:** On hover, a card should shift from `surface-container-low` to `surface-container-high` rather than growing in size.

### Input Fields
- **Styling:** Use `surface-container-lowest` for the input background to create a "hollowed out" feel. The label should use `label-md` in `on_surface_variant`.
- **States:** On focus, the bottom border only should illuminate in `primary` (#00dbe9).

### AI Processing Indicator (Custom Component)
- A thin, 2px horizontal bar using a shimmering gradient of `primary` to `secondary`. Use this at the top of containers while AI "thought" processes are occurring.

---

## 6. Do’s and Don'ts

### Do:
- **Embrace Asymmetry:** Align a headline to the left and a CTA to the far right with significant whitespace between them.
- **Use "Space Grotesk" for numbers:** All data visualizations and metrics should use the display font to look "engineered."
- **Focus on Micro-Interactions:** Use smooth, 300ms cubic-bezier transitions for all state changes.

### Don't:
- **Don't use "Grey":** Use the specific charcoal and blue-tinted neutrals provided (`surface_variant`, `secondary_container`). Pure greys feel "default."
- **Don't crowd the margins:** Ensure a minimum of 80px padding for major section containers on desktop.
- **Don't use standard shadows:** Avoid the "fuzzy glow" look. If a shadow doesn't look like natural light hitting a surface, remove it.
- **Don't use 100% white text for body:** Use `on_surface_variant` (#b9cacb) for body text to reduce eye strain and look more "integrated" into the dark theme. Use `white` (#FFFFFF) only for primary headlines.