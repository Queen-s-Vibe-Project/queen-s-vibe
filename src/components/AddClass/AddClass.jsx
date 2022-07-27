import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

export default function AddClass() {
  const [open, setOpen] = React.useState(false);
  const [days, setDays] = useState([0, 2, 3]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DAYS = [
    {
      key: "sunday",
      label: "S"
    },
    {
      key: "monday",
      label: "M"
    },
    {
      key: "tuesday",
      label: "T"
    },
    {
      key: "wednesday",
      label: "W"
    },
    {
      key: "thursday",
      label: "T"
    },
    {
      key: "friday",
      label: "F"
    },
    {
      key: "saturday",
      label: "S"
    }
  ];



  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({theme}) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(1.5),
      padding: theme.spacing(0, 1.5),
      "&:not(:first-of-type)": {
        border: "2px solid",
        borderColor: "#692B7C",
        borderRadius: "50%"
      },
      "&:first-of-type": {
        border: "2px solid",
        borderColor: "#692B7C",
        borderRadius: "50%"
      }
    }
  }));
  
  const StyledToggle = styled(ToggleButton)(({ theme }) => ({
    '& .MuiToggleButton': {
      color: "#692B7C",
      ".Mui-selected": {
        color: "white",
        background: "#692B7C"
      },
      "&:hover": {
        borderColor: "#BA9BC3",
        background: "#BA9BC3"
      },
      "&.Mui-selected:hover": {
        borderColor: "#BA9BC3",
        backgroundColor: "#BA9BC3"
      }
    },
    selected: {}
  }))
  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(days)
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
        <DialogTitle>Add a Class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
    <StyledToggleButtonGroup
        size="small"
        arial-label="Days of the week"
        value={days}
        sx={{
            m:2
        }}
        onChange={(event, days) => setDays(days)}
      >
        {DAYS.map((day, index) => (
          <StyledToggle key={day.key} value={day.key} aria-label={day.key}
            sx={{
               
            }}
          >
            {day.label}
          </StyledToggle>
        ))}
      </StyledToggleButtonGroup >
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >Subscribe</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
