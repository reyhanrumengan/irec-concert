import styles from "./program-book.module.css";
import Image from "next/image";

export default function ProgramBook() {
  const pdfImages = () => {
    return <div style={{ width: "100%", height: "100vh" }}></div>;
  };

  const programBookImages = [];

  for (let i = 1; i <= 12; i++) {
    programBookImages.push({
      src: `/program-book/programBook${i}.png`,
      alt: `Program Book - Page ${i}`,
    });
  }

  const programBook = programBookImages.map((image, index) => (
    <div key={index} className={styles.pageContainer}>
      <Image
        width={760}
        height={760}
        className={styles.programBookImage}
        alt={image.alt}
        src={image.src}
        priority
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  ));

  return (
    <div className={styles.containerWidth}>
      <div className={styles.programContainer}>
        <div className={styles.program}>
          <p className={styles.pageTitle}>Program Book</p>

          {programBook}
        </div>
      </div>
    </div>
  );
}
