"use client";

import { useState } from "react";
import styles from "./project-nav.module.css";

export default function ProjectNav() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web Development", "UX/UI", "Graphic Design"];

  return (
    <nav className={styles.projectNav}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.navButton} ${activeCategory === category ? styles.active : ""}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
