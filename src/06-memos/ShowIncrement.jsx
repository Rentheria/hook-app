import { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('Me volvi a generar');
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
      onClick={() => increment(5)}
    >
      Incrementar
    </button>
  );
});
