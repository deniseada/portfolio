"use client";

import styles from "./feature-card.module.css";

const defaultBody =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut";
const defaultEyebrow = "GOT IT";
const defaultTitle = "AI Powered Study Tool";
const defaultButtonText = "Try It Now!";

export default function FeatureCard({
  body = defaultBody,
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  buttonText = defaultButtonText,
  flipped = false,
}) {
  return (
    <section className={`${styles.hero} ${flipped ? styles.flipped : ""}`}>
      <div className={styles.heroLeft}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.heroTitle}>{title}</h2>
        <p className={styles.heroBody}>{body}</p>
        <button className={styles.heroButton} type="button">
          {buttonText}
        </button>
      </div>
      <div className={styles.img} aria-hidden="true" />
    </section>
  );
}
