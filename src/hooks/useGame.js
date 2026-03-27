import { useState } from "react";

const generateNumbers = () => {
  const nums = new Set();
  while (nums.size < 5) nums.add(Math.floor(Math.random() * 100));
  return Array.from(nums);
};

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

export default function useGame() {
  const initialNumbers = generateNumbers();

  const [row1, setRow1] = useState(initialNumbers);
  const [row2, setRow2] = useState(shuffle(initialNumbers));
  const [selected, setSelected] = useState({ r1: null, r2: null });
  const [matched, setMatched] = useState([]);

  const initGame = () => {
    const nums = generateNumbers();
    setRow1(nums);
    setRow2(shuffle(nums));
    setSelected({ r1: null, r2: null });
    setMatched([]);
  };

  return {
    row1,
    row2,
    setRow1,
    setRow2,
    selected,
    setSelected,
    matched,
    setMatched,
    initGame,
  };
}
