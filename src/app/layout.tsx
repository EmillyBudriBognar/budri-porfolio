import type { Metadata } from "next";
import "./globals.css";

// Dados
const professionalData = {
  name: "Emilly Budri Bognar",
  site: "https://www.budri.com.br",
  role: "UX Designer e Desenvolvedora Front-End",
  skills: [
    "UX Design", "UI Design", "Front-End Development", "React", "Next.js",
    "Acessibilidade Digital", "Figma", "Prototipação", "Design de Interação", 
    "Design Responsivo", "Web Design", "HTML", "CSS", "JavaScript", "TypeScript", 
    "Design Thinking", "Arquitetura de Informação", "Experiência do Usuário", 
    "Teste de Usabilidade", "Pesquisa com Usuários", "Design Centrado no Usuário", 
    "SEO", "Web Performance", "Mobile First", "Componentes UI", "Design System"
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/emilly-budri-bognar/",
    github: "https://github.com/EmillyBudriBognar",
    instagram: "https://www.instagram.com/emillybudri/"
  },
  location: "São Paulo, Brasil"
};

export const metadata: Metadata = {
  title: "Budri - UX Design, Front-End e Mobile | Creative Solutions",
  description:
    "Budri is a creative studio specializing in UX Design, Front-End, and Mobile. We transform ideas into intuitive and functional interfaces. Let's innovate together?",
  authors: [{ name: "Budri", url: "https://www.budri.com.br" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Budri - UX Design, Front-End e Mobile | Creative Solutions",
    description: "Creative studio specializing in UX, Front-End, and Mobile.",
    url: "https://www.budri.com.br",
    siteName: "Budri",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://www.budri.com.br"),
  alternates: {
    canonical: "/",
  },
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
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Meta Tags Essenciais */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />

        {/* Pré-carregamento de recursos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data com informações verificáveis */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: professionalData.name,
              url: professionalData.site,
              jobTitle: professionalData.role,
              knowsAbout: professionalData.skills,
              sameAs: Object.values(professionalData.socialLinks),
              address: {
                "@type": "PostalAddress",
                addressLocality: professionalData.location.split(", ")[0],
                addressRegion: professionalData.location.split(", ")[1],
                addressCountry: "BR",
              },
            }),
          }}
        />

        {/* Otimizações de Performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mouseover', function(e) {
                const link = e.target.closest('a');
                if (link && link.href && link.hostname === location.hostname) {
                  const prefetchLink = document.createElement('link');
                  prefetchLink.rel = 'prefetch';
                  prefetchLink.href = link.href;
                  document.head.appendChild(prefetchLink);
                }
              });

              let lastTap = 0;
              document.addEventListener('touchend', function(event) {
                const now = Date.now();
                if (now - lastTap < 300) event.preventDefault();
                lastTap = now;
              }, { passive: false });
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen w-full overflow-x-hidden">
        {children}

        {/* Microdados para SEO */}
        <div itemScope itemType="https://schema.org/Person" style={{ display: "none" }}>
          <span itemProp="name">{professionalData.name}</span>
          <span itemProp="jobTitle">{professionalData.role}</span>
          <span itemProp="knowsAbout">{professionalData.skills.join(", ")}</span>
          <a itemProp="url" href={professionalData.site}>
            {professionalData.site}
          </a>
        </div>
      </body>
    </html>
  );
}
