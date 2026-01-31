"use client";

import NavBar from "../../ui/nav-bar/page";
import Footer from "../../ui/footer/page";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Contact</h1>
        <p>Get in touch with me.</p>
      </main>
      <Footer />
    </div>
  );
}
