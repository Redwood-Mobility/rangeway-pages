# Rangeway Website

Official website for Rangeway, America's premier scenic highway EV charging network.

**Production:** https://rangewayev.com

## Quick Start

```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

Visit http://localhost:4000 to view locally.

## Site Structure

```
rangeway-pages/
├── index.html              # Main single-page site
├── investors.html          # Investor relations page
├── pathfinder.html         # Pathfinder Rewards details
├── brand.html              # Brand guidelines
├── _config.yml             # Jekyll configuration
├── _layouts/
│   └── default.html        # Base layout (SEO, structured data)
├── _includes/
│   ├── header.html         # Navigation with mobile menu
│   └── footer.html         # Site footer
├── assets/
│   ├── css/main.css        # All styles
│   └── js/main.js          # Interactive features
├── images/                 # Site imagery
├── logo2/                  # Logo assets and brand guidelines
├── CNAME                   # Custom domain (rangewayev.com)
├── _archive/               # Previous production versions
└── Gemfile                 # Ruby dependencies
```

## Page Sections

1. **Hero** - Badge, headline, dual CTAs, scroll indicator
2. **Problem Statement** - Pain point messaging
3. **The Experience** - 3-step process (Arrive, Recharge, Rejuvenate)
4. **A Glimpse Inside** - Visual gallery (3 images)
5. **The Rangeway Difference** - Features list with icons
6. **Our Network** - Regional expansion grid
7. **Pathfinder Rewards** - Loyalty program preview with tier cards
8. **FAQ** - Common questions
9. **CTA** - Newsletter signup
10. **Contact** - Email links for inquiries, media, investors

## Brand Guidelines

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Warm | `#f4a855` | Primary brand, CTAs, accents |
| Charcoal | `#2d2d2d` | Text, dark backgrounds |
| Cream | `#f5f1eb` | Light backgrounds |
| Sage | `#4a5d52` | Secondary accent |

### Typography

- **Raleway** (700, 600) - Headlines, wordmark
- **Source Sans Pro** (300, 400, 600) - Body copy

### Voice

**Use:** "Driver's Lounge", "destination experiences", "thoughtful amenities", "premium hospitality", "locations"

**Avoid:** Technical jargon (kW ratings), utility language, "stations", em dashes

## Features

- **Responsive Design** - Mobile-first, tablet breakpoint at 1024px
- **Light/Dark Mode** - Automatic based on system preference
- **Accessibility** - Skip links, focus states, ARIA labels, reduced motion support
- **Performance** - Lazy loading images, minimal JavaScript
- **Animations** - Scroll-triggered fade-ins with stagger effects

## Deployment

The site deploys automatically via GitHub Pages when changes are pushed to the `master` branch.

### Custom Domain

DNS: CNAME record for `rangewayev.com` pointing to `redwood-mobility.github.io`

## Related Links

- [Pathfinder Rewards](https://pathfinderrewards.com)
- [Field Notes Newsletter](https://fieldnotes.rangewayev.com)
- [Newsroom](https://newsroom.rangeway.energy)

## Version History

- **v2.0** (February 2026) - Full site refresh with new hero, gallery, Pathfinder preview
- **v1.0** (December 2025) - Initial hospitality-focused redesign

## License

Proprietary - Rangeway Energy, Inc.
