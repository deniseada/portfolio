"use client";

import { Fragment, useEffect } from "react";
import {
  Stethoscope,
  Scissors,
  Briefcase,
  Home,
  Palette,
  Music,
  Users,
} from "lucide-react";
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
    src: "/spinalis-social/Spinalis_Social_Facebook_Dentist_01.png",
    alt: "Advertorial landing page 1",
  },
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_Dentist_02.png",
    alt: "Advertorial landing page 2",
  },
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_Dentist_03.png",
    alt: "Advertorial landing page 3",
  },
];

const emailGallery = [
  {
    src: "/spinalis-email/general-content.png",
    alt: "Email content - general",
  },
  {
    src: "/spinalis-email/musician-content.png",
    alt: "Email content - musician",
  },
  {
    src: "/spinalis-email/children-content.png",
    alt: "Email content - children",
  },
];

const socialGallery = [
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_Artist_01.png",
    alt: "Social artist post",
  },
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_Musician_01.png",
    alt: "Social musician post 1",
  },
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_Musician_02.png",
    alt: "Social musician post 2",
  },
];

const workGallery = [
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_Coroprate_01.png",
    alt: "Work sample 1",
  },
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_Coroprate_02.png",
    alt: "Work sample 2",
  },
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_HomeOffice_01.png",
    alt: "Work sample 3",
  },
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_Musician_03.png",
    alt: "Work sample 4",
  },
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_Beauty_01.png",
    alt: "Work sample 5",
  },
  {
    src: "/spinalis-social/Spinalis_Social_Facebook_Children_01.png",
    alt: "Work sample 6",
  },
];

const skillCards = [
  {
    title: "Marketing Design",
    description:
      "Created brand-aligned visuals that supported awareness, engagement, and campaign clarity.",
  },
  {
    title: "Front-End Development",
    description:
      "Implemented layout updates with responsive structure, semantic markup, and clean UI behavior.",
  },
  {
    title: "Email Marketing",
    description:
      "Designed templates for welcome and subscription flows that balanced readability and conversion.",
  },
  {
    title: "Conversion-Focused Design",
    description:
      "Improved hierarchy and calls to action so pages communicated value faster and more clearly.",
  },
  {
    title: "Brand Consistency",
    description:
      "Kept typography, spacing, and visual tone aligned across email, social, and landing page assets.",
  },
  {
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

const advertorialLinks = [
  {
    label: "Dentists & Healthcare Professionals",
    href: "https://www.activesitting.ca/pages/dentist-advertorial",
    Icon: Stethoscope,
  },
  {
    label: "Beauty & Tattoo Artists",
    href: "https://www.activesitting.ca/pages/beauty-tattoo-page",
    Icon: Scissors,
  },
  {
    label: "Corporate Professionals",
    href: "https://www.activesitting.ca/pages/corporate-page",
    Icon: Briefcase,
  },
  {
    label: "Home Office Workers",
    href: "https://www.activesitting.ca/pages/home-office-page",
    Icon: Home,
  },
  {
    label: "Artists & Creators",
    href: "https://www.activesitting.ca/pages/artist-advertorial",
    Icon: Palette,
  },
  {
    label: "Musicians & Performers",
    href: "https://www.activesitting.ca/pages/musician-page",
    Icon: Music,
  },
  {
    label: "Students & Families",
    href: "https://www.activesitting.ca/pages/childrens-page",
    Icon: Users,
  },
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
                  <div className={styles.advertorialPreview}>
                    <a
                      href="https://www.activesitting.ca/pages/corporate-page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.previewImageLink}
                    >
                      <img
                        src="/spinalis-email/corporate-page.png"
                        alt="Corporate page preview"
                        className={styles.previewImage}
                        loading="lazy"
                      />
                    </a>
                  </div>
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

                <div className={styles.advertorialLinksWrap}>
                  <h3 className={styles.advertorialLinksTitle}>
                    Check out the pages
                  </h3>
                  <div className={styles.advertorialLinks}>
                    {advertorialLinks.map((link) => {
                      const Icon = link.Icon;
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.advertorialLink}
                        >
                          <span className={styles.advertorialLabel}>
                            <span
                              className={styles.advertorialIconWrap}
                              aria-hidden
                            >
                              <Icon className={styles.advertorialIcon} />
                            </span>
                            <span>{link.label}</span>
                          </span>
                          <span className={styles.advertorialArrow} aria-hidden>
                            →
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
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
                <div>
                  <h3 className={styles.advertorialLinksTitle}>Example</h3>
                  <img
                    src="/spinalis-email/general-content.png"
                    alt="Email template placeholder"
                    width="100%"
                  />
                </div>
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
                  src="/spinalis-social/Spinalis_Social_Facebook_Artist_01.png"
                  alt="Social media mockup placeholder"
                />
              </div>

              <div className={styles.galleryRow}>
                {socialGallery.map((image) => (
                  <MediaFrame key={image.alt} src={image.src} alt={image.alt} />
                ))}
              </div>
              <a
                href="https://drive.google.com/drive/folders/1XA-QiFkwAPro3OfcOrIVhsH2kvQQ6C4W?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.driveButton}
              >
                View Assets
              </a>
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
                href="https://drive.google.com/drive/folders/1XA-QiFkwAPro3OfcOrIVhsH2kvQQ6C4W?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.driveButton}
              >
                View Assets
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
                <div className={styles.reflectionInner}>
                  <div className={styles.reflectionText}>
                    <p>
                      My internship at Spinalis strengthened the way I approach
                      both design and development. I learned how to work more
                      deliberately with spacing, hierarchy, and brand
                      consistency so that each piece could support a clear goal
                      without feeling crowded or disconnected.
                    </p>

                    <p>
                      On the technical side, I became more confident making
                      front-end adjustments that respected an existing system
                      while still improving the experience. On the design side,
                      I gained a better understanding of how marketing assets
                      need to adapt across formats while staying recognizable
                      and accessible.
                    </p>

                    <p>
                      Overall, the experience helped me grow as a more versatile
                      designer and developer. It showed me how to move between
                      creative and technical work with more structure, stronger
                      communication, and a clearer focus on outcomes.
                    </p>
                  </div>

                  <aside className={styles.reflectionAside} aria-hidden>
                    <img
                      src="/spinalis-social/Spinalis_Social_Facebook_Artist_02.png"
                      alt="Selected work snapshot"
                    />
                    <p className={styles.reflectionAsideCaption}>
                      Selected work snapshot
                    </p>
                  </aside>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
