import {
  ShieldCheck,
  ClipboardCheck,
  Gauge,
  Headset,
  Hammer,
  FileBadge2,
  type LucideIcon,
} from "lucide-react";

export type Diferencial = {
  numero: string;
  titulo: string;
  descricao: string;
  Icon: LucideIcon;
};

export const DIFERENCIAIS: Diferencial[] = [
  {
    numero: "01",
    titulo: "Projeto antes da montagem",
    descricao:
      "Cada painel começa em diagrama unifilar, ferramental, lista de componentes e simulação térmica. Quando o ferro chega na bancada, não há mais decisão para tomar.",
    Icon: ClipboardCheck,
  },
  {
    numero: "02",
    titulo: "Componentes de fabricantes consolidados",
    descricao:
      "Trabalhamos com WEG, Metaltex, COEL, Clamper e outras linhas com peças de reposição garantidas. Sem genéricos sem suporte técnico.",
    Icon: ShieldCheck,
  },
  {
    numero: "03",
    titulo: "Ensaio em bancada antes da entrega",
    descricao:
      "Continuidade, isolação, sequência de fases e simulação de carga. O painel só sai da nossa oficina depois de passar no protocolo.",
    Icon: Gauge,
  },
  {
    numero: "04",
    titulo: "Conformidade NR-10 documentada",
    descricao:
      "Diagrama as-built, prontuário e laudo técnico entregues com cada projeto. Adequação direta para auditorias internas e fiscalização.",
    Icon: FileBadge2,
  },
  {
    numero: "05",
    titulo: "Suporte técnico contínuo",
    descricao:
      "Cliente atendido pelo responsável técnico — não por SAC genérico. Resposta em até 4h úteis.",
    Icon: Headset,
  },
  {
    numero: "06",
    titulo: "Retrofit sem parar a planta",
    descricao:
      "Plano de adequação por fases com paradas programadas mínimas. Mantemos a operação ativa durante a modernização.",
    Icon: Hammer,
  },
];
