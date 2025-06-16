import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  const onShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1 w-screen h-screen">
      <h1 className="text-2xl font bold text-gary-500 text-center">
        Counter: <Small value={counter} />
      </h1>

      <br />

      <section className="flex flex-row items-center justify-center gap-1">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          onClick={() => increment()}
        >
          +1
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          onClick={onShow}
        >
          {show ? 'No mostrar' : 'Mostrar'}
        </button>
      </section>
    </div>
  );
};
