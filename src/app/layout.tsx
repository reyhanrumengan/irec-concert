import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Header from "./header/page";
import styles from "./page.module.css";
import Footer from "./footer/page";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Musical Pilgrimage: From Europe to Asia - IREC Europe Concert 2026",
  description:
    "Join us for an unforgettable journey through music: J.S. Bach - Christ lag in Todes Banden, W.A. Mozart - Sonata for Four Hands, Ko Matsushita - Cantate Domino, and a special Indonesian traditional music arrangement by Calvin Abdiel.",
  keywords: [
    "International Reformed Evangelical Church",
    "IREC Europe",
    "Free Concert",
    "Classical Music",
    "Johann Sebastian Bach",
    "Wolfgang Amadeus Mozart",
    "Ko Matsushita",
    "Bedřich Smetana",
    "Calvin Abdiel",
    "Angklung",
    "Indonesian Traditional Music",
    "Indonesian Folk Songs",
    "Berlin",
    "IREC Berlin",
    "Billy Kristanto",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript />
        <Script
          id="jsonld-music-event"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicEvent",
              name: "A Musical Pilgrimage: From Europe to Asia - IREC Europe Concert 2026",
              startDate: "2025-10-18T16:00:00+02:00",
              endDate: "2025-10-18T18:00:00+02:00",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: "Kaiser-Friedrich-Gedächtniskirche",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Händelallee 20",
                  addressLocality: "Berlin",
                  postalCode: "10557",
                  addressCountry: "DE",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "IREC Berlin",
                url: "https://irec-berlin.org",
              },
              performer: {
                "@type": "MusicGroup",
                name: "IREC Europe",
                member: [
                  {
                    "@type": "Person",
                    name: "Billy Kristanto",
                    role: "Conductor",
                  },
                  { "@type": "Person", name: "Calvin Abdiel", role: "Pianist" },
                  {
                    "@type": "Person",
                    name: "Hannah Jonina Ivy",
                    role: "Violinist",
                  },
                  {
                    "@type": "Person",
                    name: "Tamariska Kristianto",
                    role: "Violinist",
                  },
                  {
                    "@type": "MusicGroup",
                    name: "IREC Berlin Choir",
                    role: "Choir",
                  },
                ],
              },
              offers: {
                "@type": "Offer",
                url: "https://concert.irec-europe.org/rsvp",
                priceCurrency: "EUR",
                price: "0.00",
                eligibleRegion: { "@type": "Place", name: "Germany" },
              },
              image:
                "https://concert.irec-europe.org/images/concert-poster.jpg",
              description:
                "Join us for an unforgettable journey through music: J.S. Bach - Christ lag in Todes Banden, W.A. Mozart - Sonata for Four Hands, Ko Matsushita - Cantate Domino, and a special Indonesian traditional music arrangement by Calvin Abdiel.",
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16765503652"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="beforeInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-16765503652');
  `}
        </Script>
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <main className={styles.main}>
            <Header />
            {children}
            <Footer />
          </main>
        </MantineProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
