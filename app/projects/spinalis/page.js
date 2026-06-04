"use client";

import { Fragment, useEffect } from "react";
import NavBar from "../../../ui/nav-bar/page";
import Footer from "../../../ui/footer/page";
import styles from "./spinalis.module.css";

const summaryItems = [
  { label: "Role", value: "Marketing Design & Front-End Development Intern" },
  { label: "Company", value: "Spinalis" },
  { label: "Duration", value: "April 2026 - May 2026" },
];

const tocItems = [
  { id: "section-01", label: "ADVERTORIAL DESIGN" },
  { id: "section-02", label: "EMAIL MARKETING" },
  { id: "section-03", label: "SOCIAL MEDIA" },
  { id: "section-04", label: "WORK GALLERY" },
  { id: "section-05", label: "SKILLS & GROWTH" },
  { id: "section-06", label: "REFLECTION" },
];

// Placeholder imagery for the internship case study. Replace these with final Spinalis deliverables.
const advertorialGallery = [
  {
    src: "/project-mockup/eAdvert-mockup.png",
    alt: "Advertorial landing page mockup placeholder",
  },
  {
    src: "/project-mockup/menu-mockup.png",
    alt: "Secondary advertorial mockup placeholder",
  },
  {
    src: "/project-mockup/painting.png",
    alt: "Campaign layout placeholder",
  },
];

const emailGallery = [
  {
    src: "/project-mockup/camera-bg.png",
    alt: "Welcome email template placeholder",
  },
  {
    src: "/project-mockup/lotus-mockup.png",
    alt: "Subscription email template placeholder",
  },
  {
    src: "/project-mockup/spotify.png",
    alt: "Email sequence template placeholder",
  },
  {
    src: "/case-study/lenditout/profile-new.png",
    alt: "Additional email mockup placeholder",
  },
];

const socialGallery = [
  {
    src: "/project-mockup/cow-billboard.png",
    alt: "Facebook post mockup placeholder",
  },
  {
    src: "/project-mockup/gotit-brochure.jpg",
    alt: "Instagram story mockup placeholder",
  },
  {
    src: "/case-study/got-it/dashboard-new.png",
    alt: "Organic campaign graphic placeholder",
  },
];

const workGallery = [
  {
    src: "/case-study/lenditout/lenditout-phones.png",
    alt: "Internship work sample placeholder",
  },
  {
    src: "/case-study/got-it/gotit-laptop.png",
    alt: "Internship work sample placeholder",
  },
  {
    src: "/project-mockup/eAdvert-mockup.png",
    alt: "Internship work sample placeholder",
  },
  {
    src: "/project-mockup/menu-mockup.png",
    alt: "Internship work sample placeholder",
  },
  {
    src: "/project-mockup/painting.png",
    alt: "Internship work sample placeholder",
  },
  {
    src: "/project-mockup/lotus-mockup.png",
    alt: "Internship work sample placeholder",
  },
];

const skillCards = [
  {
    icon: "MD",
    title: "Marketing Design",
    description:
      "Created brand-aligned visuals that supported awareness, engagement, and campaign clarity.",
  },
  {
    icon: "FE",
    title: "Front-End Development",
    description:
      "Implemented layout updates with responsive structure, semantic markup, and clean UI behavior.",
  },
  {
    icon: "EM",
    title: "Email Marketing",
    description:
      "Designed templates for welcome and subscription flows that balanced readability and conversion.",
  },
  {
    icon: "CD",
    title: "Conversion-Focused Design",
    description:
      "Improved hierarchy and calls to action so pages communicated value faster and more clearly.",
  },
  {
    icon: "BC",
    title: "Brand Consistency",
    description:
      "Kept typography, spacing, and visual tone aligned across email, social, and landing page assets.",
  },
  {
    icon: "CC",
    title: "Collaboration & Communication",
    description:
      "Worked across creative and technical tasks while translating feedback into focused iterations.",
  },
];

const flowSteps = [
  "Subscribe",
  "Welcome Email",
  "Product Education",
  "Benefits & Features",
  "Additional Resources",
  "Ongoing Communication",
];

