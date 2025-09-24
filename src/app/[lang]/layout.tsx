import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Header from "../components/header/page";
import styles from "./page.module.css";
import Footer from "../components/footer/page";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { getDictionary } from "./dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musical Pilgrimage From Europe to Asia",
  description: "IREC Europe Concert 2026",
  keywords: [
    "International Reformed Evangelical Church",
    "Concert",
    "Classical",
    "Music",
    "IREC Europe",
    "Johann Sebastian Bach",
    "Wolfang Amadeus Mozart",
    "MRII Berlin",
    "IREC Berlin",
    "GRII Berlin",
    "Billy Kristanto",
    "Berlin",
    "Calvin Abdiel",
  ],
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "de" };
}) {
  // if you want localized header/footer text:
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <main className={styles.main}>
            <Header dict={dict} />
            {children}
            <Footer dict={dict} />
          </main>
        </MantineProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
