import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.navigation}>
        <Image
          width={60}
          height={60}
          src="/logo.svg"
          alt="Logo"
          className={styles.logo}
        />
        <div style={{ flex: "1 1 0px" }}></div>

        <Link className={styles.navigationItem} href="/">
          Home
        </Link>
        <Link className={styles.navigationItem} href="/event">
          Event
        </Link>
        <Link className={styles.navigationItem} href="/artist">
          Artist
        </Link>
        <Link className={styles.navigationItem} href="/program">
          Program
        </Link>
      </div>
    </div>
  );
}
