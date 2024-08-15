import styles from "./musicians.module.css";
import Image from "next/image";

export default function Musicians() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.artistContainer}>
        <div className={styles.artist}>
          <p className={styles.pageTitle}>Artist Biography</p>

          <div className={styles.artistName}>
            <p>Billy Kristanto</p>
            <p className={styles.artistIntrument}>Cembalo & Leitung</p>
          </div>

          <div className={styles.artistDescription}>
            <div>
              Billy Kristanto graduated from Hochschule der Künste in Berlin,
              Germany, where he majored in harpsichord under Mitzi Meyerson. He
              furthered his studies in harpsichord and fortepiano under Ton
              Koopman and Stanley Hoogland, and received his postgraduate
              certificate from The Royal Conservatory in The Hague, Netherlands.
              In 2009, he successfully defended his doctoral thesis titled
              “Musical Settings of Psalm 51 in Germany ca. 1600-1750 in the
              Perspective of Reformational Music Aesthetics” under the guidance
              of early music specialist Prof. Dr. Silke Leopold at the
              University of Heidelberg, Germany. His second doctoral degree in
              systematic theology was conferred in 2011 following the completion
              of his dissertation on &quot;The Glory of God in the Thought of
              John Calvin&quot;.
            </div>
            <div>
              Particularly interested in historically-informed practice, Billy
              has given musical direction to several oratorio societies and
              performances in major cities in Indonesia, Singapore, Hamburg, and
              Berlin. He also lectures at The International Reformed Evangelical
              Seminary.
            </div>
            <div>
              Billy also writes articles on music for international journal,
              presents papers on music at international conferences. Among his
              writings are “Reformation and Music” (Unio cum Christo 3 [2017]),
              “Pop Music, Pragmatism, and Christianity” (Ethos Institute, 2017),
              The Place of Music in the Church and in Society (Singapore: Sower
              Publishers, 2018), “Calvin dan Potensi Pemikirannya bagi Ibadah
              Kristen” (Veritas 19/2 [2020]), “Exil und religiose Identität in
              einigen Kantaten von Johann Sebastian Bach” (European Journal of
              Theology 29/2 [2020)”, “The Beauty of Music” (Ethos Institute,
              2022), “Ars Moriendi, The Art of Dying” (Ethos Institute, 2022),
              “J. S. Bachs Sterbekantaten im Lichte der lutherisch-orthodoxen
              und spätmittelalterlichen ars moriendi” (Evangelische Theologie
              83/6 [2023]), and “Mirror, mirror on the wall, who&rsquo;s the
              most beautiful of them all?” (Ethos Institute, 2024).
            </div>
            <div>
              As an ordained pastor at Gereja Reformed Injili Indonesia, Billy
              currently serves the International Reformed Evangelical Church in
              Berlin, Hamburg, Munich, Switzerland, and Stockholm
              (irec-europe.org).
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

          <div className={styles.artistName}>
            <p>Calvin Abdiel</p>
            <p className={styles.artistIntrument}>Piano</p>
          </div>

          <div className={styles.artistDescription}>
            <div>
              The Indonesian/Australian pianist Calvin Abdiel was born in 2001
              in Indonesia. He showed interest in classical music from the age
              of five. Moving to Australia in 2011, he continued his music
              studies at the Sydney Conservatorium High School and later at the
              Sydney Conservatorium. He completed his Bachelor of Music
              (Performance) degree with First Class Honours at the Sydney
              Conservatorium of Music under Natalia Ricci who remained his piano
              teacher and mentor throughout his formative years. Calvin is
              currently undertaking his Master of Arts degree with Prof. Eldar
              Nebolsin at the Hochschule für Musik Hanns Eisler with the
              assistance of a DAAD Postgraduate Music Scholarship and a SCM
              George and Margaret Henderson Overseas Postgraduate Scholarship.
            </div>
            <div>
              Calvin has had masterclasses with guest artists such as Orli
              Shaham, Justas Dvarionas, Michael Endres and Vyacheslav Gryaznov
              at the Sydney Conservatorium as well as Angela Hewitt in a Musica
              Viva sponsored masterclass. He&rsquo;s a scholarship holder of the
              Music Academy of Liechtenstein and takes part in the intensive
              weeks and activities held by the academy.
            </div>
            <div>
              Calvin received several prizes at national and international
              competitions. Among others, he won the “George Frederick Boyle
              Third Prize” and the “Nancy Weir Best Australian Pianist Prize” in
              the prestigious “Sydney International Piano Competition” (the
              Sydney) as its youngest competitor in 2021. He also received the
              “Australian Elizabethan Theatre Trust Prize” of an overseas
              scholarship to further his musical career. Following the
              competition, he embarked on a debut recital tour of Australia,
              presented by the Sydney. Calvin won the 2nd prize at the
              “International Competition for Young Pianists &rsquo;Steps to
              Mastery&rsquo;” in St Petersburg in 2017, the 2nd prize and a
              string of awards (Concerto Prize, Queensland Symphony Orchestra
              Vote Prize and Audience Prize) at the “Lev Vlassenko Piano
              Competition” as its youngest participant in Australia in 2017, the
              3rd prize in the “Val de Travers International Piano Competition”
              in Switzerland in 2018 and the 1stprize in the “Ananda Sukarlan
              Award International Piano Competition” in Jakarta in 2020. As the
              winner of the 2021 “SCM Piano Concerto Competition”, Calvin
              performed Prokofiev&rsquo;s Piano Concerto No. 3 in May 2022 with
              the Sydney Conservatorium Symphony Orchestra. In the same year, he
              was the recipient of the “Frank Albert Prize for Music” at the
              Sydney Conservatorium.
            </div>
            <div>
              Calvin made his orchestral debut in 2017 with the St Petersburg
              State Capella Symphony Orchestra and gave subsequent performances
              with the Queensland Symphony Orchestra and the Swiss orchestra Les
              Chambrites. He has worked with conductors including Anatoliy
              Rybalko, Gerard Schwartz, Richard Davis, Roger Benedict and Paul
              Terracini. In 2022, he performed Prokofiev&rsquo;s Piano Concerto
              No. 4 as the soloist in the inaugural concert of the G20 Orchestra
              at the Candi Borobudur (UNESCO World Heritage Site), which was
              broadcasted on the national television in Indonesia (TVRI) and
              streamed globally online.
            </div>
            <div>
              Calvin has given high profile performances in numerous countries,
              including Australia, Austria, Russia, Indonesia, Germany, Denmark,
              and Switzerland. He&rsquo;s an avid chamber musician and has
              performed in the Canberra International Music Festival in 2021 and
              the Out West Piano Festival in 2023. He was the founding member
              and former conductor of the youth orchestra Cantate Deo Chamber
              Orchestra from 2020 to 2023.
            </div>
            <div>
              His live performances in Australia have been recorded by ABC
              Classic FM and Fine Music FM.
            </div>
            <div>
              Calvin&rsquo;s musical activities throughout his education have
              been supported by the SCM Henderson Scholarships, Sydney
              Eisteddfod Kawai Piano Scholarship, Theme and Variation
              Foundation, Institut Francais d&rsquo;Indonesie (IFI), Australian
              Elizabethan Theatre Trust, and the International Piano Foundation
              “Theo Lieven”. He was invited as scholarship holder to attend the
              Lieven Piano Summer School in 2022 and 2023, where he worked with
              the pianists Andreas Steier, Lilya Zilberstein, Paul Roberts,
              Davide Cabassi, Arie Vardi, Alexei Volodin, Alon Goldstein, and
              Robert Mcdonald. In 2023, a scholarship from IFI enabled him to
              study the piano works of Ravel with Pascal Roge in Nice, France.
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

          <div className={styles.artistName}>
            <p>Tamariska Kristianto</p>
            <p className={styles.artistIntrument}>Violin</p>
          </div>
          <div className={styles.artistDescription}>
            Tamariska Kristianto is an Indonesian violinist who has been
            studying her instrument since 2008. She has participated in numerous
            master classes and has received prestigious awards, including first
            place at the 2014 violin competition in Semarang. She was the
            soloist in the &rdquo;Simfoni Pemuda&rdquo; concert in 2016 at the
            Aula Simfonia Jakarta and gave solo concerts in 2015 and 2023.
            Tamariska is also active in various musical ensembles, including
            orchestras and chamber music groups in different formations such as
            quartets, trios, duos, and quintets. She is currently continuing her
            studies at the University of Music, Drama, and Media Hanover (HMTM
            Hannover).
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

          <div className={styles.artistName}>
            <p>Hannah Jonina Ivy</p>
            <p className={styles.artistIntrument}>Violin</p>
          </div>
          <div className={styles.artistDescription}>
            Hannah Jonina Ivy was born in Indonesia, began her violin studies at
            the age of twelve. She is currently pursuing her musical degree at
            the Hochschule für Musik, Theater und Medien Hannover. Hannah had
            participated in numerous masterclasses and received private lessons
            from various teachers. She is not only an active performer,
            frequently playing in orchestras and ensembles, but also passionate
            about teaching. Hannah is also active in IREC Europe, where she
            mainly contributes as a choir member and musician.
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

          <p className={styles.artistName}>IREC Europe Choir</p>
          <div className={styles.artistDescription}>
            {/* <div>
              IREC Europe Chor wurde zeitgleich mit der Kirche im Jahr 1999 als
              Teil des kirchlichen Dienstes gegründet, um Gott zu loben und
              durch den Lobpreis Gottes Segen zu teilen. Die aufgeführten Werke
              enthalten sowohl textlichen als auch musikalischen Gehalt, um den
              Menschen Gott näher zu bringen. Der Kirchenchor befasst sich mit
              Kirchenmusik, die von Kompositionen alter Meister wie Heinrich
              Schütz, J.S. Bach, G.F. Händel über die Romantik mit Mendelssohn
              bis hin zur klassischen Moderne mit Paul Hindemith reicht.
            </div> */}
            <div>
              The IREC Europe Choir was founded alongside the church in 1999 as
              part of the church&apos;s ministry to praise God and share His
              blessings through worship. The works performed contain both
              textual and musical content to bring people closer to God. The
              choir performs a diverse range of church music; from Baroque
              composers such as Heinrich Schütz, J.S. Bach and G.F. Händel, to
              the Romantic period with Mendelssohn, and to classical modernism
              with Paul Hindemith.
            </div>
            {/* <div>
              Pfr. Dr. phil., Dr. theol. Bily Kristanto, leitet zusammen mit
              einem aus dem Chor geschulten Musiker die Proben. Die Chorproben
              finden sowohl einmal wöchentlich gemeinsam am Sonntag vor dem
              Gottesdienst in der Kirche als auch individuell für die einzelnen
              Stimmen mithilfe digitaler Medien zu Hause statt. Im Chor singen
              ca. 10 bis 20 Sängerinnen und Sänger, die sowohl Kirchenmitglieder
              als auch aktive Gemeindemitglieder sind.
            </div> */}
            <div>
              Rev. Dr phil., Dr theol. Bily Kristanto, leads the rehearsals
              together with a musician trained from the choir. The choir
              rehearsals take place both once a week together on the Sunday
              before the service in the church and individually for each voice
              using digital media at home. Around 10 to 20 singers sing in the
              choir, who are both church members and active parishioners.
            </div>
            {/* <div>
              Der Chor singt meist dienstlich, begleitet von Klavier oder Orgel,
              in den Sonntagsgottesdiensten, Weihnachtsgottesdiensten und
              anderen festlichen Gottesdiensten wie Karfreitag, Ostern und
              Pfingsten.
            </div> */}
            <div>
              The choir usually sings during services, accompanied by piano or
              organ, at Sunday services, Christmas services and other festive
              services such as Good Friday, Easter and Whitsun.
            </div>
            {/* <div>
              Im Juli 2010, veranstaltete der Kirchenchor IREC Berlin zusammen
              mit dem Chor der Reformed Oratorio Society Singapore einen
              „Musikabend &Angklung Ensemble zum Lob Gottes", bei dem Werke von
              J.S. Bach, Mendelssohn, J. Brahms, J.H. Schein, H. Schütz, A.
              Hammerschmidt und Mozart präsentiert wurden.
            </div> */}
            <div>
              In July 2010, the IREC Berlin church choir, together with the
              choir of the Reformed Oratorio Society Singapore, organised a
              &quot;Music Evening &Angklung Ensemble in Praise of God&quot;,
              presenting works by J.S. Bach, Mendelssohn, J. Brahms, J.H.
              Schein, H. Schütz, A. Hammerschmidt and Mozart.
            </div>
            {/* <div>
              Im Jahr 2012 sang der Chor auch in einem Erweckungsgottesdienst
              mit "Vater unser im Himmelreich", J.S. Bach BWV 416 und "Ich bin
              die Auferstehung", H. Schütz SWV 324.
            </div> */}
            <div>
              In 2012, the choir also sang in a revival service with &quot;Vater
              unser im Himmelreich&quot;, J.S. Bach BWV 416 and &quot;Ich bin
              die Auferstehung&quot;, H. Schütz SWV 324.
            </div>
            {/* <div>
              Im Laufe der Jahre hat der IREC Europe Choir viel erreicht. Der
              Chor hat stets aktiv an unseren jährlichen Gemeindefreizeiten
              teilgenommen und war auch in der Gefängnispastoral sowie in
              Seniorenheimen engagiert.
            </div> */}
            <div>
              Over the years, the IREC Europe Choir has achieved a great deal.
              The choir has always actively participated in our annual church
              camps and has also been involved in pastoral work in prisons and
              retirement homes.
            </div>
            {/* <div>
              Im Jahr 2023 hatte der Chor des IREC Europe die Gelegenheit,
              während Stephen Tongs Gospel-Rally Schuberts Psalm 23 aufzuführen
              und so die Botschaft des Wortes Gottes durch die Kraft der Musik
              zu vermitteln.
            </div> */}
            <div>
              In 2023, the IREC Europe Choir had the opportunity to perform
              Schubert&apos;s Psalm 23 during Stephen Tong&apos;s Gospel Rally,
              sharing the message of God&apos;s Word through the power of music.
            </div>
            <Image
              width={1080}
              height={720}
              className={styles.artistImage}
              src="/artist-choir.jpeg"
              alt="Choir's Photo"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
