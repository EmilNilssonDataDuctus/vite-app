import { useEffect, useState } from "react";
import { fetchManyPokemon } from "../../Shared/FetchPokemon";
import { MainWrapper } from "../../Shared/Page.styled";
import Card from "./Card/Card";
import { CardsLibrary } from "./Cards.styled";

export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchManyPokemon().then((cards) => {
      setCards(cards.results);
    });
  }, []);

  return (
    <MainWrapper>
      <h1>Cards</h1>
      <CardsLibrary>
        {cards?.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </CardsLibrary>
    </MainWrapper>
  );
};
