import type { MetadataRoute } from "next";
import { SEGMENTOS } from "@/content/segmentos";
import { SOLUCOES } from "@/content/solucoes";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE.url}/contato`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
  const solucoes = SOLUCOES.map((s) => ({
    url: `${SITE.url}/solucoes/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  const segmentos = SEGMENTOS.map((s) => ({
    url: `${SITE.url}/segmentos/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));
  return [...base, ...solucoes, ...segmentos];
}
