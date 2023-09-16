import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((item, i) => (
        <div key={i}>
          <p className="tile">{item}</p>
        </div>
      ))}
    </div>
  );
};
