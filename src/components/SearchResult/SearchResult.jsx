import React from "react";
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Map from "../Map/Map";
import SearchItem from "../SearchItem/SearchItem";

function SearchResult() {
  
 
  const instructors = useSelector((store) => store.search.results.instructorRecommendations);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(instructors){
      setIsLoading(false)
    }
  }, [instructors]);

  console.log("Search store is:", instructors);

  
  return (
    <>
      <h2 className="search-results">Search Results Page </h2>
      <Map />
      {isLoading ? (
        <p>Loading...</p>
      ) :
      <section>
        {/* <ul>
          {instructors.map((result) =>{
            return(
            <li>{result.username}</li>
            )
          })}
        </ul> */}
        {instructors.map((result, i) => {
          return (<SearchItem key={i} result={result.username} />);
        })}
      </section>
      }
    </>
  );
}

export default SearchResult;
