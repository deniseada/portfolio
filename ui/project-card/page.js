import styles from "./project-card.module.css";

export default function ProjectCard({ title, image, flippedText }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          {image ? (
            <img src={image} alt={title} className={styles.cardImage} />
          ) : (
            <div className={styles.checkerboard}></div>
          )}
          <div className={styles.overlay}>
            <p className={styles.overlayText}>{flippedText}</p>
          </div>
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
