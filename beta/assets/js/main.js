/**
 * Rangeway Energy - Main JavaScript
 * Modern vanilla JavaScript with ES6+ syntax
 * No external dependencies required
 */

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Debounce function to limit function execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
const debounce = (func, wait = 10) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Format number with commas for thousands separator
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Easing function for smooth animations
 * @param {number} t - Current time
 * @param {number} b - Start value
 * @param {number} c - Change in value
 * @param {number} d - Duration
 * @returns {number} Eased value
 */
const easeOutQuad = (t, b, c, d) => {
  t /= d;
  return -c * t * (t - 2) + b;
};

// ============================================================================
// MOBILE MENU FUNCTIONALITY
// ============================================================================

const MobileMenu = (() => {
  const menuButton = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuLinks = document.querySelectorAll('[data-mobile-menu] a');
  const body = document.body;
  let isOpen = false;

  /**
   * Toggle mobile menu open/closed state
   */
  const toggle = () => {
    isOpen = !isOpen;

    if (isOpen) {
      open();
    } else {
      close();
    }
  };

  /**
   * Open mobile menu
   */
  const open = () => {
    mobileMenu?.classList.add('active', 'open');
    menuButton?.classList.add('active');
    body.style.overflow = 'hidden'; // Lock scroll
    isOpen = true;
  };

  /**
   * Close mobile menu
   */
  const close = () => {
    mobileMenu?.classList.remove('active', 'open');
    menuButton?.classList.remove('active');
    body.style.overflow = ''; // Unlock scroll
    isOpen = false;
  };

  /**
   * Handle clicks outside the menu
   * @param {Event} e - Click event
   */
  const handleOutsideClick = (e) => {
    if (isOpen && mobileMenu && !mobileMenu.contains(e.target) && !menuButton?.contains(e.target)) {
      close();
    }
  };

  /**
   * Initialize mobile menu event listeners
   */
  const init = () => {
    if (!menuButton || !mobileMenu) return;

    // Toggle on button click
    menuButton.addEventListener('click', toggle);

    // Close when clicking menu links
    menuLinks.forEach(link => {
      link.addEventListener('click', close);
    });

    // Close when clicking outside
    document.addEventListener('click', handleOutsideClick);

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    });
  };

  return { init, open, close, toggle };
})();

// ============================================================================
// STICKY NAVIGATION
// ============================================================================

const StickyNav = (() => {
  const nav = document.querySelector('[data-nav]') || document.querySelector('nav') || document.querySelector('header');
  const scrollThreshold = 50;

  /**
   * Handle scroll events for sticky navigation
   */
  const handleScroll = () => {
    if (!nav) return;

    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > scrollThreshold) {
      nav.classList.add('scrolled', 'sticky');
    } else {
      nav.classList.remove('scrolled', 'sticky');
    }
  };

  /**
   * Initialize sticky navigation
   */
  const init = () => {
    if (!nav) return;

    // Check initial scroll position
    handleScroll();

    // Listen for scroll events with debounce
    window.addEventListener('scroll', debounce(handleScroll, 10));
  };

  return { init };
})();

// ============================================================================
// SMOOTH SCROLL
// ============================================================================

const SmoothScroll = (() => {
  const navHeight = 80; // Offset for fixed navigation

  /**
   * Smooth scroll to target element
   * @param {string} target - Selector for target element
   */
  const scrollToTarget = (target) => {
    const element = document.querySelector(target);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  /**
   * Handle anchor link clicks
   * @param {Event} e - Click event
   */
  const handleClick = (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');

    // Ignore empty hash or just '#'
    if (!href || href === '#' || href === '#!') return;

    // Check if target exists
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    scrollToTarget(href);

    // Update URL hash without jumping
    if (history.pushState) {
      history.pushState(null, null, href);
    }
  };

  /**
   * Initialize smooth scroll
   */
  const init = () => {
    // Use event delegation on document
    document.addEventListener('click', handleClick);
  };

  return { init, scrollToTarget };
})();

// ============================================================================
// INTERSECTION OBSERVER ANIMATIONS
// ============================================================================

const ScrollAnimations = (() => {
  const animatedElements = document.querySelectorAll('[data-animate], .fade-in, .slide-up, .animate-on-scroll');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger slightly before element is fully visible
    threshold: 0.1
  };

  /**
   * Callback for intersection observer
   * @param {Array} entries - Array of intersection entries
   * @param {IntersectionObserver} observer - Observer instance
   */
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class
        entry.target.classList.add('animated', 'visible', 'in-view');

        // Unobserve after animation (run once)
        observer.unobserve(entry.target);
      }
    });
  };

  /**
   * Initialize scroll animations
   */
  const init = () => {
    if (!animatedElements.length) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: add classes immediately for older browsers
      animatedElements.forEach(el => {
        el.classList.add('animated', 'visible', 'in-view');
      });
      return;
    }

    // Create observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all animated elements
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  };

  return { init };
})();

