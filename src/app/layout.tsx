import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Header from "./header/page";
import styles from "./page.module.css";
import Footer from "./footer/page";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musical Pilgrimage From Europe to Asia - IREC Europe Concert 2026",
  description:
    "Join us for an unforgettable journey through music: J.S. Bach - Christ lag in Todes Banden, B. Smetana - From the Homeland, and a special Indonesian traditional music arrangement by Calvin Abdiel.",
  keywords: [
    "International Reformed Evangelical Church",
    "Concert",
    "Classical",
    "Music",
    "IREC Europe",
    "Johann Sebastian Bach",
    "Wolfang Amadeus Mozart",
    "Bedřich Smetana",
    "MRII Berlin",
    "IREC Berlin",
    "GRII Berlin",
    "Billy Kristanto",
    "Berlin",
    "Calvin Abdiel",
    "Angklung",
    "Indonesian Traditional Music",
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
        <ColorSchemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicEvent",
              name: "Musical Pilgrimage From Europe to Asia - IREC Europe Concert 2026",
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
                "Join us for an unforgettable journey through music: J.S. Bach - Christ lag in Todes Banden, B. Smetana - From the Homeland, and a special Indonesian traditional music arrangement by Calvin Abdiel.",
            }),
          }}
        />
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
