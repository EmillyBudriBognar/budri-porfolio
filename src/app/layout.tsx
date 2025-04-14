import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Budri - UX Design, Front-End e Mobile | Creative Solutions",
  description:
    "Budri is a creative studio specializing in UX Design, Front-End, and Mobile. We transform ideas into intuitive and functional interfaces. Let's innovate together?",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Budri - UX Design, Front-End e Mobile",
    description:
      "Budri is a creative studio specializing in UX, Front-End, and Mobile.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://www.budri.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              description:
                "Creative studio specializing in UX, Front-End, and Mobile.",
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
                  opens: "09:00",
                  closes: "18:00",
                },
                contactPage: "https://www.budri.com.br/",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
