import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import MenuBurger from "../menuBurger/page";

export default function Header() {
  return (
    <div className={styles.headerMobileContainer}>
      <div className={styles.containerWidth}>
        <div className={styles.navigation}>
          <Link href="/" className={styles.logoContainer}>
            <Image
              width={1080}
              height={720}
              src="/logo.svg"
              alt="Logo"
              className={styles.irecLogo}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />

            <Image
              width={1080}
              height={720}
              src="/hamburg-logo-concert-2.svg"
              alt="Logo"
              className={styles.themeLogo}
              sizes="100vw"
              // style={{
              //   width: "80%",
              //   height: "auto",
              // }}
            />

            {/* <div className={styles.logoTextContainer}>
              <p className={styles.logoText1}>Baroque Blossoms</p>
              <p className={styles.logoText2}>Konzert zum Frühlingsbeginn</p>
            </div> */}
          </Link>

          <div style={{ flex: "1 1 0px" }}></div>

          <Link className={styles.navigationItem} href="/">
            Home
          </Link>
          <Link className={styles.navigationItem} href="/about">
            About
          </Link>
          <Link className={styles.navigationItem} href="/program">
            Program
          </Link>
          {/* <Link className={styles.navigationItem} href="/musicians">
            Musicians
          </Link> */}
          <Link className={styles.navigationItem} href="/donation">
            Donation
          </Link>

          <div className={styles.menuBurger}>
            <MenuBurger />
          </div>
        </div>
      </div>
    </div>
  );
}
