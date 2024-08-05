function Search({ onSearch }) {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search your Recent Transactions"
          onChange={onSearch}
        />
      </div>
    );
  }
  
  export default Search;