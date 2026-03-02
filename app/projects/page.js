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
      title: "GOT IT BROCHURE",
      category: "graphic",
      wide: true,
      image: "/project-mockup/gotit-brochure.jpg",
    },
    {
      title: "BILLBOARD ADVERTISEMENT",
      category: "graphic",
      image: "/project-mockup/cow-billboard.png",
    },
    {
      title: "UI/UX DESIGN SYSTEM",
      category: "ux",
      image: "/project-mockup/menu-mockup.png",
    },
    {
      title: "LOTUS POSTER",
      category: "graphic",
      image: "/project-mockup/lotus-mockup.png",
    },
    {
      title: "LANDING PAGE",
      category: "web",
      image: "/project-mockup/landing-page.png",
    },
    {
      title: "CAMERA REFERENCE",
      category: "ux",
      image: "/project-mockup/camera-bg.png",
    },
    {
      title: "SPOTIFY",
      category: "graphic",
      wide: true,
      image: "/project-mockup/spotify.png",
    },
    {
      title: "WATERCOLOR PAINTING",
      category: "graphic",
      image: "/project-mockup/painting.png",
    },
    {
      title: "E-ADVERTISING",
      category: "graphic",
      image: "/project-mockup/eAdvert12.png",
    },
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
              image={project.image}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
