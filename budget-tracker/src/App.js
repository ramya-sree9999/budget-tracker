import React, { useState } from "react";
import "./App.css";

function BudgetTracker() {
  const [budget, setBudget] = useState(0); // Initial Budget
  const [balance, setBalance] = useState(0); // Current Balance
  const [transactions, setTransactions] = useState([]); // All Transactions
  const [view, setView] = useState("current"); // Toggle between views: current or past

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const type = "Expense"; // Default type set to "Expense"

  // Set initial budget
  const handleSetBudget = (e) => {
    e.preventDefault();
    if (budget > 0) setBalance(budget);
    else alert("Please enter a valid budget amount!");
  };

  // Add a new transaction
  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!description || !amount) return alert("Please enter all fields!");

    const transactionAmount = parseFloat(amount);

    // Check for insufficient balance when adding an expense
    if (type === "Expense" && transactionAmount > balance) {
      alert("Insufficient balance!");
      return;
    }

    const transaction = {
      id: new Date().getTime(),
      description,
      amount: transactionAmount,
      type,
      date: new Date().toLocaleString(),
    };

    // Update balance
    const updatedBalance = balance - transactionAmount;

    setBalance(updatedBalance);
    setTransactions([transaction, ...transactions]); // Add to the beginning
    setDescription("");
    setAmount("");
  };

  // Toggle view
  const toggleView = (viewType) => setView(viewType);

  // Split transactions into current and past
  const currentTransactions = transactions.slice(0, 5); // Most recent 5 transactions
  const pastTransactions = transactions.slice(5);

  return (
    <div className="budget-tracker">
      <h1>Budget Tracker</h1>

      {/* Budget Section */}
      <form onSubmit={handleSetBudget} className="budget-form">
        <label>Set Budget: </label>
        <input
          type="number"
          placeholder="Enter your budget"
          value={budget}
          onChange={(e) => setBudget(parseFloat(e.target.value))}
        />
        <button type="submit">Set Budget</button>
      </form>

      {/* Balance Section */}
      <div className="balance">
        <h2>Balance: ${balance.toFixed(2)}</h2>
        <p>Budget: ${budget.toFixed(2)}</p>
      </div>

      {/* Add Transaction */}
      <form onSubmit={handleAddTransaction} className="transaction-form">
        <label>Enter description</label>
        <input
          type="text"
          placeholder="e.g., Grocery"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Enter amount</label>
        <input
          type="number"
          placeholder="e.g., 50"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>

      {/* Navigation Bar */}
      <div className="navbar">
        <button
          className={view === "current" ? "active" : ""}
          onClick={() => toggleView("current")}
        >
          Current Transactions
        </button>
        <button
          className={view === "past" ? "active" : ""}
          onClick={() => toggleView("past")}
        >
          Past Transactions
        </button>
      </div>

      {/* Transaction List */}
      <div className="transaction-history">
        <h3>{view === "current" ? "Current Transactions" : "Past Transactions"}</h3>
        <ul>
          {(view === "current" ? currentTransactions : pastTransactions).map(
            (transaction) => (
              <li key={transaction.id}>
                {transaction.description} - ${transaction.amount.toFixed(2)} ({transaction.type})<br />
                <span className="date">{transaction.date}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default BudgetTracker;
