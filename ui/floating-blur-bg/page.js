import styles from "./floating-blur-bg.module.css";

export default function FloatingBlurBg() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <span className={`${styles.orb} ${styles.pink}`} />
      <span className={`${styles.orb} ${styles.purple}`} />
      <span className={`${styles.orb} ${styles.blue}`} />
      <span className={`${styles.orb} ${styles.black}`} />
    </div>
  );
}
