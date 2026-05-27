---
name: lead-conversion-suite
description: Use ao projetar/revisar qualquer elemento de conversão — hero, CTAs, landing pages, formulários, fluxos de captura, WhatsApp, integração com CRM, indicadores de confiança, ou qualquer ponto da jornada do usuário no painbras. Combina CRO, landing page, lead gen, form UX, WhatsApp, lead capture, trust-building e arquitetura de jornada. Acione quando o usuário falar em "converter mais", "melhorar formulário", "CTA", "landing page", "trust", "WhatsApp", "lead", "CRM" ou jornada do usuário.
---

# Lead Conversion Suite — painbras

CRO + landing pages + lead gen + form UX + WhatsApp + lead capture + CRM + trust-building + arquitetura de jornada — tudo voltado para indústria B2B premium.

## Princípio central

**Conversão industrial B2B não é volume — é qualificação.** A pergunta nunca é "como pegar mais leads", e sim "como pegar leads que viram orçamento". Um formulário que filtra mal-leads ANTES de entrarem no CRM vale mais que um formulário curto que enche o CRM de lixo.

## Hierarquia de CTAs por temperatura

| Temperatura | CTA | Atrito | Para quem |
|---|---|---|---|
| **Frio** | Baixar catálogo / spec sheet | Email + nome + empresa | Pesquisa inicial |
| **Morno** | Receber caso técnico (segmento X) | + cargo + segmento | Comparando fornecedores |
| **Quente** | Falar com engenheiro / WhatsApp | + telefone + descrição da necessidade | Pronto para cotar |
| **Decisão** | Solicitar visita técnica / cotação | Formulário longo qualificador | Em processo de seleção |

**Regra:** nunca ter só UM CTA na página. Sempre uma escada de compromisso (catálogo → caso → contato).

## Hero — anatomia de conversão

Acima da dobra, em ordem de prioridade vertical:

1. **Headline** com posicionamento específico (ver `[[industrial-copywriting]]`)
2. **Subhead** com qualificação/prova
3. **CTA primário** (alta intenção) + **CTA secundário** (baixo atrito)
4. **Prova social imediata** — logos de 4-6 clientes reconhecíveis OU número-âncora ("+30 anos", "150 clientes ativos", "ISO 9001 desde 2008")
5. **Imagem/vídeo** mostrando operação real

**Tempo para entender:** 5 segundos. Se em 5s o visitante não sabe quem você atende e o que faz, refaça.

## Landing pages — princípios

**Quando criar uma LP separada (não usar home):**
- Campanha paga específica (Google Ads, LinkedIn)
- Segmento muito específico (ex: "Usinagem para Mineração")
- Material rico gated (catálogo, white paper técnico)

**Estrutura de LP industrial de alta conversão:**
1. Hero focado no problema específico do segmento
2. Bullets de capacidade (3-5, com números)
3. Prova social do segmento (logos + 1 case)
4. CTA repetido
5. Especificações técnicas (acordeão ou tabela)
6. Objeções respondidas (FAQ curta)
7. CTA final + alternativa WhatsApp

**Sem menu de navegação completo** em LP de campanha — só logo e CTA. Cada link é uma fuga.

## Formulários — regras de UX e qualificação

### Comprimento por temperatura

- **Frio (download):** 3 campos máximo — nome, email empresarial, empresa.
- **Morno (caso):** + cargo + segmento (dropdown).
- **Quente (contato):** + telefone + descrição livre (textarea) + "como prefere ser contatado" (radio: email/WhatsApp/telefone).
- **Decisão (cotação):** formulário longo OK — quem está pronto preenche; quem não está, sai (qualificação).

### Campos que qualificam (use em formulários médios/longos)

- **Email corporativo obrigatório** (regex que bloqueia gmail/hotmail/yahoo se a estratégia for filtrar)
- **Cargo** (dropdown: Engenharia, Compras, Diretoria, Outros) — segmenta no CRM
- **Porte da empresa** (faixa de funcionários ou faturamento) — qualifica match
- **Segmento** (dropdown dos setores que o painbras atende) — roteia para vendedor certo
- **Urgência** ("Quando precisa?": <30d, 30-90d, 90d+, pesquisando) — prioriza follow-up

### Regras técnicas de form UX

- **Labels acima do input**, sempre. Nunca só placeholder (some ao digitar).
- **Validação em tempo real** ao sair do campo (onBlur), não no submit.
- **Mensagens de erro específicas:** "CNPJ inválido — confira os 14 dígitos" > "Campo inválido"
- **Mascaramento** em CNPJ, telefone, CEP (use `react-hook-form` + máscara).
- **Estado de loading** no botão submit + desabilita botão para prevenir duplo clique.
- **Confirmação clara** após envio: "Recebemos. Engenheiro retorna em até 4h úteis." + próximo passo opcional (baixar catálogo enquanto espera).
- **Não usar reCAPTCHA visível** em forms B2B premium — atrito feio. Use honeypot ou Cloudflare Turnstile invisível.
- **Mobile:** inputs com `inputMode` correto (`numeric` para telefone/CNPJ, `email` para email), `autocomplete` configurado.

