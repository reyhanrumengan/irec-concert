import BillyKristanto from "./musiciansDetails/billy-kristanto";
import styles from "./musicians.module.css";
import TamariskaKristanto from "./musiciansDetails/tamariska-kristanto";
import HannahJonina from "./musiciansDetails/hannah-jonina";
import IrecChoir from "./musiciansDetails/irec-choir";

export default function Musicians() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.artistContainer}>
        <div className={styles.artist}>
          <p className={styles.pageTitle}>Artist Biography</p>

          <BillyKristanto />
          <TamariskaKristanto />
          <HannahJonina />
          <IrecChoir />
        </div>
      </div>
    </div>
  );
}
