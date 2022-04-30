

const URL = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemon(pokemonName) {
    if(!pokemonName) return
    try {
        const response = await fetch(`${URL}/${pokemonName}`);
        const data = await response.json();
        console.log(data)
        return data;
    }catch(error){
        console.log(error);
    }
}

export async function getAllPokemons() {
    try {
        const response = await fetch(URL+'?limit=30');
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
    }
}