import React from 'react'

const Search = props => {

  const handleSearchInput = (e) => {
    e.preventDefault()
    const input = e.target.querySelector('input').value
    props.handleSearch(input)
  }

  return (
    <form onSubmit={(e) => handleSearchInput(e)}>
      <input className="search-bar"
        type="search"
        placeholder="Find Book Here"
        >
        </input>
    </form>
  );
};

export default Search;
