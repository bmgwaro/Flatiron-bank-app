import '../App.css';
import TransactionsTable from './TransactionsTable';
import data from "../db.json"
import { useState, useEffect } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(data.transactions);
  }, []);

  return (
    <div className="App">
      <h1>Transactions</h1>
      <TransactionsTable transactions={transactions} />
    </div>
  );
}

export default App;
