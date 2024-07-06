import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kühlender Klang vor dem Herbst",
  description: "IREC Berlin Concert 2024",
  // keywords: [
  //   "International Reformed Evangelical Church",
  //   "Concert",
  //   "Classical Music",
  //   "IREC Europe",
  //   "Clara Schumann",
  //   "Jean-Phillipe Rameau",
  //   "Buxtehude",
  //   "MRII Berlin",
  // ],
  // formatDetection: {
  //   telephone: false,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
