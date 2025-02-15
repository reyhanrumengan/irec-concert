import styles from "../musicians.module.css";
import Image from "next/image";

export default function TamariskaKristanto() {
  return (
    <>
      <div className={styles.artistName}>
        <p>Tamariska Kristianto</p>
        <p className={styles.artistIntrument}>Violin</p>
      </div>
      <div className={styles.artistDescription}>
        Tamariska Kristianto is an Indonesian violinist who has been studying
        her instrument since 2008. She has participated in numerous master
        classes and has received prestigious awards, including first place at
        the 2014 violin competition in Semarang. She was the soloist in the
        &rdquo;Simfoni Pemuda&rdquo; concert in 2016 at the Aula Simfonia
        Jakarta and gave solo concerts in 2015 and 2023. Tamariska is also
        active in various musical ensembles, including orchestras and chamber
        music groups in different formations such as quartets, trios, duos, and
        quintets. She is currently continuing her studies at the University of
        Music, Drama, and Media Hanover (HMTM Hannover).
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
