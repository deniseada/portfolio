import Link from "next/link";
import NavBar from "../../../../ui/nav-bar/page";
import Footer from "../../../../ui/footer/page";
import styles from "./cow-ad.module.css";

export default function CowAdPage() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>DIFFERENT BREED MILK</h1>
          <p className={styles.subtitle}>GRAPHIC DESIGN / AD DESIGN</p>

          <div className={styles.heroContent}>
            <div className={styles.heroImageWrap}>
              <img
                src="/project-images/milk-poster.png"
                alt="Heavenly Milk poster"
                className={styles.heroImage}
              />
            </div>

            <aside className={styles.sideContent}>
              <h2 className={styles.sectionHeading}>Inspiration:</h2>
              <p className={styles.bodyText}>
                This milk ad was created for an assignment where we had to
                combine three animals into one new creature. I chose a cow, a
                swan, and a Bengal tiger and turned the concept into a milk
                advertisement. While compositing the animals together in
                Photoshop, I decided to place the creature in the sky. The scene
                felt empty, so I added a glass of milk to complete the
                composition and strengthen the concept.
              </p>

              <h3 className={styles.toolsHeading}>Tools Used</h3>
              <div className={styles.toolBadge} aria-label="Photoshop">
                Ps
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            ANIMALS USED <span>(NO ANIMAL WAS HARMED)</span>
          </h2>
          <div className={styles.threeGrid}>
            <img
              src="/project-images/cow.jpg"
              alt="Cow reference"
              className={styles.gridImage}
            />
            <img
              src="/project-images/white-tiger.png"
              alt="White tiger reference"
              className={styles.gridImage}
            />
            <img
              src="/project-images/swan-wings.jpg"
              alt="Swan reference"
              className={styles.gridImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>CHECK OUT MY OTHER WORK!</h2>
          <div className={styles.projectGrid}>
            <Link href="/projects/got-it" className={styles.projectLink}>
              <article className={styles.projectCard}>
                <img
                  src="/project-mockup/gotit-brochure.jpg"
                  alt="Magazine work"
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <span className={styles.projectOverlayText}>
                    VIEW PROJECT
                  </span>
                </div>
              </article>
            </Link>

            <article className={styles.projectCard}>
              <img
                src="/project-mockup/lotus-mockup.png"
                alt="Forest Guardian poster"
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <span className={styles.projectOverlayText}>VIEW PROJECT</span>
              </div>
            </article>

            <article className={styles.projectCard}>
              <img
                src="/project-mockup/menu-mockup.png"
                alt="Brunch menu design"
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <span className={styles.projectOverlayText}>VIEW PROJECT</span>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
