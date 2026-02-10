"use client";

import styles from "./project-nav.module.css";

const defaultCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Development" },
  { id: "ux", label: "UX/UI" },
  { id: "graphic", label: "Graphic Design" },
];

export default function ProjectNav({
  activeCategory,
  onChange,
  categories = defaultCategories,
}) {
  return (
    <nav className={styles.projectNav}>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`${styles.navButton} ${activeCategory === category.id ? styles.active : ""}`}
          onClick={() => onChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </nav>
  );
}
