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
function handleSubmit() {
  // Aqui você pode conectar a um backend ou serviço como Formspree, EmailJS etc.
  // Por enquanto exibe mensagem de sucesso visual
  const btn = document.querySelector('.contact-form .btn-primary');
  const success = document.getElementById('form-success');
  if (success) success.style.display = 'block';
}

/* ── INICIALIZAÇÃO ── */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(observeFades, 200);
});
