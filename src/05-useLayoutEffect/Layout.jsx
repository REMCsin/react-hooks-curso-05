import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";


export const Layout = () => {
     
    const { counter, decrement, increment } = useCounter(1);
   const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);


  return (
    <>
        <div className="cabecera">
            <h1>Pokédex</h1>
            <h2 className="parpadea">Informacion del Pokémon</h2>
        </div>
        
        <hr />

        { 
          isLoading 
          ? <LoadingMessage />
          : (
            <PokemonCard 
            id={ counter } 
            name={ data.name }
            sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
            ]}
            />
            )
        }

        <button 
        onClick={ () => counter > 1 ? decrement() : null }
        className="btn btn-primary mt-2">
            Anterior
        </button>
        <button 
        onClick={ () => increment() }
        className="btn btn-primary mt-2">
            Siguiente
        </button>

    </>
  )
}