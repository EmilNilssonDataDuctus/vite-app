import { useEffect, useState } from "react";
import { fetchManyPokemon } from "../../Shared/FetchPokemon";
import { MainWrapper } from "../../Shared/Page.styled";
import { CardsList, CardsListContainer } from "./PokedexVersionTwo.styled";

export const PokedexVersionTwo = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchManyPokemon().then((cards) => {
      setCards(cards.results);
    });
  }, []);

  return (
    <MainWrapper>
      <h1>New pokedex</h1>
      <CardsListContainer>
        <CardsList>
          {cards.map((card, i) => (
            <li key={i}>{card.name}</li>
          ))}
        </CardsList>
        <CardsList>
          {cards.map((card, i) => (
            <li key={i}>{card.toString()}</li>
          ))}
        </CardsList>
        <CardsList>
          {cards.map((card, i) => (
            <li key={i}>{card.toString()}</li>
          ))}
        </CardsList>
      </CardsListContainer>
    </MainWrapper>
  );
};
