import React from "react";
import IndividualMovie from "./IndividualMovie";

const SearchResult = (props) => {
  return (
    <div className="search-results-component">
      <h2>
        Results for <span className="term"> "{props.searchTerm}"</span>
      </h2>
      {props.movies === undefined ? (
        <h3>No Results. Try Again.</h3>
      ) : (
        <>
          {props.movies.map((movie) => (
            <IndividualMovie
              key={movie.imbdbID}
              movie={movie}
              nominateMovie={props.nominateMovie}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SearchResult;
