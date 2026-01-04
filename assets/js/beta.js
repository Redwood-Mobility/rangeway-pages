// Rangeway Beta - JavaScript
// Modern rustic hospitality experience

// ============================================
// Theme Detection (follows system preference)
// ============================================
const html = document.documentElement;
const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
}

// Initialize theme based on system preference
applyTheme(prefersDarkQuery.matches ? 'dark' : 'light');

// Listen for system theme changes
prefersDarkQuery.addEventListener('change', (e) => {
  applyTheme(e.matches ? 'dark' : 'light');
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScrollY = currentScrollY;
}, { passive: true });

// ============================================
// Mobile Menu - Slide Over
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

function openMobileMenu() {
  navMenu.classList.add('active');
  menuToggle.classList.add('active');
  mobileMenuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  navMenu.classList.remove('active');
  menuToggle.classList.remove('active');
  mobileMenuOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (menuToggle) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navMenu.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMobileMenu();
  });
}

if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener('click', () => {
    closeMobileMenu();
  });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.navbar-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    closeMobileMenu();
  }
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// Scroll Animations - Intersection Observer
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: unobserve after animation
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize scroll animations on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Find all elements to animate
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  // Add stagger delays for elements within .stagger containers
  const staggerContainers = document.querySelectorAll('.stagger');
  staggerContainers.forEach(container => {
    const children = container.querySelectorAll('.animate-on-scroll');
    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.1}s`;
    });
  });

  // Observe all elements
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Immediately check for elements already in viewport
  requestAnimationFrame(() => {
    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  });
});

// ============================================
// Parallax Effect for Hero (subtle)
// ============================================
const heroImage = document.querySelector('.hero-image img');

if (heroImage) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const rate = scrolled * 0.15;

    if (scrolled < window.innerHeight) {
      heroImage.style.transform = `translateY(${rate}px) scale(${1 + scrolled * 0.0001})`;
    }
  }, { passive: true });
}

// ============================================
// Button Hover Effects Enhancement
// ============================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', function(e) {
    const x = e.offsetX;
    const y = e.offsetY;

    this.style.setProperty('--x', `${x}px`);
    this.style.setProperty('--y', `${y}px`);
  });
});

// ============================================
// Preload Critical Images
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const heroImg = document.querySelector('.hero-image img');
  if (heroImg) {
    heroImg.loading = 'eager';
  }
});
