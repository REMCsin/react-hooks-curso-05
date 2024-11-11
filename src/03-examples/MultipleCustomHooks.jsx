import React from "react";
import { useCounter, useFetch } from "../hooks";


export const MultipleCustomHooks = () => {
     
    const { counter, decrement, increment } = useCounter(1);
   const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);


  return (
    <>
        <h1>Informacion de Pokémon</h1>
        <hr />

        { isLoading && <p>Cargando...</p> }

        <h2>{ data?.name }</h2>

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
