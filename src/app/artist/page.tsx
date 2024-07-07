import styles from "./artist.module.css";
import Image from "next/image";

export default function Artist() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.artistContainer}></div>
    </div>
  );
}
