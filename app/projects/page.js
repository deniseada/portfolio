"use client";

import { useState } from "react";
import Link from "next/link";
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

  const getCategoryLabel = (categoryIds) => {
    if (!categoryIds) return "";
    const ids = Array.isArray(categoryIds) ? categoryIds : [categoryIds];
    return ids
      .map((id) => {
        const foundCategory = categories.find((cat) => cat.id === id);
        return foundCategory ? foundCategory.label : id;
      })
      .filter(Boolean)
      .join(" / ");
  };

  const projects = [
    {
      title: "GOT IT",
      category: ["ux", "web"],
      wide: true,
      image: "/project-mockup/gotit-brochure.jpg",
      slug: "got-it",
    },
    {
      title: "BILLBOARD ADVERTISEMENT",
      category: "graphic",
      image: "/project-mockup/cow-billboard.png",
    },
    {
      title: "LOTUS POSTER",
      category: "graphic",
      image: "/project-mockup/lotus-mockup.png",
    },
    {
      title: "E-ADVERTISING",
      category: "graphic",
      image: "/project-mockup/eAdvert-mockup.png",
    },
    {
      title: "ROCK PAPER SCISSORS GAME",
      category: "web",
      image: "/project-mockup/landing-page.png",
    },
    {
      title: "SPOTIFY",
      category: "Motion Graphics",
      wide: true,
      image: "/project-mockup/spotify.png",
    },

    {
      title: "BRUNCH MENU",
      category: "graphic",
      image: "/project-mockup/menu-mockup.png",
    },
    {
      title: "PAINTING",
      category: "Photoshop Painting",
      image: "/project-mockup/painting.png",
    },
    {
      title: "CAMERA REFERENCE",
      category: "Illustrator",
      image: "/project-mockup/camera-bg.png",
    },
    {
      title: "LEND IT OUT",
      category: ["ux", "web"],
      image: "/case-study/lenditout/lenditout-phones.png",
    },
  ];

  const visibleProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => {
          const projectCategories = Array.isArray(project.category)
            ? project.category
            : [project.category];
          return projectCategories.includes(activeCategory);
        });

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
          {visibleProjects.map((project, index) => {
            const card = (
              <ProjectCard
                key={`${project.title}-${index}`}
                className={project.wide ? styles.projectWide : ""}
                title={project.title}
                body={project.body}
                category={project.category}
                categoryLabel={getCategoryLabel(project.category)}
                image={project.image}
              />
            );

            return project.slug ? (
              <Link
                key={`${project.title}-${index}`}
                href={`/projects/${project.slug}`}
                className={`${styles.projectLink} ${project.wide ? styles.projectWide : ""}`}
              >
                {card}
              </Link>
            ) : (
              card
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}
