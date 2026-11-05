const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.copy-pix').forEach((button) => {
  button.addEventListener('click', async () => {
    const feedback = button.closest('.pix-copy').querySelector('.pix-feedback');
    try {
      await navigator.clipboard.writeText(button.dataset.pixKey);
      feedback.textContent = 'Chave Pix copiada.';
    } catch (error) {
      feedback.textContent = 'Não foi possível copiar automaticamente. Selecione a chave manualmente.';
    }
  });
});
