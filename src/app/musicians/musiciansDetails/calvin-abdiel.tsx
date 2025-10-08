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
          The Indonesian/Australian pianist Calvin Abdiel was born in 2001 in
          Indonesia. He showed interest in classical music from the age of five.
          Moving to Australia in 2011, he continued his music studies at the
          Sydney Conservatorium High School and later at the Sydney
          Conservatorium. He completed his Bachelor of Music (Performance)
          degree with First Class Honours at the Sydney Conservatorium of Music
          under Natalia Ricci who remained his piano teacher and mentor
          throughout his formative years. Calvin is currently undertaking his
          Master of Arts degree with Prof. Eldar Nebolsin at the Hochschule für
          Musik Hanns Eisler with the assistance of a DAAD Postgraduate Music
          Scholarship and a SCM George and Margaret Henderson Overseas
          Postgraduate Scholarship.
        </div>
        <div>
          Calvin has had masterclasses with guest artists such as Orli Shaham,
          Justas Dvarionas, Michael Endres and Vyacheslav Gryaznov at the Sydney
          Conservatorium as well as Angela Hewitt in a Musica Viva sponsored
          masterclass. He&rsquo;s a scholarship holder of the Music Academy of
          Liechtenstein and takes part in the intensive weeks and activities
          held by the academy.
        </div>
        <div>
          Calvin received several prizes at national and international
          competitions. Among others, he won the “George Frederick Boyle Third
          Prize” and the “Nancy Weir Best Australian Pianist Prize” in the
          prestigious “Sydney International Piano Competition” (the Sydney) as
          its youngest competitor in 2021. He also received the “Australian
          Elizabethan Theatre Trust Prize” of an overseas scholarship to further
          his musical career. Following the competition, he embarked on a debut
          recital tour of Australia, presented by the Sydney. Calvin won the 2nd
          prize at the “International Competition for Young Pianists
          &rsquo;Steps to Mastery&rsquo;” in St Petersburg in 2017, the 2nd
          prize and a string of awards (Concerto Prize, Queensland Symphony
          Orchestra Vote Prize and Audience Prize) at the “Lev Vlassenko Piano
          Competition” as its youngest participant in Australia in 2017, the 3rd
          prize in the “Val de Travers International Piano Competition” in
          Switzerland in 2018 and the 1stprize in the “Ananda Sukarlan Award
          International Piano Competition” in Jakarta in 2020. As the winner of
          the 2021 “SCM Piano Concerto Competition”, Calvin performed
          Prokofiev&rsquo;s Piano Concerto No. 3 in May 2022 with the Sydney
          Conservatorium Symphony Orchestra. In the same year, he was the
          recipient of the “Frank Albert Prize for Music” at the Sydney
          Conservatorium.
        </div>
        <div>
          Calvin made his orchestral debut in 2017 with the St Petersburg State
          Capella Symphony Orchestra and gave subsequent performances with the
          Queensland Symphony Orchestra and the Swiss orchestra Les Chambrites.
          He has worked with conductors including Anatoliy Rybalko, Gerard
          Schwartz, Richard Davis, Roger Benedict and Paul Terracini. In 2022,
          he performed Prokofiev&rsquo;s Piano Concerto No. 4 as the soloist in
          the inaugural concert of the G20 Orchestra at the Candi Borobudur
          (UNESCO World Heritage Site), which was broadcasted on the national
          television in Indonesia (TVRI) and streamed globally online.
        </div>
        <div>
          Calvin has given high profile performances in numerous countries,
          including Australia, Austria, Russia, Indonesia, Germany, Denmark, and
          Switzerland. He&rsquo;s an avid chamber musician and has performed in
          the Canberra International Music Festival in 2021 and the Out West
          Piano Festival in 2023. He was the founding member and former
          conductor of the youth orchestra Cantate Deo Chamber Orchestra from
          2020 to 2023.
        </div>
        <div>
          His live performances in Australia have been recorded by ABC Classic
          FM and Fine Music FM.
        </div>
        <div>
          Calvin&rsquo;s musical activities throughout his education have been
          supported by the SCM Henderson Scholarships, Sydney Eisteddfod Kawai
          Piano Scholarship, Theme and Variation Foundation, Institut Francais
          d&rsquo;Indonesie (IFI), Australian Elizabethan Theatre Trust, and the
          International Piano Foundation “Theo Lieven”. He was invited as
          scholarship holder to attend the Lieven Piano Summer School in 2022
          and 2023, where he worked with the pianists Andreas Steier, Lilya
          Zilberstein, Paul Roberts, Davide Cabassi, Arie Vardi, Alexei Volodin,
          Alon Goldstein, and Robert Mcdonald. In 2023, a scholarship from IFI
          enabled him to study the piano works of Ravel with Pascal Roge in
          Nice, France.
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
