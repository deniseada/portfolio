import styles from "./project-card.module.css";

export default function ProjectCard({
  title,
  body,
  image,
  className,
  category,
  categoryLabel,
}) {
  return (
    <article
      className={`${styles.card} ${className || ""}`}
      data-category={category}
    >
      <div
        className={styles.imageContainer}
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      >
        <div className={styles.overlay}>
          <span className={styles.overlayText}>VIEW PROJECT</span>
        </div>
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.title}>{title}</h3>
        {categoryLabel && <p className={styles.category}>{categoryLabel}</p>}
      </div>
    </article>
  );
}
