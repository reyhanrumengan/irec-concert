import Image from "next/image";
import styles from "./rsvp.module.css";
import Link from "next/link";

export default function RSVP() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.rsvp}></div>
    </div>
  );
}
