import styles from "../musicians.module.css";
import Image from "next/image";

export default function IrecChoir({ id }: { id: string }) {
  return (
    <section id={id}>
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
          The IREC Europe Choir was founded alongside the church in 1999 as part
          of the church&apos;s ministry to praise God and share His blessings
          through worship. The works performed contain both textual and musical
          content to bring people closer to God. The choir performs a diverse
          range of church music; from Baroque composers such as Heinrich Schütz,
          J.S. Bach and G.F. Händel, to the Romantic period with Mendelssohn,
          and to classical modernism with Paul Hindemith.
        </div>
        {/* <div>
            Pfr. Dr. phil., Dr. theol. Billy Kristanto, leitet zusammen mit
            einem aus dem Chor geschulten Musiker die Proben. Die Chorproben
            finden sowohl einmal wöchentlich gemeinsam am Sonntag vor dem
            Gottesdienst in der Kirche als auch individuell für die einzelnen
            Stimmen mithilfe digitaler Medien zu Hause statt. Im Chor singen
            ca. 10 bis 20 Sängerinnen und Sänger, die sowohl Kirchenmitglieder
            als auch aktive Gemeindemitglieder sind.
          </div> */}
        <div>
          Rev. Dr phil., Dr theol. Billy Kristanto, leads the rehearsals
          together with a musician trained from the choir. The choir rehearsals
          take place both once a week together on the Sunday before the service
          in the church and individually for each voice using digital media at
          home. Around 10 to 20 singers sing in the choir, who are both church
          members and active parishioners.
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
          In July 2010, the IREC Berlin church choir, together with the choir of
          the Reformed Oratorio Society Singapore, organised a &quot;Music
          Evening &Angklung Ensemble in Praise of God&quot;, presenting works by
          J.S. Bach, Mendelssohn, J. Brahms, J.H. Schein, H. Schütz, A.
          Hammerschmidt and Mozart.
        </div>
        {/* <div>
            Im Jahr 2012 sang der Chor auch in einem Erweckungsgottesdienst
            mit "Vater unser im Himmelreich", J.S. Bach BWV 416 und "Ich bin
            die Auferstehung", H. Schütz SWV 324.
          </div> */}
        <div>
          In 2012, the choir also sang in a revival service with &quot;Vater
          unser im Himmelreich&quot;, J.S. Bach BWV 416 and &quot;Ich bin die
          Auferstehung&quot;, H. Schütz SWV 324.
        </div>
        {/* <div>
            Im Laufe der Jahre hat der IREC Europe Choir viel erreicht. Der
            Chor hat stets aktiv an unseren jährlichen Gemeindefreizeiten
            teilgenommen und war auch in der Gefängnispastoral sowie in
            Seniorenheimen engagiert.
          </div> */}
        <div>
          Over the years, the IREC Europe Choir has achieved a great deal. The
          choir has always actively participated in our annual church camps and
          has also been involved in pastoral work in prisons and retirement
          homes.
        </div>
        {/* <div>
          Im Jahr 2023 hatte der IREC Europe Choir die Ehre, Schuberts „Psalm
          23” während Stephen Tongs Gospel Rally aufzuführen und so die
          Botschaft des Wortes Gottes durch die Schönheit und Kraft der Musik zu
          verbreiten.
        </div> */}
        <div>
          In 2023, the IREC Europe Choir had the privilege of performing
          Schubert&apos;s <i>Psalm 23</i> during Stephen Tong&apos;s Gospel
          Rally, sharing the message of God&apos;s Word through the beauty and
          power of music.
        </div>
        <div>
          Most recently, the IREC Berlin Choir performed D. Buxtehude&apos;s
          Membra Jesu Nostri (BuxWV 75) in two concerts—first in Berlin in the
          fall of 2024, and then in Hamburg in the spring of 2025.
        </div>

        <div className={styles.artistImageContainer}>
          {/* <div style={{ width: "fit-content" }}> */}
          <Image
            width={1080}
            height={720}
            className={styles.artistImage}
            src="/artist-choir3.png"
            alt="Choir's Photo"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          {/* </div> */}
          {/* <div style={{ width: "fit-content" }}> */}
          <Image
            width={1080}
            height={720}
            className={styles.artistImage}
            src="/artist-choir4.png"
            alt="Choir's Photo"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
