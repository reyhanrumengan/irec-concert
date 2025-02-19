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
        <div>
          Petra Tjandra (soprano) was born in Berlin and grew up in Indonesia.
          She began her piano lessons at the age of 5 and has enjoyed singing
          since she was little, starting her vocal training at the age of 7. In
          2017, she began her Bachelor&rsquo;s studies at the Lübeck University
          of Music, focusing on music education with a major in singing under
          Isabel Schaarschmidt and specializing in Elementary Music Education
          with Prof. Marno Schulze. In February 2024, she completed her
          Master&rsquo;s degree at the University of Arts Bremen, where she
          focused on Elementary Music Education with Prof. Barbara Stiller and
          specialized in Early Music Vocal Performance with Bettina Pahn. She
          received DAAD scholarships in 2020 and 2022 and has participated in
          numerous masterclasses in singing and music education.
        </div>
        <div>
          Petra works as a children&rsquo;s choir director at Martin-Luther
          Church Alsterdorf and as a music educator at the State Youth Music
          School Hamburg, as well as a music educator for the &quot;Singende
          Kindergarten&quot; project initiated by DM. Her heart lies in singing
          and working with children, and she is passionate about providing them
          with beautiful musical experiences during their childhood.
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
