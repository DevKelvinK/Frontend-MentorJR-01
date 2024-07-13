import styles from "./Card.module.css";

export function Card({ src, score, description }) {
  return (
    <article className={styles.card}>
      <img src={src} />

      <strong>{score}</strong>

      <p>{description}</p>
    </article>
  );
}
