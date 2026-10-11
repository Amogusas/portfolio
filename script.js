/* ==========================================================================
   Personal portfolio — script.js
   Small, dependency-free enhancements:
   1. Mobile navigation (accessible toggle)
   2. Reveal-on-scroll animations (skipped for reduced motion)
   3. Current year in the footer
   ========================================================================== */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ---------- 1. Mobile navigation ---------- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  function closeMenu() {
    if (!header || !toggle) return;
    header.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  function openMenu() {
    if (!header || !toggle) return;
    header.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  if (header && toggle && nav) {
    toggle.addEventListener('click', function () {
      if (header.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close after tapping a link.
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu();
    });

    // Close with Escape and return focus to the toggle.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && header.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    // Reset the menu if the viewport grows to the desktop layout.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  /* ---------- 2. Reveal on scroll ---------- */
  var revealItems = document.querySelectorAll('[data-reveal]');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );

    revealItems.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- 3. Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
