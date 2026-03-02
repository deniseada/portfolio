"use client";

import { useState } from "react";
import styles from "./hobbies-card.module.css";

export default function HobbiesCard({ title, text, images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = images.length > 0;
  const currentImage = hasImages ? images[activeIndex] : null;

  const handlePrev = () => {
    if (!hasImages) {
      return;
    }
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (!hasImages) {
      return;
    }
    setActiveIndex((index) => (index + 1) % images.length);
  };

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>
        <button
          className={`${styles.navButton} ${styles.prev}`}
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
        >
          Previous
        </button>
        <div
          className={`${styles.image} ${!currentImage ? styles.placeholder : ""}`}
          style={
            currentImage
              ? { backgroundImage: `url(${currentImage})` }
              : undefined
          }
          aria-hidden="true"
        />
        <button
          className={`${styles.navButton} ${styles.next}`}
          type="button"
          onClick={handleNext}
          aria-label="Next image"
        >
          Next
        </button>
        <div className={styles.content}>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </article>
  );
}
