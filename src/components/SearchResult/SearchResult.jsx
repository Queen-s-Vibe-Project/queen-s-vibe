import React from "react";
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Map from "../Map/Map";
import SearchItem from "../SearchItem/SearchItem";

function SearchResult() {
  const instructors = useSelector((store) => store.search.results);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (instructors) {
      setIsLoading(false);
    }
  }, [instructors]);

  return (
    <>
      <h2 className="search-results">Search Results Page </h2>
      
      {isLoading ? (
        <p>Loading...</p>
      ) :
      <section>
        <Map instructors={instructors}/>
        {instructors.map((result, i) => {
          return (<SearchItem key={i} result={result} />);
        })}
      </section>
      }
    </>
  );
}

export default SearchResult;
