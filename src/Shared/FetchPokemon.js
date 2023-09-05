export const fetchData = async (string) => {
  const res = await fetch(string);
  const json = await res.json();
  return json;
};

export const fetchManyPokemon = (query = "") =>
  fetchData("https://pokeapi.co/api/v2/pokemon/" + query);

export const fetchPokemonByID = (id) =>
  fetchData("https://pokeapi.co/api/v2/pokemon/" + id);
