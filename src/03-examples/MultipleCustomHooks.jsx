import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage/LoadingMessage';
import { PokemonCard } from './PokemonCard/PokemonCard';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-yellow-500 text-center">
          Información de Pokémon
        </h1>

        {isLoading ? <LoadingMessage /> : <PokemonCard data={data} />}

        <section className="flex flex-row items-center justify-center gap-4">
          <button
            onClick={() => counter > 1 && decrement()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          >
            Anterior
          </button>
          <button
            onClick={() => increment()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          >
            Siguiente
          </button>
        </section>
      </div>
    </>
  );
};
