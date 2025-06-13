import React, { useRef } from 'react';
import './PokemonCard.css';
import { useLayoutEffect } from 'react';

export const PokemonCard = ({ data }) => {
  const h4ref = useRef();
  useLayoutEffect(() => {
    const { height, width } = h4ref.current.getBoundingClientRect();
    console.log(height, width);
  }, []);
  const { id, name, sprites, types, height, weight } = data;

  return (
    <div className="pokemon-card">
      <div className="card-header">
        <h4 className="pokemon-name" ref={h4ref}>
          {name}
        </h4>
        <h5 className="pokemon-id">#{id.toString().padStart(3, '0')}</h5>
      </div>

      <div className="card-image-container">
        <img src={sprites.front_default} alt={name} className="pokemon-image" />
      </div>

      <div className="card-details flex flex-col items-center justify-center gap-2">
        <div className="types-container">
          {types.map((type, index) => (
            <span key={index} className={`type-badge type-${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>

        <div className="stats flex flex-row items-center justify-center gap-2 w-full">
          <div className="stat">
            <span className="stat-label">Height</span>
            <span className="stat-value">{height ? height / 10 : '???'}m</span>
          </div>
          <div className="stat">
            <span className="stat-label">Weight</span>
            <span className="stat-value">{weight ? weight / 10 : '???'}kg</span>
          </div>
        </div>
      </div>
    </div>
  );
};
