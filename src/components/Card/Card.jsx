import styles from "./Card.module.css";
function Card({ card }) {
  return (
    <a className={styles.container} href={`/card/${card.name}`}>
      <h2 className={styles.heading}>{/* {card.name} */}</h2>
      <p className={styles.text}>World</p>
    </a>
  );
}

export default Card;
