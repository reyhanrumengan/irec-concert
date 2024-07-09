import styles from "./rsvp-response.module.css";
import Link from "next/link";

export default function RSVPResponse() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.rsvpContainer}>
        <div className={styles.rsvp}>
          <p className={styles.pageTitle}>RSVP</p>
          <div className={styles.text}>
            <p>Thank you for your RSVP!</p>
          </div>
          <div className={styles.text}>
            <p>See you at the event!</p>
            <p>
              For more information, check{" "}
              <Link
                href="/about"
                style={{ color: "#f96401", textDecoration: "none" }}
              >
                HERE
              </Link>
              .
            </p>
          </div>
          <div>
            <button className={styles.button}>
              <Link className={styles.redirect} href="/rsvp">
                Click here to make another RSVP
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
