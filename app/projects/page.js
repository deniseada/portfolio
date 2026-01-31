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
        <div className={styles.projectGrid}>
          <ProjectCard title="Title" category="Web Development UX/UI" />
          <ProjectCard title="Title" />
          <ProjectCard title="Title" category="Web Development UX/UI" />
          <ProjectCard title="Title" />
          <ProjectCard title="Title" category="Web Development UX/UI" />
          <ProjectCard title="Title" />
          <ProjectCard title="Title" category="Web Development UX/UI" />
          <ProjectCard title="Title" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
