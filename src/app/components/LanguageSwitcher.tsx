"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button, Group } from "@mantine/core";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const isDe = pathname.startsWith("/de");
  const restOfPath = isDe ? pathname.slice(3) : pathname; // remove "/de"

  const switchToEn = () => router.push(restOfPath || "/");
  const switchToDe = () => router.push(`/de${restOfPath}`);

  return (
    <Group>
      <Button
        size="xs"
        variant={!isDe ? "filled" : "outline"}
        onClick={switchToEn}
      >
        EN
      </Button>
      <Button
        size="xs"
        variant={isDe ? "filled" : "outline"}
        onClick={switchToDe}
      >
        DE
      </Button>
    </Group>
  );
}
