import {
  CircuitBoard,
  Cpu,
  Wrench,
  Flame,
  type LucideIcon,
} from "lucide-react";

export type Solucao = {
  slug: string;
  numero: string;
  titulo: string;
  descricaoCurta: string;
  descricaoLonga: string;
  bullets: string[];
  normas: string[];
  Icon: LucideIcon;
  imageAlt: string;
};

export const SOLUCOES: Solucao[] = [
  {
    slug: "paineis-de-comando",
    numero: "01",
    titulo: "Painéis de comando e força",
    descricaoCurta:
      "Projeto e montagem de painéis CCM, partidas diretas, estrela-triângulo e soft-starter para acionamento de motores trifásicos críticos.",
    descricaoLonga:
      "Painéis de comando dimensionados conforme carga, ambiente e regime de operação. Cada projeto passa por análise de coordenação seletiva, dimensionamento térmico e ensaio de continuidade antes da entrega.",
    bullets: [
      "Partidas estrela-triângulo para motores acima de 7,5 cv",
      "Painéis CCM com proteção termomagnética e contatores AC-3",
      "Soft-starter para cargas de inércia elevada",
      "Layout interno com canaletas, identificação e prensa-cabos por norma",
    ],
    normas: ["NR-10", "NBR IEC 60439", "NBR 5410"],
    Icon: CircuitBoard,
    imageAlt: "Painel de comando elétrico com contatores e disjuntores organizados",
  },
  {
    slug: "automacao-industrial",
    numero: "02",
    titulo: "Automação industrial",
    descricaoCurta:
      "Painéis com CLP, inversor de frequência e supervisório para controle de processos contínuos em plásticos, borracha e infraestrutura.",
    descricaoLonga:
      "Integramos CLPs Siemens, WEG e Schneider a inversores de frequência e IHMs para automação de extrusoras, misturadores e sistemas de recalque. Programação documentada e backup entregue ao cliente.",
    bullets: [
      "Inversores de frequência WEG CFW e Schneider Altivar",
      "CLPs Siemens S7-1200 / S7-1500 e LOGO!",
      "IHM com telas customizadas por processo",
      "Comunicação Modbus, Profinet e Ethernet/IP",
    ],
    normas: ["IEC 61131-3", "NBR IEC 60204-1", "NR-10"],
    Icon: Cpu,
    imageAlt: "CLP industrial conectado a inversor de frequência em painel automatizado",
  },
  {
    slug: "reformas-e-retrofit",
    numero: "03",
    titulo: "Reforma e retrofit",
    descricaoCurta:
      "Adequação de painéis legados às normas vigentes — substituição de componentes obsoletos, melhoria de seletividade e regularização NR-10.",
    descricaoLonga:
      "Diagnóstico completo de painéis antigos, com laudo técnico de não-conformidades e plano de adequação por fases. Mantemos a operação ativa durante a troca, com paradas programadas mínimas.",
    bullets: [
      "Laudo NR-10 com plano de adequação documentado",
      "Substituição de componentes descontinuados por equivalentes atuais",
      "Atualização de prontuário das instalações elétricas",
      "Migração de tecnologia (relé eletromecânico → CLP, partida direta → soft-starter)",
    ],
    normas: ["NR-10", "NR-12", "NBR 5410"],
    Icon: Wrench,
    imageAlt: "Painel elétrico industrial sendo reformado com componentes novos",
  },
  {
    slug: "sistemas-de-incendio",
    numero: "04",
    titulo: "Sistemas de incêndio",
    descricaoCurta:
      "Painéis para bombas de incêndio conforme NBR 13714, com supervisão de fases, tensão e nível, aprovados pelo Corpo de Bombeiros.",
    descricaoLonga:
      "Projeto, montagem e comissionamento de painéis para bombas de incêndio com partida automática, supervisão contínua e teste semanal programado, conforme requisitos do AVCB.",
    bullets: [
      "Partida automática por queda de pressão",
      "Supervisão de fase, tensão e disjuntor",
      "Sinalização luminosa e sonora conforme norma",
      "Teste semanal programado e registro automático",
    ],
    normas: ["NBR 13714", "IT-22 CBPMESP", "NR-10"],
    Icon: Flame,
    imageAlt: "Painel de comando para bomba de incêndio com sinalização luminosa",
  },
];
