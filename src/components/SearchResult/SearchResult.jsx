import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "../Map/Map";
import SearchItem from "../SearchItem/SearchItem";

function SearchResult() {
  const search = useSelector((store) => store.search);
  console.log("Search store is:", search);

  return (
    <>
      <h2 className="search-results">Search Results Page </h2>
      <Map />
      <section>
        {search.results.map((result, i) => {
          return <SearchItem key={i} result={result} />;
        })}
      </section>
    </>
  );
}

export default SearchResult;
