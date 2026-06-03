export type Projeto = {
  slug: string;
  titulo: string;
  segmento: string;
  resumo: string;
  detalhe: string;
  imagem: string;
  imagemAlt: string;
  metricas: { label: string; valor: string }[];
};

/**
 * Casos anônimos (segmento descrito sem nome do cliente).
 * Substituir por casos reais com nome quando houver autorização.
 */
export const PROJETOS: Projeto[] = [
  {
    slug: "extrusora-pead-300kw",
    titulo: "Painel de comando para extrusora PEAD 300 kW",
    segmento: "Plásticos",
    resumo:
      "Painel CCM para extrusora monorrosca com controle de 5 zonas de aquecimento e partida soft-starter para motor principal.",
    detalhe:
      "Projeto incluiu CLP Siemens S7-1200, IHM 7\", soft-starter WEG SSW900 para partida do canhão e supervisão das temperaturas por termopar tipo K. Operação sem paradas não programadas desde o comissionamento.",
    imagem: "/paineis/painel-comando-multicircuito.jpg",
    imagemAlt: "Painel de comando multicircuito com contatores e disjuntores organizados",
    metricas: [
      { label: "Potência", valor: "300 kW" },
      { label: "Zonas de aquecimento", valor: "5" },
      { label: "Setup time", valor: "−40%" },
    ],
  },
  {
    slug: "banbury-misturador-borracha",
    titulo: "Retrofit de painel de banbury",
    segmento: "Borracha",
    resumo:
      "Substituição de painel eletromecânico legado por CLP com automação de ciclo de mistura e supervisão de temperatura.",
    detalhe:
      "Painel original de 1989 substituído por arquitetura com CLP Schneider M221, inversor Altivar 71 e IHM Magelis. Receitas de mistura digitalizadas com rastreabilidade por batch.",
    imagem: "/paineis/painel-inversor-frequencia.jpg",
    imagemAlt: "Painel com inversor de frequência Metaltex e contatores para retrofit industrial",
    metricas: [
      { label: "Idade do painel original", valor: "30+ anos" },
      { label: "Tempo de retrofit", valor: "12 dias" },
      { label: "Falhas/mês", valor: "−85%" },
    ],
  },
  {
    slug: "irrigacao-pivo-central",
    titulo: "Automação de pivô central — 4 conjuntos",
    segmento: "Irrigação",
    resumo:
      "Painéis de comando para 4 pivôs centrais com partida soft-starter, supervisão de pressão e operação remota.",
    detalhe:
      "Quatro painéis integrados com inversor WEG CFW501, sensores de pressão e nível, e comunicação Modbus para central de supervisão em propriedade rural de 800 hectares.",
    imagem: "/paineis/painel-comando-bombas.jpg",
    imagemAlt: "Painel de comando para múltiplas bombas com contatores e proteção",
    metricas: [
      { label: "Área irrigada", valor: "800 ha" },
      { label: "Conjuntos motobomba", valor: "4" },
      { label: "Operação remota", valor: "Sim" },
    ],
  },
  {
    slug: "incendio-condominio-industrial",
    titulo: "Sistema de incêndio — condomínio logístico",
    segmento: "Infraestrutura",
    resumo:
      "Painel para bomba principal e jockey conforme NBR 13714, com teste semanal automático e supervisão de fases.",
    detalhe:
      "Painel para condomínio logístico de 24.000 m². Bomba principal 75 cv com partida estrela-triângulo, bomba jockey 7,5 cv, supervisão completa e laudo entregue para AVCB.",
    imagem: "/paineis/painel-incendio-aberto.jpg",
    imagemAlt: "Interior de painel elétrico de incêndio mostrando contatores e proteções",
    metricas: [
      { label: "Área protegida", valor: "24.000 m²" },
      { label: "Bomba principal", valor: "75 cv" },
      { label: "AVCB aprovado", valor: "1ª vistoria" },
    ],
  },
  {
    slug: "ccm-industria-quimica",
    titulo: "CCM para indústria química",
    segmento: "Química",
    resumo:
      "Centro de controle de motores com 18 partidas e supervisão integrada ao supervisório existente.",
    detalhe:
      "18 partidas (10 diretas e 8 soft-starters), comunicação Profinet com CLP master Siemens S7-1500 da planta. Projeto com classificação de área conforme zona ambiental específica.",
    imagem: "/paineis/painel-com-botoeira.jpg",
    imagemAlt: "Painel CCM aberto com múltiplos contatores e botoeira de controle",
    metricas: [
      { label: "Partidas", valor: "18" },
      { label: "Soft-starters", valor: "8" },
      { label: "Comissionamento", valor: "6 dias" },
    ],
  },
  {
    slug: "recalque-edificio-comercial",
    titulo: "Recalque com revezamento — edifício comercial",
    segmento: "Infraestrutura",
    resumo:
      "Painel de recalque com 2 bombas em revezamento automático, supervisão de nível e proteção térmica completa.",
    detalhe:
      "Painel para edifício comercial de 28 pavimentos com bombas alternando por horímetro, supervisão de nível por boia eletrônica e proteção motor classe 10.",
    imagem: "/paineis/painel-bombas-completo.jpg",
    imagemAlt: "Painel de comando completo para bombas de recalque com botões e sinaleiros",
    metricas: [
      { label: "Pavimentos", valor: "28" },
      { label: "Bombas em revezamento", valor: "2" },
      { label: "Tempo de instalação", valor: "3 dias" },
    ],
  },
];
