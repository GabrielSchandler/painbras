import { COMPANY, SITE } from "@/lib/constants";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: COMPANY.legalName,
    alternateName: COMPANY.shortName,
    url: SITE.url,
    logo: `${SITE.url}/brand/logo.svg`,
    description: COMPANY.description,
    foundingDate: COMPANY.foundedYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: COMPANY.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+55${COMPANY.contact.phone}`,
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
      {
        "@type": "ContactPoint",
        telephone: `+${COMPANY.contact.whatsapp}`,
        contactType: "sales",
        contactOption: "TollFree",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
    ],
    sameAs: [COMPANY.social.instagram, COMPANY.social.linkedin].filter(Boolean),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: COMPANY.legalName,
    image: `${SITE.url}/brand/logo.svg`,
    url: SITE.url,
    telephone: `+55${COMPANY.contact.phone}`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: COMPANY.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
  };
}

export function getServiceSchema(name: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "Country", name: "Brazil" },
    url: `${SITE.url}/solucoes/${slug}`,
    serviceType: "Industrial Electrical Engineering",
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
