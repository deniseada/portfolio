"use client";

import NavBar from "../../ui/nav-bar/page";
import ProjectNav from "../../ui/project-nav/page";
import ProjectCard from "../../ui/project-card/page";
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
          <ProjectCard
            className={styles.projectWide}
            title="GOT IT WEB APP"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
          />
          <ProjectCard title="TITLE" />
          <ProjectCard title="TITLE" />
          <ProjectCard title="TITLE" />
          <ProjectCard title="TITLE" />
          <ProjectCard title="TITLE" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
