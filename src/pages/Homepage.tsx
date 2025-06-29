import styles from "./modules/HomePage.module.css";
import Header from "../components/Header";
import {
  MdTravelExplore,
  MdOutlineDocumentScanner,
  MdOutlineHotel,
} from "react-icons/md";
import { FaPassport } from "react-icons/fa";
import Footer from "../components/Footer";
import UseSlider from "../hook/useSlider";

const testimonial = [
  {
    name: "Alexander Mahone",
    text: "I had an amazing experience with this travel agency! Their attentive team ensured every detail was perfect, letting me enjoy my trip worry-free. Highly recommend for creating unforgettable memories.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    role: "Data Analyst, Franchise Limited",
  },
  {
    name: "Sara Tancredi",
    text: "Their support team made the whole travel process seamless. From documentation to planning, every step was handled with utmost professionalism. I felt safe and well-guided throughout.",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    role: "Chief Medical Officer, HealFast Hospitals",
  },
  {
    name: "Michael Scofield",
    text: "I always look for structure and precision — this agency delivered exactly that. Every detail of my trip was meticulously organized. Impressed would be an understatement.",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    role: "Architect & Strategist, Blueprint Corp.",
  },
  {
    name: "Lincoln Burrows",
    text: "As someone who doesn’t like dealing with the stress of planning, this agency made travel effortless. They took care of everything. I’ll definitely book again.",
    img: "https://randomuser.me/api/portraits/men/64.jpg",
    role: "Project Manager, Titan Constructions",
  },
  {
    name: "Fernando Sucre",
    text: "I had the best vacation of my life, all thanks to these guys. They listened, they helped, and they made it happen. Much love from me and my family!",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    role: "Logistics Coordinator, SwiftMovers Inc.",
  },
];

const blogPosts = [
  {
    title:
      "HAVE YOU EVER BEEN DENIED VISA BEFORE ? OR You Just Want to Apply for One... ",
    image: "/images/canada.jpeg",
    content:
      "✅ And Learn How to Boost Your Chances of Approval—Fast! In just 2 minutes, you'll discover why many Canada visa applications get rejected—and exactly how to avoid the same mistake. Over the last 2 months, we’ve successfully assisted 20+ clients in paying their visa fees and submitting their Canada visa applications. These include both single and family submissions. We have the proofs (see images below). What Does This Mean for You? It means thousands of Nigerians are preparing to relocate to Canada, the UK, and top European countries. This massive demand means one thing: Competition is high, and visa officers are extra selective. They actively look for reasons to disqualify applications. So, What’s the Solution? You already know it: 📌 In a competitive environment, you must stand out. The problem? Many travel agents use the same generic approach that leads to high rejection rates. Here's What We Do Differently at Eagle Miles TC: We don’t just submit your visa application—we custom-tailor it uniquely to your profile. ✅ We present your case in a distinct, personalized, and convincing way that sets you apart from the crowd. That’s what gives our clients the edge—and the reason many of them are currently preparing to relocate! Ready to Begin Your Journey Abroad? 📞 Talk to us now—and let’s get you one step closer to your relocation goals. 🚨 Note: This opportunity is for serious applicants only. Travel packages come with real costs. No shortcuts, just results.",
  },

  {
    title: "Vital Part of Your Visa Processing ",
    image: "/images/ireland.jpeg",
    content:
      "💼 Proof of Funds Is Just the First Step But Do You Know What Comes Next? Let’s be honest: Proof of Funds is the most challenging requirement when planning to relocate. And you’ll agree with me—no country wants to admit someone who appears to be a liability. No government will openly say it, but it’s common sense—even the immigration officers know this. Once your Proof of Funds is secured, the next big hurdle isn’t what you may think... 🎯 The Next Hardest Thing? Proper Documentation. Yes—your documentation sells you to the consular. No matter how solid your finances are, if your documents don’t tell the right story, your application will lose value in the eyes of the visa officer. That’s when they come up with vague or generic excuses to reject your visa. 📌 This Is Why Documentation Matters It’s not just about filling forms—it’s about packaging your application in a way that positions you as a high-value, credible traveler. At Eagle Miles TC, we pay special attention to this exact process. We don’t just do 'travel consulting.' We craft your documentation to reflect your unique strengths, giving your application the edge it needs. Documentation is not a checkbox—it’s your voice in front of the consular. Let it speak confidently and clearly. If you're serious about relocating, let’s help you present your story the right way.",
  },
];

const travelPackages = [
  {
    name: "Canada PSW",
    details:
      "A Study Visa route to get Canada PR. This is about studying a relevant professional course in Canada because the career is highly needed in Canadian economy. Therefore, there plenty job vacancy for it. While in studying, school will send you for Internship. After completing your study, you will get a job through Post Graduate Work Permit (PGWP). After working for 2 years in Canada, you will have Canadian Work Experience which is used to apply for Permanent Resident. Don't forget that studying in Canada gives you chance to work for about 50 hours weekly to support yourself. Click more to learn more about this package.",
    image: "/images/canada.jpeg",
  },

  {
    name: "Tour and visit Visa",
    details:
      "UK, Canada, Europe, and Africa. Tourist and Visiting Visa is the easiest and cheapest way to experience travel abroad. Each country has their immigration policy for this kind of Visa application. All visit Visa application can accommodate family members e.g spouse and kids. Visit Visa can be sometimes used for short studying and certification. Click here to start your Visit Visa application with Us",
    image: "/images/hungary.jpeg",
  },

  {
    name: "EU Residency via marriage",
    details:
      "this is one of the fastest ways to get Europe Resident Permit Visa. Marrying an European will give you full access to living and working in Europe. You can marry a Spanish, Italian, German, Latin. Click here to get started with your application now.",
    image: "/images/norway.jpeg",
  },

  {
    name: "Germany Visa Self Processing",
    details:
      "Work Permit and Study Visa information guide. This is chance to save a lot of money instead of paying a travel agent. In this information guide, you will know everything about applying for Work Permit and Study Visa in Germany. It's just 20k only. Click here to get it ASAP (Expertnaire link as CTA)",
    image: "/images/ireland.jpeg",
  },
];

