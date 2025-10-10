import Link from "next/link";
import styles from "./about.module.css";
import { IconExternalLink } from "@tabler/icons-react";

export default function About() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.information}>
        <div>
          <h1 className={styles.pageTitle}>Event Information</h1>

          <div className={styles.concertTitle}>
            <p className={styles.textSmall}>Music Concert</p>
            <p style={{ color: "var(--color-primary)" }}>
              A Musical Pilgrimage
            </p>
            <p>From Europe to Asia</p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textBig}>18 October 2025</p>
            <p className={styles.textSmall}>Saturday, 16:00 CEST</p>
          </div>
          <div style={{ color: "var(--color-primary)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>

          <div className={styles.textContainer}>
            <a
              href="https://maps.app.goo.gl/hWd4zLJH2D29WgUJ8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "6px" }}
              >
                <p className={styles.textBig}>
                  Kaiser-Friedrich-Gedächniskirche
                </p>
                <IconExternalLink />
              </div>

              <p className={styles.textSmall}>Händelallee 20, 10557 Berlin</p>
            </a>
          </div>

          <div style={{ color: "var(--color-primary)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textMedium}>JOHANN SEBASTIAN BACH</p>
            <p className={styles.textMedium}>WOLFGANG AMADEUS MOZART</p>
            <p className={styles.textMedium}>Bedřich Smetana</p>
            <p className={styles.textMedium}>Claudio Monteverdi</p>
            <p className={styles.textMedium}>Ko Matsushita</p>

            <p className={styles.textMedium} style={{ textTransform: "none" }}>
              MEDLEY INDONESIAN FOLK SONGS (Arr. Calvin Abdiel)
            </p>
          </div>

          <div style={{ color: "var(--color-primary)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>
          <div className={styles.textContainer}>
            <p className={styles.textSmall}>IREC Europe Choir</p>
            <p className={styles.textSmall}>Calvin Abdiel, Piano</p>
            <p className={styles.textSmall}>Tamariska Kristianto, Violin</p>
            <p className={styles.textSmall}>Hannah Jonina Ivy, Violin</p>

            <div className={styles.leitung}>
              <p
                className={styles.textSmall}
                style={{ fontStyle: "italic", fontWeight: "400" }}
              >
                Conductor:
              </p>
              <p className={styles.textSmall}>Billy Kristanto</p>
            </div>
          </div>
          <div style={{ color: "var(--color-primary)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textSmall}>FREE ENTRY</p>

            <Link
              href="/donation"
              className={`${styles.textSmall} ${styles.link}`}
            >
              Donations welcome
            </Link>
          </div>
          <div style={{ color: "var(--color-primary)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>
        </div>
      </div>
    </div>
  );
}
