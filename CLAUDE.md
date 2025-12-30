# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
# Local development server (http://localhost:4000)
bundle exec jekyll serve

# Build site to _site/ directory
bundle exec jekyll build

# Install dependencies (first time setup)
bundle install
```

## Architecture

This is a Jekyll-based static site for Rangeway, a premium EV charging network. Deployed to GitHub Pages at https://rangewayev.com.

### Key Files

- **`index.html`** - Production single-page site with all sections
- **`index-test.html`** - Test version with new logo (noindex, nofollow)
- **`investors.html`**, **`pathfinder.html`** - Standalone pages

### Layout System

- **`_layouts/default.html`** - Production layout
- **`_layouts/default-test.html`** - Test layout with new logo
- **`_includes/header.html`** / **`header-test.html`** - Navigation headers
- **`_includes/footer.html`** - Site footer
- **`_includes/newsroom.html`** - Dynamic newsroom section

### Styles

- **`assets/css/main.css`** - Primary stylesheet with CSS variables
- **`assets/css/brand-test.css`** - New brand color overrides for test site
- **`assets/css/style.css`** - Legacy styles

### Logo Assets

New logo assets in `logo2/rangeway-logo-assets/`:
- `lockup/` - Logo + wordmark combinations
- `mark/` - Logo only
- `app-icons/` - App icon variants

## Brand Colors

```css
--warm: #f4a855;      /* Primary brand color */
--charcoal: #2d2d2d;  /* Typography and grounding */
--cream: #f5f1eb;     /* Background */
--sage: #4a5d52;      /* Accent */
```

## Typography

- **Raleway** (700, 600) - Headlines and wordmark
- **Montserrat / Source Sans Pro** - Body copy and UI

## Configuration

Site settings in `_config.yml`:
- Organization info, social links, analytics
- Page-specific metadata (title, description, keywords, og_image)
- Asset versioning via `asset_version`

## Key Breakpoints

- Mobile menu triggers at **1024px** (tablet and below)
- Automatic light/dark mode based on system preferences
