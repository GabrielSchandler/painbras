import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/primitives/reveal";
import { COMPONENTES_FABRICANTES } from "@/content/conformidade";

export function Componentes() {
  return (
    <section
      aria-labelledby="componentes-heading"
      className="relative border-y border-border bg-surface-elevated py-20 md:py-24"
    >
      <Container size="wide">
        <Reveal>
          <div className="mb-14 grid gap-10 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
            <div className="max-w-md">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Componentes que usamos
              </p>
              <h2
                id="componentes-heading"
                className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight text-foreground md:text-3xl"
              >
                Componentes de fabricantes consolidados,{" "}
                <span className="text-muted-foreground">montagem nossa.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base md:justify-self-end">
              Trabalhamos com linhas que têm peças de reposição garantidas no mercado
              brasileiro e suporte técnico de fábrica.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {COMPONENTES_FABRICANTES.map((c) => (
            <RevealItem key={c.nome}>
              <div className="group flex h-full flex-col items-center justify-center gap-3 bg-surface-elevated px-4 py-8 transition-colors duration-500 hover:bg-background">
                <div className="relative h-14 w-full">
                  <Image
                    src={c.logo}
                    alt={`${c.nome} — fabricante de componentes elétricos`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 14vw"
                    className="object-contain opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <p className="mt-2 text-center text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {c.categoria}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
