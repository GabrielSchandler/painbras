"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { COMPANY, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

const headline = ["Painéis", "elétricos", "para indústrias", "que não", "podem parar."];

const eyebrow = "Engenharia elétrica industrial — desde {{ANO_FUNDACAO}}".replace(
  "{{ANO_FUNDACAO}}",
  COMPANY.foundedYear,
);

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Apresentação Pain Bras"
      className="relative isolate overflow-hidden bg-background pt-32 md:pt-40"
    >
      {/* Linha de marca superior */}
      <div className="absolute inset-x-0 top-20 z-10 h-px bg-border" />

      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <motion.div style={{ y: textY, opacity: fade }} className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mb-10 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground"
            >
              <span aria-hidden className="h-px w-10 bg-border-strong" />
              <span>{eyebrow}</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-[2.75rem] font-medium leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem]">
              {headline.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.85,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.35 + i * 0.08,
                  }}
                  className="inline-block"
                >
                  {word}
                  {i < headline.length - 1 && <span>&nbsp;</span>}
                </motion.span>
              ))}
            </h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
              className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-relaxed"
            >
              Projeto, montagem e comissionamento de painéis elétricos sob medida
              para plásticos, borracha, irrigação e infraestrutura crítica.
              Engenharia documentada, componentes WEG, Siemens e Schneider, prazo
              honesto.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
              className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <Button asChild variant="primary" size="lg" shape="soft">
                <Link href="/#contato">
                  Solicitar diagnóstico técnico
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild variant="link" size="lg">
                <a
                  href={whatsappLink(COMPANY.contact.whatsapp, WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar agora pelo WhatsApp
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Stats inline */}
            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.25 }}
              className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8"
            >
              <Stat label="Anos de operação" value={COMPANY.yearsInMarket} />
              <Stat label="Painéis entregues" value={COMPANY.panelsPerYear} suffix="/ ano" />
              <Stat label="Indústrias atendidas" value={COMPANY.industriesServed} />
            </motion.dl>
          </motion.div>

          {/* Visual lateral */}
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-surface-elevated lg:aspect-auto lg:h-[680px]"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-muted-foreground md:mt-28"
        >
          <span className="font-mono tabular">[ 01 ]</span>
          <span>Role para explorar</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.div>
      </Container>
    </section>
  );
}

function Stat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div>
      <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 flex items-baseline gap-1">
        <span className="font-display text-3xl font-medium tracking-tight tabular text-foreground md:text-4xl">
          {value}
        </span>
        {suffix && (
          <span className="text-sm text-muted-foreground">{suffix}</span>
        )}
      </dd>
    </div>
  );
}

/**
 * Visual editorial — composição abstrata representando painel elétrico.
 * Substituir por <Image> real quando houver foto da oficina.
 */
function HeroVisual() {
  return (
    <div className="relative h-full w-full bg-[hsl(220_14%_7%)]">
      {/* Grid técnico de fundo */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Composição de "barramento" abstrato */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
        <div className="flex items-start justify-between text-[10px] font-mono tabular uppercase tracking-[0.18em] text-white/50">
          <span>PB-{COMPANY.foundedYear}</span>
          <span>SP / BR</span>
        </div>

        {/* Barras verticais simulando barramento */}
        <div className="flex flex-1 items-end gap-2 py-8">
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: 1,
                opacity: 0.4 + ((i % 4) * 0.15),
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.6 + i * 0.04,
              }}
              style={{
                transformOrigin: "bottom",
                height: `${30 + ((i * 13) % 60)}%`,
              }}
              className="flex-1 bg-white/60"
              aria-hidden
            />
          ))}
        </div>

        <div className="flex items-end justify-between text-[10px] font-mono tabular text-white/50">
          <div>
            <p className="uppercase tracking-[0.18em]">Conformidade</p>
            <p className="mt-1 text-white/80">NR-10 • NR-12 • NBR IEC 60439</p>
          </div>
          <div className="text-right">
            <p className="uppercase tracking-[0.18em]">Ciclo</p>
            <p className="mt-1 text-white/80">Projeto → Ensaio → Comissionamento</p>
          </div>
        </div>
      </div>

      {/* Highlight diagonal */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"
      />
    </div>
  );
}
