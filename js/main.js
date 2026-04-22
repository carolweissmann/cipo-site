/* ============================================================
   CIPO — JavaScript Principal
   ============================================================ */

/* ── NAVEGAÇÃO ENTRE PÁGINAS ── */
function showPage(id) {
  // Esconde todas as páginas
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Remove "active" de todos os links do menu
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  // Mostra a página escolhida
  document.getElementById('page-' + id).classList.add('active');

  // Marca o link correto no menu
  const navLink = document.getElementById('nav-' + id);
  if (navLink) navLink.classList.add('active');

  // Rola para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Dispara animações de fade-in
  setTimeout(observeFades, 100);
}

/* ── EFEITO SOMBRA NA NAVBAR AO ROLAR ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
  observeFades();
});

/* ── ANIMAÇÕES FADE-IN AO ENTRAR NA TELA ── */
function observeFades() {
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

/* ── BUSCA NOS ESTUDOS CLÍNICOS ── */
// Filtra os blocos de estudos conforme o usuário digita
function filterStudies() {
  const query = document.getElementById('search-input').value.toLowerCase();
  document.querySelectorAll('.cancer-type').forEach(block => {
    const text = block.textContent.toLowerCase();
    block.style.display = text.includes(query) ? '' : 'none';
  });
}

/* ── FORMULÁRIO DE CONTATO ── */
function handleSubmit(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const success = document.getElementById('form-success');
  const form = document.getElementById('contact-form');

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) throw new Error('Erro ao enviar.');
      success.style.display = 'block';
      success.textContent = '✓ Mensagem enviada com sucesso! Retornaremos em breve.';
      form.reset();
    })
    .catch(() => {
      alert('Ocorreu um erro ao enviar. Tente novamente em alguns instantes.');
    });
}

/* ── MENU MOBILE ── */
function setupMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpened = toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    document.body.style.overflow = isOpened ? 'hidden' : '';
  });

  // Fecha o menu ao clicar em um link ou no overlay
  const closeElements = [overlay, ...navLinks.querySelectorAll('a')];
  closeElements.forEach(el => {
    if (!el) return;
    el.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ── INICIALIZAÇÃO ── */
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setTimeout(observeFades, 200);

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
  }
});
