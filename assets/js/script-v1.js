// Clodia International FZE - main.js
(function () {
  'use strict';

  // Nav toggle (mobile)
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    // close on link tap
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Active nav link based on current path
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Scroll reveal via IntersectionObserver
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form handler (Netlify Forms)
  const form = document.querySelector('form[data-form="contact"]');
  if (form) {
    form.addEventListener('submit', function (e) {
      // Netlify handles submission; no JS interception needed for native forms.
      // This block adds a pending state for UX.
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
    });
  }

  // Current year in footer
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

})();
