import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/primitives/reveal";
import { SectionHeading } from "@/components/primitives/section-heading";
import { COMPANY, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

export function Contato() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="relative bg-background section-pad-lg"
    >
      <Container size="wide">
        <div className="mb-16 grid gap-12 md:mb-20 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Contato"
              eyebrowNumber="08"
              size="xl"
              as="h2"
              title={
                <>
                  Fale com a gente<br />
                  <span className="text-muted-foreground">pelo WhatsApp.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed lg:justify-self-end">
              Conte qual é a operação e respondemos em até 4h úteis com próximas
              etapas. Atendimento direto pelo nosso WhatsApp comercial.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px bg-border lg:grid-cols-[1.4fr_1fr]">
          {/* Bloco principal — WhatsApp CTA */}
          <Reveal>
            <div className="relative flex h-full flex-col justify-between gap-12 bg-surface-elevated p-8 md:p-12 lg:p-16">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Canal direto
                </p>
                <h3 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  WhatsApp<br />
                  <span className="font-mono tabular text-2xl text-muted-foreground md:text-3xl">
                    {COMPANY.contact.whatsappDisplay}
                  </span>
                </h3>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                  Atendimento direto pelo responsável técnico. Quanto mais
                  detalhes da operação você enviar, mais preciso é o retorno.
                </p>
              </div>

              <div className="space-y-4">
                <Button asChild variant="primary" size="xl" className="w-full sm:w-auto">
                  <a
                    href={whatsappLink(COMPANY.contact.whatsapp, WHATSAPP_DEFAULT_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Iniciar conversa no WhatsApp
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Resposta técnica em até <strong className="text-foreground">4h úteis</strong>.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Side info */}
          <aside className="space-y-10 bg-surface-elevated p-8 md:p-12 lg:p-14">
            <Reveal delay={0.1}>
              <ul className="space-y-7">
                <ContactRow
                  icon={Phone}
                  label="Telefone"
                  value={COMPANY.contact.phoneDisplay}
                  href={`tel:+55${COMPANY.contact.phone}`}
                />
                <ContactRow
                  icon={Mail}
                  label="E-mail"
                  value={COMPANY.contact.email}
                  href={`mailto:${COMPANY.contact.email}`}
                />
                <ContactRow
                  icon={MapPin}
                  label="Endereço"
                  value={
                    <>
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.neighborhood} — {COMPANY.address.city}/
                      {COMPANY.address.state}
                      <br />
                      CEP {COMPANY.address.zip}
                    </>
                  }
                  href={COMPANY.address.mapsUrl}
                  external
                />
                <ContactRow
                  icon={Clock}
                  label="Horário"
                  value={
                    <>
                      {COMPANY.hours.weekdays}
                      <br />
                      {COMPANY.hours.saturday}
                    </>
                  }
                />
              </ul>
            </Reveal>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Phone;
  label: string;
  value: React.ReactNode;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <Icon className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
        <div className="mt-1.5 text-sm text-foreground md:text-base">{value}</div>
      </div>
    </>
  );
  if (href) {
    return (
      <li>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group flex items-start gap-4 transition-colors hover:text-accent"
        >
          {content}
        </a>
      </li>
    );
  }
  return <li className="flex items-start gap-4">{content}</li>;
}
