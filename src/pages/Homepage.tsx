import styles from "./modules/HomePage.module.css";
import Header from "../components/Header";

export default function Homepage() {
  return (
    <>
      <Header />
      <h1 className={styles.homepage}>Home Page!</h1>
    </>
  );
}
