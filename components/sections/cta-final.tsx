"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/primitives/reveal";
import { Button } from "@/components/ui/button";

export function CtaFinal() {
  return (
    <section
      aria-label="Próximo passo"
      className="relative overflow-hidden bg-foreground py-24 text-background md:py-32"
    >
      <Container size="wide">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-24">
            <div>
              <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-background/60">
                <span aria-hidden className="h-px w-10 bg-background/40" />
                Próxima etapa
              </span>
              <h2 className="mt-8 font-display text-4xl font-medium leading-[1.02] tracking-tight text-background text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                Sua planta merece projeto.<br />
                <span className="text-background/55">Não improviso.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="max-w-md text-base leading-relaxed text-background/70 md:text-lg md:leading-relaxed">
                Conte qual é a operação — diagnóstico técnico em até 4h úteis, sem
                compromisso de orçamento.
              </p>
              <Button asChild variant="accent" size="lg" className="mt-2">
                <Link href="/#contato">
                  Solicitar diagnóstico
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
