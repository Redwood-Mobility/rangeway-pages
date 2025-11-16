# Rangeway Website

Official website for Rangeway - America's premium scenic highway EV charging network.

## Brand Guidelines Implementation

This site implements the official Rangeway brand guidelines (see `brand.html` for full documentation) with:

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

## Pages Overview

The site consists of 6 main pages:

1. **index.html** - Homepage
   - Hero section with brand messaging
   - Indoor comfort promise
   - Baker Basecamp spotlight
   - Statistics and social proof
   - Investment CTA

2. **why-rangeway.html** - Why Rangeway
   - Scenic route charging challenge
   - Indoor comfort guarantee
   - Basecamps + Waystations model
   - Hub-satellite architecture
   - Market opportunity

3. **network.html** - Our Network
   - Baker Basecamp details
   - Expansion corridors
   - Strategic locations
   - Gateway to Death Valley positioning

4. **for-travelers.html** - For Travelers
   - The Rangeway experience
   - Pathfinder Rewards program
   - Popular routes
   - Trip planning resources

5. **investors.html** - Investors
   - Investment opportunity
   - Community investment (crowdfunding)
   - Institutional investor information
   - Why invest in Rangeway

6. **contact.html** - Contact
   - Multiple contact options
   - General inquiries
   - Partnership opportunities
   - Press & media
   - Investor relations

## Site Architecture

```
rangeway-pages/
├── index.html
├── why-rangeway.html
├── network.html
├── for-travelers.html
├── investors.html
├── contact.html
├── brand.html (Brand Guidelines v1.0)
├── _layouts/
│   └── default.html
├── _includes/
│   ├── header.html
│   └── footer.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── images/
│   ├── baker-exterior1.jpg
│   ├── baker-exterior2.jpg
│   ├── baker-exterior3.jpg
│   ├── banner.png
│   ├── trailhead-interior1.jpg
│   ├── waystation-exterior-alamo2.jpg
│   ├── waystation-exterior1-az.jpg
│   ├── waystation-exterior1-jt.jpg
│   ├── waystation-exterior1-shasta.jpg
│   ├── waystation-exterior2-jt.jpg
│   └── waystation-exterior4-pch.jpg
└── _archive/
    └── production-backup-YYYYMMDD/
```

## Features

### Design System
- ✅ **Light/Dark Mode** - Automatic switching based on system preferences
- ✅ **Responsive Design** - Mobile-first approach with optimized layouts
- ✅ **Brand Typography** - Montserrat for headlines, Source Sans Pro for body
- ✅ **Consistent Footer** - Always dark with Coastal Cream text, independent of light/dark mode
- ✅ **Branded Header** - Full-color logo with RANGEWAY wordmark

### Navigation
- Sticky navigation bar with brand colors
- Mobile-responsive hamburger menu
- Consistent navigation across all pages
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

Production URL: https://rangeway.energy

## Brand Voice & Terminology

### Key Terms
- **Basecamps** - Full-service flagship locations (6+ chargers, café, 24/7 staff)
- **Waystations** - Automated satellite locations (4 chargers, climate-controlled lounge)
- **Trailkeepers** - Customer service staff at Basecamps
- **Pathfinder Rewards** - Customer loyalty program

### Messaging Pillars
1. **Indoor Comfort** - Climate-controlled spaces at every location
2. **Reliability** - 99% uptime, 24/7 monitoring
3. **Hospitality** - Charging as destination, not obligation
4. **Scenic Routes** - National Parks and beautiful highways

## Version History

### Version 2.0 - November 8, 2025
- Implemented official brand guidelines
- Added automatic light/dark mode
- Updated typography to Montserrat/Source Sans Pro
- Redesigned header with full-color logo + wordmark
- Updated footer with brand colors
- Fixed mobile spacing and navigation issues
- Improved mobile-responsive design
- Archived previous version to `_archive/`

### Version 1.0 - November 2, 2025
- Initial beta site launch
- 6 main pages with complete content
- Basic responsive design
- Dark theme throughout

## Brand Guidelines

The complete brand guidelines document is available at `brand.html`. This self-contained HTML file includes:
- Official brand colors with hex codes and usage examples
- Typography specifications (Montserrat, Source Sans Pro)
- Logo usage guidelines and variations
- Brand voice and messaging principles
- Visual examples and design patterns

To view: Open `brand.html` in any web browser.

## Archive

Previous production versions are archived in `_archive/production-backup-YYYYMMDD/` directories for rollback purposes if needed.

## Support

For questions or issues, contact:
- **General**: hello@rangeway.energy
- **Technical**: (650) 420-6300

---

Last Updated: November 8, 2025
Version: 2.0 - Brand Guidelines Implementation
