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
      label: "Th"
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
      margin: theme.spacing(1),
      padding: theme.spacing(0, 1),
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
      "&$selected": {
        color: "white",
        background: "#692B7C"
      },
      "&:hover": {
        borderColor: "#BA9BC3",
        background: "#BA9BC3"
      },
      "&:hover$selected": {
        borderColor: "#BA9BC3",
        background: "#BA9BC3"
      },
      minWidth: 32,
      maxWidth: 32,
      height: 40,
      textTransform: "unset",
      fontSize: "0.75rem"
    },
    selected: {}
  }))


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
    <ToggleButtonGroup
        size="small"
        arial-label="Days of the week"
        value={days}
        sx={{
            
        }}
        onChange={(event, days) => setDays(days)}
      >
        {DAYS.map((day, index) => (
          <ToggleButton key={day.key} value={day.label} aria-label={day.key}
            sx={{
                border: "2px solid",
                borderColor: "#692B7C",
                borderRadius: "50%"
            }}
          >
            {day.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="address"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
