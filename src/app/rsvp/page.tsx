import styles from "./rsvp.module.css";
import Form from "./form";

export default function RSVP() {
  return (
    <div className={styles.containerWidth}>
      <div className={styles.rsvpContainer}>
        <div className={styles.rsvp}>
          <p className={styles.pageTitle}>RSVP</p>

          <div className={styles.informationContainer}>
            <div>
              <p className={styles.textTitle}>Schedule</p>
              <p className={styles.text}>
                Saturday, March 29, 2025 - 18:00 CET
              </p>
            </div>

            <div>
              <p className={styles.textTitle}>Location</p>
              <p className={styles.text}>Martin-Luther-Kirche</p>
              <p className={styles.text}>Bebelallee 156, 22297 Hamburg</p>
            </div>
          </div>

          <p className={styles.intructionText}>
            Please fill out the form below:
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}
