"use client";

import { useEffect, useState } from "react";
import NavBar from "../../../ui/nav-bar/page";
import Footer from "../../../ui/footer/page";
import Waves from "../../../ui/waves/Waves";
import styles from "./rps.module.css";

export default function RpsCaseStudy() {
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
          <Waves
            lineColor="rgba(100, 200, 255, 0.35)"
            backgroundColor="transparent"
            waveSpeedX={0.008}
            waveSpeedY={0.004}
            waveAmpX={48}
            waveAmpY={24}
            xGap={18}
            yGap={40}
            friction={0.94}
            tension={0.004}
            maxCursorMove={0}
          />
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <span className={styles.badge}>WEB DEVELOPMENT</span>
              <h1 className={styles.title}>
                ROCK,PAPER,
                <br />
                SCISSOR
              </h1>
              <h2 className={styles.subtitle}>A Deep Sea Duel.</h2>
              <p className={styles.description}>
                This game is an interactive underwater version of Rock, Paper,
                Scissors built with JavaScript to demonstrate conditional logic,
                randomization, score tracking, and dynamic UI updates, combining
                engaging visuals with functional game logic.
              </p>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.metaSection}>
                <span className={styles.metaLabel}>ROLE</span>
                <p className={styles.metaValue}>JavaScript Developer</p>
              </div>
              <div className={styles.metaSection}>
                <span className={styles.metaLabel}>TOOLS</span>
                <p className={styles.metaValue}>JavaScript, HTML, CSS, Figma</p>
              </div>
              <a
                href="https://github.com/Zkim1234/comp2170-rock_paper_scissors"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewLive}
              >
                TRY IT NOW <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Content with Sticky TOC Sidebar */}
        <div className={styles.contentWrapper}>
          <aside className={styles.tocSidebar}>
            <nav className={styles.tocNav}>
              <h2 className={styles.tocNavTitle}>Contents</h2>
              <a href="#section-01" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>01</span>
                <span className={styles.tocNavLabel}>OBJECTIVE/SOLUTION</span>
              </a>
              <a href="#section-02" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>02</span>
                <span className={styles.tocNavLabel}>DESIGN PROCESS</span>
              </a>
              <a href="#section-03" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>03</span>
                <span className={styles.tocNavLabel}>CODING & DEVELOPMENT</span>
              </a>
              <a href="#section-04" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>04</span>
                <span className={styles.tocNavLabel}>FINAL PRODUCT</span>
              </a>
            </nav>
          </aside>

          <section id="section-01" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>OBJECTIVE/SOLUTION</h2>
              <span className={styles.sectionNumber}>01</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.textCol}>
                <p>
                  The objective of this project was to implement core basic
                  JavaScript concepts that we learned, such as conditional
                  logic, randomization, score tracking and dynamic interface
                  updates.
                </p>
                <h3 className={styles.subheading}>Solution:</h3>
                <p>
                  Turning a simple game of Rock, Paper, Scissors into a fun and
                  visual experience, as a way to show an understanding of the
                  basic JavaScript concepts learned during the duration of our
                  course. This strategy game and visual engagement goes beyond
                  the traditional one click version of the game.
                </p>
              </div>
              <img
                src="/case-study/rps/main-game.png"
                alt="Main game interface"
                className={`${styles.sectionImage} ${styles.gameImage}`}
              />
            </div>
          </section>

          <section id="section-02" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>DESIGN PROCESS</h2>
              <span className={styles.sectionNumber}>02</span>
            </div>
            <div className={styles.sectionContent}>
              <p>
                Using Figma and illustration tools, I helped with structuring
                the layout, the star system and overall visual hierarchy. I
                focused on making the interactions clear, so when it came to the
                development phase I understood how the logic would work.
              </p>
            </div>
            <div className={styles.assetsBoard}>
              <div className={styles.assetsLeftCol}>
                <h3 className={styles.assetsTitle}>Assets</h3>
                <div className={styles.assetsGroup}>
                  <h4>Enemy Cards</h4>
                  <div className={styles.assetsCardsRow}>
                    <img
                      src="/case-study/rps/rock-red.png"
                      alt="Enemy rock card"
                    />
                    <img
                      src="/case-study/rps/paper-red.png"
                      alt="Enemy paper card"
                    />
                    <img
                      src="/case-study/rps/scissors-red.png"
                      alt="Enemy scissors card"
                    />
                  </div>
                </div>
                <div className={styles.assetsGroup}>
                  <h4>Player Cards</h4>
                  <div className={styles.assetsCardsRow}>
                    <img
                      src="/case-study/rps/rock-blue.png"
                      alt="Player rock card"
                    />
                    <img
                      src="/case-study/rps/paper-blue.png"
                      alt="Player paper card"
                    />
                    <img
                      src="/case-study/rps/scissors-blue.png"
                      alt="Player scissors card"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.assetsOverlayCol}>
                <img
                  src="/case-study/rps/you-lose-overlay.png"
                  alt="You lose overlay"
                />
                <img
                  src="/case-study/rps/you-win-overlay.png"
                  alt="You win overlay"
                />
              </div>

              <div className={styles.assetsRightCol}>
                <img
                  src="/case-study/rps/pause-card.png"
                  alt="Pause game card"
                  className={styles.pauseCardPreview}
                />
                <div className={styles.pointsPreview}>
                  <h4>Player Points</h4>
                  <div className={styles.starsPreview}>
                    <img
                      src="/case-study/rps/uncoloured-star.png"
                      alt="Uncolored point star"
                    />
                    <img
                      src="/case-study/rps/coloured-star.png"
                      alt="Colored point star"
                    />
                  </div>
                  <img
                    src="/case-study/rps/card-deck.png"
                    alt="Card deck"
                    className={styles.deckPreview}
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="section-03" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>CODING/DEVELOPMENT</h2>
              <span className={styles.sectionNumber}>03</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.textCol}>
                <p>
                  The game was built using JavaScript and developed in Visual
                  Studio Code. In this course, we were encouraged to use AI as
                  long as we understood the content, so I utilized tools such as
                  Cursor and GitHub Copilot to assist with logic and structure.
                </p>
                <h3 className={styles.subheading}>Challenges</h3>
                <p>
                  One of the main challenges I faced was displaying the selected
                  card in the center of the screen. This was new to me, and it
                  required careful handling of DOM manipulation and dynamic
                  updates to ensure the correct choice appeared at the right
                  time. I also had to make sure that all elements, including the
                  score and star system, stayed aligned and coordinated properly
                  after each interaction.
                </p>
                <p>
                  While AI helped with the initial structure, integrating
                  everything together was more tedious than expected. I had to
                  debug, fix file paths, and reorganize parts of the project to
                  ensure everything worked smoothly and consistently.
                </p>
              </div>
              <div className={styles.vsCards}>
                <img src="/case-study/rps/paper-red.png" alt="Paper card" />
                <span>VS</span>
                <img
                  src="/case-study/rps/scissors-blue.png"
                  alt="Scissors card"
                />
              </div>
            </div>
          </section>

          <section id="section-04" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>FINAL PRODUCT</h2>
              <span className={styles.sectionNumber}>04</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.textCol}>
                <h3 className={styles.subheading}>Results</h3>
                <p>
                  The final project demonstrates a complete interactive game
                  loop, where players can choose their card, play against a
                  randomized opponent, and see the score update live. It
                  balances usability with engaging visuals, making the
                  experience fun while clearly showing the underlying JavaScript
                  logic.
                </p>
                <h3 className={styles.subheading}>Reflection</h3>
                <p>
                  Overall, I think this was a good learning experience utilizing
                  AI, as well as implementing our knowledge of JavaScript
                  fundamentals. The final product successfully integrates
                  interactive UI elements with dynamic game logic.
                </p>
              </div>
              <div className={styles.finalCol}>
                <img
                  src="/case-study/rps/main-game.png"
                  alt="Final product game screen"
                  className={`${styles.sectionImage} ${styles.gameImage}`}
                />
                <a
                  href="https://github.com/Zkim1234/comp2170-rock_paper_scissors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tryButton}
                >
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
