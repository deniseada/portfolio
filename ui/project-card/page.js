import styles from "./project-card.module.css";

export default function ProjectCard({
  title,
  body,
  image,
  className,
  category,
}) {
  return (
    <article
      className={`${styles.card} ${className || ""}`}
      data-category={category}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {body ? (
        <div className={styles.cardBody}>
          <span className={styles.cardRule} />
          <p>{body}</p>
        </div>
      ) : null}
    </article>
  );
}
