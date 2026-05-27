import { Container } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/primitives/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { DIFERENCIAIS } from "@/content/diferenciais";

export function Diferenciais() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-heading"
      className="relative bg-surface-inverted text-background section-pad-lg"
    >
      <Container size="wide">
        <div className="mb-20 grid gap-12 md:mb-24 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-background/60">
                <span aria-hidden className="h-px w-10 bg-background/40" />
                <span>Diferenciais</span>
              </span>
              <h2 className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-tight text-background text-balance sm:text-5xl md:text-6xl">
                Por que indústrias <br />
                <span className="text-background/55">repetem com a gente.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-xl text-lg leading-relaxed text-background/70 text-pretty md:text-xl md:leading-relaxed">
              Painel elétrico industrial é um produto de longo prazo. A diferença entre
              um fornecedor barato e um especialista aparece no terceiro ano — quando
              um precisa de retrabalho e o outro continua operando.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid gap-px bg-background/10 md:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((d) => {
            const Icon = d.Icon;
            return (
              <RevealItem key={d.numero}>
                <article className="group relative flex h-full flex-col gap-8 bg-surface-inverted p-8 transition-colors duration-500 hover:bg-[hsl(220_14%_10%)] md:p-10 lg:gap-10 lg:p-12">
                  <div className="flex items-start justify-between">
                    <span className="font-mono tabular text-[11px] uppercase tracking-[0.22em] text-background/40">
                      {d.numero}
                    </span>
                    <Icon
                      className="h-6 w-6 text-background/60 transition-colors duration-500 group-hover:text-accent"
                      strokeWidth={1.25}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium leading-tight tracking-tight text-background md:text-2xl">
                      {d.titulo}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-background/70 md:text-base md:leading-relaxed">
                      {d.descricao}
                    </p>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
