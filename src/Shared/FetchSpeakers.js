export const fetchData = async (string) => {
  const res = await fetch(string);
  const json = await res.json();
  return json;
};

export const fetchSpeakers = () =>
  fetchData("https://63ecede532a0811723a53815.mockapi.io/speakers");

export const fetchPokemonByID = (id) =>
  fetchData("https://pokeapi.co/api/v2/pokemon/" + id);
