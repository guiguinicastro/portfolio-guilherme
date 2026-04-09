/* ============================================================
   GUILHERME NICASTRO — PORTFOLIO
   script.js
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ─── NAVBAR: sombra ao rolar ─── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    highlightActiveSection();
  });

  /* ─── MENU MOBILE ─── */
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');

  navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });

  document.querySelectorAll('.nav-mob-link').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navMobile.contains(e.target) && !navToggle.contains(e.target)) {
      navMobile.classList.remove('open');
    }
  });

  /* ─── LINK ATIVO NA NAVBAR AO ROLAR ─── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function highlightActiveSection() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current
        ? 'var(--blue-700)'
        : '';
    });
  }

  /* ─── REVEAL ON SCROLL ─── */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

});