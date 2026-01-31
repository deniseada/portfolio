import styles from "./project-card.module.css";

export default function ProjectCard({ title, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