// ============================================================================
// STATISTICS COUNTER ANIMATION
// ============================================================================

const StatsCounter = (() => {
  const statElements = document.querySelectorAll('[data-counter], .stat-number, .counter');
  const duration = 1500; // Animation duration in milliseconds

  /**
   * Animate counter from 0 to target value
   * @param {HTMLElement} element - Element containing the number
   */
  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-counter') || element.textContent.replace(/,/g, ''));
    if (isNaN(target)) return;

    const startTime = performance.now();
    const startValue = 0;

    /**
     * Animation step function
     * @param {number} currentTime - Current timestamp
     */
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Calculate current value with easing
      const current = Math.floor(easeOutQuad(progress, startValue, target, 1));

      // Update element text with formatted number
      element.textContent = formatNumber(current);

      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure final value is exact
        element.textContent = formatNumber(target);
        element.classList.add('counted');
      }
    };

    requestAnimationFrame(step);
  };

  /**
   * Callback for intersection observer
   * @param {Array} entries - Array of intersection entries
   * @param {IntersectionObserver} observer - Observer instance
   */
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  };

  /**
   * Initialize counter animations
   */
  const init = () => {
    if (!statElements.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: animate all counters immediately
      statElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-counter') || element.textContent.replace(/,/g, ''));
        if (!isNaN(target)) {
          element.textContent = formatNumber(target);
        }
      });
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    statElements.forEach(element => {
      observer.observe(element);
    });
  };

  return { init };
})();

// ============================================================================
// LOGO CAROUSEL / MARQUEE
// ============================================================================

const LogoMarquee = (() => {
  const marquees = document.querySelectorAll('[data-marquee], .logo-marquee');

  /**
   * Initialize a single marquee element
   * @param {HTMLElement} marquee - Marquee container element
   */
  const initMarquee = (marquee) => {
    const content = marquee.querySelector('[data-marquee-content]') || marquee.firstElementChild;
    if (!content) return;

    // Clone content for seamless loop
    const clone = content.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    marquee.appendChild(clone);

    // Pause animation on hover
    marquee.addEventListener('mouseenter', () => {
      marquee.style.animationPlayState = 'paused';
    });

    marquee.addEventListener('mouseleave', () => {
      marquee.style.animationPlayState = 'running';
    });
  };

  /**
   * Initialize all marquee elements
   */
  const init = () => {
    if (!marquees.length) return;

    marquees.forEach(marquee => {
      initMarquee(marquee);
    });
  };

  return { init };
})();

// ============================================================================
// FORM HANDLING (BONUS)
// ============================================================================

const FormHandler = (() => {
  const forms = document.querySelectorAll('[data-form]');

  /**
   * Handle form submission
   * @param {Event} e - Submit event
   */
  const handleSubmit = (e) => {
    const form = e.target;

    // Add your form validation and submission logic here
    // This is a placeholder for custom form handling

    // Example: Basic validation
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });

    if (!isValid) {
      e.preventDefault();
      console.log('Form validation failed');
    }
  };

  /**
   * Initialize form handling
   */
  const init = () => {
    forms.forEach(form => {
      form.addEventListener('submit', handleSubmit);
    });
  };

  return { init };
})();

// ============================================================================
// PAGE LOAD ANIMATIONS
// ============================================================================

const PageLoad = (() => {
  /**
   * Handle initial page load animations
   */
  const init = () => {
    // Add loaded class to body after DOM is ready
    document.body.classList.add('loaded');

    // Fade in hero section
    const hero = document.querySelector('[data-hero], .hero');
    if (hero) {
      setTimeout(() => {
        hero.classList.add('visible');
      }, 100);
    }
  };

  return { init };
})();

// ============================================================================
// INITIALIZE ALL MODULES
// ============================================================================

/**
 * Initialize all functionality when DOM is ready
 */
const initializeApp = () => {
  // Initialize all modules
  MobileMenu.init();
  StickyNav.init();
  SmoothScroll.init();
  ScrollAnimations.init();
  StatsCounter.init();
  LogoMarquee.init();
  FormHandler.init();
  PageLoad.init();

  console.log('Rangeway Energy - Website initialized');
};

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM already loaded
  initializeApp();
}

// Export modules for potential external use
export {
  MobileMenu,
  StickyNav,
  SmoothScroll,
  ScrollAnimations,
  StatsCounter,
  LogoMarquee,
  FormHandler,
  PageLoad
};
