import React, { useState } from "react";

function SearchForm({ searchText }) {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    searchText(search);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter gorcey item e.g chicken"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