const emailResponsibilities = [
  "Designed 12 email templates for welcome and subscription journeys.",
  "Built reusable layouts that could adapt across campaign and lifecycle content.",
  "Balanced hierarchy, imagery, and copy so each email stayed easy to scan on mobile.",
];

const advertorialResponsibilities = [
  "Redesigned advertorial landing pages to improve layout structure and visual hierarchy.",
  "Implemented front-end updates that made the page clearer and more responsive.",
  "Refined spacing, section flow, and calls to action to support conversion goals.",
];

const socialResponsibilities = [
  "Designed organic Facebook and Instagram graphics aligned with the company brand.",
  "Created social assets that supported marketing goals while staying visually consistent.",
  "Adjusted compositions for different formats so each post remained effective across placements.",
];

function useRevealOnView() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}

function SectionHeader({ index, title, description }) {
  return (
    <div className={styles.sectionHeading}>
      <div>
        <p className={styles.sectionKicker}>Section {index}</p>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
    </div>
  );
}

function MediaFrame({ src, alt, caption }) {
  return (
    <figure className={styles.mediaFrame}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <article className={styles.skillCard}>
      <div className={styles.skillIcon} aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function SpinalisCaseStudy() {
  useRevealOnView();

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <header className={styles.hero} data-reveal>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.badge}>MARKETING DESIGN INTERN</span>
              <h1 className={styles.title}>SPINALIS</h1>
              <p className={styles.subtitle}>
                Marketing Design & Front-End Development Intern
              </p>
              <p className={styles.description}>
                At Spinalis, I supported a mix of marketing and product-facing
                work by redesigning advertorial pages, building email campaign
                templates, and creating social assets that stayed consistent
                with the brand. I also helped with front-end updates that made
                the user experience clearer, more responsive, and more aligned
                with the company&apos;s communication goals.
              </p>
            </div>

            <aside
              className={styles.headerRight}
              aria-label="Internship summary"
            >
              {summaryItems.map((item) => (
                <div key={item.label} className={styles.metaSection}>
                  <span className={styles.metaLabel}>
                    {item.label.toUpperCase()}
                  </span>
                  <p className={styles.metaValue}>{item.value}</p>
                </div>
              ))}
            </aside>
          </div>
        </header>

        <div className={styles.contentWrapper}>
          <aside className={styles.tocSidebar}>
            <nav className={styles.tocNav} aria-label="Case study contents">
              <h2 className={styles.tocTitle}>Contents</h2>
              {tocItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={styles.tocItem}
                >
                  <span className={styles.tocNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.tocLabel}>{item.label}</span>
                </a>
              ))}
            </nav>
          </aside>

          <div className={styles.sections}>
            <section id="section-01" className={styles.section} data-reveal>
              <SectionHeader
                index="01"
                title="ADVERTORIAL PAGE DESIGN & DEVELOPMENT"
                description="Updated landing pages so the content felt cleaner, easier to scan, and more persuasive."
              />
              <div className={styles.sectionSplit}>
                <div className={styles.sectionCopy}>
                  <p className={styles.sectionLead}>
                    I redesigned and updated advertorial landing pages by
                    improving the layout, clarifying the hierarchy, and making
                    the page structure easier to follow on different screen
                    sizes.
                  </p>
                  <div>
                    <h3 className={styles.subheading}>Responsibilities</h3>
                    <ul className={styles.responsibilityList}>
                      {advertorialResponsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <MediaFrame
                  src="/project-mockup/eAdvert-mockup.png"
                  alt="Advertorial landing page mockup placeholder"
                />
              </div>

              <div className={styles.galleryRow}>
                {advertorialGallery.map((image) => (
                  <MediaFrame key={image.alt} src={image.src} alt={image.alt} />
                ))}
              </div>
            </section>

            <section id="section-02" className={styles.section} data-reveal>
              <SectionHeader
                index="02"
                title="EMAIL MARKETING DESIGN"
                description="Created lifecycle emails that guided new subscribers through a clear journey."
              />
              <div className={styles.sectionSplitAlt}>
                <div className={styles.sectionCopy}>
                  <p className={styles.sectionLead}>
                    I designed 12 email templates for welcome and subscription
                    flows, keeping the brand tone consistent while adapting the
                    structure for different messages and call-to-action goals.
                  </p>
                  <div>
                    <h3 className={styles.subheading}>Responsibilities</h3>
                    <ul className={styles.responsibilityList}>
                      {emailResponsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <MediaFrame
                  src="/project-mockup/camera-bg.png"
                  alt="Email template placeholder"
                />
              </div>

              <div className={styles.flowBlock}>
                <h3 className={styles.subheading}>Lifecycle Flow</h3>
                <div
                  className={styles.flowDiagram}
                  aria-label="Email flow diagram"
                >
                  {flowSteps.map((step, index) => (
                    <Fragment key={step}>
                      <div className={styles.flowStep}>
                        <span className={styles.flowIndex}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{step}</span>
                      </div>
                      {index < flowSteps.length - 1 ? (
                        <span className={styles.flowArrow} aria-hidden="true">
                          →
                        </span>
                      ) : null}
                    </Fragment>
                  ))}
                </div>
              </div>

              <div className={styles.emailGrid}>
                {emailGallery.map((image) => (
                  <MediaFrame key={image.alt} src={image.src} alt={image.alt} />
                ))}
              </div>
            </section>

            <section id="section-03" className={styles.section} data-reveal>
              <SectionHeader
                index="03"
                title="SOCIAL MEDIA MARKETING ASSETS"
                description="Built branded social graphics for Facebook and Instagram campaigns."
              />
              <div className={styles.sectionSplit}>
                <div className={styles.sectionCopy}>
                  <p className={styles.sectionLead}>
                    I designed organic Facebook and Instagram graphics that
                    matched Spinalis&apos; branding while supporting marketing
                    goals and keeping the visual tone polished and consistent.
                  </p>
                  <div>
                    <h3 className={styles.subheading}>Design Focus</h3>
                    <ul className={styles.responsibilityList}>
                      {socialResponsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <MediaFrame
                  src="/project-mockup/cow-billboard.png"
                  alt="Social media mockup placeholder"
                />
              </div>

              <div className={styles.galleryRow}>
                {socialGallery.map((image) => (
                  <MediaFrame key={image.alt} src={image.src} alt={image.alt} />
                ))}
              </div>
            </section>

            <section id="section-04" className={styles.section} data-reveal>
              <SectionHeader
                index="04"
                title="WORK GALLERY"
                description="Additional internship work displayed in a responsive image grid."
              />
              <div className={styles.masonryGrid}>
                {workGallery.map((image) => (
                  <MediaFrame key={image.src} src={image.src} alt={image.alt} />
                ))}
              </div>
              <a
                href="https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.driveButton}
              >
                View Full Internship Portfolio
              </a>
            </section>

            <section id="section-05" className={styles.section} data-reveal>
              <SectionHeader
                index="05"
                title="SKILLS & GROWTH"
                description="A snapshot of the capabilities that grew through the internship experience."
              />
              <div className={styles.skillGrid}>
                {skillCards.map((card) => (
                  <SkillCard key={card.title} {...card} />
                ))}
              </div>
            </section>

            <section id="section-06" className={styles.section} data-reveal>
              <SectionHeader
                index="06"
                title="REFLECTION"
                description="A professional summary of what I learned and how the internship shaped my growth."
              />
              <div className={styles.reflectionCard}>
                <p>
                  My internship at Spinalis strengthened the way I approach both
                  design and development. I learned how to work more
                  deliberately with spacing, hierarchy, and brand consistency so
                  that each piece could support a clear goal without feeling
                  crowded or disconnected.
                </p>
                <p>
                  On the technical side, I became more confident making
                  front-end adjustments that respected an existing system while
                  still improving the experience. On the design side, I gained a
                  better understanding of how marketing assets need to adapt
                  across formats while staying recognizable and accessible.
                </p>
                <p>
                  Overall, the experience helped me grow as a more versatile
                  designer and developer. It showed me how to move between
                  creative and technical work with more structure, stronger
                  communication, and a clearer focus on outcomes.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
