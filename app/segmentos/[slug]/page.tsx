import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaFinal } from "@/components/sections/cta-final";
import { Reveal } from "@/components/primitives/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SEGMENTOS } from "@/content/segmentos";
import { SITE } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/schema/organization";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SEGMENTOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const seg = SEGMENTOS.find((s) => s.slug === slug);
  if (!seg) return {};
  return {
    title: `${seg.titulo} — Engenharia elétrica`,
    description: seg.resumo,
    alternates: { canonical: `${SITE.url}/segmentos/${seg.slug}` },
    openGraph: {
      title: `${seg.titulo} — Pain Bras`,
      description: seg.resumo,
      url: `${SITE.url}/segmentos/${seg.slug}`,
      type: "article",
    },
  };
}

export default async function SegmentoPage({ params }: PageProps) {
  const { slug } = await params;
  const seg = SEGMENTOS.find((s) => s.slug === slug);
  if (!seg) notFound();
  const Icon = seg.Icon;

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Segmentos", url: `${SITE.url}/#segmentos` },
    { name: seg.titulo, url: `${SITE.url}/segmentos/${seg.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="relative bg-background pt-40 pb-24 md:pt-44 md:pb-32">
        <Container size="wide">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-12">
              <ol className="flex items-center gap-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/#segmentos" className="hover:text-foreground">
                    Segmentos
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-foreground" aria-current="page">
                  {seg.titulo}
                </li>
              </ol>
            </nav>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  <span aria-hidden className="h-px w-10 bg-border-strong" />
                  <span className="font-mono tabular">Segmento {seg.numero}</span>
                </span>
                <h1 className="mt-8 font-display text-4xl font-medium leading-[1.02] tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                  {seg.titulo}
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-relaxed">
                  {seg.resumo}
                </p>

                <blockquote className="mt-10 max-w-xl border-l-2 border-accent pl-6">
                  <p className="text-base italic text-foreground/80 md:text-lg">
                    {seg.dorPrincipal}
                  </p>
                </blockquote>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="primary" size="lg">
                    <Link href="/#contato">
                      Falar sobre projeto neste segmento
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-border bg-surface-elevated p-8 md:p-10">
                <Icon className="h-8 w-8 text-foreground" strokeWidth={1.25} />
                <h2 className="mt-8 font-display text-xl font-medium tracking-tight text-foreground">
                  Aplicações típicas
                </h2>
                <ul className="mt-6 space-y-3">
                  {seg.aplicacoes.map((app) => (
                    <li key={app} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span
                        aria-hidden
                        className="mt-2 h-px w-4 shrink-0 bg-foreground/40"
                      />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaFinal />
    </>
  );
}
