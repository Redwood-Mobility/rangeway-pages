# Rangeway Energy Beta Site

This is the beta version of the Rangeway Energy website, featuring a complete multi-page website for America's premium scenic highway EV charging network.

## Pages Overview

The site consists of 5 interconnected pages:

1. **index.html** - Homepage
   - Hero section with main value proposition
   - Location carousel highlighting key waystation locations
   - Three service cards (Travelers, Partners, Communities)
   - Network overview and statistics
   - Feature showcase with image cards
   - Pathfinder Rewards CTA

2. **travelers.html** - For Travelers
   - Full-width hero with scenic background
   - Benefits grid (4 key benefits)
   - "How It Works" section (3 steps)
   - Network map with route listings
   - Pathfinder Rewards CTA

3. **partners.html** - For Partners
   - Partnership hero section
   - Two partnership models (Basecamp & Waystation)
   - Benefits of partnering
   - Process overview (3 steps)
   - Contact CTA

4. **communities.html** - For Communities
   - Community impact hero
   - Impact grid (4 key impacts)
   - Case study (Baker, CA)
   - Community benefits breakdown
   - Get involved CTA

5. **contact.html** - Contact Page
   - Contact hero section
   - Three contact option cards (General, Partnership, Press)
   - Contact form (demonstration purposes)
   - Office info and response time

## File Structure

```
beta/
├── index.html
├── travelers.html
├── partners.html
├── communities.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
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
└── README.md
```

## How to View the Site

### Option 1: Direct File Opening
Simply open any HTML file in your web browser:
- Double-click `index.html` to start at the homepage
- All navigation links are fully functional and will work across pages

### Option 2: Local Web Server (Recommended)
For the best experience, use a local web server:

**Using Python 3:**
```bash
cd /Users/zakwinnick/Documents/GitHub/rangeway-pages/beta
python3 -m http.server 8000
```
Then visit: http://localhost:8000

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```
Then visit: http://localhost:8000

**Using VS Code:**
Install the "Live Server" extension and right-click on `index.html` > "Open with Live Server"

## Features Implemented

### Navigation
- Sticky navigation bar on all pages
- Logo links back to homepage from all pages
- Consistent navigation menu across all pages:
  - For Travelers → travelers.html
  - For Partners → partners.html
  - For Communities → communities.html
- "Get in Touch" button links to contact.html on all pages
- Mobile-responsive hamburger menu

### Footer
- Consistent footer across all pages
- Working links to all main pages
- Social proof and copyright information

### Functionality
- Smooth scroll behavior implemented in CSS
- Mobile menu toggle with JavaScript
- Responsive design for mobile, tablet, and desktop
- Form validation on contact page (frontend only)

### Design
- Custom color scheme: Primary (#F09060), Dark (#1a1a1a)
- Poppins font family from Google Fonts
- Consistent spacing and typography
- Hover effects on cards and buttons
- Professional shadows and transitions

## Browser Compatibility

Tested and working on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps / Future Enhancements

### Backend Integration
- [ ] Connect contact form to backend API or email service
- [ ] Implement form submission handling
- [ ] Add CAPTCHA for spam prevention
- [ ] Set up email notifications for form submissions

### Features to Add
- [ ] Interactive location map on homepage
- [ ] Real charging station availability data
- [ ] User account system for Pathfinder Rewards
- [ ] Blog/news section
- [ ] Dynamic content management system
- [ ] Search functionality for locations
- [ ] Real-time charging station status

### Performance Optimization
- [ ] Image optimization and lazy loading
- [ ] Minify CSS and JavaScript
- [ ] Implement caching strategies
- [ ] Add service worker for offline functionality
- [ ] Optimize for Core Web Vitals

### SEO & Analytics
- [ ] Add meta descriptions and Open Graph tags
- [ ] Implement Google Analytics or similar
- [ ] Add structured data markup (Schema.org)
- [ ] Create XML sitemap
- [ ] Set up Google Search Console

### Accessibility
- [ ] Conduct full WCAG 2.1 AA audit
- [ ] Add ARIA labels where needed
- [ ] Improve keyboard navigation
- [ ] Test with screen readers
- [ ] Add skip navigation links

### Content
- [ ] Replace placeholder content with final copy
- [ ] Add more location-specific images
- [ ] Create FAQs section
- [ ] Add testimonials/reviews
- [ ] Document partnership terms and conditions

### Legal
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Add cookie consent banner if needed
- [ ] Review ADA compliance

## Known Limitations

1. **Contact Form**: Currently for demonstration only - does not actually send emails or store submissions
2. **External Links**: Links to "About Us", "Careers", "Press", etc. are placeholder (#) links
3. **Pathfinder Rewards**: Links to external subdomain (https://pathfinder.rangeway.energy) which may not exist yet
4. **Location Data**: Station locations are example data only
5. **Images**: All images should be optimized for web before production deployment

## Development Notes

- All links have been verified and are working correctly
- Mobile menu functionality is implemented and tested
- Smooth scrolling is enabled for better UX
- All images are loaded from the local `images/` directory
- The site is fully static HTML/CSS/JS with no build process required

## Support

For questions or issues, please contact the development team.

---

Last Updated: November 2, 2025
Version: 1.0 Beta
