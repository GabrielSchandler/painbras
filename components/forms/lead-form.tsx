"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CARGO_OPTIONS,
  leadSchema,
  PRAZO_OPTIONS,
  SEGMENTO_OPTIONS,
  SERVICO_OPTIONS,
  type LeadInput,
} from "@/lib/validations/lead";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { consent: true as never, website: "" },
  });

  const cargo = watch("cargo");
  const segmento = watch("segmento");
  const servico = watch("servico");
  const prazo = watch("prazo");

  async function onSubmit(data: LeadInput) {
    setStatus("submitting");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          utm: typeof window !== "undefined" ? window.location.search : "",
          referrer: typeof document !== "undefined" ? document.referrer : "",
        }),
      });
      if (!response.ok) throw new Error("Network");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border bg-surface p-10 md:p-14">
        <div className="flex items-start gap-5">
          <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-success" strokeWidth={1.5} />
          <div>
            <h3 className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              Recebemos sua solicitação.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Nosso responsável técnico retorna em até <strong>4h úteis</strong> com
              próximas etapas. Se for urgente, fale agora pelo WhatsApp.
            </p>
            <Button
              variant="outline"
              size="md"
              className="mt-8"
              onClick={() => setStatus("idle")}
            >
              Enviar outra solicitação
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-10"
      aria-label="Formulário de contato técnico"
    >
      {/* Honeypot anti-spam */}
      <div className="sr-only" aria-hidden>
        <label htmlFor="website">Não preencher</label>
        <input
          type="text"
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {/* Bloco 1 — Identificação */}
      <fieldset className="space-y-8">
        <legend className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          [ 01 ] Identificação
        </legend>
        <div className="grid gap-8 md:grid-cols-2 md:gap-x-12">
          <Field
            label="Nome completo"
            id="nome"
            error={errors.nome?.message}
          >
            <Input
              id="nome"
              autoComplete="name"
              aria-invalid={!!errors.nome}
              {...register("nome")}
            />
          </Field>
          <Field
            label="Empresa"
            id="empresa"
            error={errors.empresa?.message}
          >
            <Input
              id="empresa"
              autoComplete="organization"
              aria-invalid={!!errors.empresa}
              {...register("empresa")}
            />
          </Field>
          <Field
            label="E-mail corporativo"
            id="email"
            error={errors.email?.message}
            hint="Use o e-mail da empresa para resposta prioritária."
          >
            <Input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
          </Field>
          <Field
            label="Telefone / WhatsApp"
            id="telefone"
            error={errors.telefone?.message}
          >
            <Input
              id="telefone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(11) 9 9999-9999"
              aria-invalid={!!errors.telefone}
              {...register("telefone")}
            />
          </Field>
          <Field
            label="Cargo / Área"
            id="cargo"
            error={errors.cargo?.message}
            full
          >
            <Select
              value={cargo}
              onValueChange={(v) =>
                setValue("cargo", v as LeadInput["cargo"], { shouldValidate: true })
              }
            >
              <SelectTrigger id="cargo" aria-invalid={!!errors.cargo}>
                <SelectValue placeholder="Selecione sua área" />
              </SelectTrigger>
              <SelectContent>
                {CARGO_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>
      </fieldset>

      {/* Bloco 2 — Projeto */}
      <fieldset className="space-y-8 border-t border-border pt-10">
        <legend className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          [ 02 ] Projeto
        </legend>
        <div className="grid gap-8 md:grid-cols-2 md:gap-x-12">
          <Field label="Segmento de atuação" id="segmento" error={errors.segmento?.message}>
            <Select
              value={segmento}
              onValueChange={(v) =>
                setValue("segmento", v as LeadInput["segmento"], { shouldValidate: true })
              }
            >
              <SelectTrigger id="segmento" aria-invalid={!!errors.segmento}>
                <SelectValue placeholder="Selecione o segmento" />
              </SelectTrigger>
              <SelectContent>
                {SEGMENTO_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field label="Tipo de demanda" id="servico" error={errors.servico?.message}>
            <Select
              value={servico}
              onValueChange={(v) =>
                setValue("servico", v as LeadInput["servico"], { shouldValidate: true })
              }
            >
              <SelectTrigger id="servico" aria-invalid={!!errors.servico}>
                <SelectValue placeholder="Selecione a demanda" />
              </SelectTrigger>
              <SelectContent>
                {SERVICO_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field
            label="Prazo previsto"
            id="prazo"
            error={errors.prazo?.message}
            full
          >
            <Select
              value={prazo}
              onValueChange={(v) =>
                setValue("prazo", v as LeadInput["prazo"], { shouldValidate: true })
              }
            >
              <SelectTrigger id="prazo" aria-invalid={!!errors.prazo}>
                <SelectValue placeholder="Quando precisa?" />
              </SelectTrigger>
              <SelectContent>
                {PRAZO_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field
            label="Descrição da necessidade"
            id="mensagem"
            error={errors.mensagem?.message}
            hint="Quanto mais técnico, mais preciso o retorno (cargas, motores, normas exigidas, contexto)."
            full
          >
            <Textarea
              id="mensagem"
              rows={5}
              aria-invalid={!!errors.mensagem}
              {...register("mensagem")}
            />
          </Field>
        </div>
      </fieldset>

      {/* Submit */}
      <div className="flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs text-muted-foreground">
          Ao enviar, você concorda com o uso dos dados para retorno técnico. Não enviamos
          spam, newsletter, nem repassamos contatos.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="self-start sm:self-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              Solicitar diagnóstico
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </>
          )}
        </Button>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          Não conseguimos enviar agora. Tente novamente ou nos chame pelo WhatsApp.
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  full,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("space-y-2", full && "md:col-span-2")}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
