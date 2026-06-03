"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { COMPANY, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

const headline = ["Painéis", "elétricos", "para indústrias", "que não", "podem parar."];

const eyebrow = "Painéis elétricos industriais — São Paulo / SP";

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
              para plásticos, borracha, irrigação e infraestrutura crítica. Execução
              documentada, componentes WEG e fabricantes consolidados, prazo honesto.
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

            {/* Provas concretas */}
            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.25 }}
              className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8"
            >
              <Stat label="Resposta técnica" value="4h" suffix="úteis" />
              <Stat label="Conformidade" value="NR-10" suffix="documentada" />
              <Stat label="Ensaio" value="100%" suffix="em bancada" />
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

function HeroVisual() {
  return (
    <div className="relative h-full w-full bg-[hsl(220_14%_94%)]">
      <Image
        src="/paineis/painel-incendio-vermelho.jpg"
        alt="Painel elétrico industrial Pain Bras — sistema de comando para bombas de incêndio"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain object-center mix-blend-multiply"
      />

      {/* Overlay técnico — info bar bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-foreground/10 bg-background/85 p-5 backdrop-blur-sm md:p-6">
        <div className="text-[10px] font-mono tabular uppercase tracking-[0.18em] text-muted-foreground">
          <p>Conformidade</p>
          <p className="mt-1 text-foreground/80">NR-10 • NR-12 • NBR IEC 60439</p>
        </div>
        <div className="text-right text-[10px] font-mono tabular uppercase tracking-[0.18em] text-muted-foreground">
          <p>Ciclo</p>
          <p className="mt-1 text-foreground/80">Projeto → Ensaio → Comissionamento</p>
        </div>
      </div>

      {/* Tag superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-5 text-[10px] font-mono tabular uppercase tracking-[0.18em] text-muted-foreground md:p-6">
        <span>Pain Bras</span>
        <span>SP / BR</span>
      </div>
    </div>
  );
}
