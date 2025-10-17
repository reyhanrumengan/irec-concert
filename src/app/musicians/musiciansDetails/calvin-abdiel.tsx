import styles from "../musicians.module.css";
import Image from "next/image";

export default function CalvinAbdiel({ id }: { id: string }) {
  return (
    <section id={id}>
      <div className={styles.artistName}>
        <p>Calvin Abdiel</p>
        <p className={styles.artistIntrument}>Piano</p>
      </div>

      <div className={styles.artistDescription}>
        <div>
          Calvin Abdiel, an Indonesian-Australian pianist, was born in Indonesia
          in 2001 and showed an early passion for classical music. After moving
          to Australia in 2011, he continued his musical education at the Sydney
          Conservatorium, where he completed his Bachelor of Music (Performance)
          with First Class Honours under the guidance of Natalia Ricci.
        </div>
        <div>
          After obtaining a Master of Arts degree under Prof. Eldar Nebolsin at
          the HfM Hanns Eisler Berlin, supported by the DAAD Postgraduate
          Scholarship and the SCM George and Margaret Henderson Overseas
          Postgraduate Scholarship, Calvin is currently undertaking
          Konzertexamen in HfMT Hamburg under Prof. Stepan Simonian.
        </div>
        <div>
          Calvin has won numerous prizes at international competitions,
          including the George Frederick Boyle Third Prize and the Nancy Weir
          Best Australian Pianist Prize at the Sydney International Piano
          Competition 2021. Following the competition, he embarked on a debut
          recital tour across Australia. Other awards include 2nd Prize at the
          International Competition for Young Pianists &ldquo;Steps to
          Mastery&rdquo; in 2017 and 1st Prize at the Ananda Sukarlan Award
          International Piano Competition in 2020. He has performed with
          renowned orchestras such as the St. Petersburg State Capella Symphony
          Orchestra and the Queensland Symphony Orchestra, playing
          Prokofiev&rsquo;s Piano Concerto No. 4 at the opening concert of the
          G20 Orchestra 2022. Calvin has given concerts in several countries,
          including Australia, Austria, Russia, and Germany, and has
          participated in major festivals.
        </div>
        <div>
          His live performances in Australia have been recorded by ABC Classic
          FM and Fine Music FM. In June 2024, he released his debut CD, Themes
          and Variations, on Eloquence and Decca Australia.
        </div>
        <div>
          Alongside his concert career, Calvin is actively involved in music
          ministry and choir training at IREC Berlin. Previously, he also served
          as conductor of the youth orchestra of IREC Sydney, the Cantate Deo
          Chamber Orchestra.
        </div>

        <Image
          width={1080}
          height={720}
          className={styles.artistImage}
          src="/artist-calvin.jpg"
          alt="Calvin's Photo"
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
