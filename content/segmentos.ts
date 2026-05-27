import { Boxes, Layers, Droplets, Building2, type LucideIcon } from "lucide-react";

export type Segmento = {
  slug: string;
  numero: string;
  titulo: string;
  resumo: string;
  dorPrincipal: string;
  aplicacoes: string[];
  Icon: LucideIcon;
};

export const SEGMENTOS: Segmento[] = [
  {
    slug: "plasticos",
    numero: "01",
    titulo: "Plásticos",
    resumo:
      "Acionamento e controle para extrusoras, aglutinadores, picotadores e partidas de canhão em indústrias de processamento de polímeros.",
    dorPrincipal:
      "Parada de extrusora interrompe a linha inteira — cada hora parada custa lote, energia e prazo.",
    aplicacoes: [
      "Partida de canhão e rosca",
      "Controle de zonas de aquecimento",
      "Aglutinadores e picotadores",
      "Sistemas de refrigeração de molde",
    ],
    Icon: Boxes,
  },
  {
    slug: "borracha",
    numero: "02",
    titulo: "Borracha",
    resumo:
      "Painéis para misturadores, banburys, prensas e calandras com controle de aquecimento, temporização e segurança de operação.",
    dorPrincipal:
      "Equipamentos pesados de borracha sofrem com choques de partida — sem partida correta, motor e redutor pagam o preço.",
    aplicacoes: [
      "Misturadores e banburys",
      "Aquecimento de prensas vulcanizadoras",
      "Calandras com inversor",
      "Sistemas de extração e exaustão",
    ],
    Icon: Layers,
  },
  {
    slug: "irrigacao",
    numero: "03",
    titulo: "Irrigação",
    resumo:
      "Painéis para motobombas com partida estrela-triângulo, soft-starter e supervisão de pressão para sistemas de irrigação agrícola e industrial.",
    dorPrincipal:
      "Bomba que não parte em estação crítica é colheita perdida — proteção elétrica e partida correta são seguro de produtividade.",
    aplicacoes: [
      "Motobombas de superfície e submersas",
      "Pivôs centrais e gotejamento",
      "Sistemas de captação e recalque",
      "Automação de fertirrigação",
    ],
    Icon: Droplets,
  },
  {
    slug: "condominios-industriais",
    numero: "04",
    titulo: "Infraestrutura predial e condomínios",
    resumo:
      "Painéis para bombas de recalque com revezamento automático, sistemas de incêndio e iluminação em edifícios comerciais, industriais e condomínios.",
    dorPrincipal:
      "Bomba de recalque sem revezamento queima motor — e sem laudo NR-10 atualizado, AVCB não sai.",
    aplicacoes: [
      "Recalque de água com revezamento automático",
      "Bombas de incêndio conforme NBR 13714",
      "Painéis de TUE/iluminação",
      "Quadros de medição e proteção geral",
    ],
    Icon: Building2,
  },
];
