"use client";

import NavBar from "../../ui/nav-bar/page";
import Footer from "../../ui/footer/page";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>CONTACT</h1>
      </main>
      <Footer />
    </div>
  );
}
