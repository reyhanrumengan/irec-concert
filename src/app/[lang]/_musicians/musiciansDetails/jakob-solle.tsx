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
        <div>
          Jakob Solle began playing the cello at the age of five. He received
          his first lessons at the Erfurt Music School before being admitted to
          the Schloss Belvedere Music High School in Weimar in 2016. There, he
          was a student of Prof. Tim Stolzenburg and also received string
          quartet lessons from Beate Hartmann (Klenke Quartet). Since 2019,
          Jakob has been a scholarship holder at LiveMusicNow.
        </div>
        <div>
          He gained important experience through masterclasses with Wolfgang
          Emanuel Schmidt, Troels Svane, David Geringas, Wen-Sinn Yang, Corina
          Belcea, and Harald Schoneweg.
        </div>
        <div>
          Jakob was a member of the National Youth Orchestra of Germany and
          acquired experience in historical performance practice through courses
          at the Academy for Ancient Music Berlin as well as with self-founded
          ensembles.
        </div>
        <div>
          Since 2021, he has been studying with Prof. Sebastian Klinger and
          Alexey Stadler in Hamburg. In 2023, he won first prize in the Hamburg
          Competition of the Elise Meyer Foundation and was a finalist in 2024
          at the XXIV International Johann Sebastian Bach Competition in
          Leipzig.
        </div>
        <Image
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
        />
      </div>
    </>
  );
}
