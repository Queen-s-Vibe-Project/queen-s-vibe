import React from "react";

function SearchItem({ result }) {
  console.log("SearchItem result is", result);
  return (
    <>
      <div>{result}</div>
    </>
  );
}

export default SearchItem;
