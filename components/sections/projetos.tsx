"use client";

import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/primitives/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { PROJETOS } from "@/content/projetos";

export function Projetos() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="relative bg-surface-elevated section-pad-lg"
    >
      <Container size="wide">
        <div className="mb-16 grid gap-12 md:mb-20 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Projetos"
              eyebrowNumber="06"
              size="lg"
              as="h2"
              title={
                <>
                  Casos reais.<br />
                  <span className="text-muted-foreground">Números reais.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed lg:justify-self-end">
              Seleção de projetos entregues. Nomes preservados sob acordo de
              confidencialidade — números e escopo são reais.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {PROJETOS.map((p) => (
            <RevealItem key={p.slug}>
              <article className="group relative flex h-full flex-col gap-8 bg-surface-elevated p-8 transition-colors duration-500 hover:bg-background md:p-10 lg:gap-10 lg:p-12">
                {/* Image placeholder com aspecto cinematográfico */}
                <div className="relative aspect-[5/4] w-full overflow-hidden border border-border bg-[hsl(220_14%_10%)]">
                  <ProjectVisual segmento={p.segmento} />
                </div>

                <div className="flex-1">
                  <p className="font-mono tabular text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {p.segmento}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-medium leading-tight tracking-tight text-foreground md:text-2xl">
                    {p.titulo}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p.resumo}
                  </p>
                </div>

                <dl className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {p.metricas.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        {m.label}
                      </dt>
                      <dd className="mt-1 font-display text-base font-medium tabular text-foreground">
                        {m.valor}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <div className="mt-16 flex items-center justify-between border-t border-border pt-10 md:mt-20">
            <p className="max-w-md text-sm text-muted-foreground md:text-base">
              Tem um projeto similar em vista? Conte qual é a operação — respondemos com
              próximas etapas em até 4h úteis.
            </p>
            <a
              href="/#contato"
              className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
            >
              <span>Iniciar projeto</span>
              <span
                aria-hidden
                className="inline-flex h-9 w-9 items-center justify-center border border-border-strong transition-all duration-500 ease-out-expo group-hover:bg-foreground group-hover:text-background"
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/**
 * Visual placeholder — composição abstrata identificada por segmento.
 * Substituir por <Image> com foto real do projeto.
 */
function ProjectVisual({ segmento }: { segmento: string }) {
  return (
    <div className="relative h-full w-full">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id={`grid-${segmento}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${segmento})`} />
      </svg>

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex items-start justify-between text-[10px] font-mono tabular uppercase tracking-[0.18em] text-white/60">
          <span>PB</span>
          <span>{segmento}</span>
        </div>
        <div className="flex items-end gap-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              style={{ height: `${20 + ((i * 11) % 55)}%` }}
              className="flex-1 bg-white/50"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
