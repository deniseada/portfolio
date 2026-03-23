"use client";

import { useState, useEffect } from "react";
import NavBar from "../../../ui/nav-bar/page";
import Footer from "../../../ui/footer/page";
import FloatingLines from "../../../ui/floating-lines/FloatingLines";
import GoogleDriveVideo from "../../../ui/google-drive-video/page";
import styles from "./case-study.module.css";

export default function GotItCaseStudy() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHeader = () => {
    const headerSection = document.querySelector(`.${styles.header}`);
    if (headerSection) {
      headerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        {/* Header Section */}
        <section className={styles.header}>
          <FloatingLines
            linesGradient={["#7E5E8F", "#654C79", "#4F3D63"]}
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={[7, 9, 7]}
            lineDistance={[10, 8, 10]}
            animationSpeed={0.55}
            interactive={false}
            parallax={false}
            mixBlendMode="screen"
            opacity={0.35}
          />
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <span className={styles.badge}>FRONT-END DEVELOPER</span>
              <h1 className={styles.title}>GOT IT</h1>
              <h2 className={styles.subtitle}>
                This Is What Studying Looks Like With AI
              </h2>
              <p className={styles.description}>
                Got It is a productivity app designed and developed to support
                university students' studying. Got It is designed to support
                university students doing independent studying with an
                all-in-one app that includes a pomodoro timer, notepad, and AI
                chat made both accessible and aesthetically pleasing.
              </p>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.metaSection}>
                <span className={styles.metaLabel}>ROLE</span>
                <p className={styles.metaValue}>Front-End Developer</p>
              </div>
              <div className={styles.metaSection}>
                <span className={styles.metaLabel}>TOOLS</span>
                <p className={styles.metaValue}>Figma, Next.js, React</p>
              </div>
              <a
                href="https://got-it-phi.vercel.app/"
                className={styles.viewLive}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW LIVE <span className={styles.arrow}>↗</span>
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
                <span className={styles.tocNavLabel}>CODING & DEVELOPMENT</span>
              </a>
              <a href="#section-05" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>05</span>
                <span className={styles.tocNavLabel}>FINAL PRODUCT</span>
              </a>
              <a href="#section-06" className={styles.tocNavItem}>
                <span className={styles.tocNavNumber}>06</span>
                <span className={styles.tocNavLabel}>PROMO VIDEO</span>
              </a>
            </nav>
          </aside>

          {/* Section 01: Problem/Solution */}
          <section className={styles.contentSection} id="section-01">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>PROBLEM/SOLUTION</h2>
              <span className={styles.sectionNumber}>01</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.textColumn}>
                <p className={styles.problemText}>
                  Neurodiverse electrical apprentices in BC struggle with dense
                  manuals that are not designed for varied learning styles.
                  Accommodations for Dyslexia, ADHD, or Autism Spectrum Disorder
                  are hard to come across, and resources from schools and trades
                  are limited. Electrical work requires accurate understanding
                  to ensure safe work practices and certification. Inaccessible
                  resources create learning barriers and increase professional
                  risk.
                </p>
                <p>
                  <strong>Solution:</strong> Got It provides a study experience
                  that turns dense electrical manuals into easier-to-process
                  learning content. Apprentices can upload their own PDFs or
                  open built-in textbooks, then use AI tools to generate clear
                  summaries and visual mind maps that break topics into key
                  points. As the front end developer, I implemented the PDF
                  viewer and toolbar so users can navigate documents smoothly
                  and focus on learning without feeling overwhelmed.
                </p>
              </div>
              <div className={styles.imageColumn}>
                <img
                  src="/case-study/got-it/gotit-laptop.png"
                  alt="Laptop mockup"
                  className={styles.sectionImage}
                />
              </div>
            </div>
          </section>

          {/* Section 02: User Research */}
          <section className={styles.contentSection} id="section-02">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>USER RESEARCH</h2>
              <span className={styles.sectionNumber}>02</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.researchGrid}>
                <div className={styles.researchColumn}>
                  <h3 className={styles.subsectionTitle}>Approach</h3>
                  <p>
                    While my primary role was more on the development side, I
                    supported research by contributing to asking intuitive
                    questions in our survey which helped our team design
                    specifically to fill the needs of neurodiverse learning.
                  </p>
                  <h3 className={styles.subsectionTitle}>Research analysis:</h3>
                  <p>
                    A common trend was found, with identifying barriers for
                    neurodiverse individuals, which is the feeling of overwhelm
                    with text density and poor visual hierarchy, caused by an
                    increased cognitive load. This research helped us design the
                    website to be as simple as possible to accommodate their
                    needs.
                  </p>
                </div>
                <div className={styles.researchColumn}>
                  <h3 className={styles.subsectionTitle}>Survey Results</h3>
                  <div className={styles.surveyBox}>
                    <div className={styles.surveyItem}>
                      <p className={styles.surveyQuestion}>
                        What subjects do you need the most study help in?
                      </p>
                      <p className={styles.surveyAnswer}>
                        Most popular responses: Science, Math, Computer Science
                      </p>
                    </div>
                    <div className={styles.surveyItem}>
                      <p className={styles.surveyQuestion}>
                        What is your biggest struggle with studying?
                      </p>
                      <p className={styles.surveyAnswer}>
                        Most popular responses: Staying focused, Time
                        management, Understanding complex topics
                      </p>
                    </div>
                    <div className={styles.surveyItem}>
                      <p className={styles.surveyQuestion}>
                        How do you prefer to study?
                      </p>
                      <p className={styles.surveyAnswer}>
                        Most popular responses: Practice problems, Note-taking,
                        Study groups
                      </p>
                    </div>
                    <div className={styles.surveyItem}>
                      <p className={styles.surveyQuestion}>
                        What features would you want in a study app?
                      </p>
                      <p className={styles.surveyAnswer}>
                        Most popular responses: Timer/breaks, AI assistance,
                        Note organization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 03: User Testing */}
          <section className={styles.contentSection} id="section-03">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>USER TESTING</h2>
              <span className={styles.sectionNumber}>03</span>
            </div>
            <div className={styles.sectionContent}>
              <p className={styles.testingIntro}>
                After the first phase of wireframing, it was time to conduct
                testing with the designs in use what worked and what needs to be
                improved. Testing with fellow students provided valuable
                feedback. Here's what I learned through trial and error, leading
                to a more intuitive design with clear labeling and improved
                messaging. Armed with this clarity, we revised and created a
                better final user experience.
              </p>

              <div className={styles.comparisonGrid}>
                <div className={styles.comparisonSection}>
                  <h3 className={styles.comparisonTitle}>Streamlined</h3>
                  <div className={styles.beforeAfter}>
                    <div className={styles.comparisonItem}>
                      <span className={styles.label}>Before</span>
                      <img
                        src="/case-study/got-it/mvp-old.png"
                        alt="Before streamlining"
                        className={styles.comparisonImage}
                      />
                    </div>
                    <div className={styles.comparisonItem}>
                      <span className={styles.label}>After</span>
                      <img
                        src="/case-study/got-it/mvp-new.png"
                        alt="After streamlining"
                        className={styles.comparisonImage}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.comparisonSection}>
                  <h3 className={styles.comparisonTitle}>
                    Clean and Simplified
                  </h3>
                  <div className={styles.beforeAfter}>
                    <div className={styles.comparisonItem}>
                      <span className={styles.label}>Before</span>
                      <img
                        src="/case-study/got-it/dashboard-old.png"
                        alt="Before simplifying"
                        className={styles.comparisonImage}
                      />
                    </div>
                    <div className={styles.comparisonItem}>
                      <span className={styles.label}>After</span>
                      <img
                        src="/case-study/got-it/dashboard-new.png"
                        alt="After simplifying"
                        className={styles.comparisonImage}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.comparisonGrid}>
                <div className={styles.comparisonSection}>
                  <h3 className={styles.comparisonTitle}>Unclear labels</h3>
                  <div className={styles.beforeAfter}>
                    <div className={styles.comparisonItem}>
                      <span className={styles.label}>Before</span>
                      <img
                        src="/case-study/got-it/homepage.png"
                        alt="Before labels"
                        className={styles.comparisonImage}
                      />
                    </div>
                    <div className={styles.comparisonItem}>
                      <span className={styles.label}>After</span>
                      <img
                        src="/case-study/got-it/dashboard-new.png"
                        alt="After labels"
                        className={styles.comparisonImage}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.comparisonSection}>
                  <h3 className={styles.comparisonTitle}>
                    Clear and Understandable
                  </h3>
                  <div className={styles.beforeAfter}>
                    <div className={styles.comparisonItem}>
                      <span className={styles.label}>Before</span>
                      <img
                        src="/case-study/got-it/mvp-old.png"
                        alt="Before clarity"
                        className={styles.comparisonImage}
                      />
                    </div>
                    <div className={styles.comparisonItem}>
                      <span className={styles.label}>After</span>
                      <img
                        src="/case-study/got-it/homepage.png"
                        alt="After clarity"
                        className={styles.comparisonImage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 04: Coding & Development */}
          <section className={styles.contentSection} id="section-04">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>CODING & DEVELOPMENT</h2>
              <span className={styles.sectionNumber}>04</span>
            </div>
            <div className={styles.sectionContent}>
              <p className={styles.developmentIntro}>
                During the coding phase, I implemented the PDF viewer and a
                toolbar that is able to change the state of the PDF and AI
                summarization. Users were able to highlight text in the PDF for
                later reference, upload and download the PDF. I made sure the
                design was responsive and clean UI behaviour, integrating this
                was one of our key features that supports the app's function and
                accessibility.
              </p>

              <div className={styles.techStack}>
                <h3 className={styles.techTitle}>Tech & UI Library</h3>
                <div className={styles.techLogos}>
                  <div className={styles.techItem}>
                    <span className={styles.techName}>NEXT.js</span>
                  </div>
                  <div className={styles.techItem}>
                    <img
                      src="/tech-logos/github.png"
                      alt="GitHub"
                      className={styles.techLogo}
                    />
                  </div>
                  <div className={styles.techItem}>
                    <img
                      src="/tech-logos/figma.png"
                      alt="Figma"
                      className={styles.techLogo}
                    />
                  </div>
                  <div className={styles.techItem}>
                    <img
                      src="/tech-logos/react.png"
                      alt="React"
                      className={styles.techLogo}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.challenges}>
                <h3 className={styles.challengesTitle}>Challenges</h3>
                <p>
                  One of the main challenges I came across was implementing the
                  functionalities of a toolbar to our own custom one and have it
                  interaction and control the PDF viewer's state.
                </p>
                <p>
                  Overcoming this challenge helped strengthen my understanding
                  on component communication and debugging third-party library
                  limitations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 05: Final Product */}
          <section className={styles.contentSection} id="section-05">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>FINAL PRODUCT</h2>
              <span className={styles.sectionNumber}>05</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.finalGrid}>
                <div className={styles.finalText}>
                  <h3 className={styles.resultsTitle}>Results</h3>
                  <p>
                    The final solution enables autonomous to upload homework
                    assignments any device efficiently, which mean leaving much
                    of their classes. The end product was delivered in 3 weeks,
                    which mean learning you'll learning leaving today. I have
                    received positive feedback from fellow students who have
                    learned with it so far.
                  </p>
                  <p>
                    Through this project, I gained hands-on experience with
                    full-stack development, API integration, and user experience
                    design. The project reinforced the importance of user
                    testing and iteration.
                  </p>
                  <p>
                    During the design, I learned we simplify how students
                    multitask while studying while our GPT powered learning
                    assistant that makes learning more efficient and enjoyable
                    for students.
                  </p>
                </div>
                <div className={styles.finalImage}>
                  <img
                    src="/case-study/got-it/gotit-brochure.jpg"
                    alt="Final product"
                    className={styles.productImage}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 06: Promo Video */}
          <section className={styles.contentSection} id="section-06">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>PROMO VIDEO</h2>
              <span className={styles.sectionNumber}>06</span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.videoContainer}>
                <GoogleDriveVideo
                  fileId="1p_UiIPO0JIgpV5PPGGjbZFHa9rPTtsji"
                  title="Got It Promo Video"
                />
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
