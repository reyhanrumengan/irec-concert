// components/LocaleSwitcher.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOCALES = ["en", "de"];

export default function LocaleSwitcher() {
  const pathname = usePathname() ?? "/";
  const segments = pathname.split("/").filter(Boolean); // e.g. ['en', 'about'] or []
  const currentIsLocale = segments.length > 0 && LOCALES.includes(segments[0]);
  const pathWithoutLocale = currentIsLocale
    ? "/" + segments.slice(1).join("/")
    : pathname;

  return (
    <nav>
      {LOCALES.map((locale) => {
        const href = `/${locale}${
          pathWithoutLocale === "/" ? "" : pathWithoutLocale
        }`;
        return (
          <Link key={locale} href={href} style={{ marginRight: 8 }}>
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
