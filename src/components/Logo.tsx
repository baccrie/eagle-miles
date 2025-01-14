import { GiCommercialAirplane } from "react-icons/gi";
import styles from "./modules/Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <GiCommercialAirplane className={styles.logoIcon} />
      <h1 className={styles.logoText}>Eagle Miles</h1>
    </div>
  );
}
