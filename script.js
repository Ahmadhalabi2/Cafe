document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (!hamburger || !navLinks) return;

  // Open / Close Navbar
  const closeMenu = () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  };

  hamburger.addEventListener('click', (event) => {
    event.stopPropagation();

    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close when clicking any link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking the menu background
  navLinks.addEventListener('click', (event) => {
    if (event.target === navLinks) {
      closeMenu();
    }
  });

  // Close immediately when scrolling
  window.addEventListener('scroll', () => {
    closeMenu();
  }, { passive: true });

  // Close with Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
});
