import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { COMPANY, NAV } from "@/lib/constants";
import { getYear } from "@/lib/utils";

const hasLinkedin = !COMPANY.social.linkedin.includes("{{");
const hasCnpj = !COMPANY.cnpj.includes("{{");

const colServicos = [
  { label: "Painéis de comando", href: "/solucoes/paineis-de-comando" },
  { label: "Automação industrial", href: "/solucoes/automacao-industrial" },
  { label: "Reforma e retrofit", href: "/solucoes/reformas-e-retrofit" },
  { label: "Sistemas de incêndio", href: "/solucoes/sistemas-de-incendio" },
];

const colSegmentos = [
  { label: "Plásticos", href: "/segmentos/plasticos" },
  { label: "Borracha", href: "/segmentos/borracha" },
  { label: "Irrigação", href: "/segmentos/irrigacao" },
  { label: "Infraestrutura predial", href: "/segmentos/condominios-industriais" },
];

export function Footer() {
  return (
    <footer className="relative bg-surface-inverted text-background">
      <Container size="wide" className="py-20 md:py-24">
        {/* Top — chamada final */}
        <div className="grid gap-12 border-b border-background/10 pb-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24 lg:pb-20">
          <div>
            <p className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-balance md:text-5xl">
              Painéis elétricos que sua planta não pode pagar para errar.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/70 md:text-lg">
              Conte qual é o seu desafio. Nosso time técnico responde em até 4h úteis
              com próximas etapas claras.
            </p>
          </div>

          <div className="space-y-6">
            <Link
              href="/#contato"
              className="group inline-flex items-center gap-3 text-base font-medium text-background"
            >
              <span>Solicitar diagnóstico</span>
              <span
                aria-hidden
                className="inline-block h-px w-12 origin-left scale-x-100 bg-accent transition-transform duration-500 group-hover:scale-x-150"
              />
            </Link>

            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-background/50" />
                <div className="space-y-0.5">
                  <a
                    href={`tel:+55${COMPANY.contact.phone}`}
                    className="block text-background hover:text-accent"
                  >
                    {COMPANY.contact.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-background/70 hover:text-accent"
                  >
                    WhatsApp {COMPANY.contact.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-background/50" />
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="text-background hover:text-accent"
                >
                  {COMPANY.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-background/50" />
                <address className="not-italic text-background/70">
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.neighborhood} — {COMPANY.address.city}/
                  {COMPANY.address.state}
                  <br />
                  CEP {COMPANY.address.zip}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Mid — colunas de navegação */}
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4 md:gap-8">
          <FooterCol title="Navegação" links={NAV.map((n) => ({ label: n.label, href: n.href }))} />
          <FooterCol title="Soluções" links={colServicos} />
          <FooterCol title="Segmentos" links={colSegmentos} />
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-background/40">
              Atendimento
            </p>
            <ul className="mt-6 space-y-3 text-sm text-background/70">
              <li>{COMPANY.hours.weekdays}</li>
              <li>{COMPANY.hours.saturday}</li>
              <li className="pt-3 text-background/50">{COMPANY.hours.sla}</li>
            </ul>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Pain Bras"
                className="inline-flex h-10 w-10 items-center justify-center border border-background/20 text-background/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
              {hasLinkedin && (
                <a
                  href={COMPANY.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Pain Bras"
                  className="inline-flex h-10 w-10 items-center justify-center border border-background/20 text-background/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-6 border-t border-background/10 pt-10 text-xs text-background/50 md:flex-row md:items-center">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-base font-semibold tracking-tight text-background">
              Pain<span className="text-accent">Bras</span>
            </span>
            <span className="hidden md:inline">© {getYear()} {COMPANY.legalName}. Todos os direitos reservados.</span>
          </div>
          {hasCnpj && (
            <div className="flex items-center gap-6">
              <span className="font-mono tabular text-background/40">
                CNPJ {COMPANY.cnpj}
              </span>
            </div>
          )}
        </div>
        <p className="mt-4 text-xs text-background/40 md:hidden">© {getYear()} {COMPANY.legalName}.</p>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-background/40">
        {title}
      </p>
      <ul className="mt-6 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-background/70 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
