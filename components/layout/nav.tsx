"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { COMPANY, NAV, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { cn, whatsappLink } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
          scrolled
            ? "border-b border-border/80 bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3 outline-none focus-visible:opacity-70"
            aria-label="Pain Bras — home"
          >
            <Logo />
            <span className="ml-3 hidden border-l border-border pl-3 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground md:inline">
              Painéis elétricos industriais
            </span>
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group/link relative px-4 py-2 text-sm text-foreground transition-colors duration-300"
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        aria-hidden
                        className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-foreground transition-transform duration-500 ease-out-expo group-hover/link:origin-left group-hover/link:scale-x-100"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="primary"
              size="md"
              shape="soft"
              className="hidden md:inline-flex"
            >
              <a
                href={whatsappLink(COMPANY.contact.whatsapp, WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center border border-border-strong text-foreground transition-colors hover:bg-foreground hover:text-background"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/brand/logo-icon.svg"
        alt=""
        width={36}
        height={36}
        priority
        className="h-9 w-9"
      />
      <span
        aria-hidden
        className="flex items-baseline font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
      >
        Pain<span className="text-foreground">Bras</span>
      </span>
    </span>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[60] bg-background"
      aria-hidden={!open}
    >
      <div className="flex h-20 items-center justify-between px-6 sm:px-8">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center border border-border-strong text-foreground transition-colors hover:bg-foreground hover:text-background"
          aria-label="Fechar menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="px-6 pt-8 sm:px-8">
        <ul className="space-y-1 border-t border-border">
          {NAV.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: -8 }}
              animate={{
                opacity: open ? 1 : 0,
                x: open ? 0 : -8,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: open ? 0.1 + i * 0.04 : 0 }}
              className="border-b border-border"
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between py-6 text-2xl font-display text-foreground"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 space-y-4">
          <Button asChild variant="primary" size="lg" className="w-full">
            <a
              href={whatsappLink(COMPANY.contact.whatsapp, WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">{COMPANY.hours.sla}</p>
        </div>
      </div>
    </motion.div>
  );
}
