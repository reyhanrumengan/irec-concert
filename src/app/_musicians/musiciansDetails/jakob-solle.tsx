import styles from "../musicians.module.css";
import Image from "next/image";

export default function JakobSolle() {
  return (
    <>
      <div className={styles.artistName}>
        <p>Jakob Solle</p>
        <p className={styles.artistIntrument}>Baroque Cello</p>
      </div>
      <div className={styles.artistDescription}>
        This is the description of Jakob Solle.
        {/* <Image
          width={1080}
          height={720}
          className={styles.artistImage}
          src="/artist-tamariska.png"
          alt="Tamariska's Photo"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        /> */}
      </div>
    </>
  );
}
