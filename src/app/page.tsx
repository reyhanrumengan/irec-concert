import Header from "./header/page";
import Homepage from "./homepage/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Homepage />
    </main>

    // </main>
  );
}
