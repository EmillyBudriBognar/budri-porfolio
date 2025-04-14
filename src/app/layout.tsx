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
    shortcut: "/favicon-16x16.png", // Optional: add shortcut icon
    apple: "/apple-touch-icon.png", // Optional: add apple touch icon
  },
  metadataBase: new URL("https://www.budri.com.br"),
  alternates: {
    canonical: "/", // Add canonical URL
  },
  keywords: ["UX Design", "Front-End", "Mobile", "Creative Studio", "Budri"], // Add relevant keywords
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* SEO Extra para Google Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Budri",
              url: "https://www.budri.com.br",
              logo: "https://www.budri.com.br/logo.png", // Add your logo URL
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
                contactPage: "https://www.budri.com.br/contact", // Better to have a specific contact page
              },
              sameAs: [ // Add your social media profiles if available
                "https://www.linkedin.com/in/emilly-budri-bognar/",
                "https://www.instagram.com/emillybudri/",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}