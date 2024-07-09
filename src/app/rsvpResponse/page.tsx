import Image from "next/image";
import styles from "./rsvpResponse.module.css";
import Link from "next/link";

export default function RSVPResponse() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.rsvpContainer}>
        <div className={styles.rsvp}>
          <p className={styles.pageTitle}>RSVP</p>
        </div>
      </div>
    </div>
  );
}
