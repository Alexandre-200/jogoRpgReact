import { useState } from "react";

export const useCharacter = () => {
  const [pos, setPos] = useState({ x: 3, y: 5, p: 0 });

  const moveLeft = () => {
    setPos((pos) => ({
      x: pos.x - 1,
      y: pos.y,
      p: 1,
    }));
  };

  const moveRight = () => {
    setPos((pos) => ({
      x: pos.x + 1,
      y: pos.y,
      p: 2,
    }));
  };

  const moveDown = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y + 1,
      p: 0,
    }));
  };

  const moveUp = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y - 1,
      p: 3,
    }));
  };

  return {
    x: pos.x,
    y: pos.y,
    p: pos.p,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
  };
};
