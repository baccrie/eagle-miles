import styles from "./modules/HeaderNav.module.css";
import Logo from "./Logo";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  return (
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
            <NavLink to="#">
              <span>Contact us </span>
              <FaArrowRight />
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
