"use client";

import styles from "./feature-card.module.css";

const defaultBody =
  "Gott was created to help neurodiverse electrical apprentices in British Columbia who often find traditional manuals overwhelming. For students with Dyslexia, ADHD, or Autism Spectrum Disorder, complex technical materials can make learning frustrating and stressful.";
const defaultEyebrow = "Got It, an AI Powered Study Tool";
const defaultTitle = "This Is What Studying Looks Like With AI";
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
