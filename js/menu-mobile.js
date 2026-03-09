const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const navLinks = document.querySelectorAll('.nav-link');

if (menuToggle && navMenu && menuOverlay) {
  const closeMenu = () => {
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.textContent = '☰';
  };

  const openMenu = () => {
    body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Fechar menu');
    menuToggle.textContent = '✕';
  };

  const toggleMenu = () => {
    if (body.classList.contains('menu-open')) {
      closeMenu();
      return;
    }
    openMenu();
  };

  menuToggle.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && body.classList.contains('menu-open')) {
      closeMenu();
    }
  });
}
