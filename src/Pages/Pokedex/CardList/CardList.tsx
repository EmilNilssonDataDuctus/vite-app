import React, { useEffect, useState } from "react";
import {
  fetchManyPokemon,
  fetchPokemonByID,
} from "../../../Shared/FetchPokemon";
import { CardListWrapper } from "./CardList.styled";

export const CardList = ({ limit, offset }) => {
  const [cards, setCards] = useState([]);

  const [userMouseIsHovering, setUserMouseIsHovering] = useState(false);
  const [previewId, setPreviewId] = useState(null);
  const [previewData, setPreviewData] = useState(undefined);
  const [topOffset, setTopOffset] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    fetchManyPokemon(`?limit=${limit}&offset=${offset}`).then((cards) => {
      setCards(
        cards.results.map((card) => {
          return { ...card, id: card.url.split("/")[6] };
        })
      );
    });
  }, []);

  const handleMouseOver = (e) => {
    setUserMouseIsHovering(true);

    const offsetX = e.pageX;
    const offsetY = e.pageY;
    const id = e.target.dataset.id;

    setLeftOffset(offsetX);
    setTopOffset(offsetY);
    setPreviewId(id);
  };

  useEffect(() => {
    setPreviewData(undefined);
    if (previewId) {
      fetchPokemonByID(previewId).then((results) => {
        setTimeout(() => {
          setPreviewData(results);
        }, 1000);
      });
    }
  }, [previewId]);

  const handleMouseLeave = (e) => {
    setUserMouseIsHovering(false);
  };

  return (
    <CardListWrapper>
      hovering? : {userMouseIsHovering.toString()}
      {userMouseIsHovering && (
        <div
          style={{
            backgroundColor: "rgba(255,0,0,0.4)",
            position: "absolute",
            top: topOffset,
            left: `${leftOffset + 200}px`,
            width: "110px",
            height: "110px",
          }}
        >
          <img
            src={previewData?.sprites["front_default"]}
            width="110"
            height="110"
            alt="Loading..."
          />
        </div>
      )}
      <ul>
        {cards.map((card, i) => (
          <li key={i} style={{ display: "flex" }}>
            <a
              data-id={card.id}
              href={`/card/${card.id}`}
              onMouseEnter={(e) => handleMouseOver(e)}
              onMouseMove={(e) => handleMouseOver(e)}
              onMouseLeave={(e) => handleMouseLeave(e)}
            >
              {card.id}: {card.name}
            </a>
          </li>
        ))}
      </ul>
    </CardListWrapper>
  );
};
