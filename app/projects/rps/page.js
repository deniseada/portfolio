import NavBar from "../../../ui/nav-bar/page";
import Footer from "../../../ui/footer/page";
import styles from "./rps.module.css";

export default function RpsCaseStudy() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <span className={styles.badge}>JAVASCRIPT DEVELOPER</span>
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
                href="https://deniseaquino011.github.io/Rock-Paper-Scissors/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewLive}
              >
                TRY IT NOW <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.tocSection}>
          <h2 className={styles.tocTitle}>Table of Contents</h2>
          <div className={styles.tocGrid}>
            <a href="#section-01" className={styles.tocItem}>
              <span className={styles.tocNumber}>01</span>
              <span className={styles.tocLabel}>OBJECTIVE/SOLUTION</span>
            </a>
            <a href="#section-02" className={styles.tocItem}>
              <span className={styles.tocNumber}>02</span>
              <span className={styles.tocLabel}>DESIGN PROCESS</span>
            </a>
            <a href="#section-03" className={styles.tocItem}>
              <span className={styles.tocNumber}>03</span>
              <span className={styles.tocLabel}>CODING & DEVELOPMENT</span>
            </a>
            <a href="#section-04" className={styles.tocItem}>
              <span className={styles.tocNumber}>04</span>
              <span className={styles.tocLabel}>FINAL PRODUCT</span>
            </a>
          </div>
        </section>

        <section id="section-01" className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>OBJECTIVE/SOLUTION</h2>
            <span className={styles.sectionNumber}>01</span>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.textCol}>
              <p>
                The objective of this project was to implement core basic
                JavaScript concepts that we learned, such as conditional logic,
                randomization, score tracking and dynamic interface updates.
              </p>
              <h3 className={styles.subheading}>Solution:</h3>
              <p>
                Turning a simple game of Rock, Paper, Scissors into a fun and
                visual experience, as a way to show an understanding of the
                basic JavaScript concepts learned during the duration of our
                course. This strategy game and visual engagement goes beyond the
                traditional one click version of the game.
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
              Using Figma and illustration tools, I helped with structuring the
              layout, the star system and overall visual hierarchy. I focused on
              making the interactions clear, so when it came to the development
              phase I understood how the logic would work.
            </p>
            <h3 className={styles.subheading}>Assets</h3>
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
                updates to ensure the correct choice appeared at the right time.
                I also had to make sure that all elements, including the score
                and star system, stayed aligned and coordinated properly after
                each interaction.
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
                The final project demonstrates a complete interactive game loop,
                where players can choose their card, play against a randomized
                opponent, and see the score update live. It balances usability
                with engaging visuals, making the experience fun while clearly
                showing the underlying JavaScript logic.
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
                href="https://deniseaquino011.github.io/Rock-Paper-Scissors/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tryButton}
              >
                Try It Now!
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
