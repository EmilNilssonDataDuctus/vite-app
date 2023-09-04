import { MainWrapper } from "../../Shared/Page.styled";
import { CardList } from "./CardList/CardList";
import { CardsListContainer } from "./PokedexVersionTwo.styled";

const LIMIT = 100;
const OFFSET = 100;

export const PokedexVersionTwo = () => {
  return (
    <MainWrapper>
      <h1>New pokedex</h1>
      <CardsListContainer>
        <CardList limit={LIMIT} offset={0} />
        <CardList limit={LIMIT} offset={OFFSET} />
        <CardList limit={LIMIT} offset={OFFSET * 2} />
      </CardsListContainer>
    </MainWrapper>
  );
};
