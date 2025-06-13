import { SimpleForm } from './02-useEffect/SimpleForm';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { FormWithCustomForm } from './02-useEffect/FormWithCustomHook';

export const HooksApp = () => {
  return (
    <>
      <div className="container w-full h-full p-5">
        <h1 className="text-4xl font-bold text-black mb-5">HooksApp</h1>
        <hr className="mb-2" />
        {/* <CounterApp /> */}
        {/* <CounterWithCustomHook /> */}
        <FormWithCustomForm />
      </div>
    </>
  );
};
