import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-background pt-32">
      <Container size="default">
        <div className="max-w-2xl">
          <p className="font-mono tabular text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Erro 404
          </p>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Página não encontrada.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            O endereço solicitado não existe ou foi movido. Volte para a home ou fale
            direto com a gente pelo WhatsApp.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link href="/">Voltar para a home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#contato">Falar conosco</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
