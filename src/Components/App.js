import '../App.css';
import InputForm from './InputForm';
import { useState} from 'react';
import Search from './Search';
import FilteredTable from './FilteredTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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
