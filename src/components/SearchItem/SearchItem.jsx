import React from "react";

function SearchItem({ result }) {
  console.log("SearchItem result is", result);
  return (
    <>
      <div>{result.username}</div>
      <ul>
        {result.classes && result.classes.map((classer) => {
          return(
            <><li>{classer.lng}</li><li>{classer.lat}</li></>
          )
        })}
      </ul>
    </>
  );
}

export default SearchItem;
