"use client";

import NavBar from "../ui/nav-bar/page";
import Footer from "../ui/footer/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
      </main>
    </div>
  );
}
