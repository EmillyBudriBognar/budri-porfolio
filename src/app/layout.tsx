import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Budri - UX Design, Front-End e Mobile | Creative Solutions",
  description: "Budri is a creative studio specializing in UX Design, Front-End, and Mobile. We transform ideas into intuitive and functional interfaces. Let's innovate together?",
  authors: [{ name: "Budri", url: "https://www.budri.com.br" }],
  robots: "index, follow",
  openGraph: {
    title: "Budri - UX Design, Front-End e Mobile | Creative Solutions",
    description: "Creative studio specializing in UX, Front-End, and Mobile.",
    url: "https://www.budri.com.br",
    siteName: "Budri",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Budri - Creative Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://www.budri.com.br"),
  alternates: {
    canonical: "/",
  },
  keywords: ["UX Design", "Front-End", "Mobile", "Creative Studio", "Budri"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Meta Viewport ESSENCIAL para corrigir problemas de zoom no mobile */}
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" 
        />
        
        {/* Previne zoom automático em inputs no iOS */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />

        {/* SEO Extra para Google Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Budri",
              url: "https://www.budri.com.br",
              logo: "https://www.budri.com.br/logo.png",
              description: "Creative studio specializing in UX, Front-End, and Mobile.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-99998-6102",
                contactType: "customer service",
                email: "emillybudribognar@gmail.com",
                availableLanguage: ["Portuguese", "English", "Spanish"],
                areaServed: "BR",
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "14:00",
                  closes: "20:00",
                },
                contactPage: "https://www.budri.com.br/contact",
              },
              sameAs: [
                "https://www.linkedin.com/in/emilly-budri-bognar/",
                "https://www.instagram.com/emillybudri/",
              ],
            }),
          }}
        />

        {/* Script para prevenir double-tap zoom no mobile */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                let lastTouchEnd = 0;
                document.addEventListener('touchend', function(event) {
                  const now = (new Date()).getTime();
                  if (now - lastTouchEnd <= 300) {
                    event.preventDefault();
                  }
                  lastTouchEnd = now;
                }, { passive: false });
                
                // Previne zoom em inputs
                document.addEventListener('focusin', function(e) {
                  if (window.innerWidth <= 768) {
                    const target = e.target;
                    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
                      setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }, 300);
                    }
                  }
                });
              });
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}