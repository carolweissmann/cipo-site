# CIPO — Centro Integrado de Pesquisa em Oncologia

Este é o repositório do site oficial do CIPO. O site foi desenvolvido com foco em performance, acessibilidade e organização modular.

## 📂 Estrutura de Pastas

```
cipo/
├── index.html          # Página inicial (Home)
├── css/                # Estilos modularizados
│   ├── variables.css   # Cores e variáveis globais
│   ├── global.css      # Estilos compartilhados (Navbar, Footer, Botões)
│   ├── home.css        # Estilos específicos da Home
│   ├── about.css       # Estilos da página "Sobre o CIPO"
│   ├── studies.css     # Estilos da página "Estudos Clínicos"
│   ├── recruiter.css   # Estilos da página "Potencial Recrutador"
│   ├── news.css        # Estilos da página "Novidades"
│   └── contact.css     # Estilos da página "Contato"
├── js/
│   └── main.js         # Lógica de navegação e animações
├── imagens/            # Logos e fotografias do centro
└── pages/              # Subpáginas do site
    ├── sobre.html
    ├── estudos.html
    ├── recrutador.html
    ├── novidades.html
    └── contato.html
```

## 🚀 Como abrir o projeto

1. Basta abrir o arquivo `index.html` em qualquer navegador.
2. Para uma experiência de desenvolvimento melhor, utilize a extensão **Live Server** no VS Code.

## 🛠 Guia de Edição

### Alterar Cores
As cores principais estão centralizadas em `css/variables.css`. Para mudar o verde-azulado padrão, altere a variável `--teal`.

### Editar Estilos de uma Página
Cada página possui seu próprio arquivo CSS dentro da pasta `css/`. 
- Exemplo: Para mudar o layout da equipe, edite `css/about.css`.

### Adicionar Membros da Equipe
Em `pages/sobre.html`, localize a seção `.team-grid` e adicione um novo bloco `.team-card`.

---
© 2026 CIPO | Desenvolvido com foco em excelência científica.
