import Image from "next/image";
import styles from "./program.module.css";
import Link from "next/link";
import { Public_Sans } from "next/font/google";

export default function Program() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.programContainer}>
        <div className={styles.program}>
          <p className={styles.pageTitle}>Concert Program</p>

          <div>
            <p className={styles.pieceTitle}>3 Romances, Op. 22</p>
            <p className={styles.composer}>Clara Schumann (1853)</p>
            <p className={styles.description}>
              A set of three lyrical and expressive pieces that showcase Clara
              Schumann&rsquo;s emotional depth and technical skill, blending
              Romantic sensibilities with her unique musical voice.
            </p>
          </div>

          <div>
            <p className={styles.pieceTitle}>
              Pièces de Clavecin en Concert No. 5
            </p>
            <p className={styles.composer}>Jean-Philippe Rameau (1741)</p>
            <p className={styles.description}>
              A vibrant and intricate work that reflects Rameau&rsquo;s
              innovative harmonic language and the elegance of the French
              Baroque style, designed for harpsichord accompanied by violin and
              cello.
            </p>
          </div>

          <div>
            <p className={styles.pieceTitle}>Suite in E Minor</p>
            <p className={styles.composer}>
              Jean-Philippe Rameau (Early 18th Century)
            </p>
            <p className={styles.description}>
              A collection of ornate and expressive harpsichord pieces,
              highlighting Rameau&rsquo;s mastery of keyboard composition and
              the intricate ornamentation typical of the Baroque period.
            </p>
          </div>

          <div>
            <p className={styles.pieceTitle}>
              Membra Jesu Nostri, BuxWV 75 (Part 1 & 2)
            </p>
            <p className={styles.composer}>Dieterich Buxtehude (1680)</p>
            <p className={styles.description}>
              The first two parts of a cycle of seven cantatas, focusing on the
              feet and knees of Christ. These sections feature profound text
              settings and rich Baroque musical textures, reflecting deep
              devotional intensity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
