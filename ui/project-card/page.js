import styles from "./project-card.module.css";

export default function ProjectCard({ title, body, image, className }) {
  return (
    <article
      className={`${styles.card} ${className || ""}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <h3 className={styles.title}>{title}</h3>
      {body ? (
        <div className={styles.cardBody}>
          <span className={styles.cardRule} />
          <p>{body}</p>
        </div>
      ) : null}
    </article>
  );
}
