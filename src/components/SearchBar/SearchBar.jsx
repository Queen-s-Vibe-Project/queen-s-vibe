import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const SearchBar = () => {
  useEffect(() => {
    dispatch({
      type: "FETCH_TAGS",
    });
  }, []);
  const tags = useSelector((store) => store.search.tags);
  const dispatch = useDispatch();
  const [searchTags, setSearchTags] = useState([]);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "FETCH_SEARCH_RESULTS",
      payload: {
        searchTags,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={tags}
          getOptionLabel={(option) => option.tagName}
          onChange={(event, value) => setSearchTags(value)}
          renderInput={(params) => (
            <TextField
              className="search-bar"
              {...params}
              variant="standard"
              label="Search"
              placeholder="Search By Tags"
            />
          )}
        />
        <Button type="submit" variant="contained">
          Contained
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
