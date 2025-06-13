import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCooords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCooords({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  return (
    <>
      <h3>Usuraio ya existe</h3>
      <p>{JSON.stringify(coords)}</p>
    </>
  );
};
