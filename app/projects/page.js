"use client";

import { useState } from "react";
import NavBar from "../../ui/nav-bar/page";
import ProjectNav from "../../ui/project-nav/page";
import ProjectCard from "../../ui/project-card/page";
import Footer from "../../ui/footer/page";
import styles from "./projects.module.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Development" },
    { id: "ux", label: "UX/UI" },
    { id: "graphic", label: "Graphic Design" },
  ];

  const projects = [
    {
      title: "GOT IT WEB APP",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      category: "web",
      wide: true,
    },
    { title: "TITLE", category: "ux" },
    { title: "TITLE", category: "graphic" },
    { title: "TITLE", category: "web" },
    { title: "TITLE", category: "ux" },
    { title: "TITLE", category: "graphic" },
  ];

  const visibleProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>PROJECTS</h1>
        <ProjectNav
          activeCategory={activeCategory}
          onChange={setActiveCategory}
          categories={categories}
        />
        <section className={styles.projectGrid}>
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              className={project.wide ? styles.projectWide : ""}
              title={project.title}
              body={project.body}
              category={project.category}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
