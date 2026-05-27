import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/lead-form";
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
                  Conte qual é<br />
                  <span className="text-muted-foreground">a operação.</span>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed lg:justify-self-end">
              Engenheiro responsável responde em até 4h úteis com próximas etapas. Quanto
              mais técnico você for no formulário, mais preciso é o retorno.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px bg-border lg:grid-cols-[1.6fr_1fr]">
          {/* Form */}
          <div className="bg-background p-8 md:p-12 lg:p-16">
            <Reveal>
              <LeadForm />
            </Reveal>
          </div>

          {/* Side info */}
          <aside className="space-y-12 bg-surface-elevated p-8 md:p-12 lg:p-14">
            <Reveal delay={0.1}>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  Atendimento direto
                </p>
                <a
                  href={whatsappLink(COMPANY.contact.whatsapp, WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex items-center gap-3 font-display text-2xl font-medium tracking-tight text-foreground"
                >
                  {COMPANY.contact.whatsappDisplay}
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 items-center justify-center border border-border-strong transition-all duration-500 ease-out-expo group-hover:bg-foreground group-hover:text-background"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  WhatsApp atendido por engenheiro responsável.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="space-y-6 border-t border-border pt-10">
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

            <Reveal delay={0.3}>
              <div className="border-t border-border pt-10">
                <p className="font-mono tabular text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  SLA
                </p>
                <p className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight text-foreground">
                  Resposta técnica em <span className="text-accent">4h úteis</span>.
                </p>
              </div>
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
