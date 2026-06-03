export type Projeto = {
  slug: string;
  titulo: string;
  categoria: string;
  resumo: string;
  imagem: string;
  imagemAlt: string;
  destaques: string[];
};

export const PROJETOS: Projeto[] = [
  {
    slug: "painel-bomba-incendio-completo",
    titulo: "Painel de comando para bomba de incêndio",
    categoria: "Sistemas de incêndio",
    resumo:
      "Painel completo com botoeira, sinalização de emergência, voltímetro digital e parada de emergência. Pronto para AVCB.",
    imagem: "/paineis/painel-incendio-vermelho.jpg",
    imagemAlt: "Painel de comando vermelho para bomba de incêndio com sinaleiros e botoeira",
    destaques: [
      "Conformidade NBR 13714",
      "Sinalização luminosa e sonora",
      "Botão de emergência ABNT",
    ],
  },
  {
    slug: "ccm-multicircuito",
    titulo: "CCM com múltiplos circuitos",
    categoria: "Painéis de comando",
    resumo:
      "Centro de controle de motores com seccionadoras, disjuntores e contatores organizados em barramento. Cabeamento identificado.",
    imagem: "/paineis/painel-comando-multicircuito.jpg",
    imagemAlt: "Painel CCM com seccionadoras, disjuntores e contatores em barramento",
    destaques: [
      "Seccionadoras com fusíveis NH",
      "Cabeamento numerado",
      "Layout otimizado para manutenção",
    ],
  },
  {
    slug: "painel-inversor-frequencia",
    titulo: "Painel com inversor de frequência",
    categoria: "Automação industrial",
    resumo:
      "Painel para acionamento controlado com inversor de frequência Metaltex, contatores e proteção termomagnética.",
    imagem: "/paineis/painel-inversor-frequencia.jpg",
    imagemAlt: "Painel com inversor de frequência Metaltex e contatores de proteção",
    destaques: [
      "Inversor Metaltex industrial",
      "Proteção termomagnética",
      "Refrigeração forçada",
    ],
  },
  {
    slug: "painel-comando-bombas",
    titulo: "Comando para múltiplas bombas",
    categoria: "Painéis de comando",
    resumo:
      "Painel para acionamento e proteção de múltiplas bombas com contatores, relés de proteção e sinalização individual por circuito.",
    imagem: "/paineis/painel-comando-bombas.jpg",
    imagemAlt: "Painel de comando aberto mostrando contatores e proteção para múltiplas bombas",
    destaques: [
      "Comando individual por bomba",
      "Proteção classe 10",
      "Sinalização frontal por circuito",
    ],
  },
  {
    slug: "painel-aberto-com-botoeira-externa",
    titulo: "Painel CCM com botoeira externa",
    categoria: "Painéis de comando",
    resumo:
      "Painel CCM com botoeira de comando externa integrada — incluindo controlador de temperatura digital, botoeira verde e emergência.",
    imagem: "/paineis/painel-com-botoeira.jpg",
    imagemAlt: "Painel CCM aberto com botoeira externa, controlador digital e botão de emergência",
    destaques: [
      "Controlador de temperatura",
      "Botoeira ABNT integrada",
      "Emergência classe 1",
    ],
  },
  {
    slug: "painel-bombas-completo",
    titulo: "Painel de operação multi-bombas",
    categoria: "Infraestrutura",
    resumo:
      "Painel completo para operação simultânea de múltiplas bombas, com botoeira de comando, sinalização de status individual e parada de emergência centralizada.",
    imagem: "/paineis/painel-bombas-completo.jpg",
    imagemAlt: "Painel grande com sinaleiros laranja, verde, chaves seletoras e botão de emergência",
    destaques: [
      "Sinalização operacional por bomba",
      "Chaves seletoras individuais",
      "Operação 24/7 supervisionada",
    ],
  },
];
