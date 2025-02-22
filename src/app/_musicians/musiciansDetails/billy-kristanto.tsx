import styles from "../musicians.module.css";
import Image from "next/image";

export default function BillyKristanto() {
  return (
    <>
      {" "}
      <div className={styles.artistName}>
        <p>Billy Kristanto</p>
        <p className={styles.artistIntrument}>Harpsichord & Conductor</p>
      </div>
      <div className={styles.artistDescription}>
        <div>
          Billy Kristanto graduated from Hochschule der Künste in Berlin,
          Germany, where he majored in harpsichord under Mitzi Meyerson. He
          furthered his studies in harpsichord and fortepiano under Ton Koopman
          and Stanley Hoogland, and received his postgraduate certificate from
          The Royal Conservatory in The Hague, Netherlands. In 2009, he
          successfully defended his doctoral thesis titled “Musical Settings of
          Psalm 51 in Germany ca. 1600-1750 in the Perspective of Reformational
          Music Aesthetics” under the guidance of early music specialist Prof.
          Dr. Silke Leopold at the University of Heidelberg, Germany. His second
          doctoral degree in systematic theology was conferred in 2011 following
          the completion of his dissertation on &quot;The Glory of God in the
          Thought of John Calvin&quot;.
        </div>
        <div>
          Particularly interested in historically-informed practice, Billy has
          given musical direction to several oratorio societies and performances
          in major cities in Indonesia, Singapore, Hamburg, and Berlin. He also
          lectures at The International Reformed Evangelical Seminary.
        </div>
        <div>
          Billy also writes articles on music for international journal,
          presents papers on music at international conferences. Among his
          writings are “Reformation and Music” (Unio cum Christo 3 [2017]), “Pop
          Music, Pragmatism, and Christianity” (Ethos Institute, 2017), The
          Place of Music in the Church and in Society (Singapore: Sower
          Publishers, 2018), “Calvin dan Potensi Pemikirannya bagi Ibadah
          Kristen” (Veritas 19/2 [2020]), “Exil und religiose Identität in
          einigen Kantaten von Johann Sebastian Bach” (European Journal of
          Theology 29/2 [2020)”, “The Beauty of Music” (Ethos Institute, 2022),
          “Ars Moriendi, The Art of Dying” (Ethos Institute, 2022), “J. S. Bachs
          Sterbekantaten im Lichte der lutherisch-orthodoxen und
          spätmittelalterlichen ars moriendi” (Evangelische Theologie 83/6
          [2023]), and “Mirror, mirror on the wall, who&rsquo;s the most
          beautiful of them all?” (Ethos Institute, 2024).
        </div>
        <div>
          As an ordained pastor at Gereja Reformed Injili Indonesia, Billy
          currently serves the International Reformed Evangelical Church in
          Berlin, Hamburg, Munich, Switzerland, and Stockholm (irec-europe.org).
        </div>
        <Image
          width={1080}
          height={720}
          className={styles.artistImage}
          src="/artist-billy.png"
          alt="Billy's Photo"
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
