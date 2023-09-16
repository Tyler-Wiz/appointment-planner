import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  return (
    <div>
      {list.map(({ name, ...description }, i) => {
        return <Tile name={name} description={description} key={i} />;
      })}
    </div>
  );
};
