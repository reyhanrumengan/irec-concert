import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={styles.containerWidth}>
        <div className={styles.flexContainer}>
          <div className={styles.socialMedia}>
            <div>
              <Link
                href="https://www.instagram.com/irec.europe/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagram}
              >
                <Image
                  width={32}
                  height={32}
                  className={styles.instagramIcon}
                  alt="Instagram"
                  src="/instagram.svg"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <span className={styles.instagramLink}>IREC.EUROPE</span>
              </Link>
            </div>

            <div>
              <Link
                href="https://www.youtube.com/@irecineurope"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.youtube}
              >
                <Image
                  width={32}
                  height={22.5}
                  className={styles.youtubeIcon}
                  alt="Youtube"
                  src="/youTube.svg"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <span className={styles.youtubeLink}>IREC in Europe</span>
              </Link>
            </div>
          </div>
          <div style={{ flex: "1 1 0px" }}></div>
          <div>
            <Link
              href="https://irec-berlin.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.learnAboutIRECLink}
            >
              Learn more about IREC Berlin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
