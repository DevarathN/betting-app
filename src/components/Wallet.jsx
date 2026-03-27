import { useState } from "react";

export default function Wallet() {
  const [balance, setBalance] = useState(
    Number(localStorage.getItem("balance")) || 0,
  );

  const addMoney = () => {
    const newBal = balance + 100;
    setBalance(newBal);
    localStorage.setItem("balance", newBal);
  };

  return (
    <div className="container">
      <div className="wallet-box">
        <h2>Wallet: ₹{balance}</h2>
        <button onClick={addMoney}>Add ₹100</button>
      </div>
    </div>
  );
}
