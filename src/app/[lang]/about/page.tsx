import Link from "next/link";
import styles from "./about.module.css";
import { getDictionary } from "../dictionaries";

export default async function About({
  params,
}: {
  params: { lang: "en" | "de" };
}) {
  const dict = await getDictionary(params.lang);
  const t = dict.about;

  return (
    <div className={styles.containerWidth}>
      <div className={styles.information}>
        <div>
          <h1 className={styles.pageTitle}>{t["page-title"]}</h1>

          <div className={styles.concertTitle}>
            <p className={styles.textSmall}>{t["subtitle"]}</p>
            <p style={{ color: "var(--color-primary)" }}>
              A Musical Pilgrimage
            </p>
            <p>From Europe to Asia</p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textBig}>18 October 2026</p>
            <p className={styles.textSmall}>Saturday, 16:00 CEST</p>
          </div>
          <div style={{ color: "var(--color-primary)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textBig}>Kaiser-Friedrich-Gedächniskirche</p>
            <p className={styles.textSmall}>Händelallee 20, 10557 Berlin</p>
          </div>

          <div style={{ color: "var(--color-primary)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textMedium}>JOHANN SEBASTIAN BACH</p>
            <p className={styles.textMedium}>WOLFGANG AMADEUS MOZART</p>
            <p className={styles.textMedium}>
              INDONESIAN TRADITIONAL MUSIC (Arr. Calvin Abdiel)
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
                Harpsichord & Conductor:
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
