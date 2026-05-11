// ===========================
// script.js — Stanley Portfolio
// ===========================

// ── Mobile navigation ──
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

function setMobileNavOpen(open) {
  if (!navToggle || !mobileMenu) return;
  navToggle.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('mobile-nav-open', open);
}

navToggle?.addEventListener('click', () => {
  const next = !mobileMenu.classList.contains('is-open');
  setMobileNavOpen(next);
});

mobileMenu?.querySelectorAll('a').forEach((anchor) => {
  anchor.addEventListener('click', () => setMobileNavOpen(false));
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 768px)').matches) setMobileNavOpen(false);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMobileNavOpen(false);
});

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ── Active nav link highlight on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#00d4ff';
    }
  });
});