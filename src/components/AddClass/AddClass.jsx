import { useState } from 'react';
import { useSelector } from 'react-redux';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import TimePicker from 'react-time-picker';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const AddClass = () =>  {
  const user = useSelector((store) => store.user);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [coordinates, setCoordinates] = useState({lat: null, lng: null})
  const [days, setDays] = useState([])
  const [time, setTime] = useState('10:00')

  const handleSubmit = () => {
    console.log(toSend)
  }

  const toSend = {
    instructorId: user.id,
    description: description,
    location: address,
    time: time,
    days: days,
    coordinates: coordinates
  }


  const handleSelect = async value => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value)
    setCoordinates(latLng)
    
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add a Class
      </Button>
      <form onSubmit={handleSubmit}>
      <Dialog open={open} onClose={handleClose}>
      
        <DialogTitle>Add Class</DialogTitle>
        <DialogContent>
        
          <DialogContentText>
            Add a Class! Tell the people a little about the class. Tell them when and where to find you.
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="email"
            fullWidth
            variant="standard"
            onChange={(evt)=>setDescription(evt.target.value)}
          />
          <PlacesAutocomplete 
        value={address} 
        onChange={setAddress} 
        onSelect={handleSelect}
        >
        {({getInputProps, suggestions, getSuggestionItemProps, loading}) => 
          <div>
            <TextField autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="email"
            fullWidth
            variant="standard"
            {...getInputProps({placeholder: "Type Address"})}/>
            {/* <input {...getInputProps({placeholder: "Type Address"})} /> */}
            <div>
              {loading ? <div key='1'>...loading</div> : null}
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#9163CB" : "#fff"
                }
                return <div {...getSuggestionItemProps(suggestion, {style})} key={suggestion.description}>
                  {suggestion.description}
                  </div>
              })}
            </div>
          </div>
        }
      </PlacesAutocomplete>
      <h4>Pick days</h4>
      <ToggleButtonGroup value={days} onChange={(evt, newDays) => {setDays(newDays)}} >
        <ToggleButton value={'sunday'}>
          Su
        </ToggleButton>
        <ToggleButton value={'monday'}>
          M
        </ToggleButton>
        <ToggleButton value={'tuesday'}>
          T
        </ToggleButton>
        <ToggleButton value={'wednesday'}>
          w
        </ToggleButton>
        <ToggleButton value={'thursday'}>
          Th
        </ToggleButton>
        <ToggleButton value={'friday'}>
          F
        </ToggleButton>
        <ToggleButton value={'saturday'}>
          S
        </ToggleButton>
        
      </ToggleButtonGroup>
      <h4>Pick Time</h4>
      <TimePicker onChange={setTime} value={time} />
      
        </DialogContent>
      
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' onClick={handleSubmit}>Subscribe</Button>
        </DialogActions>
        
      </Dialog>
      </form>
    </div>
  );
}



export default AddClass