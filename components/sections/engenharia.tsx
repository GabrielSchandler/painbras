import { Container } from "@/components/ui/container";
import { Reveal, RevealStagger, RevealItem } from "@/components/primitives/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { PROCESSO } from "@/content/processo";

export function Engenharia() {
  return (
    <section
      id="engenharia"
      aria-labelledby="engenharia-heading"
      className="relative bg-surface-elevated section-pad-lg"
    >
      <Container size="wide">
        <div className="mb-20 md:mb-24">
          <Reveal>
            <SectionHeading
              eyebrow="Processo"
              eyebrowNumber="03"
              size="lg"
              as="h2"
              title={
                <>
                  Engenharia em cinco etapas.<br />
                  <span className="text-muted-foreground">Nada começa sem a anterior.</span>
                </>
              }
              description="Improviso em painel elétrico se paga em manutenção, paradas e auditoria reprovada. Por isso nosso ciclo é fixo — e cada etapa tem entregável documentado."
            />
          </Reveal>
        </div>

        <RevealStagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {PROCESSO.map((etapa, i) => (
            <RevealItem key={etapa.numero} className="relative">
              <article
                className={
                  "group h-full border-t border-border-strong pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pr-6 lg:pt-0 " +
                  (i === 0 ? "lg:border-l-0 lg:pl-0" : "")
                }
              >
                <p className="font-mono tabular text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Etapa {etapa.numero}
                </p>
                <h3 className="mt-6 font-display text-2xl font-medium leading-tight tracking-tight text-foreground">
                  {etapa.titulo}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {etapa.descricao}
                </p>
                <ul className="mt-6 space-y-1.5">
                  {etapa.entregaveis.map((entregavel) => (
                    <li
                      key={entregavel}
                      className="flex items-start gap-2 text-xs text-foreground/80"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-px w-3 shrink-0 bg-foreground/40"
                      />
                      <span>{entregavel}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
