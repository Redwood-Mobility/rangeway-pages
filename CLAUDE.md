# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Overview

Official Rangeway website at **rangewayev.com**, built with Jekyll and deployed via GitHub Pages.

## Build Commands

```bash
# Install dependencies (first time)
bundle install

# Local development server (http://localhost:4000)
bundle exec jekyll serve

# Build site to _site/ directory
bundle exec jekyll build
```

## Architecture

Jekyll-based static site deployed via GitHub Pages.

### Key Files

| File | Purpose |
|------|---------|
| `index.html` | Main single-page site with all sections |
| `investors.html` | Investor relations page |
| `pathfinder.html` | Pathfinder Rewards details |
| `brand.html` | Brand guidelines |
| `_layouts/default.html` | Base layout with SEO, structured data, font loading |
| `_includes/header.html` | Navigation with mobile slide-over menu |
| `_includes/footer.html` | Site footer with social links |
| `assets/css/main.css` | All styles (~1500 lines) |
| `assets/js/main.js` | Navigation, animations, parallax |
| `_config.yml` | Jekyll config, site metadata, social links |

### Site Sections (index.html)

1. Hero (badge, headline, dual CTAs, scroll indicator)
2. Problem Statement
3. The Experience (3 step cards with orange top border)
4. A Glimpse Inside (3-image gallery, stacked on mobile)
5. The Rangeway Difference (features with icons)
6. Our Network (6 location cards)
7. Pathfinder Rewards (4 tier preview cards)
8. FAQ (4 items)
9. CTA (dark section with newsletter link)
10. Contact (3 cards: General, Media, Investors)

## Brand Guidelines (MUST FOLLOW)

### Colors
```css
--warm: #f4a855;      /* Primary - CTAs, accents, badges */
--charcoal: #2d2d2d;  /* Text, dark backgrounds */
--cream: #f5f1eb;     /* Light section backgrounds */
--sage: #4a5d52;      /* Secondary accent (rarely used) */
```

### Typography
- **Raleway** (700, 600) - Headlines, wordmark, card titles
- **Source Sans Pro** (300, 400, 600) - Body copy, UI text

### Voice & Language
**USE:** "Driver's Lounge", "destination experiences", "thoughtful amenities", "premium hospitality", "indoor comfort guarantee", "locations"

**AVOID:** Technical jargon (350kW, NOC), utility/infrastructure language, "stations" (use "locations"), "discounts", em dashes, overly casual tone

### Brand Pillars
1. Luxury Hospitality - Premium, refined experience
2. Indoor Comfort - Climate-controlled sanctuary at every location
3. Reliability - Chargers that work when you need them
4. Scenic Routes - Breathtaking destinations, curated journeys

## Key Implementation Details

### Mobile Behavior
- Hero: Text appears before image on mobile
- Gallery: Stacks vertically (no horizontal scroll), animations disabled
- Navigation: Slide-over menu from right at ≤1024px
- Touch targets: Minimum 48px

### Accessibility
- Skip to main content link
- Focus states: 2px warm (#f4a855) outline
- ARIA labels on navigation, menu toggle
- `prefers-reduced-motion` support
- `prefers-contrast: high` support

### Animations
- Scroll-triggered `.animate-on-scroll` with IntersectionObserver
- Stagger delays via `.stagger` class
- Hero elements use CSS animation delays
- Parallax on hero image (desktop only)
- Glow pulse on primary CTA button

## External Links

- Newsletter signup → https://fieldnotes.rangewayev.com
- Pathfinder Rewards → https://pathfinderrewards.com
- Newsroom → https://newsroom.rangeway.energy

## Archive

Previous production versions are stored in `_archive/production-backup-YYYYMMDD/` for rollback if needed.

## Deployment

**Production:** rangewayev.com

GitHub Pages deploys automatically on push to `master`.
