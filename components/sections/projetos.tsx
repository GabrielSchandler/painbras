"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
              eyebrow="Galeria de painéis"
              eyebrowNumber="06"
              size="lg"
              as="h2"
              title={
                <>
                  Painéis que já saíram<br />
                  <span className="text-muted-foreground">da nossa bancada.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed lg:justify-self-end">
              Seleção de painéis montados na nossa oficina — comando, automação,
              incêndio e infraestrutura. Cada projeto é único, mas o padrão de
              execução é sempre o mesmo.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {PROJETOS.map((p) => (
            <RevealItem key={p.slug}>
              <article className="group relative flex h-full flex-col gap-6 bg-surface-elevated p-6 transition-colors duration-500 hover:bg-background md:p-8 lg:gap-8 lg:p-10">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-[hsl(220_14%_97%)]">
                  <Image
                    src={p.imagem}
                    alt={p.imagemAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-3 mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-mono tabular text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {p.categoria}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-medium leading-tight tracking-tight text-foreground md:text-xl">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.resumo}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-x-3 gap-y-1.5 border-t border-border pt-4">
                  {p.destaques.map((d) => (
                    <li
                      key={d}
                      className="font-mono tabular text-[10px] uppercase tracking-[0.12em] text-foreground/70"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-10 md:mt-20 md:flex-row md:items-center">
            <p className="max-w-md text-sm text-muted-foreground md:text-base">
              Tem um projeto com requisitos específicos? Conte qual é a operação —
              respondemos com próximas etapas em até 4h úteis.
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
