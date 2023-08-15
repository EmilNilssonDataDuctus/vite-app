import { useEffect, useState } from "react";
import { fetchPokemonByID } from "../../Shared/FetchPokemon";
import { MainWrapper } from "../../Shared/Page.styled";
import { MemoryCard } from "./MemoryCard/MemoryCard";
import { CardContainer, ScoreCounter } from "./MemoryGame.styled";

const MAX_POKEMON_ID = 150;
const NO_CARDS_EASY = 3;
const NO_CARDS_HARD = 20;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const getRandomNumbers = (numOfNums) => {
  const returnArr = [];
  for (let i = 0; i < numOfNums; i++) {
    let randomNumber = getRandomIntInclusive(1, MAX_POKEMON_ID);
    const newNumber = !returnArr.find((num) => num === randomNumber);
    newNumber ? returnArr.push(randomNumber) : i--;
  }
  return returnArr;
};

export const MemoryGame = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [shuffledPokemonList, setShuffledPokemonList] = useState([]);
  const [savedClicks, setSavedClicks] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  useEffect(() => {
    setGameOver(false);
    setSavedClicks([]);
    const fetchData = async () => {
      try {
        const arrOfRandomNumbers = getRandomNumbers(NO_CARDS_EASY);
        const responses = await Promise.all(
          arrOfRandomNumbers.map((id) => fetchPokemonByID(id))
        );
        setPokemonList(responses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    shuffleCards();
  }, [gameOver]);

  const shuffleCards = () => {
    let newList = [];
    while (newList.length < NO_CARDS_EASY) {
      let index = getRandomIntInclusive(1, NO_CARDS_EASY);
      if (newList.find((num) => num === index)) return;
      newList.push(index);
    }
    return newList;
  };

  // store amount of clicks
  const recordClick = (id) => {
    console.log("id: ", id);
    console.log("pokemonList: ", pokemonList);
    if (savedClicks.find((storedId) => storedId === id)) {
      // game over
      console.log("You lose");
    } else {
      setSavedClicks(() => [...savedClicks, id]);
    }
    console.log("pokemonList: ", pokemonList);

    setCurrentScore(() => currentScore + 1);

    setPokemonList(() => shuffleArray(pokemonList));
    console.log("pokemonList: ", pokemonList);
    console.log("savedClicks: ", savedClicks);
    const oldSavedClicks = [...savedClicks];
    const isDuplicate = oldSavedClicks.find((x) => x === id);
    if (!isDuplicate) {
      setSavedClicks(() => [...oldSavedClicks, id]);
    } else {
      setGameOver(true);
    }
    console.log("savedClicks: ", savedClicks);

    // console.log("pokemonList: ", pokemonList);
    // if (savedClicks.find((storedId) => storedId === id)) {
    //   // game over
    //   console.log("You lose");
    // } else {
    //   setSavedClicks(() => [...savedClicks, id]);
    // }
    // console.log("pokemonList: ", pokemonList);

    // setCurrentScore(() => currentScore + 1);

    // setPokemonList(() => shuffleArray(pokemonList));
    // console.log("pokemonList: ", pokemonList);
  };

  // handle event where user clicks on a card, store that in list of clicks

  // handle if user clicks on card more than once

  // sort randomly before displaying cards
  return (
    <MainWrapper>
      <h1>Memory</h1>
      <ScoreCounter>
        <p>
          Current score: {currentScore}/{NO_CARDS_EASY}
        </p>
        <p>
          Best score: {bestScore}/{NO_CARDS_EASY}
        </p>
      </ScoreCounter>
      <CardContainer>
        {pokemonList.map((pokemon) => {
          return (
            <MemoryCard key={pokemon?.name} card={pokemon} cb={recordClick} />
          );
        })}
      </CardContainer>
    </MainWrapper>
  );
};
