export type Norma = {
  codigo: string;
  titulo: string;
  descricao: string;
};

export const NORMAS: Norma[] = [
  {
    codigo: "NR-10",
    titulo: "Segurança em instalações elétricas",
    descricao:
      "Todos os projetos com prontuário, laudo de adequação e identificação conforme a norma regulamentadora.",
  },
  {
    codigo: "NR-12",
    titulo: "Segurança em máquinas e equipamentos",
    descricao:
      "Painéis com chaves de bloqueio, intertravamento e categorias de parada de emergência por análise de risco.",
  },
  {
    codigo: "NBR IEC 60439",
    titulo: "Conjuntos de manobra e comando de baixa tensão",
    descricao:
      "Dimensionamento térmico, ensaios de tipo e identificação conforme requisitos da série de normas.",
  },
  {
    codigo: "NBR 5410",
    titulo: "Instalações elétricas de baixa tensão",
    descricao:
      "Projeto integrado com a instalação elétrica predial e industrial conforme requisitos de proteção.",
  },
  {
    codigo: "NBR 13714",
    titulo: "Sistemas de hidrantes e mangotinhos",
    descricao:
      "Painéis de bomba de incêndio com supervisão e partida automática certificáveis para AVCB.",
  },
  {
    codigo: "IEC 61131-3",
    titulo: "Linguagens de programação para CLP",
    descricao:
      "Lógica desenvolvida em Ladder, FBD ou ST conforme padrão de mercado, com documentação e backup entregue.",
  },
];

export type Componente = {
  nome: string;
  categoria: string;
  logo: string;
};

export const COMPONENTES_FABRICANTES: Componente[] = [
  { nome: "WEG", categoria: "Motores, inversores, soft-starters", logo: "/logos/weg.png" },
  { nome: "Metaltex", categoria: "Relés, temporizadores, conectores", logo: "/logos/metaltex.png" },
  { nome: "COEL", categoria: "Controladores e instrumentação", logo: "/logos/coel.png" },
  { nome: "Digimec", categoria: "Chaves, comutadoras, fim de curso", logo: "/logos/digimec.png" },
  { nome: "Clamper", categoria: "Proteção contra surtos (DPS)", logo: "/logos/clamper.png" },
  { nome: "Ascael", categoria: "Componentes elétricos industriais", logo: "/logos/ascael.png" },
  { nome: "Salomão", categoria: "Eletrônica e instrumentação", logo: "/logos/salomao.png" },
];
