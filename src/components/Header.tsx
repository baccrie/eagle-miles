import Logo from "./Logo";
import styles from "./modules/Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.nav}>
        <Logo />

        <nav className={styles.mainNav}>
          <ul>
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">About</NavLink>
            </li>
            <li>
              <NavLink to="#">Services</NavLink>
            </li>
            <li>
              <NavLink to="#">Explore</NavLink>
            </li>
            <li>
              <NavLink to="#">Blog</NavLink>
            </li>
            <li>
              <NavLink to="#">Package</NavLink>
            </li>
          </ul>
        </nav>

        <nav className={styles.otherNav}>
          <ul>
            <li>
              <NavLink to="#">Contact us</NavLink>
            </li>
          </ul>
        </nav>
      </section>

      <section className={styles.main}>
        <h2>Discover Your Next Adventure</h2>
        <p>Your dream is to travel our job is to make it happen</p>
      </section>
    </header>
  );
}
