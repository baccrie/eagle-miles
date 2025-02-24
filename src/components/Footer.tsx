import styles from "./modules/Footer.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <div className={styles.aside}>
          <h3>Travel the world</h3>
          <p>
            Uncover the magic of travel with enchanting rates that sparks your
            imagination
          </p>
        </div>

        <div className={styles.mailingList}>
          <h4>Subscribe</h4>
          <form>
            <input type="text" placeholder="Email address" />
            <button>
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      <div className={styles.footerMain}>
        <div className={styles.footerAbout}>
          <h4>Eagle miles</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            laboriosam dolores
          </p>
          <div className={styles.socialLinks}></div>
        </div>

        <ul className={styles.events}>
          <li>Events</li>
          <li>Upcoming events</li>
          <li>Outgoing events</li>
          <li>Packages</li>
        </ul>

        <ul className={styles.quickLinks}>
          <li>Quick Links</li>
          <li>About</li>
          <li>Blogs</li>
          <li>FAQs</li>
        </ul>

        <ul className={styles.contactUs}>
          <li>Contact</li>
          <li>
            <img />
            <span> +234566789999</span>
          </li>

          <li>
            <img />
            <span> +234566789999</span>
          </li>

          <li>
            <img />
            <span>test@gmail.com</span>
          </li>
        </ul>
      </div>

      <p className={styles.copyright}>
        Coptright 2025 EagleMiles all right reserved
      </p>
    </footer>
  );
}
