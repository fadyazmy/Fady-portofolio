/**
 * FADY AZMY — PORTFOLIO CLIENT JAVASCRIPT
 * Junior E-commerce Media Buyer & Content Specialist
 * Pure Vanilla JavaScript (ES6+)
 */

// ============================================================================
// VIDEO LIST — edit this to add / change / remove Reels in the 3D carousel
// ----------------------------------------------------------------------------
// Every video needs these 4 fields:
//   thumbnail     Image path, 9:16 portrait (e.g. "images/Instagram Video Thumbnail.webp")
//   title         Video title
//   views         Cumulative views across all platforms, e.g. "110K+ Views across platforms"
//                 (the first word, "110K+", is highlighted automatically)
//   instagramUrl  Instagram Reel link (opens in a new tab)
// Optional:
//   tag           Small tag line under the title (the tag line is simply left out when not given)
//   featured      true on ONE video to make it the centered "Featured" card
//   highlight     Part of the "views" line to show highlighted (default: its first word)
//
// To ADD a video:    copy one { ... } block, paste it after the last one (with a comma between), fill in the fields.
// To REMOVE a video: delete its { ... } block.
// The video marked  featured: true  is the "Featured" card that is centered when the page loads
// (if none is marked, the first video is). Videos listed before it sit to its left, the rest to its right.
// ============================================================================
const portfolioVideos = [
  {
    thumbnail: 'images/silversands-ora-thumbnail.webp',
    title: 'SILVERSANDS - ORA',
    instagramUrl: 'https://drive.google.com/file/d/1U5F3L5iDKaCdt8W6i939ggd9ydy9r6QR/view?usp=sharing'
  },
  {
    thumbnail: 'images/disney-land-thumbnail.webp',
    title: 'THE DISNEY LAND CAMPAIGN',
    instagramUrl: 'https://drive.google.com/file/d/1vvT52OAPK_BOy-jZ2AAEYGQJkhnf65IM/view?usp=sharing'
  },
  {
    thumbnail: 'images/vea-ilcazar-thumbnail.webp',
    title: 'VEA ILCAZAR CAMPAIGN',
    views: 'Generated 114M+ EGP in Sales',
    highlight: '114M+',
    instagramUrl: 'https://drive.google.com/file/d/183al6ilHNVvtNeEE19igf3upLhnj_NpH/view?usp=drive_link'
  },
  {
    thumbnail: 'images/aurhanz-cafe-thumbnail.webp',
    title: 'AURHANZ CAFE',
    instagramUrl: 'https://drive.google.com/file/d/1KHnT2H8hjSlsY42zqiCh73UFp7ZHUXXf/view?usp=drive_link'
  },
  {
    thumbnail: 'images/working-shoots-thumbnail.webp',
    title: 'WORKING SHOOTS WITH ELKADY AUTO',
    instagramUrl: 'https://drive.google.com/file/d/1Ekx8GwmYk9AVQoZU9sMpC2Zl7NzI3WqY/view?usp=sharing'
  },
  {
    thumbnail: 'images/tucson-n-line-thumbnail.webp',
    title: 'Tucson N Line 2025 - AFANDINA.MOTORS CAMPAIGN',
    instagramUrl: 'https://drive.google.com/file/d/12yg-RkmghL9U8rl3mRDQSOqBE_-PloBA/view?usp=sharing'
  },
  {
    thumbnail: 'images/el-kady-auto-thumbnail.webp',
    title: 'EASY WITH ELKADY AUTO CAMPAIGN',
    views: '500K+ Views in 1 Week',
    instagramUrl: 'https://www.instagram.com/reel/DZQVsHCFEOn/?psln=MXBvNDkzZmgxYWliag=='
  },
  {
    thumbnail: 'images/marq-gardens-thumbnail.webp',
    title: 'MARQ GARDENS',
    instagramUrl: 'https://drive.google.com/file/d/1C2ksSnD8Dl55xpAVmv109xByDvN6-QrF/view?usp=drive_link'   // any link works (opens in a new tab)
    // no "views" line: it is simply left out when not given
  },
  {
    thumbnail: 'images/reel-thumbnail.webp',
    title: 'THE DREAM HOUSE',
    views: '110K+ Views across platforms',
    featured: true,                          // the card that is centered (and badged "Featured") when the page loads
    instagramUrl: 'https://www.instagram.com/reel/Dase3mbI2_x/',
    tag: 'Content Creation & Real Estate Ad'    // optional
  },
  {
    thumbnail: 'images/client-demands-thumbnail.webp',
    title: 'UNREASONABLE CLIENT DEMANDS',
    views: '1.5M+ Views across platforms',
    instagramUrl: 'https://www.instagram.com/reel/DbTB1VdIQNO/'
  },
  {
    thumbnail: 'images/manager-message-thumbnail.webp',
    title: 'A MESSAGE TO MY MANAGER',
    views: '16M+ Views across platforms',
    instagramUrl: 'https://www.instagram.com/reel/DWhAGaUE5x7/'
  },
  {
    thumbnail: 'images/senior-sales-thumbnail.webp',
    title: 'So called Senior Sales?',
    views: '50K+ Views across platforms',
    instagramUrl: 'https://www.instagram.com/reel/DXmDX8aiF9h/'
  },
  {
    thumbnail: 'images/christmas-2026-part2-thumbnail.webp',
    title: 'CHRISTMAS 2026 PART 2',
    views: '170K+ Views across platforms',
    instagramUrl: 'https://www.instagram.com/reel/DSh6BePDsqt/'
  },
  {
    thumbnail: 'images/fully-finished-thumbnail.webp',
    title: 'Mountain view 1.1 Campaign',
    views: 'Generated 47M+ EGP in Sales',
    highlight: '47M+',                           // optional: the part of the line shown highlighted
    instagramUrl: 'https://drive.google.com/file/d/1ubluyo-F04PJtSy0If_oyBqNLrgGH4AI/view?usp=drive_link'   // any link works (opens in a new tab)
  },
  {
    thumbnail: 'images/alamein-city-towers-thumbnail.webp',
    title: 'ALAMEIN CITY TOWERS',
    instagramUrl: 'https://drive.google.com/file/d/1CW9O-CEyjLnuOu3tQNDvwSBlnIXB1pEl/view?usp=sharing'
  },
  {
    thumbnail: 'images/orin-traffic-thumbnail.webp',
    title: 'ORIN STORE TRAFFIC CAMPAIGN',
    instagramUrl: 'https://drive.google.com/file/d/10_hqgNMw0irWJCiPEGvdHiWWwYRR59pB/view?usp=sharing'
  }
  // Example — a second video (remove the // marks and put a comma after the block above):
  // {
  //   thumbnail: 'images/second-reel-thumbnail.webp',
  //   title: 'AFANDINA CARS SHOWROOM',
  //   views: '1.2M Views across platforms',
  //   instagramUrl: 'https://www.instagram.com/reel/XXXXXXXXXXX/',
  //   tag: 'Automotive Content'      // optional
  // }
];

