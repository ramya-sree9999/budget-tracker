import React from "react";

function Balance({ transactions }) {
  const totalBalance = transactions.reduce((acc, trans) => acc + trans.amount, 0);
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div>
      <h2>Balance: ${totalBalance.toFixed(2)}</h2>
      <p>Income: ${income.toFixed(2)}</p>
      <p>Expense: ${Math.abs(expense).toFixed(2)}</p>
    </div>
  );
}

export default Balance;

