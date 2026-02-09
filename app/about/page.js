"use client";

import NavBar from "../../ui/nav-bar/page";
import Footer from "../../ui/footer/page";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.sectionInner}>
            <h1 className={styles.pageTitle}>ABOUT ME</h1>
            <div className={styles.heroGrid}>
              <div className={styles.heroImage} aria-hidden="true" />
              <div className={styles.heroText}>
                <h2 className={styles.heroName}>Denise Aquino</h2>
                <p className={styles.heroRole}>Front-End Web Developer</p>
                <p className={styles.heroBody}>
                  Front-end web developer currently in the Digital Design and
                  Development program at BCIT. I focus on building clean,
                  accessible interfaces and translating design intent into
                  responsive, well-structured code. I enjoy collaborative work
                  that blends problem solving, visual clarity, and performance.
                </p>
                <div className={styles.heroLinks}>
                  <a
                    className={styles.heroLink}
                    href="mailto:deniseaquino011@gmail.com"
                  >
                    <span className={styles.linkIcon}>@</span>
                    Deniseaquino011@gmail.com
                  </a>
                  <a className={styles.heroLink} href="https://linkedin.com">
                    <span className={styles.linkIcon}>in</span>
                    Linkedin
                  </a>
                  <a className={styles.heroLink} href="https://github.com">
                    <span className={styles.linkIcon}>gh</span>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.skills}`}>
          <div className={styles.sectionInner}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Skills</h2>
              <p className={styles.sectionSubtitle}>
                A balanced toolkit across design, development, and
                collaboration.
              </p>
            </header>
            <div className={styles.skillGrid}>
              <article className={styles.skillCard}>
                <h3 className={styles.skillTitle}>Programming</h3>
                <div className={styles.skillList}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Next.js</span>
                </div>
              </article>
              <article className={styles.skillCard}>
                <h3 className={styles.skillTitle}>Software + Tools</h3>
                <div className={styles.skillList}>
                  <span>Figma</span>
                  <span>Adobe Illustrator</span>
                  <span>VS Code</span>
                  <span>Git + GitHub</span>
                  <span>After Effects</span>
                </div>
              </article>
              <article className={styles.skillCard}>
                <h3 className={styles.skillTitle}>Strengths</h3>
                <div className={styles.skillList}>
                  <span>Accessible UI</span>
                  <span>Design Systems</span>
                  <span>Team Collaboration</span>
                  <span>Problem Solving</span>
                  <span>Attention to Detail</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.experience}`}>
          <div className={styles.sectionInner}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Work Experience</h2>
              <p className={styles.sectionSubtitle}>
                Recent roles focused on front-end delivery and UX collaboration.
              </p>
            </header>
            <div className={styles.timeline}>
              <article className={styles.roleCard}>
                <div className={styles.roleHeader}>
                  <h3 className={styles.roleTitle}>
                    Front-End / Full-Stack Developer
                  </h3>
                  <p className={styles.roleMeta}>
                    Got It Web App — September 2025 to December 2025
                  </p>
                </div>
                <ul className={styles.roleList}>
                  <li>
                    Developed a full-stack web application that simplifies dense
                    electrical manuals for students.
                  </li>
                  <li>
                    Built a custom PDF viewer with tools for highlighting and
                    content personalization.
                  </li>
                  <li>
                    Collaborated with designers and engineers to translate UI/UX
                    into responsive components.
                  </li>
                </ul>
              </article>
              <article className={styles.roleCard}>
                <div className={styles.roleHeader}>
                  <h3 className={styles.roleTitle}>
                    UX/UI Designer + Front-End Developer
                  </h3>
                  <p className={styles.roleMeta}>
                    Premiere Web App — January 2025 to May 2025
                  </p>
                </div>
                <ul className={styles.roleList}>
                  <li>
                    Designed intuitive user flows with usability, accessibility,
                    and clarity as core goals.
                  </li>
                  <li>
                    Implemented responsive UI with HTML, CSS, and JavaScript.
                  </li>
                  <li>
                    Created research-driven wireframes, mockups, and prototypes
                    in Figma.
                  </li>
                </ul>
              </article>
              <article className={styles.roleCard}>
                <div className={styles.roleHeader}>
                  <h3 className={styles.roleTitle}>Barista</h3>
                  <p className={styles.roleMeta}>
                    Starbucks — September 2023 to Present
                  </p>
                </div>
                <ul className={styles.roleList}>
                  <li>
                    Prepared beverages while maintaining quality and speed.
                  </li>
                  <li>Managed payments and customer service interactions.</li>
                  <li>Supported team operations during peak periods.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.education}`}>
          <div className={styles.sectionInner}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Education</h2>
              <p className={styles.sectionSubtitle}>
                Foundations in digital design, development, and creative tech.
              </p>
            </header>
            <div className={styles.eduGrid}>
              <article className={styles.eduCard}>
                <h3 className={styles.eduTitle}>
                  Digital Design and Development, Diploma
                </h3>
                <p className={styles.eduMeta}>
                  British Columbia Institute of Technology — 2024 to 2026
                </p>
                <ul className={styles.eduList}>
                  <li>
                    Applied design principles to build accessible, user-centered
                    web and mobile interfaces.
                  </li>
                  <li>
                    Studied interaction design, prototyping, and front-end
                    engineering fundamentals.
                  </li>
                </ul>
              </article>
              <article className={styles.eduCard}>
                <h3 className={styles.eduTitle}>Dual IT Diploma</h3>
                <p className={styles.eduMeta}>
                  Technical Vocational High School — 2020 to 2023
                </p>
                <ul className={styles.eduList}>
                  <li>
                    Created digital assets and animations for interactive media
                    projects.
                  </li>
                  <li>
                    Practiced coding fundamentals including variables,
                    conditionals, and reusable logic.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.hobbies}`}>
          <div className={styles.sectionInner}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Hobbies + Interests</h2>
              <p className={styles.sectionSubtitle}>
                Outside of work, I enjoy a mix of creative and active pursuits.
              </p>
            </header>
            <div className={styles.hobbyIconRow}>
              <article className={styles.hobbyIconCard}>
                <div className={styles.hobbyIcon} aria-hidden="true" />
                Reading
              </article>
              <article className={styles.hobbyIconCard}>
                <div className={styles.hobbyIcon} aria-hidden="true" />
                Gaming
              </article>
              <article className={styles.hobbyIconCard}>
                <div className={styles.hobbyIcon} aria-hidden="true" />
                Working Out
              </article>
            </div>
            <div className={styles.hobbyImageRow}>
              <article className={styles.hobbyImageCard}>
                <div className={styles.hobbyImage} aria-hidden="true" />
                Traveling
              </article>
              <article className={styles.hobbyImageCard}>
                <div className={styles.hobbyImage} aria-hidden="true" />
                Photography
              </article>
            </div>
            <div className={styles.hobbyGrid}>
              <article className={styles.hobbyCard}>
                <div className={styles.hobbyBlock} aria-hidden="true" />
                Cafe Hopping
              </article>
              <article className={styles.hobbyCard}>
                <div className={styles.hobbyBlock} aria-hidden="true" />
                Vlogging/Editing
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
