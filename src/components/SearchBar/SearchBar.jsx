import * as React from 'react';
import { useEffect } from 'react';
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
    const tags = useSelector((store) => store.tags)
    const dispatch = useDispatch()


    return (
        <div>
    <h1>Search Bar</h1>
        <form onSubmit={handleSubmit}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={tags}
        getOptionLabel={(option) => option.tagName}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Search"
            placeholder="Search By Tags"
          />
        )}
      />
      <Button type="submit" variant="contained">Contained</Button>
      </form>
      </div>
    )
}

export default SearchBar