import BillyKristanto from "./musiciansDetails/billy-kristanto";
import styles from "./musicians.module.css";
import TamariskaKristanto from "./musiciansDetails/tamariska-kristanto";
import HannahJonina from "./musiciansDetails/hannah-jonina";
import IrecChoir from "./musiciansDetails/irec-choir";
import CalvinAbdiel from "./musiciansDetails/calvin-abdiel";
import Link from "next/link";

export default function Musicians() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.artistContainer}>
        <div className={styles.artist}>
          <p className={styles.pageTitle}>Artist Biography</p>
          <nav>
            <Link href="#billy-kristanto">Billy Kristanto</Link> |{" "}
            <Link href="#calvin-abdiel">Calvin Abdiel</Link> |{" "}
            <Link href="#tamariska-kristanto">Tamariska Kristanto</Link> |{" "}
            <Link href="#hannah-jonina">Hannah Jonina</Link> |{" "}
            <Link href="#irec-choir">IREC Choir</Link>
          </nav>
          <BillyKristanto id="billy-kristanto" />
          <CalvinAbdiel id="calvin-abdiel" />
          <TamariskaKristanto id="tamariska-kristanto" />
          <HannahJonina id="hannah-jonina" />
          <IrecChoir id="irec-choir" />
        </div>
      </div>
    </div>
  );
}
