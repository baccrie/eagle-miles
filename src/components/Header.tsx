import Logo from "./Logo";
import styles from "./modules/Header.module.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { RiExchangeFundsFill } from "react-icons/ri";

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
              <NavLink to="#">
                <span>Contact us </span>
                <FaArrowRight />
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>

      <section className={styles.main}>
        <h2>Discover Your Next Adventure</h2>
        <p>
          Your dream is to travel our job is to make it happen, We will do
          everything Humanly and legally possible to achive your travel and
          relocation goals
        </p>
        {/* <p>Are you looking to create a long-lasting impression for your next time out? You will need a reliable Nigerian travel agency like Travelotus to mitigate the stress of planning an exquisite, affordable trip for yourself or family. Travelotus luxury tours is your best bet any day.</p> */}

        <div className={styles.service}>
          <div className={styles.firstService}>
            <div className={styles.iconContainer}>
              <IoDocumentAttachOutline className={styles.serviceIcon} />
            </div>

            <span>Visa Processing</span>
            <span>Travel Documentation</span>
          </div>

          <div className={styles.secondService}>
            <div className={styles.iconContainer}>
              <RiExchangeFundsFill className={styles.serviceIcon} />
            </div>

            <span>Proof of funds</span>
            <span>Flight ticket</span>
          </div>
        </div>
      </section>
    </header>
  );
}
