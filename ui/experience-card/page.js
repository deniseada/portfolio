import styles from "./experience-card.module.css";

export default function ExperienceCard({
  index,
  title,
  project,
  focus = [],
  bullets = [],
}) {
  const [projectName, projectDate] = project.split(" — ");

  return (
    <article className={styles.card}>
      <div className={styles.topRow}>
        {index ? <span className={styles.index}>{index}</span> : null}
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.meta}>
            <span className={styles.projectName}>{projectName}</span>
            {projectDate ? (
              <span className={styles.projectDate}>{projectDate}</span>
            ) : null}
          </p>
        </div>
      </div>
      {focus.length ? (
        <div className={styles.focusRow}>
          {focus.map((item) => (
            <span key={`${title}-${item}`} className={styles.focusTag}>
              {item}
            </span>
          ))}
        </div>
      ) : null}
      <ul className={styles.list}>
        {bullets.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
