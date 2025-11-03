# Rangeway Energy - GitHub Pages (Test)

This is a test conversion of the Rangeway Energy main site from PHP to Jekyll for GitHub Pages hosting.

## Overview

This repository contains the Jekyll-powered version of the main Rangeway Energy website, converted from PHP to work with GitHub Pages.

## Structure

- `_config.yml` - Jekyll configuration with site settings and metadata
- `_layouts/` - Page layouts
- `_includes/` - Reusable components (header, footer)
- `assets/` - CSS, JavaScript, and other static assets
- `images/` - Site images
- Page files: `index.html`, `why-rangeway.html`, `network.html`, `for-travelers.html`, `contact.html`

## Development

### Prerequisites

- Ruby 2.6 or later
- Bundler

### Local Setup

1. Install dependencies:
   ```bash
   bundle install --path vendor/bundle
   ```

2. Build the site:
   ```bash
   bundle exec jekyll build
   ```

3. Serve locally (with auto-rebuild):
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## Deployment

This site is designed to be deployed to GitHub Pages. Simply push to the main branch and GitHub will automatically build and deploy the site.

## Key Changes from PHP Version

- Converted PHP includes to Jekyll includes
- Moved config.php variables to _config.yml and page front matter
- Converted .php extensions to .html with proper permalinks
- Maintained all existing styling and content
- Preserved all meta tags, SEO elements, and structured data

## Notes

- All styling from modern.css has been preserved
- Navigation, header, and footer work identically to the PHP version
- Image paths remain unchanged (/images/)
- All external links and integrations remain functional
