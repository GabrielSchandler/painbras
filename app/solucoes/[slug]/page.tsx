import { ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaFinal } from "@/components/sections/cta-final";
import { Reveal } from "@/components/primitives/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SOLUCOES } from "@/content/solucoes";
import { SITE } from "@/lib/constants";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema/organization";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SOLUCOES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sol = SOLUCOES.find((s) => s.slug === slug);
  if (!sol) return {};
  return {
    title: sol.titulo,
    description: sol.descricaoCurta,
    alternates: { canonical: `${SITE.url}/solucoes/${sol.slug}` },
    openGraph: {
      title: `${sol.titulo} — Pain Bras`,
      description: sol.descricaoCurta,
      url: `${SITE.url}/solucoes/${sol.slug}`,
      type: "article",
    },
  };
}

export default async function SolucaoPage({ params }: PageProps) {
  const { slug } = await params;
  const sol = SOLUCOES.find((s) => s.slug === slug);
  if (!sol) notFound();
  const Icon = sol.Icon;

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Soluções", url: `${SITE.url}/#solucoes` },
    { name: sol.titulo, url: `${SITE.url}/solucoes/${sol.slug}` },
  ]);
  const service = getServiceSchema(sol.titulo, sol.descricaoCurta, sol.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
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
                  <Link href="/#solucoes" className="hover:text-foreground">
                    Soluções
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-foreground" aria-current="page">
                  {sol.titulo}
                </li>
              </ol>
            </nav>
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  <span aria-hidden className="h-px w-10 bg-border-strong" />
                  <span className="font-mono tabular">Solução {sol.numero}</span>
                </span>
                <h1 className="mt-8 font-display text-4xl font-medium leading-[1.02] tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                  {sol.titulo}
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-relaxed">
                  {sol.descricaoLonga}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="primary" size="lg">
                    <Link href="/#contato">
                      Solicitar projeto
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/#solucoes">Ver outras soluções</Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-border bg-surface-elevated p-8 md:p-10">
                <Icon className="h-8 w-8 text-foreground" strokeWidth={1.25} />
                <h2 className="mt-8 font-display text-xl font-medium tracking-tight text-foreground">
                  Inclui no projeto
                </h2>
                <ul className="mt-6 space-y-4">
                  {sol.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-t border-border pt-6">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Conformidade
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                    {sol.normas.map((n) => (
                      <li
                        key={n}
                        className="font-mono tabular text-xs text-foreground/80"
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaFinal />
    </>
  );
}
