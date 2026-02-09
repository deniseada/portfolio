"use client";

import NavBar from "../../ui/nav-bar/page";
import ProjectNav from "../../ui/project-nav/page";
import Footer from "../../ui/footer/page";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>PROJECTS</h1>
        <ProjectNav />
        <section className={styles.projectGrid}>
          <article className={`${styles.projectCard} ${styles.projectWide}`}>
            <h2 className={styles.cardTitle}>GOT IT WEB APP</h2>
            <div className={styles.cardBody}>
              <span className={styles.cardRule} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </p>
            </div>
          </article>
          <article className={styles.projectCard}>
            <h2 className={styles.cardTitle}>TITLE</h2>
          </article>
          <article className={styles.projectCard}>
            <h2 className={styles.cardTitle}>TITLE</h2>
          </article>
          <article className={styles.projectCard}>
            <h2 className={styles.cardTitle}>TITLE</h2>
          </article>
          <article className={styles.projectCard}>
            <h2 className={styles.cardTitle}>TITLE</h2>
          </article>
          <article className={styles.projectCard}>
            <h2 className={styles.cardTitle}>TITLE</h2>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
