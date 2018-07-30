import React from 'react'

const Search = props => {
  console.log('search loaded');

  const handleSearchInput = (e) => {
    e.preventDefault()
    console.log('hitting test');
    // debugger
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
