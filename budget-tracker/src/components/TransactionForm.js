import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      addTransaction({
        description,
        amount: parseFloat(amount),
        type,
      });
      setDescription("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <h3>Add New Transaction</h3>
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input-field"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="select-field"
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <button type="submit" className="submit-btn">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
