import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google"; // Import font
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { professionalData } from "@/data/professionalData";
import PerformanceOptimizer from "@/components/ui/PerformanceOptimizer";
import JsonLd from "@/components/ui/JsonLd";

// Configure Jost font
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Budri - UX Design, Front-End e Mobile | Creative Solutions",
    template: "%s | Budri",
  },
  description:
    "Budri is a creative studio specializing in UX Design, Front-End, and Mobile. We transform ideas into intuitive and functional interfaces. Let's innovate together?",
  applicationName: "Budri Portfolio",
  authors: [{ name: "Budri", url: "https://www.budri.com.br" }],
  generator: "Next.js",
  keywords: [
    ...professionalData.skills,
    "Portfólio UX Design", "Portfólio UI Design", "Portfólio Front-End",
    "Emilly Budri Bognar", "Desenvolvedora Front-End", "UX Designer", "UI Designer",
    "Web Designer", "Criar site profissional", "SEO para UX", "Design UX/UI Brasil",
    "São Paulo UX Designer", "Desenvolvedora React", "Especialista Next.js",
    "Acessibilidade Web", "Figma UX", "UX Writing", "Mobile UX", "Design Mobile First",
    "Componentes React", "Design de Produto", "Design Digital", "Performance Web",
    "Experiência de Usuário", "Teste de Usabilidade", "Pesquisa UX", "Blog de UX Design",
    "Portfólio Design Interativo", "Design System", "Tendências UX 2025"
  ],
  referrer: "origin-when-cross-origin",
  creator: "Emilly Budri Bognar",
  publisher: "Emilly Budri Bognar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.budri.com.br"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Budri - UX Design, Front-End e Mobile | Creative Solutions",
    description: "Creative studio specializing in UX, Front-End, and Mobile.",
    url: "https://www.budri.com.br",
    siteName: "Budri",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo/black-and-purple.png",
        width: 1200,
        height: 630,
        alt: "Budri Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budri - UX Design, Front-End e Mobile",
    description: "Creative studio specializing in UX, Front-End, and Mobile.",
    creator: "@emillybudri", // Assuming handle
    images: ["/images/logo/black-and-purple.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Meta Tags Essenciais */}
        <meta charSet="utf-8" />

        {/* Pré-carregamento de recursos críticos */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`${jost.className} antialiased min-h-screen w-full overflow-x-hidden`}>
        <LanguageProvider>
          {children}
          <PerformanceOptimizer />
          <JsonLd />

          {/* Microdados para SEO */}
          <div itemScope itemType="https://schema.org/Person" style={{ display: "none" }}>
            <span itemProp="name">{professionalData.name}</span>
            <span itemProp="jobTitle">{professionalData.role}</span>
            <span itemProp="knowsAbout">{professionalData.skills.join(", ")}</span>
            <a itemProp="url" href={professionalData.site}>
              {professionalData.site}
            </a>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
