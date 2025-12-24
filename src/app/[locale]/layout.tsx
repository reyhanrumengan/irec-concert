import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "../components/header/Header";
// import Footer from "../components/_footer/Footer";
import styles from "../page.module.css";
import Script from "next/script";
import { locales } from "@/i18n";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className={styles.main}>
            <Header />
            {children}
            {/* <Footer /> */}
          </main>

          <Script
            id="jsonld-music-event"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MusicEvent",
                name:
                  locale === "de"
                    ? "Eine musikalische Pilgerreise: Von Europa nach Asien"
                    : "A Musical Pilgrimage: From Europe to Asia",
                startDate: "2025-10-18T16:00:00+02:00",
                // rest unchanged
              }),
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
