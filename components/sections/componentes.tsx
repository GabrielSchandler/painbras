import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/primitives/reveal";
import { COMPONENTES_FABRICANTES } from "@/content/conformidade";

export function Componentes() {
  return (
    <section
      aria-labelledby="componentes-heading"
      className="relative border-y border-border bg-surface-elevated py-20 md:py-24"
    >
      <Container size="wide">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
            <div className="max-w-md">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Componentes que usamos
              </p>
              <h2
                id="componentes-heading"
                className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight text-foreground md:text-3xl"
              >
                Insumos de fabricantes consolidados,{" "}
                <span className="text-muted-foreground">engenharia nossa.</span>
              </h2>
            </div>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3">
              {COMPONENTES_FABRICANTES.map((c) => (
                <li key={c.nome} className="border-l-2 border-border-strong/30 pl-4">
                  <p className="font-display text-lg font-medium tracking-tight text-foreground">
                    {c.nome}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.categoria}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
