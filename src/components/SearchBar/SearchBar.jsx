import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const SearchBar = () => {
    useEffect(()=>{
        dispatch({
            type: "FETCH_TAGS"
        })
    }, [])
    const limit = 6;
    const tags = useSelector((store) => store.search.tags)
    const dispatch = useDispatch()
    const [searchTags, setSearchTags] = useState([])
    const [limitReached, setLimitReached] = useState(false);
    const onSelect = useCallback((event, value) => {
      setSearchTags(value);
      setLimitReached(value.length >= limit);
  }, [limit]);

  const checkDisable = useCallback(option => limitReached && !searchTags.includes(option), [limitReached, searchTags]);

    const handleSubmit = (evt) => {
        evt.preventDefault()
        dispatch({
            type: "FETCH_SEARCH_RESULTS",
            payload: {
                searchTags
            }
        })
    }

    return (
        <div>
    <h1>Search Bar</h1>
        <form onSubmit={handleSubmit}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={tags}
        getOptionDisabled={checkDisable}
        getOptionLabel={(option) => option.tagName}
        onChange={onSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Search"
            placeholder={limitReached ? "Tag Limit Reached" : "Search By Tags"}
            helperText= {limitReached && "Tag Limit Reached"}
          />
        )}
      />
      <Button type="submit" variant="contained">Search</Button>
      </form>
      </div>
    )
}

export default SearchBar