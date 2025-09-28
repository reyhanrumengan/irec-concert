import styles from "./program.module.css";

export default function Program() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.programContainer}>
        <div className={styles.program}>
          <p className={styles.pageTitle}>Concert Program</p>

          <div>
            <p className={styles.pieceTitle}>
              Z domoviny (From the Homeland), I. A Dur
            </p>
            <p className={styles.composer}>Bedřich Smetana (1824-1884)</p>
            <p className={styles.description}>
              A lyrical and nationalistic work for violin and piano, this piece
              reflects Smetana&rsquo;s deep affection for his Czech homeland.
              The soaring violin lines and vibrant piano accompaniment capture
              both the nostalgia and pride of Czech musical identity.
            </p>
          </div>

          <div>
            <p className={styles.pieceTitle}>Cantate Domino</p>
            <p className={styles.composer}>Claudio Monteverdi (1567-1643)</p>
            <p className={styles.description}>
              One of Monteverdi&rsquo;s joyful sacred motets, this work
              exemplifies the transition from Renaissance to Baroque styles.
              With lively rhythms and expressive counterpoint, it radiates a
              jubilant call to “sing to the Lord,” celebrating his innovative
              approach to text and music.
            </p>
          </div>

          <div>
            <p className={styles.pieceTitle}>Cantate Domino in B Major</p>
            <p className={styles.composer}>Ko Matsushita (b. 1962)</p>
            <p className={styles.description}>
              A modern choral setting of the same sacred text, this work
              combines shimmering harmonies and dynamic contrasts with
              contemporary rhythmic vitality. Matsushita&rsquo;s interpretation
              bridges tradition and modernity, bringing a fresh perspective to
              timeless words of praise.
            </p>
          </div>

          <div>
            <p className={styles.pieceTitle}>
              Sonata in C Major for Piano Four Hands, K. 521, I. Allegro
            </p>
            <p className={styles.composer}>
              Wolfgang Amadeus Mozart (1756-1791)
            </p>
            <p className={styles.description}>
              Written in 1787, this sonata is among Mozart&rsquo;s finest works
              for piano duet. Sparkling with charm and brilliance, it features
              playful dialogues between the two pianists, balanced lyricism, and
              the elegance of Classical form.
            </p>
          </div>

          <div>
            <p className={styles.pieceTitle}>
              Harpsichord Concerto No. 5 in F minor, II. Largo
            </p>
            <p className={styles.composer}>Johann Sebastian Bach (1685-1750)</p>
            <p className={styles.description}>
              The serene slow movement of this concerto highlights Bach&rsquo;s
              mastery of expressive melody and harmonic depth. With its gentle,
              flowing lines, the Largo conveys a profound sense of intimacy and
              spiritual stillness. In this performance, the delicate tones of
              the angklung join the harpsichord, adding a distinctive color and
              cultural resonance to Bach&rsquo;s timeless music.
            </p>
          </div>

          <div>
            <p className={styles.pieceTitle}>
              Christ Lag in Todesbanden, BWV 4 (Selections: I, III, VI, VII)
            </p>
            <p className={styles.composer}>Johann Sebastian Bach (1685-1750)</p>
            <p className={styles.description}>
              One of Bach&rsquo;s earliest cantatas, based on Martin
              Luther&rsquo;s Easter hymn, this work vividly portrays the triumph
              of Christ over death. From the solemn opening chorus to the
              vigorous duets and resounding final chorale, it blends theological
              depth with musical brilliance.
            </p>
          </div>

          <div>
            <p className={styles.pieceTitle}>
              Every Time I Feel the Spirit (arr. W. L. Dawson)
            </p>
            <p className={styles.composer}>
              Traditional Spiritual / Anton Armstrong (b. 1956)
            </p>
            <p className={styles.description}>
              A vibrant arrangement of the beloved African American spiritual,
              this piece pulses with rhythmic energy and heartfelt expression.
              Dawson&rsquo;s arrangement, performed here in the version
              popularized by Anton Armstrong, captures both the joy and fervor
              of the spiritual tradition.
            </p>
          </div>

          <div>
            <p className={styles.pieceTitle}>
              Medley of Indonesian Folk Songs (arr. Calvin Abdiel)
            </p>
            <p className={styles.composer}>
              Traditional / arr. Calvin Abdiel (b. 1999)
            </p>
            <p className={styles.description}>
              A colorful celebration of Indonesia&rsquo;s musical heritage, this
              medley blends familiar folk melodies with inventive textures for
              choir, angklung, and violin. The arrangement highlights the
              warmth, rhythm, and cultural richness of Indonesian traditions in
              a fresh, contemporary setting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
