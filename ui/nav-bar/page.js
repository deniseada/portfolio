"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./nav-bar.module.css";

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link
          href="/"
          className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`${styles.navLink} ${isActive("/projects") ? styles.active : ""}`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`${styles.navLink} ${isActive("/about") ? styles.active : ""}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${styles.navLink} ${isActive("/contact") ? styles.active : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
