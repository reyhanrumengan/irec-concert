import BillyKristanto from "./musiciansDetails/billy-kristanto";
import styles from "./musicians.module.css";
import Image from "next/image";
import TamariskaKristanto from "./musiciansDetails/tamariska-kristanto";
import HannahJonina from "./musiciansDetails/hannah-jonina";
import IrecChoir from "./musiciansDetails/irec-choir";
import PetraPriscilla from "./musiciansDetails/petra-priscilla";
import JakobSolle from "./musiciansDetails/jakob-solle";

export default function Musicians() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.artistContainer}>
        <div className={styles.artist}>
          <p className={styles.pageTitle}>Artist Biography</p>

          <BillyKristanto />
          <PetraPriscilla />
          <TamariskaKristanto />
          <HannahJonina />
          {/* <JakobSolle /> */}
          <IrecChoir />
        </div>
      </div>
    </div>
  );
}
