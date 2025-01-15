import styles from "./modules/HomePage.module.css";
import Header from "../components/Header";

export default function Homepage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.about}>
          <div className={styles.imgContainer}>
            <img src="/images/about-us.jpg" alt="about-us" />
          </div>
          <div className={styles.aboutDetails}>
            <div className={styles.aboutText}>
              <h2>About us</h2>
              <h3>
                Embark On an Epic Adventure to the mysterious and uncharted land
                beyond
              </h3>
              <p>
                Eagle Miles: Your ultimate travel consultant, dedicated to
                making your journeys seamless and extraordinary. We offer
                unparalleled services tailored to your needs, from vacation
                planning and study abroad guidance to tourism and adventure
                travel. With expert advice, comprehensive travel packages, and
                personalized itineraries, we ensure every trip is memorable.
              </p>
              <button>Learn more</button>
            </div>

            <div className={styles.aboutStats}>
              <div className={styles.statOption}>
                <span>83+</span>
                <span>Group Tours</span>
              </div>

              <div className={styles.statOption}>
                <span>50+</span>
                <span>Visited Places</span>
              </div>

              <div className={styles.statOption}>
                <span>100+</span>
                <span>Tour Companies</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
