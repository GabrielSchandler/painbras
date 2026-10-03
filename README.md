# Pain Bras — site

Página única de vendas para a Pain Bras (painéis elétricos industriais), com foco em levar o visitante para o WhatsApp.

- Site estático: `index.html`, `assets/css/style.css`, `assets/js/main.js`. Sem build e sem dependências.
- Para ver: abrir `index.html` no navegador, ou rodar `python -m http.server` nesta pasta.
- Conteúdo, fotos, logo, marcas e catálogo vieram do site atual do cliente (painbras.com) e do catálogo em PDF.
- Número do WhatsApp e mensagem padrão: topo de `assets/js/main.js`. Cada botão pode ter sua própria mensagem em `data-wa="..."`.
- Fundos opcionais gerados por IA: ver `PROMPTS-IMAGENS.md`.

Repositório: github.com/GabrielSchandler/painbras. A branch `main` publica sozinha em https://painbras.vercel.app (Vercel).
O site antigo (Next.js) está guardado na branch `site-antigo-nextjs`.
