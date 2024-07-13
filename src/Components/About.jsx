import styles from "./About.module.css";

export function About({
  sectionTitle,
  paragraph,
  src,
  bgTopCustomClass,
  bgBottomCustomClass,
  sectionCustomClass,
}) {
  return (
    <>
      <div className={styles[bgTopCustomClass]}></div>

      <section
        className={`${styles.sectionContainer} ${styles[sectionCustomClass]}`}
      >
        <div className={styles.infos}>
          <h2>{sectionTitle}</h2>
          <p>{paragraph}</p>
        </div>

        <img src={src} alt="Ilustração" />
      </section>

      <div className={styles[bgBottomCustomClass]}></div>
    </>
  );
}
