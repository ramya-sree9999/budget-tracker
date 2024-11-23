import React, { useState } from "react";

function AddTransaction({ addTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() && amount) {
      addTransaction({ description, amount: parseFloat(amount) });
      setDescription("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Transaction</h3>
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransaction;

