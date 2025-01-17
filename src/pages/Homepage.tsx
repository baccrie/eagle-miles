import styles from "./modules/HomePage.module.css";
import Header from "../components/Header";
import { GrUserExpert } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { MdViewComfyAlt } from "react-icons/md";
import { MdPlace } from "react-icons/md";

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
                travel.
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

        <section className={styles.popularDest}>
          <h2>Popular Destinations</h2>
          <p>
            Explore Bali's beautiful beaches, roam Rome's historic streets , or
            seek adventure in New Zealand's breathtaking landscape
          </p>

          <div className={styles.destinationWrapper}>
            <div className={styles.destination}>
              <div className={styles.imgContainer}>
                <img src="/images/paris.jpg" />
              </div>
              <div className={styles.destinationDetails}>
                <span>Greece</span>
              </div>
            </div>

            <div className={styles.destination}>
              <div className={styles.imgContainer}>
                <img src="/images/london.jpg" />
              </div>
              <div className={styles.destinationDetails}>
                <span>Greece</span>
              </div>
            </div>

            <div className={styles.destination}>
              <div className={styles.imgContainer}>
                <img src="/images/canada.jpg" />
              </div>
              <div className={styles.destinationDetails}>
                <span>Greece</span>
              </div>
            </div>

            <div className={styles.destination}>
              <div className={styles.imgContainer}>
                <img src="/images/london.jpg" />
              </div>
              <div className={styles.destinationDetails}>
                <span>Greece</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.offers}>
          <div className={styles.offerSect1}>
            <h3>Why People Choose Eagles Miles Agency</h3>
            <p>We offer wide range of support</p>

            <button>Contact us</button>
          </div>

          <div className={styles.offerSect2}>
            <div className={styles.offerContainer}>
              <div className={styles.iconWrapper}>
                <GrUserExpert className={styles.icon} />
              </div>
              <h4>Experts guide</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                numquam perferendis provident consectetur esse{" "}
              </p>
            </div>

            <div className={styles.offerContainer}>
              <div className={styles.iconWrapper}>
                <BiSupport className={styles.icon} />
              </div>
              <h4>Offer supports</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                numquam perferendis provident consectetur esse{" "}
              </p>
            </div>

            <div className={styles.offerContainer}>
              <div className={styles.iconWrapper}>
                <MdViewComfyAlt className={styles.icon} />
              </div>
              <h4>Comfy vehicle</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                numquam perferendis provident consectetur esse{" "}
              </p>
            </div>

            <div className={styles.offerContainer}>
              <div className={styles.iconWrapper}>
                <MdPlace className={styles.icon} />
              </div>
              <h4>Rare places</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                numquam perferendis provident consectetur esse{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
