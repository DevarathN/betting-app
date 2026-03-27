import useGame from "../hooks/useGame";
import Card from "./Card";
import { useState } from "react";

export default function GameBoard() {
  const {
    row1,
    row2,
    setRow1,
    setRow2,
    selected,
    setSelected,
    matched,
    setMatched,
    initGame,
  } = useGame();

  const [balance, setBalance] = useState(
    Number(localStorage.getItem("balance")) || 100,
  );
  const [bet, setBet] = useState(10);

  // ✅ check matched
  const isMatched = (row, index, currentMatched = matched) => {
    return currentMatched.some((m) =>
      row === 1 ? m.r1 === index : m.r2 === index,
    );
  };

  // ✅ shuffle only unmatched
  const shuffleUnmatched = (currentMatched) => {
    setRow1((prev) => {
      const newArr = [...prev];

      const unmatchedIndexes = newArr
        .map((_, i) => i)
        .filter((i) => !isMatched(1, i, currentMatched));

      const values = unmatchedIndexes.map((i) => newArr[i]);
      const shuffled = [...values].sort(() => Math.random() - 0.5);

      unmatchedIndexes.forEach((idx, i) => {
        newArr[idx] = shuffled[i];
      });

      return newArr;
    });

    setRow2((prev) => {
      const newArr = [...prev];

      const unmatchedIndexes = newArr
        .map((_, i) => i)
        .filter((i) => !isMatched(2, i, currentMatched));

      const values = unmatchedIndexes.map((i) => newArr[i]);
      const shuffled = [...values].sort(() => Math.random() - 0.5);

      unmatchedIndexes.forEach((idx, i) => {
        newArr[idx] = shuffled[i];
      });

      return newArr;
    });
  };

  // ✅ selection logic with row restriction
  const handleSelection = (row, index) => {
    let newSelected = { ...selected };

    // 🚫 Prevent clicking matched cards
    if (isMatched(row, index)) return;

    // ✅ FIRST click → only Row 1 allowed
    if (newSelected.r1 === null) {
      if (row !== 1) return; // ❌ block row2
      newSelected.r1 = index;
      setSelected(newSelected);
      return;
    }

    // ✅ SECOND click → only Row 2 allowed
    if (newSelected.r2 === null) {
      if (row !== 2) return; // ❌ block row1
      newSelected.r2 = index;
      setSelected(newSelected);
      processResult(newSelected);
    }
  };

  // ✅ result logic
  const processResult = ({ r1, r2 }) => {
    const n1 = row1[r1];
    const n2 = row2[r2];

    if (n1 === n2) {
      const newMatch = { r1, r2 };

      setMatched((prev) => {
        const updated = [...prev, newMatch];

        setTimeout(() => {
          setSelected({ r1: null, r2: null });
          shuffleUnmatched(updated);
        }, 800);

        return updated;
      });

      updateBalance((prev) => prev + bet * 3);
    } else {
      updateBalance((prev) => prev - bet);

      setTimeout(() => {
        setSelected({ r1: null, r2: null });
        shuffleUnmatched(matched);
      }, 800);
    }
  };

  const updateBalance = (updater) => {
    setBalance((prev) => {
      const newVal = typeof updater === "function" ? updater(prev) : updater;
      localStorage.setItem("balance", newVal);
      return newVal;
    });
  };

  return (
    <div className="container">
      <h2>Balance: ₹{balance}</h2>

      <input
        type="number"
        value={bet}
        onChange={(e) => setBet(Number(e.target.value))}
      />

      {/* Row 1 */}
      <div className="grid">
        {row1.map((num, i) => (
          <Card
            key={i}
            value={num}
            revealed={selected.r1 === i || isMatched(1, i)}
            onClick={() => handleSelection(1, i)}
          />
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid">
        {row2.map((num, i) => (
          <Card
            key={i}
            value={num}
            revealed={selected.r2 === i || isMatched(2, i)}
            onClick={() => handleSelection(2, i)}
          />
        ))}
      </div>

      <button onClick={initGame}>Restart Game</button>
    </div>
  );
}
