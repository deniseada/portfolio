"use client";

import { useEffect, useState } from "react";
import NavBar from "../../../ui/nav-bar/page";
import Footer from "../../../ui/footer/page";
import styles from "./lenditout.module.css";

export default function LendItOutCaseStudy() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (!header) {
        setShowScrollButton(window.scrollY > 0);
        return;
      }

      const headerBottom = header.getBoundingClientRect().bottom;
      setShowScrollButton(headerBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHeader = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <span className={styles.badge}>UI/UX DESIGN</span>
              <h1 className={styles.title}>LENDITOUT</h1>
              <h2 className={styles.subtitle}>
                The Rise of Smarter Consumption
              </h2>
              <p className={styles.description}>
                Lend It Out is a community-based rental app that enables users
                to rent, buy, and sell items within a single platform. Designed
                with a focus on sustainability and clear user flows, the app
                supports seamless exchange while promoting smarter and more
                reliable consumption.
              </p>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.metaSection}>
                <span className={styles.metaLabel}>ROLE</span>
                <p className={styles.metaValue}>UX/UI Designer</p>
              </div>
              <div className={styles.metaSection}>
                <span className={styles.metaLabel}>TOOLS</span>
                <p className={styles.metaValue}>
                  Figma, Prototyping, User Research
                </p>
              </div>
              <a href="#section-05" className={styles.viewLive}>
                TRY IT NOW <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>
        </section>

        <div className={styles.contentWrapper}>
          <aside className={styles.tocSidebar}>
            <nav className={styles.tocNav}>
              <h2 className={styles.tocNavTitle}>Contents</h2>
              <a href="#section-01" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>01</span>
                <span className={styles.tocNavLabel}>PROBLEM/SOLUTION</span>
              </a>
              <a href="#section-02" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>02</span>
                <span className={styles.tocNavLabel}>USER RESEARCH</span>
              </a>
              <a href="#section-03" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>03</span>
                <span className={styles.tocNavLabel}>USER TESTING</span>
              </a>
              <a href="#section-04" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>04</span>
                <span className={styles.tocNavLabel}>WIREFRAMING</span>
              </a>
              <a href="#section-05" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>05</span>
                <span className={styles.tocNavLabel}>FINAL PRODUCT</span>
              </a>
            </nav>
          </aside>

          <section id="section-01" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>PROBLEM/SOLUTION</h2>
              <span className={styles.sectionNumber}>01</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.textCol}>
                <h3 className={styles.subheading}>Problem:</h3>
                <p>
                  Users and temporary residents often face challenges finding a
                  platform that offers secure item rentals and easy navigation.
                  Most existing solutions are fragmented and do not provide
                  clear pathways for listing, browsing, and finalizing
                  transactions.
                </p>
                <h3 className={styles.subheading}>Solution:</h3>
                <p>
                  LendItOut introduces a unified interface where users can rent,
                  buy, and sell from within one ecosystem. The platform supports
                  straightforward item posting, product discovery, real-time
                  messaging, and transparent profile and order views to build
                  trust and usability.
                </p>
              </div>
              <img
                src="/case-study/lenditout/lenditout-phones.png"
                alt="LendItOut phone mockup"
                className={`${styles.sectionImage} ${styles.phoneImage}`}
              />
            </div>
          </section>

          <section id="section-02" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>USER RESEARCH</h2>
              <span className={styles.sectionNumber}>02</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.textCol}>
                <h3 className={styles.subheading}>Approach</h3>
                <p>
                  To better understand our target market, I conducted a survey
                  focused on renting habits, trust signals, and interface pain
                  points. The findings helped identify where users experienced
                  friction and what features would build confidence.
                </p>
                <h3 className={styles.subheading}>Research Analysis</h3>
                <p>
                  Data showed a need for clearer navigation, stronger profile
                  transparency, and simplified order tracking. These results
                  guided visual hierarchy decisions and informed the
                  high-priority flows in the prototype.
                </p>
              </div>
              <div className={styles.surveyStack}>
                <img
                  src="/case-study/lenditout/survey.png"
                  alt="Survey chart 1"
                />
                <img
                  src="/case-study/lenditout/survey2.png"
                  alt="Survey chart 2"
                />
                <img
                  src="/case-study/lenditout/survey3.png"
                  alt="Survey chart 3"
                />
              </div>
            </div>
          </section>

          <section id="section-03" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>USER TESTING</h2>
              <span className={styles.sectionNumber}>03</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.textCol}>
                <p>
                  I ran feedback sessions on the first prototype to evaluate
                  clarity of labels, visibility of important actions, and
                  overall browsing confidence. The most frequent request was to
                  simplify content density and make account status more obvious.
                </p>
              </div>
              <div className={styles.testingGrid}>
                <div className={styles.testingItem}>
                  <h3 className={styles.subheading}>Before</h3>
                  <img
                    src="/case-study/lenditout/profile-old.png"
                    alt="Old profile layout"
                  />
                </div>
                <div className={styles.testingItem}>
                  <h3 className={styles.subheading}>After</h3>
                  <img
                    src="/case-study/lenditout/profile-new.png"
                    alt="Improved profile layout"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="section-04" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>WIREFRAMING</h2>
              <span className={styles.sectionNumber}>04</span>
            </div>
            <div className={styles.sectionContentSingle}>
              <p className={styles.wireIntro}>
                Key wireframes focused on improving discoverability and
                supporting high-frequency tasks such as browsing bookmarks,
                viewing notifications, and checking order history.
              </p>
              <div className={styles.wireGrid}>
                <img
                  src="/case-study/lenditout/bookmarked.png"
                  alt="Bookmarked wireframe"
                />
                <img
                  src="/case-study/lenditout/notification.png"
                  alt="Notifications wireframe"
                />
                <img
                  src="/case-study/lenditout/orders.png"
                  alt="Orders wireframe"
                />
              </div>
            </div>
          </section>

          <section id="section-05" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>FINAL PRODUCT</h2>
              <span className={styles.sectionNumber}>05</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.textCol}>
                <h3 className={styles.subheading}>Results</h3>
                <p>
                  The final product streamlines item browsing, profile
                  management, and order tracking in one cohesive rental
                  experience. Navigation is cleaner, trust indicators are more
                  visible, and users can complete key actions faster with less
                  confusion.
                </p>
                <h3 className={styles.subheading}>Reflection</h3>
                <p>
                  This project strengthened my understanding of balancing visual
                  design with practical flow. Iterative testing and feedback
                  were essential in refining features while keeping the
                  interface simple and approachable.
                </p>
              </div>
              <div className={styles.finalCol}>
                <img
                  src="/case-study/lenditout/lenditout-phones.png"
                  alt="Final LendItOut product"
                  className={`${styles.sectionImage} ${styles.phoneImage}`}
                />
                <a href="#section-01" className={styles.tryButton}>
                  Try It Now!
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <button
        className={`${styles.scrollToTopButton} ${showScrollButton ? styles.visible : styles.hidden}`}
        onClick={scrollToHeader}
        aria-label="Scroll to header"
      >
        ↑
      </button>
    </div>
  );
}
