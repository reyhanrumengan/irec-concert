import styles from "../musicians.module.css";
import Image from "next/image";

export default function PetraPriscilla() {
  return (
    <>
      <div className={styles.artistName}>
        <p>Petra Priscilla Tjandra</p>
        <p className={styles.artistIntrument}>Soprano</p>
      </div>
      <div className={styles.artistDescription}>
        This is the description of Petra Priscilla Tjandra.
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
