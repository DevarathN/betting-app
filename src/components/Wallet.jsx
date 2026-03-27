import { useState } from "react";

export default function Wallet() {
  const [balance, setBalance] = useState(
    Number(localStorage.getItem("balance")) || 0
  );

  const [amount, setAmount] = useState("");

  const updateBalance = (newBal) => {
    setBalance(newBal);
    localStorage.setItem("balance", newBal);
  };

  const addMoney = () => {
    const value = Number(amount);

    if (!value || value <= 0) {
      alert("Enter valid amount");
      return;
    }

    updateBalance(balance + value);
    setAmount("");
  };

  const withdrawMoney = () => {
    const value = Number(amount);

    if (!value || value <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (value > balance) {
      alert("Withdrawal exceeds balance");
      return;
    }

    updateBalance(balance - value);
    setAmount("");
  };

  return (
    <div className="page">
      <div className="section wallet-container">
        <h2>Wallet Balance</h2>

        <div className="wallet-balance">₹{balance}</div>

        <input
          className="wallet-input"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="wallet-actions">
          <button className="primary-btn" onClick={addMoney}>
            Add Money
          </button>

          <button className="danger-btn" onClick={withdrawMoney}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
