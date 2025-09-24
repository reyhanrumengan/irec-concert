"use client";

import Image from "next/image";
import styles from "./homepage.module.css";
import Link from "next/link";
import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Homepage() {
  const isPortrait = useMediaQuery("(max-width: 850px)");

  return (
    <div className={styles.containerWidth}>
      <div className={styles.imageContainer}>
        <div className={styles.posterWrapper}>
          {/* RSVP Button */}
          {/* <div className={styles.rsvp}>
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
            <Link href="/about" className={styles.moreInfo}>
              <div>more info</div>
            </Link>
          </div> */}

          <Image
            width={1920}
            height={1080}
            src={isPortrait ? "/poster-portrait.png" : "/poster-landscape.png"}
            alt="Concert performing Bach, Mozart, Smetana, and Indonesian Traditional Music"
            className={styles.poster}
            priority
            sizes="100vw"
            style={{
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
