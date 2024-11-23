import React from "react";

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul>
          {transactions.map((transaction, index) => (
            <li
              key={index}
              className={`transaction-item ${
                transaction.type === "Income" ? "income-item" : "expense-item"
              }`}
            >
              <span>{transaction.description}</span>
              <span>${transaction.amount.toFixed(2)}</span>
              <span>{transaction.type}</span>
              <span className="date-time">
                {transaction.date.toLocaleDateString()} -{" "}
                {transaction.date.toLocaleTimeString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
