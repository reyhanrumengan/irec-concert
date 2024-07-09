"use client";

import Image from "next/legacy/image";
import styles from "./homepage.module.css";
import Link from "next/link";
import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Homepage() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.imageContainer}>
        {/* RSVP Button */}
        <Link href="/rsvp" className={styles.rsvp}>
          <Button
            variant="filled"
            color="rgba(249, 100, 1, 1)"
            radius="xl"
            size="md"
            classNames={{
              label: styles.buttonLabel,
            }}
          >
            RSVP HERE
          </Button>
        </Link>
        <Image
          width={760}
          height={760}
          src="/poster-2.png"
          alt="Concert Poster"
          className={styles.poster}
          layout="responsive"
          priority
        />
      </div>
    </div>
  );
}
