import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/primitives/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { COMPANY } from "@/lib/constants";

const pillars = [
  {
    label: "Engenharia documentada",
    desc: "Cada painel sai com diagrama as-built, prontuário NR-10, lista técnica e laudo de ensaios. Documentação que sobrevive a auditoria e troca de equipe.",
  },
  {
    label: "Operação que não pode parar",
    desc: "Atendemos planta de processo contínuo — extrusoras, banburys, motobombas, recalque. Onde parada custa lote, energia e prazo.",
  },
  {
    label: "Componentes consolidados",
    desc: "WEG, Siemens, Schneider e Phoenix Contact. Linhas com peças de reposição garantidas e suporte técnico de fábrica.",
  },
];

export function Institucional() {
  return (
    <section
      id="institucional"
      aria-labelledby="institucional-heading"
      className="relative bg-background section-pad"
    >
      <Container size="wide">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="A empresa"
              eyebrowNumber="02"
              size="lg"
              as="h2"
              title={
                <>
                  Painéis que carregam<br />
                  <span className="text-muted-foreground">o peso da operação.</span>
                </>
              }
            />
          </Reveal>

          <div className="space-y-12">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-foreground/85 text-pretty md:text-xl md:leading-relaxed">
                A <strong className="font-medium text-foreground">{COMPANY.shortName}</strong>{" "}
                é uma empresa de engenharia elétrica industrial fundada em{" "}
                <span className="font-mono tabular">{COMPANY.foundedYear}</span>, em São Paulo.
                Projetamos, montamos e comissionamos painéis elétricos sob medida para
                indústrias e infraestruturas onde uma parada não programada significa prejuízo
                imediato.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg md:leading-relaxed">
                Trabalhamos desde a partida estrela-triângulo de uma motobomba de irrigação até
                centros de controle de motores com automação completa. Cada projeto começa em
                diagrama unifilar, passa por bancada controlada e termina com comissionamento
                assistido em campo. Sem improviso.
              </p>
            </Reveal>

            <div className="space-y-6 pt-4">
              {pillars.map((p, i) => (
                <Reveal key={p.label} delay={0.1 + i * 0.08}>
                  <div className="group flex gap-6 border-t border-border pt-6">
                    <span className="font-mono tabular text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                        {p.label}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
