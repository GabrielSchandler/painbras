"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/primitives/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { SOLUCOES } from "@/content/solucoes";

export function Solucoes() {
  return (
    <section
      id="solucoes"
      aria-labelledby="solucoes-heading"
      className="relative bg-background section-pad-lg"
    >
      <Container size="wide">
        <div className="mb-16 grid gap-12 md:mb-20 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Soluções"
              eyebrowNumber="04"
              size="lg"
              as="h2"
              title={
                <>
                  Quatro categorias.<br />
                  <span className="text-muted-foreground">Uma única bancada.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed lg:justify-self-end">
              Cada categoria é dimensionada para um regime de operação específico —
              das partidas controladas a sistemas de incêndio certificados.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid gap-px bg-border md:grid-cols-2">
          {SOLUCOES.map((sol) => {
            const Icon = sol.Icon;
            return (
              <RevealItem key={sol.slug} className="relative">
                <Link
                  href={`/solucoes/${sol.slug}`}
                  className="group relative flex flex-col gap-8 bg-background p-8 transition-colors duration-500 hover:bg-surface-elevated md:p-12 lg:gap-12 lg:p-14"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono tabular text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      [ {sol.numero} ]
                    </span>
                    <Icon className="h-7 w-7 text-foreground/70 transition-colors duration-500 group-hover:text-accent" strokeWidth={1.25} />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-medium leading-tight tracking-tight text-foreground md:text-3xl lg:text-[2rem]">
                      {sol.titulo}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
                      {sol.descricaoCurta}
                    </p>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-6">
                    <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/70">
                      {sol.normas.map((n) => (
                        <li key={n} className="font-mono tabular">
                          {n}
                        </li>
                      ))}
                    </ul>
                    <span
                      aria-hidden
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border-strong text-foreground transition-all duration-500 ease-out-expo group-hover:bg-foreground group-hover:text-background"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
