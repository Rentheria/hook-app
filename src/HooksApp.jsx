import { SimpleForm } from './02-useEffect/SimpleForm';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { FormWithCustomForm } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

export const HooksApp = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 p-4 ">
        <h1 className="text-2xl font-bold text-black text-center">HooksApp</h1>
        {/* <CounterApp /> */}
        {/* <CounterWithCustomHook /> */}
        {/* <FormWithCustomForm /> */}
        <MultipleCustomHooks />
      </div>
    </>
  );
};