### Stack do painbras

Use `react-hook-form` + `zod` para validação. Padrão:

```ts
const schema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("Email inválido").refine(
    (v) => !/@(gmail|hotmail|yahoo|outlook)\./i.test(v),
    "Use seu email corporativo"
  ),
  empresa: z.string().min(2, "Empresa obrigatória"),
  cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "CNPJ inválido"),
});
```

## WhatsApp como canal de conversão

WhatsApp é **o** canal de B2B industrial no Brasil. Não opcional.

**Botão WhatsApp flutuante:**
- Posição: bottom-right, mas **não cobre conteúdo crítico em mobile**
- Aparece após scroll de ~30% ou após 10s na página (não imediato — agressivo demais)
- Ícone oficial WhatsApp, label opcional "Falar com engenheiro" em telas > md
- Link: `https://wa.me/55XXXXXXXXXXX?text=Olá,%20vim%20do%20site%20e%20preciso%20de%20[contexto]`
- **Mensagem pré-preenchida varia por página** — em LP de mineração: "...preciso de usinagem para mineração". Contextualiza.

**Tracking:** dispare evento de analytics no clique. WhatsApp é um dos maiores buracos de atribuição em B2B.

## Trust-building — elementos obrigatórios

Em ordem de impacto:

1. **Logos de clientes reconhecíveis** (com permissão). 4-6 acima da dobra ou seção dedicada. Sem logos = sem confiança.
2. **Números concretos:** anos de operação, número de clientes ativos, projetos entregues, m² de planta, capacidade produtiva.
3. **Certificações com selos visuais reais:** ISO 9001, ASME, NR-13, etc. Selo real, não ícone genérico.
4. **Casos detalhados** com nome do cliente, problema, solução e resultado mensurável.
5. **Foto da planta real** e equipe — não stock. Transmite "existimos fisicamente".
6. **Endereço físico completo + CNPJ no rodapé.** Industrial sem endereço = suspeito.
7. **Pessoas reais** — nome e cargo de quem responde, idealmente com foto.
8. **Tempo de resposta prometido** ("Engenheiro retorna em 4h úteis") + cumprir.

## Jornada do usuário — mapa simplificado

```
Descoberta (Google/LinkedIn/indicação)
  → Home / LP de segmento
    → Lê hero, valida posicionamento
      → Olha logos, valida confiança
        → Explora capacidades / case
          → Baixa material (lead frio) OU sai
            → Recebe email automático com case relacionado
              → Volta semanas depois (cookie/retarget)
                → Solicita contato (lead quente)
                  → WhatsApp/email com engenheiro
                    → Visita técnica / cotação
                      → Fechamento (offline)
```

**Implicações:**
- Site precisa funcionar para visitante voltando — não otimize só para primeira visita.
- Material gated cria touchpoint para nutrição.
- Retargeting (Meta/LinkedIn) faz sentido para quem visitou ≥ 2 vezes.

## Integração com CRM

**Mínimo aceitável:**
- Lead capturado dispara para CRM via webhook/API (RD Station, HubSpot, Pipedrive, ActiveCampaign).
- Source taggeado (LP-mineracao, home-cta-cotacao, whatsapp-flutuante).
- UTMs preservados (utm_source, utm_medium, utm_campaign).
- Notificação para vendedor por email/Slack em leads quentes.

**Ideal:**
- Lead scoring automático (cargo + porte + segmento + temperatura do CTA).
- Roteamento por segmento (lead de mineração → vendedor X).
- Sequência de email automático nos próximos dias com material relacionado.

## Métricas que importam (e que não importam)

**Importam:**
- **MQL → SQL** (lead qualificado → oportunidade real) — taxa real de qualidade
- **Tempo até primeiro contato** (lead enviado → vendedor responde) — meta < 1h útil
- **Custo por SQL** (não por lead)
- **Taxa de download de material técnico** por LP

**Não importam (ou enganam):**
- Tráfego total
- Bounce rate genérico (LPs industriais têm bounce alto e está OK)
- Tempo médio na página (sem segmentação)
- Leads totais sem qualificação

## Anti-patterns

- Pop-up de "saia ganhando 10%" → destrói premium e não é cultura B2B
- Botão "Fale Conosco" levando a formulário com 12 campos → friction máximo logo de cara
- Form sem validação inline → 30% de erro no submit
- Confirmação "Obrigado!" sem próximo passo → desperdiça o momento de maior engajamento
- WhatsApp sem mensagem pré-preenchida → o vendedor não sabe de onde veio
- Não preservar UTMs no envio do lead → atribuição morre
