import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CardBig.module.css";
function CardBig() {
  const { name } = useParams();
  const [card, setCard] = useState();
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();

  const [showFront, setShowFront] = useState(true);

  const toggleSprite = () => {
    setShowFront(() => !showFront);
  };

  const fetchData = async (string) => {
    const res = await fetch(string);
    const json = await res.json();
    return json;
  };

  const fetchPokemon = (id) =>
    fetchData("https://pokeapi.co/api/v2/pokemon/" + id);

  useEffect(() => {
    fetchPokemon(name).then((card) => {
      // Set state
      setCard(card);

      // Promise.all([
      //   fetchPokemon(card?.id - 1),
      //   fetchPokemon(card?.id + 1),
      // ]).then((data) => {
      //   setPrev(data[0]);
      //   setNext(data[1]);
      // });

      // TODO: I tried to replace the code below with a Promise.all call (as seen above)
      // but when you navigate to bulbasaur there is no previous pokemon
      // this causes one of the fetches to crash and rejects the entire Promise.all call

      // Get links to neighboring pokemon
      fetchPokemon(card?.id - 1)
        .then((card) => {
          setPrev(card);
        })
        .catch((error) => {
          console.log("error: ", error);
          setPrev(null);
        });
      fetchPokemon(card?.id + 1)
        .then((card) => {
          setNext(card);
        })
        .catch((error) => {
          console.log("error: ", error);
          setPrev(null);
        });
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {prev && (
        <a className={styles.btnPrev} href={`/card/${prev.name}`}>
          <span className={styles.nextLink}>&lt;</span>
        </a>
      )}
      {next && (
        <a className={styles.btnNext} href={`/card/${next.name}`}>
          <span className={styles.nextLink}>&gt;</span>
        </a>
      )}
      <div className={styles.container}>
        <h2 className={styles.heading}>{card?.name}</h2>
        <p
          className={styles["toggle-back"]}
          onMouseOver={() => toggleSprite()}
          onMouseLeave={() => toggleSprite()}
        >
          Show back
        </p>
        <div>
          <img
            src={
              showFront
                ? card?.sprites["front_default"]
                : card?.sprites["back_default"]
            }
            alt={card?.name}
          />
        </div>
      </div>
    </div>
  );
}

export default CardBig;
