import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.information}>
        <div>
          <h1 className={styles.pageTitle}>Event Information</h1>

          <div className={styles.concertTitle}>
            <p className={styles.textSmall}>Music Concert</p>
            <p>Wärmender Klang </p>
            <p style={{ color: "var(--color-orange)" }}>zum Frühlingsbeginn</p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textBig}>29 March 2025</p>
            <p className={styles.textSmall}>Saturday, 15:00 CET</p>
          </div>
          <div style={{ color: "var(--color-orange)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textBig}>
              Martin-Luther-Kirche - 
            </p>
            <p className={styles.textBig}>
              Martin-Luther-Gemeinde zu
              Hamburg-Alsterdorf
            </p>
            <p className={styles.textSmall}>Bebelallee 156, 22297 Hamburg</p>
          </div>

          <div style={{ color: "var(--color-orange)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textMedium}>CLARA SCHUMANN</p>
            <p className={styles.textMedium}>JEAN-PHILLIPE RAMEAU</p>
            <p className={styles.textMedium}>DIETRICH BUXTEHUDE</p>
          </div>

          <div style={{ color: "var(--color-orange)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>
          <div className={styles.textContainer}>
            <p className={styles.textSmall}>IREC Europe Chor</p>
            <p className={styles.textSmall}>Calvin Abdiel Tambunan, Klavier</p>
            <p className={styles.textSmall}>Tamariska Kristianto, Violine</p>
            <p className={styles.textSmall}>Hannah Jonina Ivy, Violine</p>
            <div className={styles.leitung}>
              <p
                className={styles.textSmall}
                style={{ fontStyle: "italic", fontWeight: "400" }}
              >
                Leitung:
              </p>
              <p className={styles.textSmall}>Billy Kristanto</p>
            </div>
          </div>
          <div style={{ color: "var(--color-orange)" }}>
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
          <div style={{ color: "var(--color-orange)" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>
        </div>
      </div>
    </div>
  );
}
