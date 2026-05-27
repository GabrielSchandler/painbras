# Pain Bras — Site institucional premium

Site institucional industrial B2B premium para a Pain Bras, especializada em painéis elétricos industriais.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui style · Framer Motion · Lenis · React Hook Form · Zod

---

## Primeiros passos

```bash
# 1. Instalar dependências
npm install

# 2. Copiar variáveis de ambiente
cp .env.example .env.local

# 3. Editar .env.local com os valores reais (URL, WhatsApp, GA, webhook)

# 4. Rodar em desenvolvimento
npm run dev

# 5. Build de produção
npm run build && npm run start
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## Estrutura

```
app/                      App Router
  api/leads/route.ts      Recebe form de contato
  solucoes/[slug]/        Páginas das 4 soluções
  segmentos/[slug]/       Páginas dos 4 segmentos
  contato/                Página de contato standalone
  globals.css             Tokens CSS (cores, fontes, motion)
  layout.tsx              Root layout + fonts + schema JSON-LD
  page.tsx                Home single-page

components/
  ui/                     Primitives (Button, Input, Select, Container, etc.)
  layout/                 Nav, Footer, WhatsApp FAB
  primitives/             Eyebrow, SectionHeading, Reveal (motion)
  providers/              LenisProvider
  sections/               11 seções da home
  forms/                  LeadForm (qualificador com Zod)

content/                  Dados estruturados das seções (solucoes, segmentos, etc.)
lib/                      utils, constants, validations, schema JSON-LD
```

---

## Placeholders a substituir

Antes de subir para produção, substituir em [lib/constants.ts](lib/constants.ts):

| Placeholder | Onde |
|---|---|
| `{{ANO_FUNDACAO}}` | Ano em que a Pain Bras foi fundada |
| `{{ANOS_DE_MERCADO}}` | Ex: `"+15"` |
| `{{PAINEIS_ANO}}` | Ex: `"+500"` |
| `{{CLIENTES_ATIVOS}}` | Ex: `"+120"` |
| `{{CNPJ}}` | CNPJ da empresa |
| `{{IE}}` | Inscrição estadual |
| `{{LINKEDIN_URL}}` | URL do LinkedIn |

Também:
- `lib/constants.ts` → `contact.email`: trocar `comercial@painbras.com.br` pelo e-mail corporativo real
- `public/brand/logo.svg`: adicionar logo vetorial
- `public/og/default.jpg`: adicionar imagem OG fallback (1200x630)
- `public/favicon.ico`: adicionar favicon

---

## Conteúdo editorial — onde editar

| Seção | Arquivo |
|---|---|
| Soluções (4) | [content/solucoes.ts](content/solucoes.ts) |
| Segmentos (4) | [content/segmentos.ts](content/segmentos.ts) |
| Diferenciais (6) | [content/diferenciais.ts](content/diferenciais.ts) |
| Processo (5 etapas) | [content/processo.ts](content/processo.ts) |
| Normas e fabricantes | [content/conformidade.ts](content/conformidade.ts) |
| Projetos (galeria) | [content/projetos.ts](content/projetos.ts) |

---

## Variáveis de ambiente

```env
NEXT_PUBLIC_SITE_URL=https://www.painbras.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5511964807702
NEXT_PUBLIC_GA_ID=                          # opcional, GA4
LEAD_WEBHOOK_URL=                           # webhook CRM (RD Station / HubSpot / Pipedrive)
LEAD_NOTIFY_EMAIL=                          # email para notificar leads (futuro)
```

---

## Deploy

Recomendado: **Vercel** (hosting nativo Next.js). Conectar o repositório, configurar env vars no painel, deploy automático.

Antes do go-live:
- [ ] Substituir todos os placeholders `{{}}` em `lib/constants.ts`
- [ ] Adicionar imagens reais (`public/brand/logo.svg`, `public/og/default.jpg`, fotos de painéis)
- [ ] Trocar `painbras@gmail.com` pelo e-mail corporativo `@painbras.com.br`
- [ ] Configurar `LEAD_WEBHOOK_URL` apontando para o CRM
- [ ] Testar formulário ponta-a-ponta
- [ ] Rodar Lighthouse (alvo: 95+ em todas categorias)
- [ ] Configurar Google Search Console + Analytics
- [ ] Verificar OG image gerada em [https://www.opengraph.xyz](https://www.opengraph.xyz)

---

## Próximos passos sugeridos

1. **Fotografia real** — sessão na oficina (macros de painéis, equipe, processo). Substitui os placeholders visuais nos componentes `<HeroVisual />` e `<ProjectVisual />`.
2. **Cases reais** — substituir projetos anônimos em [content/projetos.ts](content/projetos.ts) por casos com nome de cliente (com autorização).
3. **Logos de clientes** — adicionar seção de prova social quando houver autorização de uso.
4. **Blog técnico** — para SEO de cauda longa em queries como "painel de comando para extrusora", "retrofit NR-10", etc.
5. **Catálogo gated PDF** — capturar lead frio com material técnico em troca de email corporativo.

---

## Decisões arquiteturais

- **App Router** com Server Components por padrão. Client Components apenas onde há estado/interação (formulário, nav, FAB).
- **Tokens em CSS variables** (HSL com alpha-value) → permite manipulação programática e modo dark futuro sem refactor.
- **Tipografia editorial** — Inter Tight (display) + Inter (body) + JetBrains Mono (specs técnicas). Self-host via `next/font`.
- **Motion** — Framer Motion com easings `[0.16, 1, 0.3, 1]` em todas as entradas. Stagger curto (60-80ms). `prefers-reduced-motion` respeitado.
- **Smooth scroll** — Lenis ativado apenas em desktop (touch usa scroll nativo do sistema).
- **Validação** — Zod do client ao server (mesmo schema em ambos os lados).
- **SEO** — metadata API + JSON-LD (Organization, LocalBusiness, Service, BreadcrumbList) + sitemap dinâmico + robots.txt + OG image gerada via `next/og`.
- **Acessibilidade** — semantic HTML, skip link, focus visível, ARIA correto, hierarquia de headings, reduce motion.
