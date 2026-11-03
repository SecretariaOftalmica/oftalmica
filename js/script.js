(() => {
  'use strict';
  const header = document.querySelector('#site-header');
  const toggle = document.querySelector('#menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const navLinks = document.querySelectorAll('.desktop-nav a');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // La web es usable sin JavaScript; estos detalles mejoran la experiencia.
  document.documentElement.classList.add('js-enabled');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.inert = !open;
    document.body.classList.toggle('menu-open', open);
  }
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) setMenu(false);
  });
  window.matchMedia('(min-width: 1081px)').addEventListener('change', event => {
    if (event.matches) setMenu(false);
  });

  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, {passive: true});

  // Apariciones discretas; sin animaciones en dispositivos con movimiento reducido.
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {rootMargin: '0px 0px 40px 0px', threshold: 0.06});
    reveals.forEach(item => revealObserver.observe(item));
  } else {
    reveals.forEach(item => item.classList.add('is-visible'));
  }

  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const activeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current','location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-25% 0px -60% 0px', threshold: 0});
    sections.forEach(section => activeObserver.observe(section));
  }

  // Evita que el menú quede abierto si se rota el dispositivo o cambia la ventana.
  window.addEventListener('pageshow', () => {
    if (window.innerWidth > 1080 && toggle.getAttribute('aria-expanded') === 'true') setMenu(false);
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
