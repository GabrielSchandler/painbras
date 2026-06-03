/**
 * Dados institucionais centralizados.
 * Placeholders {{ }} devem ser substituídos antes do deploy.
 */
export const COMPANY = {
  legalName: "Pain Bras Painéis Elétricos Industriais",
  shortName: "Pain Bras",
  tagline: "Painéis elétricos industriais sob medida",
  description:
    "Projetamos, montamos e comissionamos painéis elétricos industriais para indústrias que não podem parar — plásticos, borracha, irrigação e infraestrutura.",
  foundedYear: "{{ANO_FUNDACAO}}", // ex: "2008"
  yearsInMarket: "{{ANOS_DE_MERCADO}}", // ex: "+15"
  panelsPerYear: "{{PAINEIS_ANO}}", // ex: "+500"
  activeClients: "{{CLIENTES_ATIVOS}}", // ex: "+120"
  industriesServed: "+30", // baseado nos segmentos
  cnpj: "{{CNPJ}}",
  ie: "{{IE}}",

  address: {
    street: "R. Irmã Clotilde, 195",
    neighborhood: "Vila Formosa",
    city: "São Paulo",
    state: "SP",
    zip: "03365-060",
    country: "BR",
    mapsUrl: "https://maps.google.com/?q=R.+Irmã+Clotilde,+195+-+Vila+Formosa+-+SP",
  },

  contact: {
    phone: "1123663815",
    phoneDisplay: "(11) 2366-3815",
    whatsapp: "5511964807702",
    whatsappDisplay: "(11) 96480-7702",
    email: "comercial@painbras.com.br", // sugerido — substituir o gmail
    legacyEmail: "painbras@gmail.com",
  },

  social: {
    instagram: "https://instagram.com/pain.bras",
    instagramHandle: "@pain.bras",
    linkedin: "{{LINKEDIN_URL}}",
  },

  hours: {
    weekdays: "Seg–Sex • 08h–18h",
    saturday: "Sáb • 08h–12h",
    sla: "Resposta técnica em até 4h úteis",
  },
} as const;

export const SITE = {
  name: "Pain Bras",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.painbras.com.br",
  locale: "pt_BR",
  defaultMetaTitle: "Pain Bras — Painéis elétricos industriais sob medida",
  defaultMetaDescription:
    "Projetamos, montamos e comissionamos painéis elétricos industriais sob medida para indústrias que não podem parar. Plásticos, borracha, irrigação e infraestrutura.",
} as const;

export const NAV = [
  { label: "Processo", href: "/#processo" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Segmentos", href: "/#segmentos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Conformidade", href: "/#conformidade" },
  { label: "Contato", href: "/#contato" },
] as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, vim pelo site da Pain Bras e gostaria de falar sobre um projeto de painel elétrico.";
