"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/primitives/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { SEGMENTOS } from "@/content/segmentos";
import { cn } from "@/lib/utils";

export function Segmentos() {
  const [active, setActive] = useState(SEGMENTOS[0]?.slug ?? "");
  const current = SEGMENTOS.find((s) => s.slug === active) ?? SEGMENTOS[0];
  if (!current) return null;

  return (
    <section
      id="segmentos"
      aria-labelledby="segmentos-heading"
      className="relative bg-background section-pad-lg"
    >
      <Container size="wide">
        <div className="mb-16 md:mb-20">
          <Reveal>
            <SectionHeading
              eyebrow="Segmentos atendidos"
              eyebrowNumber="05"
              size="lg"
              as="h2"
              title={
                <>
                  Para indústrias onde<br />
                  <span className="text-muted-foreground">parar não é opção.</span>
                </>
              }
              description="Especialização concentrada em quatro segmentos com regimes de operação severos — onde escolher o fornecedor errado se paga em motor queimado e auditoria reprovada."
            />
          </Reveal>
        </div>

        <Reveal>
          <div className="grid gap-px bg-border lg:grid-cols-[1fr_1.5fr]">
            {/* Coluna esquerda — lista de segmentos */}
            <div className="bg-background">
              <ul role="tablist" aria-label="Segmentos atendidos">
                {SEGMENTOS.map((seg) => {
                  const Icon = seg.Icon;
                  const isActive = seg.slug === active;
                  return (
                    <li key={seg.slug} className="border-b border-border last:border-b-0">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`seg-panel-${seg.slug}`}
                        id={`seg-tab-${seg.slug}`}
                        onClick={() => setActive(seg.slug)}
                        onMouseEnter={() => setActive(seg.slug)}
                        className={cn(
                          "group flex w-full items-center justify-between px-6 py-7 text-left transition-colors duration-500 md:px-8 md:py-9 lg:px-10",
                          isActive
                            ? "bg-foreground text-background"
                            : "bg-background text-foreground hover:bg-surface-elevated",
                        )}
                      >
                        <div className="flex items-center gap-6">
                          <span
                            className={cn(
                              "font-mono tabular text-xs uppercase tracking-[0.22em] transition-colors",
                              isActive ? "text-background/60" : "text-muted-foreground",
                            )}
                          >
                            {seg.numero}
                          </span>
                          <span className="font-display text-xl font-medium tracking-tight md:text-2xl">
                            {seg.titulo}
                          </span>
                        </div>
                        <Icon
                          className={cn(
                            "h-5 w-5 transition-colors duration-500",
                            isActive ? "text-accent" : "text-foreground/40",
                          )}
                          strokeWidth={1.25}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Coluna direita — painel ativo */}
            <div
              role="tabpanel"
              id={`seg-panel-${current.slug}`}
              aria-labelledby={`seg-tab-${current.slug}`}
              className="relative flex min-h-[520px] flex-col justify-between bg-surface-elevated p-10 md:p-14 lg:p-16"
              key={current.slug}
            >
              <div className="space-y-10 animate-fade-up">
                <div>
                  <p className="font-mono tabular text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Segmento {current.numero}
                  </p>
                  <h3 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    {current.titulo}
                  </h3>
                </div>

                <p className="max-w-xl text-base leading-relaxed text-foreground/85 text-pretty md:text-lg md:leading-relaxed">
                  {current.resumo}
                </p>

                <blockquote className="relative max-w-xl border-l-2 border-accent pl-6">
                  <p className="text-sm italic text-muted-foreground md:text-base">
                    {current.dorPrincipal}
                  </p>
                </blockquote>

                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    Aplicações típicas
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {current.aplicacoes.map((app) => (
                      <li
                        key={app}
                        className="flex items-start gap-3 text-sm text-foreground/85"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-px w-3 shrink-0 bg-foreground/40"
                        />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/segmentos/${current.slug}`}
                className="group mt-12 inline-flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <span>Ver detalhes de {current.titulo.toLowerCase()}</span>
                <span
                  aria-hidden
                  className="inline-flex h-8 w-8 items-center justify-center border border-border-strong transition-all duration-500 ease-out-expo group-hover:bg-foreground group-hover:text-background"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
