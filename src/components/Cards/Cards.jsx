import { useEffect, useState } from "react";
import Card from "../Card/Card";

function Cards() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    console.log("res: ", res);
    const json = await res.json();
    console.log("json: ", json);
    return json.results;
  };

  useEffect(() => {
    fetchData().then((cards) => {
      setCards(cards);
      console.log("cards: ", cards);
    });
  }, []);

  return (
    <>
      <h1>Cards</h1>
      <div>
        {cards?.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>
    </>
  );
}

export default Cards;
