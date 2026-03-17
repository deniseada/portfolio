import NavBar from "../../../../ui/nav-bar/page";
import Footer from "../../../../ui/footer/page";
import GoogleDriveVideo from "../../../../ui/google-drive-video/page";
import styles from "./spotify.module.css";

export default function SpotifyAdPage() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <section className={styles.videoSection}>
          <div className={styles.showcaseFrame}>
            <div className={styles.showcaseContent}>
              <span className={styles.showcaseBadge}>Motion Graphics</span>
              <h3 className={styles.showcaseTitle}>Spotify Ad</h3>
              <p className={styles.showcaseText}>
                A short promotional piece built around strong pacing, clean
                composition, and recognizable Spotify branding.
              </p>

              <div className={styles.showcaseMeta}>
                <div className={styles.showcaseMetaItem}>
                  <span className={styles.showcaseMetaLabel}>Tool</span>
                  <span className={styles.showcaseMetaValue}>
                    Adobe After Effects
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.videoContainer}>
              <GoogleDriveVideo
                fileId="1HTInv380aPlxYNicTFN5BcCCBd0NGoLJ"
                title="Spotify Ad"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
