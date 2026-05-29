const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navMenu.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    }
  });
}

const accordionButtons = document.querySelectorAll('.accordion-trigger');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    accordionButtons.forEach((otherButton) => {
      const otherPanel = otherButton.nextElementSibling;
      otherButton.setAttribute('aria-expanded', 'false');
      if (otherPanel) {
        otherPanel.hidden = true;
      }
    });

    button.setAttribute('aria-expanded', String(!isExpanded));
    if (panel) {
      panel.hidden = isExpanded;
    }
  });
});

const newsletterForm = document.querySelector('.newsletter');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    newsletterForm.classList.add('is-submitted');
    const button = newsletterForm.querySelector('button');
    if (button) {
      button.textContent = 'Joined';
    }
  });
}
