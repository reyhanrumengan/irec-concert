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
  title: "Konzert zum Frühlingsbeginn",
  description: "IREC Europe Concert 2025",
  keywords: [
    "International Reformed Evangelical Church",
    "Concert",
    "Classical",
    "Music",
    "IREC Europe",
    "Jean-Phillipe Rameau",
    "Dietrich Buxtehude",
    "MRII Berlin",
    "IREC Hamburg",
    "GRII Hamburg",
    "Billy Kristanto",
    "Hamburg",
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
