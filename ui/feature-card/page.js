"use client";

import Link from "next/link";
import styles from "./feature-card.module.css";

const defaultBody =
  "Gott was created to help neurodiverse electrical apprentices in British Columbia who often find traditional manuals overwhelming. For students with Dyslexia, ADHD, or Autism Spectrum Disorder, complex technical materials can make learning frustrating and stressful.";
const defaultEyebrow = "Got It, an AI Powered Study Tool";
const defaultTitle = "This Is What Studying Looks Like With AI";
const defaultButtonText = "Try It Now!";
const defaultHref = "/projects";
const defaultImage = "/case-study/got-it/gotit-laptop.png";

export default function FeatureCard({
  body = defaultBody,
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  buttonText = defaultButtonText,
  href = defaultHref,
  image = defaultImage,
  flipped = false,
}) {
  return (
    <section className={`${styles.hero} ${flipped ? styles.flipped : ""}`}>
      <div className={styles.heroLeft}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.heroTitle}>{title}</h2>
        <p className={styles.heroBody}>{body}</p>
        <Link className={styles.heroButton} href={href}>
          {buttonText}
        </Link>
      </div>
      <div
        className={styles.img}
        aria-hidden="true"
        style={{ backgroundImage: `url(${image})` }}
      />
    </section>
  );
}
