import { useEffect, useState } from "react";
import { fetchPokemonByID } from "../../../Shared/FetchPokemon";
import styles from "./Card.module.css";
function Card({ card: cardProp }) {
  const [card, setCard] = useState();

  useEffect(() => {
    fetchPokemonByID(cardProp.name).then((results) => {
      // Set state
      setCard(results);
    });
  }, [cardProp]);

  return (
    <a className={styles.container} href={`/card/${card?.name}`}>
      <h2 className={styles.heading}>{card?.name}</h2>
      <img
        width="96"
        height="96"
        src={card?.sprites["front_default"]}
        alt={"Pokemon called: " + card?.name}
      />
      <p className={styles.text}>World</p>
    </a>
  );
}

export default Card;
