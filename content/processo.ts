export type EtapaProcesso = {
  numero: string;
  titulo: string;
  descricao: string;
  entregaveis: string[];
};

export const PROCESSO: EtapaProcesso[] = [
  {
    numero: "01",
    titulo: "Diagnóstico técnico",
    descricao:
      "Visita à planta, levantamento de cargas, análise de regime de operação e mapeamento de não-conformidades. Sem essa etapa, projeto é chute.",
    entregaveis: ["Relatório de cargas", "Memória de cálculo preliminar", "Cronograma proposto"],
  },
  {
    numero: "02",
    titulo: "Projeto elétrico",
    descricao:
      "Diagrama unifilar, multifilar, layout físico do painel e lista de componentes. Cada decisão é justificada na memória técnica.",
    entregaveis: [
      "Diagrama unifilar e multifilar",
      "Layout físico em escala",
      "Lista técnica de componentes",
      "Memória de cálculo final",
    ],
  },
  {
    numero: "03",
    titulo: "Montagem em bancada",
    descricao:
      "Montagem em oficina controlada por engenheiro responsável. Acabamento, identificação e canalização conforme padrão entregue.",
    entregaveis: ["Montagem mecânica", "Cabeamento e identificação", "Documentação de processo"],
  },
  {
    numero: "04",
    titulo: "Ensaio e validação",
    descricao:
      "Protocolo de testes em bancada — continuidade, isolação, sequência de fases, simulação de carga. Não sai sem passar.",
    entregaveis: [
      "Protocolo de ensaio assinado",
      "Laudo de isolação",
      "Registro fotográfico",
    ],
  },
  {
    numero: "05",
    titulo: "Comissionamento",
    descricao:
      "Instalação, energização assistida e partida em campo com sua equipe. Entregamos o painel funcionando, não na caixa.",
    entregaveis: [
      "Energização assistida",
      "Treinamento operacional",
      "As-built e prontuário",
    ],
  },
];
