import { useState, useEffect, useRef } from 'react';
import {
  Input,
  Container,
  Wrap,
  WrapItem,
  Button,
  Text,
} from '@chakra-ui/react';

import Pokemon from './components/pokemon';
import * as API from './services/pokemons';
import Pokedex from './components/pokedex';

function App() {
  const [selectedPokemon, setSelectedpokemon] = useState(undefined);
  const [pokemons, setPokemons] = useState([]);
  const [previousSearch, setPreviousSearch] = useState([]);
  const [pokmon, setPokmon] = useState([]);
  const [loading, setLoading] = useState(false);
  const pokemonInput = useRef();
  useEffect(() => {
    setLoading(true);
    API.getAllPokemons().then((response) => {
      setPokemons(response.results);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    API.getPokemon(selectedPokemon).then((response) => {
      setPokmon(response);
      if (previousSearch.length === 0) {
        setPreviousSearch([selectedPokemon]);
      } else {
        let filtered = previousSearch.filter(
          (item) => item?.name !== selectedPokemon
        );
        setPreviousSearch([...filtered, response]);
      }
    });
  }, [selectedPokemon]);

  const setInputValue = (e) => {
    setSelectedpokemon(pokemonInput.current.value);
  };
  return (
    <Container>
      <Text align={'center'} mb='4' fontWeight={'bold'} fontSize='2xl'>
        PokeAPI test
      </Text>

      <Input placeholder='select Pokemon' ref={pokemonInput} mb='4'></Input>
      <Button onClick={() => setInputValue()}>Search</Button>

      {pokmon && <Pokemon pokemon={pokmon} />}
      <Text>Previous search</Text>
      <Wrap
        alignItems='center'
        justify='space-between'
        justifyContent={'space-between'}
      >
        {previousSearch &&
          previousSearch.map((pokemon) => (
            <WrapItem bg={"gray.100"} rounded="md" _hover={{
              background: "gray.300",
            }}>
              <Pokemon pokemon={pokemon} />
            </WrapItem>
          ))}
      </Wrap>
      <br />
      <br />
      <br />
      <Text>Common pokemons</Text>
      <Wrap
        alignItems='start'
        justify='space-between'
        justifyContent={'space-between'}
      >
        {loading ? (
          <p>loading</p>
        ) : (
          pokemons.map((item) => (
            <WrapItem key={item.name}>
              <Pokedex pokemon={item} key={item.name} />
            </WrapItem>
          ))
        )}
      </Wrap>
    </Container>
  );
}

export default App;
