import { CardWrapper } from "./MemoryCard.styled";

export const MemoryCard = ({ card, cb }) => {
  return (
    <CardWrapper onClick={() => cb(card.id)}>
      <img src={card.sprites["front_default"]} />
      <h2>{card?.name}</h2>
    </CardWrapper>
  );
};
