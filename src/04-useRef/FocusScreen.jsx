import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();
  console.log(inputRef);

  const onClick = () => {
    console.log(inputRef);
    inputRef.current.select();
  };
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-500"> Focus Screen</h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Ingrese su nombre"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={onClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none cursor-pointer"
        >
          Set Focus
        </button>
      </div>
    </>
  );
};
