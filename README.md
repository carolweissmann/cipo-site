# CIPO — Guia de Edição do Site

## Estrutura de Pastas

```
cipo/
├── index.html          ← Página inicial (Home)
├── css/
│   └── style.css       ← TODOS os estilos do site
├── js/
│   └── main.js         ← JavaScript (navegação, animações, busca)
├── pages/
│   ├── sobre.html      ← Página "Sobre o CIPO"
│   ├── estudos.html    ← Página "Estudos Clínicos"
│   ├── recrutador.html ← Página "Potencial Recrutador"
│   ├── novidades.html  ← Página "Novidades"
│   └── contato.html    ← Página "Contato"
└── README.md           ← Este arquivo
```

---

## Como abrir localmente

Basta abrir o arquivo `index.html` no navegador (duplo clique).
Para desenvolvimento, use o VS Code com a extensão **Live Server**.

---

## Mudanças Comuns

### Mudar a cor principal (verde-azulado)
Abra `css/style.css` e edite a variável `--teal` em `:root`:
```css
:root {
  --teal: #0D8C78;   /* ← mude este valor */
}
```
Todas as cores do site se atualizam automaticamente.

---

### Adicionar um novo Estudo Clínico
Em `pages/estudos.html`, copie e cole um bloco `.study-card` dentro do `.study-cards` correto:
```html
<div class="study-card">
  <div class="study-name">NOME DO ESTUDO</div>
  <ul class="study-criteria">
    <li>Critério 1</li>
    <li>Critério 2</li>
  </ul>
  <a href="LINK_CLINICAL_TRIALS" class="study-link" target="_blank">
    Acessar no Clinical Trials ↗
  </a>
</div>
```

Para adicionar um **novo tipo de câncer**, copie o bloco `.cancer-type` inteiro e edite o título.

---

### Adicionar um membro à equipe
Em `pages/sobre.html`, dentro da categoria correta (`.team-category`), adicione:
```html
<div class="team-card">
  <div class="team-avatar">XX</div>  <!-- iniciais -->
  <div>
    <div class="team-name">Nome Completo</div>
    <div class="team-role">Cargo</div>
  </div>
</div>
```

---

### Adicionar uma notícia
Em `pages/novidades.html`, dentro de `.news-grid`, copie um `.news-card`:
```html
<div class="news-card">
  <div class="news-thumb">📰</div>  <!-- ou <img src="..." alt="..."> -->
  <div class="news-body">
    <div class="news-date">DD/MM/AAAA</div>
    <div class="news-title">Título da notícia</div>
    <div class="news-excerpt">Resumo da notícia aqui.</div>
  </div>
</div>
```

---

### Usar fotos reais (ao invés de emojis)
Substitua os blocos `.about-img-placeholder` e `.news-thumb` por tags `<img>`:
```html
<img src="../images/foto-hospital.jpg" alt="Hospital" style="width:100%; height:180px; object-fit:cover; border-radius:10px;">
```
Crie uma pasta `images/` dentro de `cipo/` e coloque as fotos lá.

---

### Ativar o formulário de contato (envio real)
Em `pages/contato.html`, use o serviço **Formspree** (gratuito):
1. Crie conta em https://formspree.io
2. Crie um form e copie o ID (ex: `xbjnkpqz`)
3. Substitua o `<button onclick="handleSubmit()">` por:
```html
<form action="https://formspree.io/f/SEU_ID" method="POST">
  <!-- campos aqui -->
  <button type="submit" class="btn-primary">Enviar →</button>
</form>
```

---

### Ativar o Google Maps real
Em `pages/contato.html`, substitua o `.map-placeholder` por:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=COLE_O_EMBED_AQUI"
  width="100%" height="220"
  style="border:0; border-radius:12px; margin-top:24px;"
  allowfullscreen="" loading="lazy">
</iframe>
```
Para obter o embed: Google Maps → compartilhar → "Incorporar um mapa" → copiar o `src`.

---

### Corrigir HTTPS (SSL)
O problema de SSL do site atual é no servidor, não no código.
Para resolver, use o **Let's Encrypt** (gratuito e automático):
- Apache: `sudo certbot --apache`
- Nginx: `sudo certbot --nginx`
- Ou ative HTTPS no painel do seu provedor de hospedagem (cPanel, Hostinger, etc.)

---

## Publicar o site

Para colocar no ar com HTTPS, recomenda-se:
- **Vercel** (gratuito): arraste a pasta `cipo/` em https://vercel.com
- **Netlify** (gratuito): mesmo processo em https://netlify.com
- **Servidor próprio**: copie a pasta para `/var/www/html/` e configure Nginx ou Apache com Let's Encrypt
