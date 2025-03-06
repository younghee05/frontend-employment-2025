export const fetchPokemonData = async (limit: number, offset: number) => {
    try {
        const res = await fetch(
            `http://localhost:3000/api/pokemon?limit=${limit}&offset=${offset}`
        );
    
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
    
        const data = await res.json();
    
        // API 데이터에서 'results'가 배열인지 확인
        if (!Array.isArray(data)) {
            throw new Error("Invalid data structure");
        }
    
        const pokemons = await Promise.all(
            data.map(async (pokemon: { name: string; url: string; image: string; }) => {

                if (!pokemon.url) {
                    return pokemon;
                }

                const pokemonDetails = await fetch(pokemon.url);

                const details = await pokemonDetails.json();
        
                return {
                    name: details.name,
                    image: details.sprites.front_default,
                };
            })
        );

        return pokemons.filter((pokemon) => pokemon !== null);
    
        } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        return [];
        }
};