import styles from "./footer.module.css";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

type FooterProps = {
  dict: any;
};

export default function Footer({ dict }: FooterProps) {
  const t = dict.footer;
  return (
    <>
      <div className={styles.containerWidth}>
        <div className={styles.flexContainer}>
          <div className={styles.socialMedia}>
            <div>
              <Link
                href="https://www.instagram.com/irec.berlin/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagram}
              >
                <IconBrandInstagram
                  stroke={1.5}
                  width="48"
                  height="48"
                  color="var(--color-primary)"
                />
                {/* <span className={styles.instagramLink}>IREC in Hamburg</span> */}
              </Link>
            </div>

            <div>
              <Link
                href="https://www.youtube.com/@kristantobilly"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.youtube}
              >
                <IconBrandYoutubeFilled
                  width="48"
                  height="48"
                  color="var(--color-primary)"
                />
                {/* <span className={styles.youtubeLink}>IREC in Europe</span> */}
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
              {t["learn-more"]}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
