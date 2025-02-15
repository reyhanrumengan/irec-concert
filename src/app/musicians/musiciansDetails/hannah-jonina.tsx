import styles from "../musicians.module.css";
import Image from "next/image";

export default function HannahJonina() {
  return (
    <>
      <div className={styles.artistName}>
        <p>Hannah Jonina Ivy</p>
        <p className={styles.artistIntrument}>Violin</p>
      </div>
      <div className={styles.artistDescription}>
        Hannah Jonina Ivy was born in Indonesia, began her violin studies at the
        age of twelve. She is currently pursuing her musical degree at the
        Hochschule für Musik, Theater und Medien Hannover. Hannah had
        participated in numerous masterclasses and received private lessons from
        various teachers. She is not only an active performer, frequently
        playing in orchestras and ensembles, but also passionate about teaching.
        Hannah is also active in IREC Europe, where she mainly contributes as a
        choir member and musician.
        <Image
          width={1080}
          height={720}
          className={styles.artistImage}
          src="/artist-hannah3.png"
          alt="Hannah's Photo"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </>
  );
}
