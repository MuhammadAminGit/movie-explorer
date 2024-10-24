const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => (
    <div className="flex justify-center p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 rounded"
        placeholder="Search for movies..."
      />
      <button onClick={onSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
  export default SearchBar;