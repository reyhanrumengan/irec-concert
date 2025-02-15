"use client";

import Image from "next/image";
import styles from "./homepage.module.css";
import Link from "next/link";
import { Button } from "@mantine/core";

export default function Homepage() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.imageContainer}>
        <div className={styles.posterWrapper}>
          {/* RSVP Button */}
          <div className={styles.rsvp}>
            <Link href="/rsvp">
              <Button
                variant="filled"
                color="var(--color-green)"
                radius="xl"
                size="md"
                classNames={{
                  label: styles.buttonLabel,
                }}
              >
                RSVP HERE
              </Button>
            </Link>
            <Link href="/about" className={styles.moreInfo}>
              <div>more info</div>
            </Link>
          </div>

          <Image
            width={760}
            height={760}
            src="/logo2.svg"
            alt="Concert Poster"
            className={styles.poster}
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
