function Search({ onSearch }) {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search Transactions"
          onChange={onSearch}
        />
      </div>
    );
  }
  
  export default Search;