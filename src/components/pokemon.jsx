import { Image, Text, Box, Link, Button } from '@chakra-ui/react';

function Pokemon({ pokemon }) {
    if (!pokemon) {
        return null;
    }
  return (
    <>
      <Box p="4" >
        <Image src={pokemon?.sprites?.front_default} />
        <Text>{pokemon?.name}</Text>
      </Box>
    </>
  );
}

export default Pokemon;
