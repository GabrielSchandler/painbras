import { Container } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/primitives/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { NORMAS } from "@/content/conformidade";

export function Conformidade() {
  return (
    <section
      id="conformidade"
      aria-labelledby="conformidade-heading"
      className="relative bg-background section-pad-lg"
    >
      <Container size="wide">
        <div className="mb-16 grid gap-12 md:mb-20 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Conformidade"
              eyebrowNumber="07"
              size="lg"
              as="h2"
              title={
                <>
                  Engenharia que<br />
                  <span className="text-muted-foreground">passa em auditoria.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-relaxed">
              Cada painel é projetado, montado e documentado conforme normas brasileiras
              e internacionais aplicáveis. O cliente recebe diagrama as-built, prontuário
              e laudo técnico — tudo pronto para fiscalização e auditoria interna.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {NORMAS.map((n, i) => (
            <RevealItem key={n.codigo}>
              <article className="group relative flex h-full flex-col gap-6 bg-background p-8 transition-colors duration-500 hover:bg-surface-elevated md:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono tabular text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <p className="font-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                    {n.codigo}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground/80 md:text-base">
                    {n.titulo}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {n.descricao}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
