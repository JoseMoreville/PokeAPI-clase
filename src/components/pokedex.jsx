import { Image, Text, Box, Link, Button } from '@chakra-ui/react';

function Pokedex({ pokemon }) {
  return (
    <>
      <Link
        color={'white'}
        underline='none'
        fontWeight={'bold'}
        bg={'teal.400'}
        my='4'
        p='4'
        width={'36'}
        rounded={'md'}
        href={pokemon?.url}
      >
        {pokemon?.name}
      </Link>
    </>
  );
}

export default Pokedex;
