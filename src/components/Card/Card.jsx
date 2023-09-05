import { useEffect, useReducer, useState } from "react";
import { fetchPokemonByID } from "../../Shared/FetchPokemon";
import { CardContainer, CardCopy, CardLink } from "./Card.styled.js";

const initialState = {
  isUpperText: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TO_UPPER_CASE":
      return {
        ...state,
        isUpperText: true,
      };
    case "TO_LOWER_CASE":
      return {
        ...state,
        isUpperText: false,
      };
    default:
      return state;
  }
};

function Card({ card: cardProp }) {
  const [card, setCard] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggleUpperCase = (e) => {
    dispatch({ type: "TO_UPPER_CASE" });
  };

  const handleToggleLowerCase = (e) => {
    dispatch({ type: "TO_LOWER_CASE" });
  };

  useEffect(() => {
    fetchPokemonByID(cardProp.name).then((results) => {
      // Set state
      setCard(results);
    });
  }, [cardProp]);

  return (
    <div>
      <CardContainer>
        {/* <CardHeading>
          {state.isUpperText
            ? card?.name?.toUpperCase()
            : card?.name?.toLowerCase()}
        </CardHeading>
        <img
          width="96"
          height="96"
          src={card?.sprites["front_default"]}
          alt={"Pokemon called: " + card?.name}
        /> */}
        <CardCopy>World</CardCopy>
        <CardLink href={`/card/${card?.name}`}>Read more</CardLink>
      </CardContainer>
      <button onClick={handleToggleUpperCase}>To upper case</button>
      <button onClick={handleToggleLowerCase}>To lower case</button>
    </div>
  );
}

export default Card;
