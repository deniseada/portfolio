"use client";

import NavBar from "../../ui/nav-bar/page";
import Footer from "../../ui/footer/page";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}
