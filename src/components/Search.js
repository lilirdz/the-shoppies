import React from "react";

const Search = (props) => {
  return (
    <div className="search-component">
      <h2>Movie Title</h2>

      <input
        className="search-box"
        type="text"
        placeholder="Search"
        onChange={(e) => props.changeTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
