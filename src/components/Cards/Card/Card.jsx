import { useEffect, useState } from "react";
import { fetchPokemonByID } from "../../../Shared/FetchPokemon";
import { CardContainer, CardCopy, CardHeading } from "./Card.styled.js";
function Card({ card: cardProp }) {
  const [card, setCard] = useState();

  useEffect(() => {
    fetchPokemonByID(cardProp.name).then((results) => {
      // Set state
      setCard(results);
    });
  }, [cardProp]);

  return (
    <CardContainer href={`/card/${card?.name}`}>
      <CardHeading>{card?.name}</CardHeading>
      <img
        width="96"
        height="96"
        src={card?.sprites["front_default"]}
        alt={"Pokemon called: " + card?.name}
      />
      <CardCopy>World</CardCopy>
    </CardContainer>
  );
}

export default Card;
