import { Componentes } from "@/components/sections/componentes";
import { Conformidade } from "@/components/sections/conformidade";
import { Contato } from "@/components/sections/contato";
import { CtaFinal } from "@/components/sections/cta-final";
import { Diferenciais } from "@/components/sections/diferenciais";
import { Engenharia } from "@/components/sections/engenharia";
import { Hero } from "@/components/sections/hero";
import { Institucional } from "@/components/sections/institucional";
import { Projetos } from "@/components/sections/projetos";
import { Segmentos } from "@/components/sections/segmentos";
import { Solucoes } from "@/components/sections/solucoes";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Institucional />
      <Engenharia />
      <Solucoes />
      <Componentes />
      <Segmentos />
      <Diferenciais />
      <Projetos />
      <Conformidade />
      <CtaFinal />
      <Contato />
    </>
  );
}
