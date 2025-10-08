import styles from "../musicians.module.css";
import Image from "next/image";

export default function TamariskaKristanto({ id }: { id: string }) {
  return (
    <section id={id}>
      <div className={styles.artistName}>
        <p>Tamariska Kristianto</p>
        <p className={styles.artistIntrument}>Violin</p>
      </div>
      <div className={styles.artistDescription}>
        <div>
          Tamariska Kristianto is an Indonesian violinist who began studying the
          violin in 2008. She has participated in numerous masterclasses and
          received several prestigious awards, including first place at the 2014
          violin competition in Semarang. In 2016, she was the soloist in the
          &ldquo;Simfoni Pemuda&rdquo; concert at Aula Simfonia Jakarta and has
          given solo concerts in 2015 and 2023. Tamariska has also been active
          in various musical ensembles, performing with orchestras and chamber
          groups in different formations such as quartets, trios, duos, and
          quintets. She graduated from the University of Music, Drama, and Media
          Hanover (HMTM Hannover).
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
    </section>
  );
}
