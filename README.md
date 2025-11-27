# Rangeway Website

Official website for Rangeway - America's premium scenic highway EV charging network.

## Brand Guidelines Implementation

This site implements the official Rangeway brand guidelines with:

### Brand Colors
- **Sunset Coral** (#F09060) - Primary brand color
- **Golden Highway** (#FFB366) - Accent and highlights
- **Mountain Charcoal** (#4A4A4A) - Typography and grounding
- **Coastal Cream** (#F5DEB3) - Supporting color
- **Ocean Deep** (#2C5F7C) - CTA sections
- **Fog Gray** (#B8B8B8) - Secondary text

### Typography
- **Montserrat** - Headlines (h1-h4), bold, generous letter-spacing
- **Source Sans Pro / Open Sans** - Body copy and UI elements
- **RANGEWAY** wordmark - All caps with 0.08em letter-spacing

### Logo
- Full-color gradient logo (Sunset Coral to Golden Highway)
- Used consistently in header and footer
- Proper clear space and sizing maintained

## Site Structure

This is a single-page website with sections for:

1. **Hero Section** - Main brand messaging and call-to-action
2. **The Rangeway Difference** - Indoor comfort, charging, and amenities
3. **Network** - Regional expansion plans across CA, CO, NV, UT, and HI
4. **Why Rangeway** - Market opportunity and company mission
5. **Investors** - Investment information and opportunities
6. **Contact** - Get in touch with the team
7. **Newsroom** - Latest updates from newsroom.rangeway.energy

## Site Architecture

```
rangeway-pages/
├── index.html (single-page site)
├── _config.yml
├── _layouts/
│   └── default.html
├── _includes/
│   ├── header.html
│   ├── footer.html
│   └── newsroom.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── main.css
│   └── js/
│       └── main.js
├── images/
│   └── (brand imagery)
├── CNAME
├── Gemfile
└── _archive/
    └── production-backup-YYYYMMDD/
```

## Features

### Design System
- **Light/Dark Mode** - Automatic switching based on system preferences
- **Responsive Design** - Mobile-first approach with optimized layouts
- **Brand Typography** - Montserrat for headlines, Source Sans Pro for body
- **Consistent Footer** - Always dark with Coastal Cream text
- **Branded Header** - Full-color logo with RANGEWAY wordmark
- **Single-Page Navigation** - Smooth scrolling to sections

### Navigation
- Sticky navigation bar with brand colors
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Social media links in header
- Footer navigation with quick links

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Skip to main content link
- Keyboard navigation support
- Sufficient color contrast ratios

### Performance
- Optimized CSS with CSS variables
- Minimal JavaScript footprint
- Responsive images
- Smooth scrolling behavior
- Single-page load optimization

## Browser Support

Tested and working on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Local Development

This is a Jekyll-based static site. To run locally:

```bash
bundle exec jekyll serve
```

Then visit: http://localhost:4000

For building the site:

```bash
bundle exec jekyll build
```

## Deployment

The site is configured for GitHub Pages deployment. Files are generated to `_site/` directory.

Production URL: https://rangewayev.com

## Brand Voice & Terminology

### Key Terms
- **Basecamps** - Full-service flagship locations (6+ chargers, cafe, 24/7 staff)
- **Waystations** - Automated satellite locations (4 chargers, climate-controlled lounge)
- **Trailkeepers** - Customer service staff at Basecamps
- **Pathfinder Rewards** - Customer loyalty program

### Messaging Pillars
1. **Indoor Comfort** - Climate-controlled spaces at every location
2. **Reliability** - 99% uptime, 24/7 monitoring
3. **Hospitality** - Charging as destination, not obligation
4. **Scenic Routes** - National Parks and beautiful highways

## Version History

### Version 3.0 - November 15, 2025
- Migrated to single-page architecture
- Consolidated all content into streamlined sections
- Improved user flow and navigation
- Dynamic newsroom integration from newsroom.rangeway.energy

### Version 2.0 - November 8, 2025
- Implemented official brand guidelines
- Added automatic light/dark mode
- Updated typography to Montserrat/Source Sans Pro
- Redesigned header with full-color logo + wordmark

### Version 1.0 - November 2, 2025
- Initial site launch
- 6 main pages with complete content
- Basic responsive design

## Archive

Previous production versions are archived in `_archive/production-backup-YYYYMMDD/` directories for rollback purposes if needed.

## Support

For questions or issues, contact:
- **General**: hello@rangewayev.com
- **Technical**: (650) 420-6300

---

Last Updated: November 15, 2025
Version: 3.0 - Single-Page Architecture
