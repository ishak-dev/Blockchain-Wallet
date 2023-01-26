import React, { useContext } from "react";
import TableField from "../components/transactions-page/table-field";
import "../style/transactions.css";
import { TransactionContext } from "../../context/Transaction-Context";

const TransactionsPage = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="transaction-section">
      <h2>Transaction table</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Sender address</th>
            <th>Receiver address</th>
            <th>Amount</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TableField data={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsPage;
