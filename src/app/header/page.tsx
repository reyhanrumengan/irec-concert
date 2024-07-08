import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import MenuBurger from "../menuBurger/page";

export default function Header() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.navigation}>
        <Link href="/">
          <Image
            width={1080}
            height={720}
            src="/logo.svg"
            alt="Logo"
            className={styles.logo}
            layout="responsive"
          />
        </Link>
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

        <MenuBurger />
      </div>
    </div>
  );
}
