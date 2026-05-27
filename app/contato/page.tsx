import type { Metadata } from "next";
import { Contato } from "@/components/sections/contato";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato técnico",
  description:
    "Fale com um engenheiro responsável. Resposta técnica em até 4h úteis. Diagnóstico inicial sem compromisso de orçamento.",
  alternates: { canonical: `${SITE.url}/contato` },
};

export default function ContatoPage() {
  return (
    <div className="pt-32">
      <Contato />
    </div>
  );
}
