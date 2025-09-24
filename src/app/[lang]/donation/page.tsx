import Link from "next/link";
import styles from "./donation.module.css";
import Image from "next/image";

export default function Donation() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.pageTitle}>Donation</h1>

          <div className={styles.container2}>
            <p className={styles.textMedium}>
              You can support us through the following methods:
            </p>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textBig}>Bank Transfer</p>

            <p className={styles.textMedium}>
              <strong>Recipient:</strong> IREC Berlin e.V.
            </p>
            <p className={styles.textMedium}>
              <strong>IBAN:</strong> IBAN: DE92 1007 0024 0025 7576 00
            </p>
            {/* <p className={styles.textMedium}>
              <strong>BIC:</strong> GENODEF1HH2
            </p>
            <p className={styles.textMedium}>Hamburger Volksbank e.G</p> */}
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textBig}>Paypal</p>

            <Image
              width={720}
              height={720}
              className={styles.image}
              src="/qr-code-paypal.jpeg"
              alt="Paypal"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
