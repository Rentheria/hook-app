import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((counter) => counter + value);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-1 w-screen h-screen">
      <h1 className="text-2xl font bold text-gary-500 text-center">
        useCallback Hook: <small> {counter} </small>
      </h1>
      <br />
      <ShowIncrement increment={incrementFather} />
    </div>
  );
};
