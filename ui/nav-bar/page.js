"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./nav-bar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const isActive = (href) => {
    return pathname === href;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    if (isContactOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isContactOpen]);

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
        <div className={styles.navItem}>
          <button
            type="button"
            className={styles.navLink}
            aria-expanded={isContactOpen}
            aria-controls="contact-menu"
            onClick={() => setIsContactOpen((open) => !open)}
          >
            Contact
          </button>
          {isContactOpen ? (
            <div className={styles.dropdown} id="contact-menu" role="menu">
              <a
                className={styles.dropdownLink}
                href="mailto:deniseaquino011@gmail.com"
                onClick={() => setIsContactOpen(false)}
                role="menuitem"
              >
                <span className={styles.linkIcon}>@</span>
                Deniseaquino011@gmail.com
              </a>
              <a
                className={styles.dropdownLink}
                href="https://linkedin.com"
                onClick={() => setIsContactOpen(false)}
                role="menuitem"
              >
                <span className={styles.linkIcon}>in</span>
                Linkedin
              </a>
              <a
                className={styles.dropdownLink}
                href="https://github.com"
                onClick={() => setIsContactOpen(false)}
                role="menuitem"
              >
                <span className={styles.linkIcon}>gh</span>
                Github
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
