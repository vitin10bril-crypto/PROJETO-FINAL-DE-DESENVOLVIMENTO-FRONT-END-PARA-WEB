const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.header')) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);

const filters = document.querySelectorAll('[data-filter]');
const skills = document.querySelectorAll('[data-category]');
filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    let visibleCount = 0;
    skills.forEach((skill) => {
      const visible = button.dataset.filter === 'todos' || skill.dataset.category === button.dataset.filter;
      skill.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    document.querySelector('#filter-status').textContent = `${visibleCount} assuntos exibidos.`;
  });
});

const dialog = document.querySelector('#tabuada-dialog');
const numberInput = document.querySelector('#numero');
const result = document.querySelector('#tabuada-result');

function renderTabuada() {
  const number = Number(numberInput.value);
  if (numberInput.value.trim() === '' || !Number.isInteger(number) || Math.abs(number) > 1000) return;
  const list = document.createElement('ol');
  list.className = 'multiplication-list';
  list.setAttribute('aria-label', `Tabuada do ${number}`);
  for (let multiplier = 1; multiplier <= 10; multiplier += 1) {
    const item = document.createElement('li');
    item.textContent = `${number} × ${multiplier} = ${number * multiplier}`;
    list.append(item);
  }
  result.replaceChildren(list);
}

document.querySelector('#open-tabuada').addEventListener('click', () => {
  renderTabuada();
  dialog.showModal();
  numberInput.focus();
});
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (event.target === dialog && outside) dialog.close();
});
document.querySelector('#tabuada-form').addEventListener('submit', (event) => {
  event.preventDefault();
  renderTabuada();
});
document.querySelector('#year').textContent = new Date().getFullYear();

const sections = document.querySelectorAll('main section[id]');
const navLinks = navigation.querySelectorAll('a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  sections.forEach((section) => observer.observe(section));
}
