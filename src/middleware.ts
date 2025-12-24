import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "de"];
const DEFAULT_LOCALE = "en";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip if pathname already includes a supported locale
  if (SUPPORTED_LOCALES.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // Detect browser language
  const acceptLanguage = req.headers.get("accept-language");
  let browserLocale = DEFAULT_LOCALE;

  if (acceptLanguage) {
    const primaryLang = acceptLanguage.split(",")[0].slice(0, 2); // "en-US" → "en"
    if (SUPPORTED_LOCALES.includes(primaryLang)) {
      browserLocale = primaryLang;
    }
  }

  // Redirect root "/" to "/de" if browser prefers German, otherwise stay "/"
  if (pathname === "/") {
    if (browserLocale === "de") {
      const url = req.nextUrl.clone();
      url.pathname = "/de";
      return NextResponse.redirect(url);
    }
    // else default EN → just allow "/"
    return NextResponse.next();
  }

  // For other non-locale paths, redirect to default EN
  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
