import '../App.css';
import TransactionsTable from './TransactionsTable';
import { useState, useEffect } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Transactions</h1>
      <TransactionsTable transactions={transactions} />
    </div>
  );
}

export default App;
