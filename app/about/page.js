"use client";

import NavBar from "../../ui/nav-bar/page";
import Footer from "../../ui/footer/page";
import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>About</h1>
        <p>Learn more about me and my experience.</p>
      </main>
      <Footer />
    </div>
  );
}
