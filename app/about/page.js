"use client";

import NavBar from "../../ui/nav-bar/page";
import Footer from "../../ui/footer/page";
import HobbiesCard from "../../ui/hobbies-card/page";
import ExperienceCard from "../../ui/experience-card/page";
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.linkIcon}
                    >
                      <path
                        d="M5.71942 28.5971C4.933 28.5971 4.25382 28.3231 3.68188 27.775C3.13377 27.203 2.85971 26.5238 2.85971 25.7374V8.57913C2.85971 7.79271 3.13377 7.12545 3.68188 6.57733C4.25382 6.00539 4.933 5.71942 5.71942 5.71942H28.5971C29.3835 5.71942 30.0508 6.00539 30.5989 6.57733C31.1709 7.12545 31.4568 7.79271 31.4568 8.57913V25.7374C31.4568 26.5238 31.1709 27.203 30.5989 27.775C30.0508 28.3231 29.3835 28.5971 28.5971 28.5971H5.71942ZM17.1583 18.5881L28.5971 11.4388V8.57913L17.1583 15.7284L5.71942 8.57913V11.4388L17.1583 18.5881Z"
                        fill="#1D1B20"
                      />
                    </svg>
                    Deniseaquino011@gmail.com
                  </a>
                  <a className={styles.heroLink} href="https://linkedin.com">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.linkIcon}
                    >
                      <path
                        d="M22.8777 11.4389C25.1531 11.4389 27.3352 12.3427 28.9441 13.9516C30.553 15.5605 31.4569 17.7427 31.4569 20.018V30.027H25.7374V20.018C25.7374 19.2596 25.4361 18.5322 24.8998 17.9959C24.3635 17.4596 23.6362 17.1583 22.8777 17.1583C22.1193 17.1583 21.3919 17.4596 20.8556 17.9959C20.3193 18.5322 20.018 19.2596 20.018 20.018V30.027H14.2986V20.018C14.2986 17.7427 15.2025 15.5605 16.8114 13.9516C18.4203 12.3427 20.6024 11.4389 22.8777 11.4389Z"
                        stroke="#1E1E1E"
                        strokeWidth="3.0027"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.57917 12.8687H2.85974V30.027H8.57917V12.8687Z"
                        stroke="#1E1E1E"
                        strokeWidth="3.0027"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.71945 8.57917C7.29883 8.57917 8.57917 7.29883 8.57917 5.71945C8.57917 4.14008 7.29883 2.85974 5.71945 2.85974C4.14008 2.85974 2.85974 4.14008 2.85974 5.71945C2.85974 7.29883 4.14008 8.57917 5.71945 8.57917Z"
                        stroke="#1E1E1E"
                        strokeWidth="3.0027"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Linkedin
                  </a>
                  <a className={styles.heroLink} href="https://github.com">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.linkIcon}
                    >
                      <g clipPath="url(#clip0_94_327)">
                        <path
                          d="M12.8687 27.1673C5.71945 29.312 5.71945 23.5926 2.85974 22.8777M22.8777 31.4568V25.9233C22.9314 25.2415 22.8392 24.5561 22.6075 23.9126C22.3758 23.2692 22.0097 22.6824 21.5337 22.1914C26.0234 21.6909 30.7419 19.9894 30.7419 12.1824C30.7416 10.186 29.9737 8.26628 28.5972 6.82041C29.249 5.07385 29.2029 3.14332 28.4685 1.42985C28.4685 1.42985 26.7812 0.929401 22.8777 3.54604C19.6005 2.65784 16.146 2.65784 12.8687 3.54604C8.96523 0.929401 7.278 1.42985 7.278 1.42985C6.54359 3.14332 6.4975 5.07385 7.14931 6.82041C5.76253 8.277 4.99383 10.2141 5.00453 12.2253C5.00453 19.9751 9.72305 21.6766 14.2128 22.2343C13.7424 22.7204 13.3796 23.3001 13.148 23.9357C12.9164 24.5713 12.8213 25.2485 12.8687 25.9233V31.4568"
                          stroke="#1E1E1E"
                          strokeWidth="3.21718"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_94_327">
                          <rect width="34.3165" height="34.3165" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <nav className={styles.sectionTabs} aria-label="About sections">
          <div className={styles.sectionTabsInner}>
            <a href="#skills">Skills</a>
            <a href="#work-experience">Work Experience</a>
            <a href="#education">Education</a>
            <a href="#hobbies">Hobbies</a>
          </div>
        </nav>

        <section id="skills" className={`${styles.section} ${styles.skills}`}>
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

        <section
          id="work-experience"
          className={`${styles.section} ${styles.experience}`}
        >
          <div className={styles.sectionInner}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Work Experience</h2>
              <p className={styles.sectionSubtitle}>
                Recent roles focused on front-end delivery and UX collaboration.
              </p>
            </header>
            <div className={styles.timeline}>
              <ExperienceCard
                title="Front-End / Full-Stack Developer"
                project="Got It Web App — September 2025 to December 2025"
                bullets={[
                  "Developed a full-stack web application that simplifies dense electrical manuals for students.",
                  "Built a custom PDF viewer with tools for highlighting and content personalization.",
                  "Collaborated with designers and engineers to translate UI/UX into responsive components.",
                ]}
              />
              <ExperienceCard
                title="UX/UI Designer + Front-End Developer"
                project="Premiere Web App — January 2025 to May 2025"
                bullets={[
                  "Designed intuitive user flows with usability, accessibility, and clarity as core goals.",
                  "Implemented responsive UI with HTML, CSS, and JavaScript.",
                  "Created research-driven wireframes, mockups, and prototypes in Figma.",
                ]}
              />
            </div>
          </div>
        </section>

        <section
          id="education"
          className={`${styles.section} ${styles.education}`}
        >
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
            </div>
          </div>
        </section>

        <section id="hobbies" className={`${styles.section} ${styles.hobbies}`}>
          <div className={styles.sectionInner}>
            <header className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Hobbies</h2>
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
            <div className={styles.hobbyPanels}>
              <HobbiesCard
                title="TRAVELING"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                images={[]}
              />
              <HobbiesCard
                title="PHOTOGRAPHY"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                images={[]}
              />
              <HobbiesCard
                title="CAFE HOPPING"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                images={[]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
