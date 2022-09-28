import { useEffect, useState } from "react";
import api from "../../services/api";
import Container from "../Container";
import Header from "../Header";
import PokemonCard from "../PokemonCard";

import { List } from "./styles";

// https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
// fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     setPokemons(json.results);
//   });
const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/pokemon`, {
        params: {
          limit: 151,
          offset: 0,
        },
      })
      .then((response) => {
        console.log(response);
      
        const { results } = response.data;
        setPokemons(results);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <p>...loading</p>
        ) : (
          <List>
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.name} name={pokemon.name} />
            ))}
          </List>
        )}
      </Container>
    </>
  );
};

export default PokemonList;
