"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavBar from "../ui/nav-bar/page";
import Footer from "../ui/footer/page";
import FeatureCard from "../ui/feature-card/page";
import styles from "./page.module.css";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "HI, I'M DENISE AQUINO";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <section className={styles.heroIntro}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeadline}>{displayedText}</h1>
            <p className={styles.heroRole}>FRONT-END WEB DEVELOPER</p>
            <p className={styles.heroCopy}>
              Front-End Web Developer currently in the Digital Design and
              Development program at BCIT, focused on building strong
              foundations in both coding and design. I enjoy coding because it
              challenges my thinking and allows me to solve problems, write
              clean and efficient code, and bring ideas to life through
              projects. I’m always eager to learn, improve my skills, and take
              on new challenges as I continue to grow. Let’s connect!
            </p>
            <div className={styles.heroLinks}>
              <a
                className={styles.heroLink}
                href="mailto:deniseaquino011@gmail.com"
              >
                <img
                  src="/icons/mail.svg"
                  alt="Email"
                  width="24"
                  height="24"
                  className={styles.linkIcon}
                />
                Deniseaquino011@gmail.com
              </a>
              <a className={styles.heroLink} href="https://linkedin.com">
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width="24"
                  height="24"
                  className={styles.linkIcon}
                />
                Linkedin
              </a>
              <a className={styles.heroLink} href="https://github.com">
                <img
                  src="/icons/github.svg"
                  alt="GitHub"
                  width="24"
                  height="24"
                  className={styles.linkIcon}
                />
                Github
              </a>
            </div>
          </div>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <h2 className={styles.featuredTitle}>MY FAVOURITE BUILDS</h2>
          </div>
          <div className={styles.featuredList}>
            <FeatureCard
              eyebrow="GOT IT"
              title="AI Powered Study Tool"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
              buttonText="Try It Now!"
            />
            <FeatureCard
              eyebrow="GOT IT"
              title="AI Powered Study Tool"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
              buttonText="Try It Now!"
              flipped={true}
            />
            <FeatureCard
              eyebrow="E-ADVERT"
              title="Japan Tour Magazine"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
              buttonText="View More Pages"
            />
          </div>
          <div className={styles.featuredFooter}>
            <Link className={styles.moreProjects} href="/projects">
              VIEW MORE PROJECTS &gt;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
