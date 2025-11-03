/**
 * Rangeway Energy Beta - Modern JavaScript
 * Enhanced interactivity and animations
 */

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');

    if (navLinks && hamburger) {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');

        // Update ARIA attributes
        const isExpanded = navLinks.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);

        // Prevent body scroll when menu is open
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.modern-nav');

    if (nav && navLinks && hamburger && !nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// Close menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navLinksEl = document.getElementById('navLinks');
            const hamburger = document.querySelector('.hamburger');

            if (navLinksEl && hamburger) {
                navLinksEl.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 150; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Route Calculator Form
    const routeCalculator = document.getElementById('routeCalculator');
    if (routeCalculator) {
        routeCalculator.addEventListener('submit', function(e) {
            e.preventDefault();

            const from = document.getElementById('from').value;
            const to = document.getElementById('to').value;
            const ev = document.getElementById('ev').value;

            if (from && to && ev) {
                // Simulate calculation (in production, this would call an API)
                setTimeout(() => {
                    const resultDiv = document.getElementById('routeResult');
                    if (resultDiv) {
                        resultDiv.style.display = 'block';
                        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                }, 500);
            }
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.difference-card, .stat-card-modern, .status-item, .spotlight-feature'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero background
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const heroBackground = document.querySelector('.hero-background');
                if (heroBackground) {
                    const scrolled = window.pageYOffset;
                    const limit = heroBackground.offsetHeight;
                    if (scrolled <= limit) {
                        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Hide scroll indicator after scrolling
    window.addEventListener('scroll', () => {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator && window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else if (scrollIndicator) {
            scrollIndicator.style.opacity = '1';
        }
    }, { passive: true });

    // Add active state to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinkElements = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinkElements.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }, { passive: true });

    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add hover effect to cards
    const cards = document.querySelectorAll('.difference-card, .stat-card-modern');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Console Easter Egg
    console.log('%c⚡ Rangeway Energy Beta', 'color: #FFB366; font-size: 24px; font-weight: bold;');
    console.log('%cLike what you see? We\'re hiring! hello@rangeway.energy', 'color: #F09060; font-size: 14px;');
});

// Prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition', 'none');
}
