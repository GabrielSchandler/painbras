import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import { WhatsappFab } from "@/components/layout/whatsapp-fab";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { COMPANY, SITE } from "@/lib/constants";
import { getLocalBusinessSchema, getOrganizationSchema } from "@/lib/schema/organization";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const fontDisplay = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0F10" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaultMetaTitle,
    template: `%s — ${COMPANY.shortName}`,
  },
  description: SITE.defaultMetaDescription,
  applicationName: COMPANY.shortName,
  authors: [{ name: COMPANY.legalName }],
  generator: "Next.js",
  keywords: [
    "painéis elétricos industriais",
    "montagem de painéis elétricos",
    "automação industrial",
    "reforma de painéis elétricos",
    "CCM",
    "inversor de frequência",
    "soft-starter",
    "NR-10",
    "NBR 13714",
    "sistemas de incêndio",
    "São Paulo",
  ],
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: COMPANY.shortName,
    title: SITE.defaultMetaTitle,
    description: SITE.defaultMetaDescription,
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.shortName} — Painéis elétricos industriais`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultMetaTitle,
    description: SITE.defaultMetaDescription,
    images: ["/og/default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  category: "industrial",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/brand/logo-icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/brand/logo-icon.svg" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#main"
          className="sr-only fixed left-4 top-4 z-[100] rounded-sm bg-foreground px-4 py-2 text-sm text-background focus:not-sr-only"
        >
          Pular para o conteúdo
        </a>
        <LenisProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <WhatsappFab />
        </LenisProvider>
      </body>
    </html>
  );
}
