import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CardBig.module.css";
function CardBig() {
  const { name } = useParams();
  const [card, setCard] = useState();
  const [prev, setPrev] = useState();
  const [next, setNext] = useState();
  console.log("card: ", card);

  const fetchData = async (string) => {
    console.log("string: ", string);
    const res = await fetch(string);
    console.log("res: ", res);
    const json = await res.json();
    console.log("json: ", json);
    return json;
  };

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    console.log("url: ", url);
    fetchData(url).then((card) => {
      // Set state
      setCard(card);

      // Get links to neighboring pokemon
      fetchData(`https://pokeapi.co/api/v2/pokemon/${card?.id - 1}`)
        .then((card) => {
          setPrev(card);
        })
        .catch((error) => {
          setPrev(null);
        });
      fetchData(`https://pokeapi.co/api/v2/pokemon/${card?.id + 1}`)
        .then((card) => {
          setNext(card);
        })
        .catch((error) => {
          setPrev(null);
        });
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {prev && (
        <a className={styles.btn} href={`/card/${prev.name}`}>
          Prev
        </a>
      )}
      <div className={styles.container}>
        <h2 className={styles.heading}>{card?.name}</h2>
        <p className={styles.text}>World</p>
      </div>
      {next && (
        <a className={styles.btn} href={`/card/${next.name}`}>
          Next
        </a>
      )}
    </div>
  );
}

export default CardBig;
