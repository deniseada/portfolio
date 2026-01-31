import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.heading}>MENU</h3>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/projects" className={styles.link}>
            Projects
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading}>SOCIALS</h3>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Linkedin
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Github
          </a>
        </div>

        <div className={styles.logoSection}>
          <div className={styles.logoBox}>
            <span className={styles.logoText}>LOGO</span>
          </div>
          <p className={styles.copyright}>Denise Aquino @ 2026</p>
        </div>
      </div>
    </footer>
  );
}
