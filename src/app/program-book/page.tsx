import styles from "./program-book.module.css";

export default function ProgramBook() {
  const pdfFrame = () => {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe src="/program-book.pdf" width="100%" height="100%" />
      </div>
    );
  };

  return (
    <div className={styles.containerWidth}>
      <div className={styles.programContainer}>
        <div className={styles.program}>
          <p className={styles.pageTitle}>Program Book</p>

          {pdfFrame()}
        </div>
      </div>
    </div>
  );
}