export default function Homepage() {
  const { currentSlide } = UseSlider({ length: 4 });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.about}>
          <div className={styles.imgContainer}>
            <img src="/images/banner.jpeg" alt="about-us" />
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
            Discover the majestic landscapes of Canada, experience the vibrant
            cities of America, immerse yourself in Europe's rich history, or
            chase the northern lights in Norway.
          </p>

          <div className={styles.destinationWrapper}>
            <div className={styles.destination}>
              <div className={styles.imgContainer}>
                <img src="/images/canada.jpg" alt="Canada" />
              </div>
              <div className={styles.destinationDetails}>
                <span>Canada</span>
              </div>
            </div>

            <div className={styles.destination}>
              <div className={styles.imgContainer}>
                <img src="/images/america.jpg" alt="America" />
              </div>
              <div className={styles.destinationDetails}>
                <span>UK</span>
              </div>
            </div>

            <div className={styles.destination}>
              <div className={styles.imgContainer}>
                <img src="/images/europe.jpg" alt="Europe" />
              </div>
              <div className={styles.destinationDetails}>
                <span>Europe</span>
              </div>
            </div>

            <div className={styles.destination}>
              <div className={styles.imgContainer}>
                <img src="/images/norway.jpg" alt="Norway" />
              </div>
              <div className={styles.destinationDetails}>
                <span>Ireland</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.offers}>
          <div className={styles.offerSect1}>
            <h3>Why People Choose Eagles Miles Agency</h3>
            <p>We offer a wide range of support</p>
            <button>Contact us</button>
          </div>

          <div className={styles.offerSect2}>
            <div className={styles.offerContainer}>
              <div className={styles.iconWrapper}>
                <MdTravelExplore className={styles.icon} />
              </div>
              <h4>Travel Consultation</h4>
              <p>
                We will help you make an informed decision on your travel goal
                using four criteria: eligibility process, planning, purpose
                definition, and cutting costs.
              </p>
            </div>

            <div className={styles.offerContainer}>
              <div className={styles.iconWrapper}>
                <MdOutlineDocumentScanner className={styles.icon} />
              </div>
              <h4>Travel Documentation</h4>
              <p>
                We create genuine and valid travel documents for our clients —
                strictly verifiable and trusted documentation.
              </p>
            </div>

            <div className={styles.offerContainer}>
              <div className={styles.iconWrapper}>
                <FaPassport className={styles.icon} />
              </div>
              <h4>Visa Application</h4>
              <p>
                We assist with the complete visa application process, taking
                away all the stress from our clients while ensuring accuracy and
                compliance.
              </p>
            </div>

            <div className={styles.offerContainer}>
              <div className={styles.iconWrapper}>
                <MdOutlineHotel className={styles.icon} />
              </div>
              <h4>Hotel Reservations</h4>
              <p>
                Hotel and lodging is a vital part of your travel experience. We
                help secure the perfect stay — anywhere, anytime in the world.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.travelPackages}>
          <header>
            <div>
              <h3>Choose Your next adventure</h3>
              <p>
                Explore our curated travel plans, thoughtfully designed to offer
                the perfect mix of adventure, luxury, relaxation, and cultural
                experiences—wherever your heart desires.
              </p>
            </div>

            {/* <nav>
              <ul>
                <li>
                  <Link to="#">popular</Link>
                </li>

                <li>
                  <Link to="#">popular</Link>
                </li>

                <li>
                  <Link to="#">popular</Link>
                </li>

                <li>
                  <Link to="#">popular</Link>
                </li>
              </ul>
            </nav> */}
          </header>

          <main>
            {travelPackages.map(({ name, image }) => (
              <div className={styles.packageWrapper}>
                <div className={styles.imgContainer}>
                  <img src={image} />
                </div>

                <div className={styles.packageWrapperText}>
                  <div className={styles.header}>
                    <h4>{name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </section>

        <section className={styles.testimony}>
          <header>
            <h2>Trusted Words by People</h2>
            <span>
              Its is a long established fact that a reader will be distracted by
              the readable content
            </span>
          </header>

          <div className={styles.slider}>
            {testimonial.map((testimonial, i) => (
              <div
                key={i}
                className={styles.slides}
                style={{
                  transform: `translateX(${100 * (i - currentSlide)}%)`,
                }}
              >
                <div className={styles.imgContainer}>
                  <img src={testimonial.img} />
                </div>

                <p>{testimonial.text}</p>

                <footer>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </footer>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.blog}>
          <div className={styles.blogAside}>
            <h3>
              Subscribe to our mailing list so updates can reach you for every
              blogpost posted
            </h3>
            <button>Subscribe</button>
          </div>
          <div className={styles.blogPost}>
            {blogPosts.map((blog) => (
              <div className={styles.blogContainer}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={blog.image} />
                </div>

                <div className={styles.blogContent}>
                  <h4>{blog.title}</h4>
                  <div className={styles.blogFooter}>
                    <span className={styles.datePublished}>22 Dec 2024</span>
                    <span className={styles.readTime}>12 min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
