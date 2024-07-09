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
                Saturday, August 31, 2024 - 3:00 p.m.
              </p>
            </div>

            <div>
              <p className={styles.textTitle}>Location</p>
              <p className={styles.text}>St. Matthäus Church</p>
              <p className={styles.text}>Matthäikirchplatz, 10785 Berlin</p>
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
