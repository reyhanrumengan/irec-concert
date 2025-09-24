// app/[lang]/dictionaries.ts
import "server-only";

type Dict = Record<string, any>;

const loaders: Record<string, () => Promise<Dict>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  de: () => import("./dictionaries/de.json").then((m) => m.default),
};

export async function getDictionary(locale: "en" | "de") {
  const loader = loaders[locale];
  if (!loader) throw new Error("Unsupported locale: " + locale);
  return loader();
}
