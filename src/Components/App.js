import '../App.css';
import InputForm from './InputForm';
import { useState, useEffect} from 'react';
import Search from './Search';
import FilteredTable from './FilteredTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetch('https://bank-backed.vercel.app/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>The Royal Bank Of Flatiron</h1>
      <Search onSearch={handleSearch} />
      <InputForm/> 
      {searchTerm && <FilteredTable transactions={filteredTransactions} />}
    </div>
  );
}

export default App;
