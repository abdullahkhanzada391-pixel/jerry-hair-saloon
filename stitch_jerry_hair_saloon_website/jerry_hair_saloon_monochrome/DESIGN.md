---
name: Jerry Hair Saloon Monochrome
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c6c6cb'
  on-secondary: '#2f3034'
  secondary-container: '#46464b'
  on-secondary-container: '#b5b4ba'
  tertiary: '#ffffff'
  on-tertiary: '#303032'
  tertiary-container: '#e4e2e4'
  on-tertiary-container: '#656466'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e7'
  secondary-fixed-dim: '#c6c6cb'
  on-secondary-fixed: '#1a1b1f'
  on-secondary-fixed-variant: '#46464b'
  tertiary-fixed: '#e4e2e4'
  tertiary-fixed-dim: '#c8c6c8'
  on-tertiary-fixed: '#1b1b1d'
  on-tertiary-fixed-variant: '#474649'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-hero:
    fontFamily: Bodoni Moda
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Bodoni Moda
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: 0em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-craft grooming, heritage barbering, and uncompromising masculine luxury. Built for Jerry Hair Saloon—established eight years ago in 117 Neelum Block, Iqbal Town—the aesthetic merges editorial sophistication with modern tactile precision. The atmosphere takes cues from the sensory world of traditional blade craft: oiled steel shears, polished vintage barber chairs, matte hair pomades, and textured leather strop bands.

The visual style blends **Minimalism** with sharp **High-Contrast Editorial Noir**. Pure deep black grounds the interface, razor-sharp 1px dividing lines frame content modules like tailored suiting, and stark optical white elements demand decisive focus. The UI conveys permanence, mastery, and quiet confidence—steering clear of soft consumer-grade curves in favor of structural authority and precision.

## Colors

The palette is strictly achromatic, leveraging optical luminance to build deep atmospheric contrast.

- **Primary (`#FFFFFF`)**: The razor edge. Reserved for primary display typography, active states, high-priority actions, and definitive brand marks.
- **Secondary (`#8E8E93`)**: Burnished steel. Deployed for supporting body copy, metadata, secondary icons, and disabled states.
- **Tertiary (`#1C1C1E`)**: Charcoal slate. Acts as an elevated surface layer for cards, segmented controls, input fields, and hover transitions.
- **Neutral (`#0A0A0A`)**: Pitch black. Forms the foundational floor and canvas background, ensuring extreme contrast against text and line work.
- **Structural Border (`#2C2C2E`)**: Subtle gunmetal outline used for sharp division rules and grid boundaries without introducing visual clutter.

## Typography

The typographic hierarchy juxtaposes classic editorial craftsmanship with clean utilitarian functionality.

- **Headlines (`Bodoni Moda`)**: Evokes luxury heritage, tailored vintage publications, and traditional artisan signage. High vertical stroke contrast creates elegance across hero titles, service names, and section dividers.
- **Body & Labels (`Hanken Grotesk`)**: Provides razor-sharp legibility against dark backgrounds. Its geometric proportions deliver effortless readability across booking workflows, appointment schedules, and service descriptions.
- **Micro-labels & Category Trackers**: Always styled in `label-caps` with uppercase transformation and wide tracking (`0.15em`) to simulate hot-stamped leather tags and surgical tool identifiers.

## Layout & Spacing

The structural layout relies on an architecturally rigid 12-column fluid grid on desktop (scaling down to 4 columns on mobile and 8 columns on tablet). Wide margins establish an expansive, high-end gallery feel.

- **Breakpoints**: Mobile (`< 768px`), Tablet (`768px - 1024px`), Desktop (`> 1024px`).
- **Gutter & Rhythm**: Gutters preserve strict horizontal alignment, letting 1px solid dividers define structural intersections. 
- **Vertical Rhythm**: Generous vertical whitespace highlights imagery, monochrome barbering photography, and typography rather than crowding the viewport. Modules breathe with minimum gaps of `space-xl` across desktop views.

## Elevation & Depth

This design system rejects diffuse, colorful drop shadows in favor of **Tonal Tiering & Razor-Sharp Outlines**:

- **Level 0 (Canvas Base)**: Pure `#0A0A0A`. The stage for full-bleed content, editorial service blocks, and photography.
- **Level 1 (Card & Modular Surfaces)**: Tinted `#141414` with a crisp 1px solid border of `#2C2C2E`. Used for service line items, stylist profiles, and time selection slots.
- **Level 2 (Modals, Drawers & Menus)**: Solid `#1C1C1E` framed with a high-contrast 1px border of `#3A3A3C`. Elevation is felt through boundary definition and contrast shifts rather than faux blurs.
- **Hover & Active Depth**: Triggered by high-contrast border swaps (`#2C2C2E` transitions directly to `#FFFFFF`) or inverted surfaces (black background flipping instantly to pure white with stark black text).

## Shapes

The shape philosophy is strictly **Sharp (0px radius)**.

Every surface, container, button, avatar mask, badge, and input field features square 90-degree corners. This evokes straight razor blades, crisp line fades, and the geometric precision of classic barbershop craftsmanship. The unyielding geometry reinforces discipline, masculine luxury, and bespoke architectural detailing.

## Components

### Buttons
- **Primary**: Pure `#FFFFFF` background with pitch black `#0A0A0A` text, 0px border radius, uppercase `label-caps` typography, and generous horizontal padding (`space-lg`). On hover, inverts to `#0A0A0A` background with `#FFFFFF` text and a 1px solid `#FFFFFF` outline.
- **Secondary / Ghost**: Transparent background with a 1px solid `#3A3A3C` border and `#FFFFFF` text. On hover, the border transitions to pure `#FFFFFF`.
- **Text Action**: Unbordered inline link using `label-caps` in `#8E8E93`, transitioning to `#FFFFFF` with a persistent 1px underline offset by 4px.

### Cards & Service Tiles
- Structured as crisp rectangular blocks (`#141414`) bordered by 1px `#2C2C2E`.
- Card headers pair an uppercase tracking label (`label-caps`) indicating category (e.g., "BEARD ARCHITECTURE", "SIGNATURE CUT") with a bold serif price and title.
- Interactive cards feature an edge-to-edge hover border illumination to pure `#FFFFFF`.

### Chips & Badges
- Sharp rectangular tags with a 1px solid `#2C2C2E` border, `#0A0A0A` interior, and muted silver `#8E8E93` uppercase typography. Selected chips become solid `#FFFFFF` fill with deep black `#0A0A0A` text.

### Input Fields & Selectors
- Background filled with `#141414`, bordered on all sides by 1px `#2C2C2E` (or alternatively configured as a single 1px bottom rule for an editorial ledger look).
- Text entries render in crisp white `body-md`; placeholder values render in muted `#5A5A5E`. Active focus transforms the border cleanly to `#FFFFFF` without glow or fuzzy halo effects.

### Checkboxes & Radio Controls
- **Radio Buttons**: Sharp square box (not circular) with a 1px border. Selected state inserts a centered solid `#FFFFFF` square.
- **Checkboxes**: Sharp square box with a 1px border. Checked state renders a high-contrast inverted fill `#FFFFFF` with an obsidian `#0A0A0A` checkmark.

### Appointment Time Grid & Stylist Selector (Domain Specific)
- **Time Slots**: Rectangular grid matrix of sharp boxes displaying times (e.g., "14:30") in monospaced or tracking-spaced sans typography. Unavailable slots show a delicate 45-degree diagonal strike-through rule.
- **Stylist Profiles**: Grayscale portraits framed in sharp 1px borders with monochrome status indicators denoting chair availability.