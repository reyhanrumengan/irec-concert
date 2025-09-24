"use client";

import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import MenuBurger from "../menuBurger/page";
import { Button } from "@mantine/core";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "../LocaleSwitcher";

type HeaderProps = {
  dict: any;
};

export default function Header({ dict }: HeaderProps) {
  const pathname = usePathname() || "/";
  const LOCALES = ["en", "de"];
  // Extract the first segment
  const currentLocale = pathname.split("/")[1];
  const localePrefix = LOCALES.includes(currentLocale)
    ? `/${currentLocale}`
    : "/en";

  const t = dict.navigation;

  const hideRSVPButton = pathname !== "/rsvp" && pathname !== "/rsvp-response";

  return (
    <div className={styles.headerMobileContainer}>
      <div className={styles.containerWidth}>
        <div className={styles.navigation}>
          <Link href="/" className={styles.logoContainer}>
            <Image
              width={1080}
              height={720}
              src="/logo-black.png"
              alt="Logo"
              className={styles.irecLogo}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />

            <Image
              width={1080}
              height={720}
              src="/berlin-concert-logo.png"
              alt="Logo"
              className={styles.themeLogo}
              sizes="100vw"
              // style={{
              //   width: "80%",
              //   height: "auto",
              // }}
              style={{ display: "none" }}
            />

            {/* <div className={styles.logoTextContainer}>
              <p className={styles.logoText1}>Baroque Blossoms</p>
              <p className={styles.logoText2}>Konzert zum Frühlingsbeginn</p>
            </div> */}
          </Link>

          <div style={{ flex: "1 1 0px" }}></div>
          {hideRSVPButton && (
            <div className={styles.rsvp}>
              <Link href="/rsvp">
                <Button
                  variant="filled"
                  color="var(--color-primary)"
                  radius="xl"
                  size="md"
                  classNames={{
                    root: styles.buttonRoot,
                    label: styles.buttonLabel,
                  }}
                >
                  RSVP HERE
                </Button>
              </Link>
            </div>
          )}
          <div style={{ flex: "1 1 0px" }}></div>

          <Link className={styles.navigationItem} href={`${localePrefix}/`}>
            {t["home"]}
          </Link>
          <Link
            className={styles.navigationItem}
            href={`${localePrefix}/about`}
          >
            {t["about"]}
          </Link>
          {/* <Link className={styles.navigationItem} href="/program">
            Program
          </Link> */}
          {/* <Link className={styles.navigationItem} href="/program-book">
            Program Book
          </Link> */}
          {/* <Link className={styles.navigationItem} href="/musicians">
            Musicians
          </Link> */}
          <Link
            className={styles.navigationItem}
            href={`${localePrefix}/donation`}
          >
            {t["donation"]}
          </Link>
          <LocaleSwitcher />

          <div className={styles.menuBurger}>
            <MenuBurger />
          </div>
        </div>
      </div>
    </div>
  );
}
