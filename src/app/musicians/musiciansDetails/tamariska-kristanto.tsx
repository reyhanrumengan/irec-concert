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
          Tamariska Kristianto is an Indonesian violinist and violin teacher at
          the Leo Borchard Music School in Berlin. She teaches children with
          great passion, combining musical precision with playful creativity to
          inspire a love of music from an early age.
        </div>
        <div>
          Since 2008, she has devoted herself to the violin and has gained
          valuable experience through masterclasses with renowned musicians such
          as Ulf Schneider, Cho-Liang Lin, Gia Jashvili, Francesco Parrino,
          Jahja Ling, and Hao Li Lin. She has received several awards, including
          first prize at the 2014 Violin Competition in Semarang.
        </div>
        <div>
          As a soloist, she performed at the Simfoni Pemuda (Youth Symphony
          Concert) in the Aula Simfonia Jakarta in 2016 and gave solo recitals
          in 2015 and 2023. She also performs regularly in various chamber music
          formations, including quartets, trios, duos, and quintets.
        </div>
        <div>
          After completing her studies at Hochschule für Musik, Theater und
          Medien Hannover, Tamariska has been actively involved at IREC Berlin,
          where she serves as both pianist and violinist and leads the
          children&rsquo;s ensemble.
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
