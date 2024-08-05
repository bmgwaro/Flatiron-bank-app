import { useState, useEffect } from 'react';
import TransactionsTable from './TransactionsTable';

const InputForm = () => {
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({
        date: '',
        description: '',
        category: '',
        amount: ''
      });
    
      useEffect(() => {
        fetch('https://bank-backed.vercel.app/transactions')
          .then((response) => response.json())
          .then((data) => setTransactions(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction((prevTransaction) => ({
          ...prevTransaction,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const transaction = {
          ...newTransaction,
          amount: parseFloat(newTransaction.amount),
          date: new Date(newTransaction.date).toISOString().split('T')[0]
        };
    
        fetch('https://bank-backed.vercel.app/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(transaction)
        })
          .then((response) => response.json())
          .then((data) => {
            setTransactions((prevTransactions) => [...prevTransactions, data]);
            setNewTransaction({
              date: '',
              description: '',
              category: '',
              amount: ''
            });
          })
          .catch((error) => console.error('Error posting data:', error));
      };
    
  return (
    <div>
        <form onSubmit={handleSubmit} className="form-container">
        <input
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          value={newTransaction.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="category"
          value={newTransaction.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input
          type="number"
          name="amount"
          value={newTransaction.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
      <TransactionsTable transactions={transactions}/>
    </div>
  )
}

export default InputForm