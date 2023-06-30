import styles from "./Card.module.css";
function Card() {
  return (
    <a class={styles.container} href={"tbd"}>
      <h2 class={styles.heading}>Hello</h2>
      <p class={styles.text}>World</p>
    </a>
  );
}

export default Card;
