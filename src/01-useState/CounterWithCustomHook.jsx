import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1 className="text-xl font-medium text-black mb-2">
        Counter with Custom Hook: {counter}
      </h1>

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => decrement(2)}
      >
        -2
      </button>
      <button
        className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={reset}
      >
        Reset
      </button>
      <button
        className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => increment(2)}
      >
        +2
      </button>
    </>
  );
};
