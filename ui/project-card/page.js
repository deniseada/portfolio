import styles from "./project-card.module.css";

export default function ProjectCard({ title, category }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          {category && (
            <div className={styles.categoryOverlay}>
              <p className={styles.categoryText}>{category}</p>
            </div>
          )}
          {!category && <div className={styles.checkerboard}></div>}
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
