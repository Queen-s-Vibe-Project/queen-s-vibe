import { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';



const AddClass = () => {
  


  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({lat: null, lng: null})

  const handleSelect = async value => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value)
    setCoordinates()
    console.log(latLng)
  }

  
  return(

    <div>
      <PlacesAutocomplete 
        value={address} 
        onChange={setAddress} 
        onSelect={handleSelect}
        >
        {({getInputProps, suggestions, getSuggestionItemProps, loading}) => 
          <div>
            <input {...getInputProps({placeholder: "Type Address"})} />
            <div>
              {loading ? <div>...loading</div> : null}
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#9163CB" : "#fff"
                }
                return <div {...getSuggestionItemProps(suggestion, {style})} key={suggestion.id}>
                  {suggestion.description}
                  </div>
              })}
            </div>
          </div>
        }
      </PlacesAutocomplete>
    </div>
  )
}


export default AddClass