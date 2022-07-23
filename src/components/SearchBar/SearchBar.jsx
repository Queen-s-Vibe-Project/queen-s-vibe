import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const SearchBar = () => {
    useEffect(()=>{
        dispatch({
            type: "FETCH_TAGS"
        })
    }, [])

    const dispatch = useDispatch()


    return (
        <div>
    <h1>Search Bar</h1>
        <form>
      <Autocomplete
        multiple
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
      </form>
      </div>
    )
}

export default SearchBar