// ==========================================================================
// INTRO SPLASH SEQUENCE  (~2.2s of locked scrolling)
// 0.0s image + name + subtitle reveal -> ~1.0s fully shown -> hold 0.6s ->
// 1.6s hand-off (0.8s): the splash portrait glides into the hero portrait, the backdrop fades and the
// hero text cascades in -> 2.2s scroll unlocked -> 2.4s splash removed (identical pixels, so no cut).
// Scrolling is blocked with event listeners (not overflow:hidden) so no scrollbar ever appears/disappears.
// ==========================================================================
(function () {
  const root = document.documentElement;
  const splash = document.getElementById('intro-splash');
  if (!splash) return;
  if (!root.classList.contains('intro-playing')) { splash.remove(); return; }

  const avatar = document.getElementById('intro-avatar');
  const HANDOFF_AT = 1600, HANDOFF_MS = 800, UNLOCK_AT = 2200;

  // --- scroll / interaction lock
  const block = function (e) { e.preventDefault(); };
  const blockKeys = function (e) {
    if ([32, 33, 34, 35, 36, 37, 38, 39, 40].indexOf(e.keyCode) > -1) e.preventDefault();
  };
  window.addEventListener('wheel', block, { passive: false });
  window.addEventListener('touchmove', block, { passive: false });
  window.addEventListener('keydown', blockKeys);
  function unlock() {
    window.removeEventListener('wheel', block);
    window.removeEventListener('touchmove', block);
    window.removeEventListener('keydown', blockKeys);
  }

  // cubic-bezier(0.16, 1, 0.3, 1) as a JS easing
  function bezier(x1, y1, x2, y2) {
    const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
    const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
    const X = function (t) { return ((ax * t + bx) * t + cx) * t; };
    const Y = function (t) { return ((ay * t + by) * t + cy) * t; };
    const dX = function (t) { return (3 * ax * t + 2 * bx) * t + cx; };
    return function (x) {
      let t = x;
      for (let i = 0; i < 8; i++) {
        const err = X(t) - x, d = dX(t);
        if (Math.abs(err) < 1e-5 || Math.abs(d) < 1e-6) break;
        t -= err / d;
      }
      return Y(Math.min(1, Math.max(0, t)));
    };
  }
  const ease = bezier(0.16, 1, 0.3, 1);

  const frame_ = document.querySelector('.hero-portrait-frame');
  const card_ = document.querySelector('.hero-profile-card');

  let done = false;
  function finish() {
    if (done) return;
    done = true;
    unlock();
    if (frame_) { frame_.style.transform = ''; frame_.style.borderRadius = ''; }
    root.classList.remove('intro-playing', 'intro-hold', 'intro-prep', 'intro-chrome');
    splash.remove();
  }

  function handoff() {
    root.classList.remove('intro-hold');
    splash.classList.add('is-exiting');                 // backdrop + splash text fade out
    if (!frame_ || !card_ || !avatar) {
      window.dispatchEvent(new Event('intro:reveal'));
      window.setTimeout(finish, HANDOFF_MS);
      return;
    }
    const from = avatar.getBoundingClientRect();
    const r0 = parseFloat(getComputedStyle(avatar).borderTopLeftRadius) || 16;
    const fw = frame_.offsetWidth;                      // layout size, unaffected by transforms
    const k0 = from.width / fw;

    // The frame's un-transformed viewport position = card position (incl. its gentle float) + frame offset in the card.
    function natural() {
      const c = card_.getBoundingClientRect();
      return { left: c.left + frame_.offsetLeft, top: c.top + frame_.offsetTop };
    }
    function place(e) {                                  // e: 0 = on the splash portrait, 1 = in its hero spot
      const n = natural();
      const k = k0 + (1 - k0) * e;
      frame_.style.transform = 'translate3d(' + ((from.left - n.left) * (1 - e)) + 'px,' + ((from.top - n.top) * (1 - e)) + 'px,0) scale(' + k + ')';
      frame_.style.borderRadius = (r0 / k) + 'px';       // corner radius stays visually constant while scaling
    }

    // Same task, before the next paint: lift the hero above the splash, hide the card chrome, put the real
    // portrait exactly where the splash portrait is, and hide the splash portrait. Nothing visibly changes.
    root.classList.add('intro-prep', 'intro-chrome');
    window.dispatchEvent(new Event('intro:reveal'));     // hero text cascade starts
    place(0);
    avatar.style.animation = 'none';
    avatar.style.opacity = '0';
    void root.offsetWidth;                                // commit the hidden-chrome state...
    root.classList.remove('intro-chrome');                // ...then let the chrome fade in (CSS transitions)

    const t0 = performance.now();
    (function step(now) {
      const p = Math.min(1, (now - t0) / HANDOFF_MS);
      place(ease(p));
      if (p < 1) { requestAnimationFrame(step); } else { finish(); }
    })(t0);
  }

  window.setTimeout(handoff, HANDOFF_AT);
  window.setTimeout(unlock, UNLOCK_AT);
})();

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. THEME TOGGLE (DARK / LIGHT MODE)
  // ==========================================================================
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');

  // Check saved preference or default to dark
  const savedTheme = localStorage.getItem('fa_portfolio_theme');
  const initialTheme = savedTheme ? savedTheme : 'dark';
  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('fa_portfolio_theme', newTheme);
    });
  }

  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    if (themeToggleBtn) {
      const isDark = theme === 'dark';
      themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggleBtn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // ==========================================================================
  // 2. STICKY HEADER & SCROLL BEHAVIOR
  // ==========================================================================
  const header = document.getElementById('header');
  
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ==========================================================================
  // 3. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav');
  // Every link/button inside the drawer (section links AND the "Get In Touch" CTA)
  const mobileNavLinks = document.querySelectorAll('#mobile-nav .mobile-nav-link');
  const mobileNavAllLinks = document.querySelectorAll('#mobile-nav a[href]');

  function isMobileNavOpen() {
    return !!mobileNavDrawer && mobileNavDrawer.classList.contains('is-open');
  }

  function openMobileNav() {
    if (!mobileToggleBtn || !mobileNavDrawer) return;
    mobileToggleBtn.classList.add('is-active');
    mobileToggleBtn.setAttribute('aria-expanded', 'true');
    mobileToggleBtn.setAttribute('aria-label', 'Close mobile menu');
    mobileNavDrawer.classList.add('is-open');
    mobileNavDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileToggleBtn || !mobileNavDrawer) return;
    mobileToggleBtn.classList.remove('is-active');
    mobileToggleBtn.setAttribute('aria-expanded', 'false');
    mobileToggleBtn.setAttribute('aria-label', 'Open mobile menu');
    mobileNavDrawer.classList.remove('is-open');
    mobileNavDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn && mobileNavDrawer) {
    mobileToggleBtn.setAttribute('aria-label', 'Open mobile menu');

    // Hamburger tap: toggle open / closed
    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isMobileNavOpen()) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Tapping any link in the drawer: close it, then scroll to the section.
    // The page scroll is unlocked first so the anchor jump / smooth scroll works.
    mobileNavAllLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href') || '';
        closeMobileNav();
        if (href.charAt(0) === '#' && href.length > 1) {
          const target = document.getElementById(href.slice(1));
          if (target) {
            e.preventDefault();
            // wait one frame so body overflow is restored before scrolling
            requestAnimationFrame(() => {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              if (history.pushState) history.pushState(null, '', href);
            });
          }
        }
      });
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMobileNavOpen()) {
        closeMobileNav();
        mobileToggleBtn.focus();
      }
    });

    // Close when tapping outside the drawer / header
    document.addEventListener('click', (e) => {
      if (isMobileNavOpen() &&
          !mobileNavDrawer.contains(e.target) &&
          !mobileToggleBtn.contains(e.target)) {
        closeMobileNav();
      }
    });

    // Reset if the screen grows to desktop width (rotate / resize)
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 960 && isMobileNavOpen()) {
        closeMobileNav();
      }
    });
  }

  // ==========================================================================
  // 4. ACTIVE NAVIGATION LINK TRACKING
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  function highlightActiveNavLink() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        mobileNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightActiveNavLink, { passive: true });
  highlightActiveNavLink();

  // ==========================================================================
  // 5. SCROLL REVEAL ANIMATIONS (WITH PREFERS-REDUCED-MOTION SUPPORT)
  // ==========================================================================
  const revealElements = document.querySelectorAll('[data-reveal]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('revealed'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const revealTarget = entry.target;
          const revealNow = () => revealTarget.classList.add('revealed');
          // While the intro splash holds the screen, the hero waits so its own entrance animation is seen.
          if (document.documentElement.classList.contains('intro-hold')) {
            window.addEventListener('intro:reveal', revealNow, { once: true });
          } else {
            revealNow();
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ==========================================================================
  // 6. ANIMATED NUMERICAL COUNTERS
  // ==========================================================================
  const counterElements = document.querySelectorAll('.counter');

  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    if (isNaN(target)) return;

    const duration = 1600; // ms
    const startTime = performance.now();

    function updateCount(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * target);

      counter.textContent = currentVal.toString();

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target.toString();
      }
    }

    requestAnimationFrame(updateCount);
  }

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(counter => counterObserver.observe(counter));
  } else {
    counterElements.forEach(counter => {
      counter.textContent = counter.getAttribute('data-target') || '0';
    });
  }

  // ==========================================================================
  // 7. TOAST NOTIFICATIONS & CLIPBOARD COPY
  // ==========================================================================
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout = null;

  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    toast.setAttribute('aria-hidden', 'false');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
      toast.setAttribute('aria-hidden', 'true');
    }, 2800);
  }

  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for non-https or older browser environments
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        showToast(`Copied "${textToCopy}" to clipboard!`);
      } catch (err) {
        showToast(`Copied "${textToCopy}"`);
      }
    });
  });

  // ==========================================================================
  // 8. CONTACT FORM VALIDATION & SENDING (Formspree)
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email-address');
  const subjectInput = document.getElementById('subject-line');
  const messageInput = document.getElementById('message-body');

  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorSubject = document.getElementById('error-subject');
  const errorMessage = document.getElementById('error-message');

  const feedbackNotice = document.getElementById('form-feedback-notice');
  const launchMailtoBtn = document.getElementById('launch-mailto-btn');
  const dismissFeedbackBtn = document.getElementById('dismiss-feedback-btn');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackText = document.getElementById('feedback-text');
  const submitBtn = document.getElementById('submit-btn');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function clearErrors() {
    if (errorName) errorName.textContent = '';
    if (errorEmail) errorEmail.textContent = '';
    if (errorSubject) errorSubject.textContent = '';
    if (errorMessage) errorMessage.textContent = '';

    [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
      if (field) field.style.borderColor = '';
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;

      // Validate Name
      const nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal) {
        if (errorName) errorName.textContent = 'Please provide your full name.';
        if (nameInput) nameInput.style.borderColor = '#ef4444';
        isValid = false;
      }

      // Validate Email
      const emailVal = emailInput ? emailInput.value.trim() : '';
      if (!emailVal) {
        if (errorEmail) errorEmail.textContent = 'Please enter your email address.';
        if (emailInput) emailInput.style.borderColor = '#ef4444';
        isValid = false;
      } else if (!validateEmail(emailVal)) {
        if (errorEmail) errorEmail.textContent = 'Please enter a valid email address.';
        if (emailInput) emailInput.style.borderColor = '#ef4444';
        isValid = false;
      }

      // Validate Subject
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      if (!subjectVal) {
        if (errorSubject) errorSubject.textContent = 'Please enter a message subject.';
        if (subjectInput) subjectInput.style.borderColor = '#ef4444';
        isValid = false;
      }

      // Validate Message
      const messageVal = messageInput ? messageInput.value.trim() : '';
      if (!messageVal) {
        if (errorMessage) errorMessage.textContent = 'Please enter your message details.';
        if (messageInput) messageInput.style.borderColor = '#ef4444';
        isValid = false;
      } else if (messageVal.length < 10) {
        if (errorMessage) errorMessage.textContent = 'Message should be at least 10 characters long.';
        if (messageInput) messageInput.style.borderColor = '#ef4444';
        isValid = false;
      }

      if (isValid) {
        sendMessage(subjectVal);
      }
    });

    // Show the inline success / error message under the form
    function showFeedback(title, text, showEmailLink) {
      if (feedbackTitle) feedbackTitle.textContent = title;
      if (feedbackText) feedbackText.textContent = text;
      if (launchMailtoBtn) launchMailtoBtn.hidden = !showEmailLink;
      if (feedbackNotice) {
        feedbackNotice.classList.remove('hidden');
        feedbackNotice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    // Send the form to Formspree with fetch() - no page reload, no redirect
    function sendMessage(subjectVal) {
      const data = new FormData(contactForm);
      data.append('_subject', '[Portfolio Inquiry] ' + subjectVal);
      const btnLabel = submitBtn ? submitBtn.querySelector('span') : null;
      const originalLabel = btnLabel ? btnLabel.textContent : '';
      if (submitBtn) submitBtn.disabled = true;
      if (btnLabel) btnLabel.textContent = 'Sending...';
      if (feedbackNotice) feedbackNotice.classList.add('hidden');

      fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
        .then(response => {
          if (response.ok) {
            contactForm.reset();
            showFeedback('Message Sent', 'Thank you! Your message has been sent successfully.', false);
            showToast('Message sent successfully!');
          } else {
            return response.json().then(
              body => { throw new Error(body && body.errors ? body.errors.map(er => er.message).join(', ') : 'Request failed'); },
              () => { throw new Error('Request failed'); }
            );
          }
        })
        .catch(() => {
          showFeedback('Message Not Sent', 'Sorry, something went wrong while sending your message. Please try again, or email Fady directly.', true);
        })
        .finally(() => {
          if (submitBtn) submitBtn.disabled = false;
          if (btnLabel) btnLabel.textContent = originalLabel;
        });
    }

    // Dismiss Feedback Box
    if (dismissFeedbackBtn && feedbackNotice) {
      dismissFeedbackBtn.addEventListener('click', () => {
        feedbackNotice.classList.add('hidden');
      });
    }

    // Input listeners to clear errors on typing
    [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
      if (field) {
        field.addEventListener('input', () => {
          field.style.borderColor = '';
          const parent = field.parentElement;
          if (parent) {
            const err = parent.querySelector('.field-error');
            if (err) err.textContent = '';
          }
        });
      }
    });
  }

  // ==========================================================================
  // 9. SMOOTH SCROLL OFFSET CORRECTION FOR ANCHORS
  // ==========================================================================
  // Pages: every menu button swaps the page inside this same tab (no new tab / link).
  // work = Reels + Ads Design (View My Work), plus About, Skills, Experience, Results and Contact pages.
  (function () {
    const root = document.documentElement;
    const MAP = { work: 'work', reels: 'work', ads: 'work', about: 'about', skills: 'skills', experience: 'experience',
                  projects: 'projects', results: 'projects', contact: 'contact', credentials: 'contact' };
    const current = function () { return root.getAttribute('data-view'); };
    function relayout() { void document.body.offsetHeight; window.dispatchEvent(new Event('resize')); window.dispatchEvent(new Event('scroll')); }   // scroll: refresh the active menu entry
    function showView(v, push) {
      root.setAttribute('data-view', v);
      root.classList.remove('site-locked');
      if (push && window.location.hash !== '#' + v) { try { history.pushState({ view: v }, '', '#' + v); } catch (_) {} }
      relayout();
    }
    function showHome(push) {
      root.removeAttribute('data-view');
      root.classList.add('site-locked');           // back to the landing page: hero only
      if (push) { try { history.pushState({ view: 'home' }, '', window.location.pathname + window.location.search); } catch (_) {} }
      relayout();
      window.scrollTo(0, 0);
    }
    document.addEventListener('click', function (e) {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (a.classList.contains('back-to-top') && current()) {          // inside a page: just scroll up
        e.preventDefault(); e.stopImmediatePropagation(); window.scrollTo({ top: 0, behavior: 'smooth' }); return;
      }
      if (id === 'hero') { if (current()) showHome(true); return; }
      const v = MAP[id];
      if (v && current() !== v) showView(v, true);
    }, true);
    window.addEventListener('popstate', function () {
      const v = MAP[window.location.hash.slice(1)];
      if (v) showView(v, false); else if (current()) showHome(false);
    });
    if (current()) relayout();
  })();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // 10. INTERACTIVE 3D PERSPECTIVE PROFILE TILT & SPECULAR GLARE TRACKING
  // ==========================================================================
  const interactiveCards = document.querySelectorAll('.interactive-profile-card');

  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    interactiveCards.forEach(card => {
      const glare = card.querySelector('.profile-card-glare');
      let isHovered = false;

      card.addEventListener('mouseenter', () => {
        isHovered = true;
        card.style.transition = 'none';
        if (glare) {
          glare.style.transition = 'opacity 250ms ease';
          glare.style.opacity = '1';
        }
      });

      card.addEventListener('mousemove', (e) => {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle 3D tilt: max ~8.5 degrees
        const rotateX = ((y - centerY) / centerY) * -8.5;
        const rotateY = ((x - centerX) / centerX) * 8.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

        if (glare) {
          glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        isHovered = false;
        card.style.transition = 'transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        if (glare) {
          glare.style.transition = 'opacity 500ms ease';
          glare.style.opacity = '0';
        }
      });
    });
  }

  // ==========================================================================
  // 9. REELS CAROUSEL (3D perspective, drag / swipe / arrows / keyboard)
  // ==========================================================================
  // "View My Work" jumps straight to the Reels carousel and frames it nicely in the viewport
  (function initViewMyWork() {
    const btn = document.querySelector('.hero-actions a[href="#reels"]');
    const section = document.getElementById('reels');
    const carousel = document.getElementById('reel-carousel');
    if (!btn || !section || !carousel) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const headerH = 80;
      const r = carousel.getBoundingClientRect();
      const free = window.innerHeight - headerH;
      // centre the carousel in the space under the header; if it is taller than that, line its top up under the header
      let top = window.scrollY + r.top - headerH - Math.max(0, (free - r.height) / 2);
      top = Math.max(top, window.scrollY + section.getBoundingClientRect().top - headerH + 40 - Math.max(0, free - r.height - 40));
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      carousel.dispatchEvent(new CustomEvent('reels:replay'));   // opening animation plays every time
      try { history.replaceState({ view: 'work' }, '', '#work'); } catch (err) { /* ignore */ }
    });
  })();

  (function initReelCarousel() {
    const root = document.getElementById('reel-carousel');
    if (!root) return;

    const stage = root.querySelector('.reel-stage');
    const track = root.querySelector('.reel-track');
    // ---- Render the video cards (same card template as the original static markup)
    const escapeHtml = str => String(str).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

    function videoCardHtml(video, isFeatured) {
      const viewsText = String(video.views || '').trim();
      const sp = viewsText.indexOf(' ');
      const hl = video.highlight ? viewsText.indexOf(video.highlight) : -1;
      const viewsHtml = hl >= 0
        ? escapeHtml(viewsText.slice(0, hl)) + '<strong>' + escapeHtml(video.highlight) + '</strong>' + escapeHtml(viewsText.slice(hl + video.highlight.length))
        : sp > 0
          ? '<strong>' + escapeHtml(viewsText.slice(0, sp)) + '</strong>' + escapeHtml(viewsText.slice(sp))
          : '<strong>' + escapeHtml(viewsText) + '</strong>';
      const platform = /drive\.google\./.test(String(video.instagramUrl)) ? 'Google Drive' : 'Instagram';
      const title = escapeHtml(video.title);
      return '' +
        '<div class="reel-card-inner">' +
          (isFeatured ? '<span class="reel-badge"><span class="status-dot"></span>Featured</span>' : '') +
          '<a class="reel-frame reel-link" href="' + escapeHtml(video.instagramUrl) + '" target="_blank" rel="noopener noreferrer" aria-label="Watch ' + title + ' on ' + platform + ' (opens in a new tab)">' +
            '<img class="reel-thumb" src="' + escapeHtml(video.thumbnail) + '" width="1440" height="2560" alt="' + title + ' reel thumbnail" decoding="async" draggable="false">' +
            '<span class="reel-play" aria-hidden="true">' +
              '<span class="reel-play-ring"></span>' +
              '<svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14z"/></svg>' +
            '</span>' +
          '</a>' +
          '<div class="reel-meta">' +
            '<h3 class="reel-title" dir="auto">' + title + '</h3>' +
            (video.tag ? '<span class="reel-tag">' + escapeHtml(video.tag) + '</span>' : '') +
            (viewsText ? '<span class="reel-views' + (viewsText.length > 30 ? ' is-long' : '') + '"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>' + (viewsText.length > 30 ? '<span class="reel-views-text">' + viewsHtml + '</span>' : viewsHtml) + '</span>' : '') +
          '</div>' +
        '</div>';
    }

    const videoFragment = document.createDocumentFragment();
    const featuredIndex = Math.max(0, portfolioVideos.findIndex(v => v && v.featured));
    portfolioVideos.forEach((video, i) => {
      if (!video || !video.title || !video.instagramUrl) return;
      const card = document.createElement('article');
      const isFeatured = i === featuredIndex;
      card.className = 'reel-card' + (isFeatured ? ' is-featured' : '');
      card.innerHTML = videoCardHtml(video, isFeatured);
      videoFragment.appendChild(card);
    });
    track.appendChild(videoFragment);

    const cards = Array.from(root.querySelectorAll('.reel-card'));
    const prevBtn = root.querySelector('.reel-prev');
    const nextBtn = root.querySelector('.reel-next');
    const dotsWrap = root.querySelector('.reel-dots');
    const liveRegion = root.querySelector('.reel-live');
    const lastIndex = cards.length - 1;
    if (!cards.length) return;

    let active = Math.max(0, cards.findIndex(c => c.classList.contains('is-featured')));
    let dragMoved = false;   // true after a real drag, used to swallow the click that follows it

    // ---- 3D layout. f = (possibly fractional) index that sits in the center.
    function metrics() {
      const w = cards[0].offsetWidth || 290;
      const narrow = window.innerWidth < 640;
      return {
        stepX: w * (narrow ? 0.62 : 0.7),
        stepZ: narrow ? 120 : 170,
        rotate: narrow ? 36 : 42
      };
    }

    // p = intro progress (0 = wide "film strip" panorama, 1 = the settled carousel). Normal use is p = 1.
    const INTRO_SWEEP = 3.4;   // how far (in card steps) the film strip travels while opening
    function layout(f, p) {
      p = (p == null) ? 1 : p;
      const q = 1 - p;
      const m = metrics();
      const fade = Math.min(1, Math.max(0, (p - 0.04) / 0.5));
      cards.forEach((card, i) => {
        const o = i - f + q * INTRO_SWEEP;                 // the strip enters from the right and glides to center
        const a = Math.abs(o);
        const x = o * m.stepX * (1 + q * 0.75);            // wide spacing while it is a flat panorama
        const z = -Math.min(a, 3) * m.stepZ * (0.35 + 0.65 * p) - q * 380;
        const r = Math.max(-62, Math.min(62, -o * m.rotate * (0.22 + 0.78 * p)));
        const s = (1 - Math.min(a, 3) * 0.085) * (0.8 + 0.2 * p);
        const op = Math.max(0, 1 - Math.max(0, a - 0.2) * 0.34) * fade;
        card.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + (q * 46).toFixed(1) + 'px,' + z.toFixed(1) + 'px) rotateY(' + r.toFixed(2) + 'deg) scale(' + s.toFixed(3) + ')';
        card.style.opacity = op.toFixed(3);
        card.style.zIndex = String(100 - Math.round(a * 10));
        card.style.setProperty('--dim', Math.min(0.62, a * 0.28).toFixed(3));
        card.style.pointerEvents = (p < 1 || a > 2.6) ? 'none' : 'auto';
        card.style.filter = q > 0.02 ? 'blur(' + (q * q * 7).toFixed(2) + 'px)' : '';
      });
    }

    // ---- Opening animation: plays once, the first time the carousel scrolls into view.
    let introRunning = false;
    let introToken = 0;
    function playIntro(delay) {
      const token = ++introToken;                          // a newer run cancels any run still in progress
      introRunning = true;
      root.classList.remove('is-intro');
      void root.offsetWidth;                               // restart the light-beam animation
      root.classList.add('is-intro');
      cards.forEach(c => { c.style.transition = 'none'; });
      const DURATION = 2800, DELAY = (delay == null ? 180 : delay);
      const t0 = performance.now() + DELAY;
      function frame(now) {
        if (token !== introToken) return;
        const t = Math.min(1, Math.max(0, (now - t0) / DURATION));
        const e = 1 - Math.pow(1 - t, 4);                  // fast sweep, long soft landing
        root.style.setProperty('--intro', e.toFixed(4));
        layout(active, e);
        if (t < 1) { requestAnimationFrame(frame); return; }
        introRunning = false;
        root.classList.remove('is-intro');
        root.style.removeProperty('--intro');
        cards.forEach(c => { c.style.transition = ''; c.style.filter = ''; });
        layout(active);                                    // identical to the normal, settled carousel
      }
      requestAnimationFrame(frame);
    }

    function setTrackHeight() {
      const tallest = Math.max.apply(null, cards.map(c => c.offsetHeight));
      track.style.setProperty('--reel-h', tallest + 'px');
    }

    // ---- State
    function updateState(announce) {
      cards.forEach((card, i) => {
        const isActive = i === active;
        card.classList.toggle('is-active', isActive);
        card.setAttribute('role', 'group');
        card.setAttribute('aria-roledescription', 'slide');
        card.setAttribute('aria-label', (i + 1) + ' of ' + cards.length);
        const inner = card.querySelector('.reel-card-inner');
        // inactive cards are not interactive (and not tabbable); clicking one just brings it to the center
        if (inner) {
          if (isActive) inner.removeAttribute('inert'); else inner.setAttribute('inert', '');
        }
        card.setAttribute('aria-hidden', isActive ? 'false' : 'true');
      });
      if (dotsWrap) {
        Array.from(dotsWrap.children).forEach((dot, i) => {
          if (i === active) dot.setAttribute('aria-current', 'true');
          else dot.removeAttribute('aria-current');
        });
      }
      if (prevBtn) prevBtn.disabled = active === 0;
      if (nextBtn) nextBtn.disabled = active === lastIndex;
      if (announce && liveRegion) {
        const title = cards[active].querySelector('.reel-title');
        liveRegion.textContent = 'Reel ' + (active + 1) + ' of ' + cards.length + (title ? ': ' + title.textContent : '');
      }
    }

    function goTo(index, announce) {
      const next = Math.max(0, Math.min(lastIndex, index));
      if (next !== active) {
        active = next;
      }
      updateState(announce !== false);
      layout(active);
    }

    // ---- Dots
    if (dotsWrap) {
      cards.forEach((card, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'reel-dot';
        dot.setAttribute('aria-label', 'Go to reel ' + (i + 1));
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      });
    }

    // ---- Arrows + keyboard
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(active - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(active + 1));

    root.addEventListener('keydown', (e) => {
      if (e.target && e.target.closest && e.target.closest('video')) return;
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(active - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
      if (e.key === 'Home')       { e.preventDefault(); goTo(0); }
      if (e.key === 'End')        { e.preventDefault(); goTo(lastIndex); }
    });

    // a drag / swipe that happens to end on the featured thumbnail must not open Instagram
    root.addEventListener('click', (e) => {
      if (dragMoved && e.target.closest && e.target.closest('a')) e.preventDefault();
    }, true);

    // ---- Cards: click a side card to bring it forward, play button starts the embed
    cards.forEach((card, i) => {
      card.addEventListener('click', (e) => {
        if (dragMoved) return;
        if (i !== active) { goTo(i); return; }
      });
    });

    // ---- Drag / swipe (pointer events: mouse, touch and pen). Vertical scrolling stays native (touch-action: pan-y).
    let pointerId = null;
    let startX = 0;
    let startActive = 0;
    let dragging = false;
    let samples = [];

    stage.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startActive = active;
      dragging = false;
      dragMoved = false;
      samples = [{ x: e.clientX, t: performance.now() }];
    });

    stage.addEventListener('pointermove', (e) => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      if (!dragging) {
        if (Math.abs(dx) < 8) return;
        dragging = true;
        dragMoved = true;
        root.classList.add('is-dragging');
        try { stage.setPointerCapture(pointerId); } catch (err) { /* ignore */ }
      }
      const m = metrics();
      let f = startActive - dx / m.stepX;
      // gentle resistance past the first / last card
      if (f < 0) f = f * 0.35;
      if (f > lastIndex) f = lastIndex + (f - lastIndex) * 0.35;
      samples.push({ x: e.clientX, t: performance.now() });
      if (samples.length > 6) samples.shift();
      layout(f);
    });

    function endDrag(e) {
      if (pointerId === null || (e && e.pointerId !== pointerId)) return;
      const wasDragging = dragging;
      pointerId = null;
      dragging = false;
      root.classList.remove('is-dragging');
      try { stage.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      if (wasDragging) {
        const m = metrics();
        const dx = e.clientX - startX;
        let f = startActive - dx / m.stepX;
        // flick: project the recent velocity forward a little
        if (samples.length > 1) {
          const a = samples[0];
          const b = samples[samples.length - 1];
          const dt = Math.max(1, b.t - a.t);
          f -= ((b.x - a.x) / dt) * 140 / m.stepX;
        }
        goTo(Math.round(f));
        // swallow the click that the browser fires right after a drag
        setTimeout(() => { dragMoved = false; }, 0);
      }
    }
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);

    // ---- Resize
    let resizeRaf = null;
    window.addEventListener('resize', () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => { setTrackHeight(); if (!root.classList.contains('is-intro')) layout(active); });
    });

    // ---- Init (no transition on first paint)
    cards.forEach(c => { c.style.transition = 'none'; });
    updateState(false);
    setTrackHeight();
    const introEnabled = 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    layout(active, introEnabled ? 0 : 1);                  // start hidden as a panorama when the intro will play
    if (introEnabled) root.classList.add('is-intro');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (!introEnabled) cards.forEach(c => { c.style.transition = ''; });
    }));
    // fonts / images can change card height after load
    window.addEventListener('load', () => { setTrackHeight(); if (!introRunning && !introEnabled) layout(active); });

    // Replay on demand (the hero "View My Work" button dispatches this every time it is pressed)
    const startCard = active;
    let introObserver = null;
    root.addEventListener('reels:replay', () => {
      if (!introEnabled) return;
      if (introObserver) introObserver.disconnect();       // the first-view trigger is no longer needed
      introToken++;                                        // stop a run in progress
      active = startCard;
      updateState(false);
      cards.forEach(c => { c.style.transition = 'none'; });   // snap to the start (no easing back)
      layout(active, 0);                                   // back to the hidden panorama start
      void root.offsetWidth;
      root.classList.add('is-intro');
      root.style.setProperty('--intro', '0');
      // same trigger as the very first time: open the carousel as soon as it scrolls into view (35% visible)
      if (introObserver) introObserver.disconnect();
      introObserver = new IntersectionObserver((entries) => {
        if (entries.some(en => en.isIntersecting)) {
          introObserver.disconnect();
          playIntro();
        }
      }, { threshold: 0.35 });
      introObserver.observe(root);
    });

    if (introEnabled) {
      introObserver = new IntersectionObserver((entries) => {
        if (entries.some(en => en.isIntersecting)) {
          introObserver.disconnect();
          playIntro();
        }
      }, { threshold: 0.35 });
      introObserver.observe(root);
    }
  })();

  /* ---------- Skills icons: animate only while the section is on screen ----------
     Adds .in-view to #skills when ~35% of the cards are visible and removes it once
     they fully leave, so every visit plays the icon sequences from their very start. */
  (function initSkillsIconAnimations() {
    const section = document.getElementById('skills');
    if (!section) return;
    const target = section.querySelector('.skills-grid') || section;
    if (!('IntersectionObserver' in window)) {
      section.classList.add('in-view');
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.35) {
          section.classList.add('in-view');
        } else if (!entry.isIntersecting) {
          section.classList.remove('in-view');
        }
      });
    }, { threshold: [0, 0.35] });
    observer.observe(target);
  })();


  // ==========================================================================
  // STATIC ADS VIEWER (lightbox)
  // ==========================================================================
  (function () {
    const grid = document.getElementById('ads-grid');
    const box = document.getElementById('ad-lightbox');
    if (!grid || !box) return;
    const cards = Array.from(grid.querySelectorAll('.ad-card'));
    const img = box.querySelector('.ad-lb-img');
    const title = box.querySelector('.ad-lb-title');
    const count = box.querySelector('.ad-lb-count');
    let index = 0, opener = null, startX = null;

    function show(i) {
      index = (i + cards.length) % cards.length;
      const src = cards[index].querySelector('img');
      img.src = src.getAttribute('src');
      img.alt = src.alt;
      title.textContent = cards[index].querySelector('.ad-name').textContent;
      count.textContent = (index + 1) + ' / ' + cards.length;
    }
    function open(i, trigger) {
      opener = trigger;
      show(i);
      const sbw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (sbw > 0) document.body.style.paddingRight = sbw + 'px';
      box.hidden = false;
      void box.offsetWidth;
      box.classList.add('is-open');
      box.querySelector('.ad-lb-close').focus();
    }
    function close() {
      box.classList.remove('is-open');
      window.setTimeout(function () {
        box.hidden = true;
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        if (opener) opener.focus();
      }, 300);
    }
    // Deterrents: no right-click menu or dragging on the ads section / viewer.
    [grid, box].forEach(function (el) {
      el.addEventListener('contextmenu', function (e) { e.preventDefault(); });
      el.addEventListener('dragstart', function (e) { e.preventDefault(); });
    });
    // ---- Curved slider: slots ride a cylinder, drift sideways, drag to scrub ----
    const N = cards.length;
    const COPIES = 3;
    cards.forEach(function (c, i) { c.dataset.i = i; });
    const slots = cards.slice();
    for (let k = 1; k < COPIES; k++) {
      cards.forEach(function (c) {
        const cl = c.cloneNode(true);
        cl.setAttribute('aria-hidden', 'true'); cl.tabIndex = -1;
        grid.appendChild(cl); slots.push(cl);
      });
    }
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, CW = 230, SP = 250, R = 900, TOTAL = 0, off = 0, vel = 0, last = 0, raf = 0;
    let inView = false, hovering = false, dragging = false, moved = 0, lastX = 0, lastT = 0;
    const AUTO = -34;   // px per second (drift to the left)

    function measure() {
      W = grid.clientWidth;
      CW = W < 700 ? W * 0.6 : Math.min(340, W * 0.27);
      SP = CW * 1.1;
      R = Math.max(520, W * 0.8);
      TOTAL = SP * slots.length;
      grid.style.setProperty('--cw', CW + 'px');
      grid.style.height = Math.round(CW * 1.25 + 110) + 'px';
    }
    function render() {
      const half = TOTAL / 2, vis = W / 2 + CW;
      for (let j = 0; j < slots.length; j++) {
        let s = j * SP + off;
        s = ((s + half) % TOTAL + TOTAL) % TOTAL - half;
        const el = slots[j];
        if (Math.abs(s) > vis) { if (el.style.visibility !== 'hidden') el.style.visibility = 'hidden'; continue; }
        const th = Math.max(-1.25, Math.min(1.25, s / R));
        const x = R * Math.sin(th), z = R * (1 - Math.cos(th));
        el.style.visibility = 'visible';
        el.style.zIndex = String(1000 - Math.round(Math.abs(s)));
        el.style.transform = 'translate(-50%,-50%) translate3d(' + x.toFixed(1) + 'px,0,' + z.toFixed(1) + 'px) rotateY(' + (th * 57.2958).toFixed(2) + 'deg)';
      }
    }
    function frame(t) {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.05, (t - (last || t)) / 1000); last = t;
      if (!dragging) {
        const target = (reduce || hovering) ? 0 : AUTO;
        vel += (target - vel) * Math.min(1, dt * 3);   // ease back to drift speed
        off += vel * dt;
      }
      render();
    }
    function start() { if (!raf && inView && !document.hidden) { last = 0; raf = requestAnimationFrame(frame); } }
    function halt() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
    measure(); render();
    window.addEventListener('resize', function () { measure(); render(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { inView = en[0].isIntersecting; if (inView) start(); else halt(); }, { threshold: 0.1 }).observe(grid);
    } else { inView = true; start(); }
    document.addEventListener('visibilitychange', function () { if (document.hidden) halt(); else start(); });
    grid.addEventListener('mouseenter', function () { hovering = true; });
    grid.addEventListener('mouseleave', function () { hovering = false; });

    grid.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true; moved = 0; lastX = e.clientX; lastT = performance.now(); vel = 0;
      grid.classList.add('is-dragging');
      grid._pid = e.pointerId;
    });
    grid.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      const now = performance.now(), dx = e.clientX - lastX;
      moved += Math.abs(dx); off += dx;
      if (moved > 6 && grid._pid !== null) { try { grid.setPointerCapture(grid._pid); } catch (_) {} grid._pid = null; }
      const dtm = Math.max(1, now - lastT);
      vel = 0.6 * vel + 0.4 * (dx / dtm * 1000);
      lastX = e.clientX; lastT = now;
      render();
    });
    function endDrag() {
      if (!dragging) return;
      dragging = false; grid.classList.remove('is-dragging');
      vel = Math.max(-1500, Math.min(1500, vel));
      if (!raf) render();
    }
    grid.addEventListener('pointerup', endDrag);
    grid.addEventListener('pointercancel', endDrag);

    function centerSlot() {
      const half = TOTAL / 2; let best = 0, bd = 1e9;
      slots.forEach(function (el, j) {
        let s = ((j * SP + off + half) % TOTAL + TOTAL) % TOTAL - half;
        if (Math.abs(s) < bd) { bd = Math.abs(s); best = j; }
      });
      return best;
    }
    grid.addEventListener('click', function (e) {
      const c = e.target.closest ? e.target.closest('.ad-card') : null;
      if (!c || moved > 6) return;
      open(Number(c.dataset.i), c);
    });
    const openBtn = document.getElementById('ads-open');
    if (openBtn) openBtn.addEventListener('click', function () {
      const c = slots[centerSlot()]; open(Number(c.dataset.i), openBtn);
    });
    box.querySelector('.ad-lb-close').addEventListener('click', close);
    box.querySelector('.ad-lb-prev').addEventListener('click', function () { show(index - 1); });
    box.querySelector('.ad-lb-next').addEventListener('click', function () { show(index + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(index - 1);
      else if (e.key === 'ArrowRight') show(index + 1);
    });
    box.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', function (e) {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX; startX = null;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    });
  })();
});
