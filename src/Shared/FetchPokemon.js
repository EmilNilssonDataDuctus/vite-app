export const fetchData = async (string) => {
  const res = await fetch(string);
  const json = await res.json();
  return json;
};

export const fetchManyPokemon = () =>
  fetchData("https://pokeapi.co/api/v2/pokemon/");

export const fetchPokemonByID = (id) =>
  fetchData("https://pokeapi.co/api/v2/pokemon/" + id);
