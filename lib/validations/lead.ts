import { z } from "zod";

export const leadSchema = z.object({
  nome: z.string().min(2, "Informe seu nome completo").max(120),
  empresa: z.string().min(2, "Informe a empresa").max(120),
  cargo: z.enum(
    ["engenharia", "manutencao", "compras", "diretoria", "outros"],
    { message: "Selecione seu cargo" },
  ),
  email: z
    .string()
    .email("E-mail inválido")
    .refine(
      (v) => !/@(gmail|hotmail|yahoo|outlook|live|icloud)\./i.test(v),
      "Use seu e-mail corporativo",
    ),
  telefone: z
    .string()
    .min(10, "Telefone inválido")
    .max(20)
    .regex(/^[\d\s()\-+]+$/, "Telefone inválido"),
  segmento: z.enum(
    [
      "plasticos",
      "borracha",
      "irrigacao",
      "condominios-industriais",
      "outros",
    ],
    { message: "Selecione um segmento" },
  ),
  servico: z.enum(
    [
      "paineis-de-comando",
      "automacao-industrial",
      "reformas-e-retrofit",
      "sistemas-de-incendio",
      "consultoria",
      "ainda-avaliando",
    ],
    { message: "Selecione o tipo de demanda" },
  ),
  prazo: z.enum(["urgente", "30-90-dias", "90-dias-mais", "pesquisando"], {
    message: "Informe o prazo",
  }),
  mensagem: z
    .string()
    .min(20, "Descreva sua necessidade com pelo menos 20 caracteres")
    .max(2000, "Mensagem muito longa"),
  consent: z.literal(true, {
    message: "É necessário aceitar para envio",
  }),
  // Honeypot — campo deve ficar vazio
  website: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const CARGO_OPTIONS = [
  { value: "engenharia", label: "Engenharia / Projetos" },
  { value: "manutencao", label: "Manutenção / Operação" },
  { value: "compras", label: "Compras / Suprimentos" },
  { value: "diretoria", label: "Diretoria / Gestão" },
  { value: "outros", label: "Outros" },
] as const;

export const SEGMENTO_OPTIONS = [
  { value: "plasticos", label: "Plásticos" },
  { value: "borracha", label: "Borracha" },
  { value: "irrigacao", label: "Irrigação / Agro" },
  { value: "condominios-industriais", label: "Infraestrutura predial" },
  { value: "outros", label: "Outros" },
] as const;

export const SERVICO_OPTIONS = [
  { value: "paineis-de-comando", label: "Painéis de comando e força" },
  { value: "automacao-industrial", label: "Automação industrial" },
  { value: "reformas-e-retrofit", label: "Reforma e retrofit" },
  { value: "sistemas-de-incendio", label: "Sistemas de incêndio" },
  { value: "consultoria", label: "Consultoria / Diagnóstico" },
  { value: "ainda-avaliando", label: "Ainda avaliando" },
] as const;

export const PRAZO_OPTIONS = [
  { value: "urgente", label: "Urgente (até 30 dias)" },
  { value: "30-90-dias", label: "30 a 90 dias" },
  { value: "90-dias-mais", label: "Mais de 90 dias" },
  { value: "pesquisando", label: "Apenas pesquisando" },
] as const;
