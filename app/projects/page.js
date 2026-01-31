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
          <ProjectCard title="Title" flippedText="Web Development UX/UI" />
          <ProjectCard title="Title" flippedText="Web Development UX/UI" />
          <ProjectCard title="Title" flippedText="Web Development UX/UI" />
          <ProjectCard title="Title" flippedText="Web Development UX/UI" />
          <ProjectCard title="Title" flippedText="Web Development UX/UI" />
          <ProjectCard title="Title" flippedText="Web Development UX/UI" />
          <ProjectCard title="Title" flippedText="Web Development UX/UI" />
          <ProjectCard title="Title" flippedText="Web Development UX/UI" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
