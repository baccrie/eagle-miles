import styles from "./modules/Logo.module.css";
import { IoIosPaperPlane } from "react-icons/io";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <IoIosPaperPlane className={styles.logoIcon} />
      <h1 className={styles.logoText}>Eagle Miles</h1>
    </div>
  );
}
