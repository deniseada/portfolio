import NavBar from "../../ui/nav-bar/page";
import Footer from "../../ui/footer/page";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <section className={styles.panel}>
          <div className={styles.content}>
            <div className={styles.left}>
              <p className={styles.kicker}>Contact</p>
              <h1 className={styles.title}>
                Let's build something thoughtful.
              </h1>
              <p className={styles.intro}>
                Available for work opportunities, freelance work, and design
                collaborations.
              </p>
            </div>

            <aside className={styles.right}>
              <p className={styles.rightLabel}>Connect</p>
              <div className={styles.socialStack}>
                <a
                  className={styles.contactCard}
                  href="mailto:deniseaquino011@gmail.com"
                >
                  <span className={styles.cardIcon} aria-hidden="true">
                    @
                  </span>
                  <span className={styles.cardMeta}>Email</span>
                  <span className={styles.cardValue}>
                    deniseaquino011@gmail.com
                  </span>
                </a>

                <a
                  className={styles.contactCard}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.cardIcon} aria-hidden="true">
                    in
                  </span>
                  <span className={styles.cardMeta}>LinkedIn</span>
                  <span className={styles.cardValue}>denise-aquino</span>
                </a>

                <a
                  className={styles.contactCard}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.cardIcon} aria-hidden="true">
                    gh
                  </span>
                  <span className={styles.cardMeta}>GitHub</span>
                  <span className={styles.cardValue}>deniseada</span>
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
