"use client";

import NavBar from "../../ui/nav-bar/page";
import ProjectNav from "../../ui/project-nav/page";
import ProjectCard from "../../ui/project-card/page";
import Footer from "../../ui/footer/page";
import styles from "../page.module.css";

export default function Projects() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <ProjectNav />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
            maxWidth: "1200px",
          }}
        >
          <ProjectCard title="Project One" />
          <ProjectCard title="Project Two" />
          <ProjectCard title="Project Three" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
