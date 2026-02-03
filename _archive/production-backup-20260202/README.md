# Rangeway Website

Official website for Rangeway - America's premier scenic highway EV charging network.

## Brand Guidelines Implementation

This site implements the official Rangeway brand guidelines with:

### Brand Colors
- **Warm** (#f4a855) - Primary brand color
- **Charcoal** (#2d2d2d) - Typography and grounding
- **Cream** (#f5f1eb) - Background and supporting color
- **Sage** (#4a5d52) - Accent color

### Typography
- **Raleway** - Headlines and wordmark (Bold 700, SemiBold 600)
- **Montserrat / Source Sans Pro** - Body copy and UI elements

### Logo
- Path Mark logo with Raleway wordmark
- Charcoal version for light backgrounds
- White version for dark backgrounds
- New logo assets in `logo2/` folder (launching January 2025)

## Site Structure

This is a single-page website with sections for:

1. **Hero Section** - "Adventure in your EV, recharge in luxury"
2. **Problem Statement** - EV drivers deserve better
3. **The Experience** - Arrive. Recharge. Rejuvenate. (3-step process)
4. **The Rangeway Difference** - Premium amenities and features
5. **Our Network** - Regional expansion (CA, CO, HI, NV, UT)
6. **Curated Journeys** - Popular routes and destinations
7. **Pathfinder Rewards** - Customer loyalty program
8. **FAQ** - Common questions
9. **Investors** - Investment information and opportunities
10. **Contact** - Get in touch with the team
11. **Newsroom** - Latest updates

## Site Architecture

```
rangeway-pages/
├── index.html (production site)
├── index-test.html (test site with new logo)
├── investors.html (dedicated investor page)
├── pathfinder.html (rewards program details)
├── _config.yml
├── _layouts/
│   ├── default.html (production layout)
│   └── default-test.html (test layout with new logo)
├── _includes/
│   ├── header.html (production header)
│   ├── header-test.html (test header with new logo)
│   ├── footer.html
│   └── newsroom.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── main.css
│   │   └── brand-test.css (new brand color overrides)
│   └── js/
│       └── main.js
├── images/
│   └── (brand imagery)
├── logo2/
│   ├── rangeway-logo-assets/
│   │   ├── lockup/ (logo + wordmark)
│   │   ├── mark/ (logo only)
│   │   └── app-icons/
│   └── rangeway-brand-final.html (brand guidelines)
├── CNAME
├── Gemfile
└── _archive/
    └── production-backup-YYYYMMDD/
```

## Features

### Design System
- **Light/Dark Mode** - Automatic switching based on system preferences
- **Responsive Design** - Mobile-first approach with optimized layouts
- **Tablet Hamburger Menu** - Mobile menu shows at 1024px breakpoint
- **Brand Typography** - Raleway for headlines, system fonts for body
- **Hospitality-Focused Copy** - Luxury language throughout

### Navigation
- Sticky navigation bar
- Mobile/tablet-responsive hamburger menu (≤1024px)
- Smooth scroll to sections
- Social media links in header
- Footer navigation with quick links

### Test Site
- Available at `/index-test.html`
- Features new logo/wordmark from `logo2/` folder
- Uses `default-test` layout with `header-test.html`
- Includes new brand colors via `brand-test.css`
- Set to `noindex, nofollow` for search engines

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
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
- **Waystations** - Charging locations with climate-controlled lounges
- **Pathfinder Rewards** - Customer loyalty program with four tiers
- **Trailblazer** - Top tier of Pathfinder Rewards (invitation-only)

### Messaging Pillars
1. **Luxury Hospitality** - Premium, refined experience
2. **Indoor Comfort** - Climate-controlled sanctuary at every location
3. **Reliability** - Chargers that work when you need them
4. **Scenic Routes** - Breathtaking destinations, curated journeys

### Hospitality Language
- Sanctuary, respite, retreat
- Artisan, curated, thoughtfully selected
- Refined, elevated, exceptional
- Seamless, effortless, complimentary
- Impeccable, pristine, meticulously maintained

## Version History

### Version 4.0 - December 2025
- Redesigned with YC landing page principles
- Hospitality-focused luxury copy throughout
- New brand colors (Warm, Charcoal, Cream, Sage)
- Raleway typography for headings
- Added "How It Works" 3-step section
- Added FAQ section
- Streamlined page structure
- Test site with new logo (`index-test.html`)
- Dedicated investor page (`investors.html`)
- Tablet hamburger menu (1024px breakpoint)

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
- **Partnerships**: partnerships@rangewayev.com
- **Investors**: investors@rangewayev.com

---

Last Updated: December 2025
Version: 4.0 - Hospitality-Focused Redesign
