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
        <Link href="/" className={styles.logoLink}>
          <svg
            className={styles.logo}
            viewBox="0 0 74.18 72.27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M63.07,10.54C55.66,3.51,45.78,0,33.42,0H0v2.09c3.1,0,5.24.84,6.42,2.53s1.77,4.69,1.77,9v8.41C12.96,15.96,15.93,8.41,16.3.17c.88,19.77,16.7,35.59,36.47,36.47-19.24.86-34.73,15.88-36.35,34.91-.65-7.63-3.51-14.62-7.97-20.31v7.46c0,4.23-.59,7.2-1.77,8.91-1.18,1.71-3.32,2.56-6.42,2.56v2.09h34.09c12.52,0,22.28-3.16,29.3-9.49,7.02-6.33,10.52-14.81,10.52-25.44s-3.7-19.78-11.11-26.8ZM47.04,25.74c0-3.44,2.79-6.23,6.23-6.23s6.23,2.79,6.23,6.23-2.79,6.23-6.23,6.23-6.23-2.79-6.23-6.23ZM50.38,58.86l-.33-.46.36-.31c2.17-1.71,3.32-3.7,3.46-5.99-.28,0-.55-.02-.83-.06-3.65-.48-6.26-3.49-5.84-6.72.42-3.23,3.73-5.46,7.37-4.99,2.76.36,4.93,2.17,5.64,4.44.34.8.57,1.64.61,2.34.33,5.55-3.15,9.47-10.44,11.74Z" />
          </svg>
        </Link>
        <div className={styles.navLinks}>
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
      </div>
    </nav>
  );
}
