/* eslint-disable @typescript-eslint/no-unused-vars */
import Logo from "./Logo";
import styles from "./modules/Header.module.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {
  RiPassportFill,
  RiFileList2Fill,
  RiMoneyDollarCircleFill,
  RiFlightTakeoffFill,
} from "react-icons/ri";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Visa Application",
    subtitle: "Hassle-free processing",
    icon: RiPassportFill,
  },
  {
    title: "Travel Documentation",
    subtitle: "Certified & accurate papers",
    icon: RiFileList2Fill,
  },
  {
    title: "Proof of Funds",
    subtitle: "Reliable and affordable support",
    icon: RiMoneyDollarCircleFill,
  },
  {
    title: "Flight Bookings",
    subtitle: "Competitive pricing guaranteed",
    icon: RiFlightTakeoffFill,
  },
];

const slider = [
  "At Eagle Miles, we believe your journey should be as bold as your ambition. Whether you're reaching for new heights in business or exploring new horizons in life, we provide the tools, guidance, and confidence to help you go further — with precision, speed, and unmatched clarity.",

  "Every mile matters — and with Eagle Miles, every step forward is fueled by purpose. We combine strategic thinking with a relentless pursuit of excellence to help individuals and organizations break boundaries, unlock potential, and soar beyond expectations",

  "We don’t just move — we lead. Eagle Miles is built for visionaries, for those who don’t settle for average. From the first mile to the final stretch, we’re here to elevate your path with innovative solutions, lasting partnerships, and a commitment to meaningful progress.",

  "True success isn’t just about distance — it’s about direction. At Eagle Miles, we align ambition with action, turning possibilities into results. Join the growing network of forward-thinkers who trust us to guide their journey with insight, strength, and unwavering support.",
];

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slider.length);
    }, 4000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        console.log("fix now");
        setIsFixed(true);
      } else {
        console.log("dont fix");
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className={styles.header}>
      <section
        className={styles.nav}
        style={{
          position: isFixed ? "fixed" : "static",
          top: isFixed ? 0 : "auto",
          width: "100%",
          margin: "auto",
          backgroundColor: isFixed ? "rgba(0, 0, 0, 0.7)" : "transparent",
        }}
      >
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

        <div className={styles.slider}>
          {slider.map((slide, i) => (
            <>
              <p
                style={{
                  transform: `translateX(${100 * (i - currentSlide)}%)`,
                }}
              >
                <span>"</span>
                {slide}
                <span>"</span>
              </p>
            </>
          ))}
        </div>

        <div className={styles.service}>
          {services.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className={styles.firstService}>
              <div className={styles.iconContainer}>
                <Icon className={styles.serviceIcon} />
              </div>

              <span>{title}</span>
              <span>{subtitle}</span>
            </div>
          ))}
        </div>
      </section>
    </header>
  );
}
