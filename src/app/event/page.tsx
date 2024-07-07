import styles from "./event.module.css";
import Image from "next/image";

export default function Event() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.information}>
        <div>
          <h1 className={styles.pageTitle}>Event Information</h1>

          <div className={styles.concertTitle}>
            <p className={styles.textSmall}>Music Concert</p>
            <p>Kühlender Klang</p>
            <p style={{ color: "#F96401" }}>vor dem Herbst</p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textBig}>31 August 2024</p>
            <p className={styles.textSmall}>Saturday, 15:00 CEST</p>
          </div>
          <div style={{ color: "#F96401" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textBig}>St. Matthäus-Kirche </p>
            <p className={styles.textSmall}>Matthäikirchplatz, 10785 Berlin</p>
          </div>

          <div style={{ color: "#F96401" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textMedium}>CLARA SCHUMANN</p>
            <p className={styles.textMedium}>JEAN-PHILLIPE RAMEAU</p>
            <p className={styles.textMedium}>DIETRICH BUXTEHUDE</p>
          </div>

          <div style={{ color: "#F96401" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>
          <div className={styles.textContainer}>
            <p className={styles.textMedium}>IREC Europe Chor</p>
            <p className={styles.textMedium}>Calvin Abdiel Tambunan, Klavier</p>
            <p className={styles.textMedium}>Tamariska Kristianto, Violine</p>
            <p className={styles.textMedium}>Hannah Jonina Ivy, Violine</p>
            <div className={styles.leitung}>
              <p
                className={styles.textMedium}
                style={{ fontStyle: "italic", fontWeight: "400" }}
              >
                Leitung:
              </p>
              <p className={styles.textMedium}>Billy Kristanto</p>
            </div>
          </div>
          <div style={{ color: "#F96401" }}>
            • • • • • • • • • • • • • • • • • • • • • • • • •
          </div>
        </div>
      </div>
    </div>
  );
}
