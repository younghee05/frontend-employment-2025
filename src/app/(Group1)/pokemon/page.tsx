import { fetchPokemonData } from "@/hooks/usePokemon/usePokemon";
import { useQuery } from "@tanstack/react-query";

export default async function PokemonsPage() {
    // 데이터 가져오기
    const pokemons = await fetchPokemonData(20, 0);

    // 데이터가 없으면 메시지 표시
    if (!pokemons || pokemons.length === 0) {
        return <div>No Pokemons found</div>;
    }

    let pokemonLength = pokemons.length;
    let result = [];
    let num = Math.floor(pokemonLength % 4 === 0 ? pokemonLength / 4 : (pokemonLength / 4) + 1);
    for(let i = 0; i < num; i++) {
        let pokemonArray = []
        for(let j = 0; j < (num - 1 === i ? (pokemonLength % 4 === 0 ? 4 : pokemonLength % 4) : 4); j++) {
            pokemonArray[j] = pokemons[j + (i*4)]
        }
        result[i] = pokemonArray
    }

    console.log(result)

    return (
        <div style={{ width: "100%" }}>
            {
                result?.map((pokemon, index) => (
                    <ul key={`pokemon-${index}`}
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}>
                        {pokemon.map((poke) => (
                            <li key={poke.name} 
                                style={{
                                    marginRight: "40px"
                            }}>
                            <img
                                src={poke.image}
                                style={{
                                    width: "600px",
                                    height: "800px"
                                }}
                            />
                            <h1>{poke.name}</h1>
                            </li>
                        ))}
                    </ul>
                ))
            }
        </div>
    );
}