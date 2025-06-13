import { useState } from 'react';

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  const onAddCount = () => {
    setCounter({
      ...state,
      counter1: counter1 + 1,
    });
  };
  return (
    <>
      <h1 className="text-xl font-medium text-black mb-2">
        Counter 1: {counter1}
      </h1>
      <h1 className="text-xl font-medium text-black mb-2">
        Counter 2: {counter2}
      </h1>
      <h1 className="text-xl font-medium text-black mb-2">
        Counter3: {counter3}
      </h1>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
        onClick={onAddCount}
      >
        +1
      </button>
    </>
  );
};
