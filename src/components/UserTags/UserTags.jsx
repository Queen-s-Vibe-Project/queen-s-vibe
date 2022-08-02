import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//MUI
import AddIcon from '@mui/icons-material/Add';
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
//Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//Radio
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function UserTags(){
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [deleteChip, setDeleteChip] = useState(false);
    const [open, setOpen] = useState(false);

    function handleDelete(id) {
        dispatch({
          type: "DELETE_TAG",
          payload: id,
        });
    
        setDeleteChip(true);
    };

    useEffect(() => {
        if (deleteChip === true) {
          dispatch({ type: "FETCH_INSTRUCTOR_TAGS", payload: user.id });
          setDeleteChip(false);
        }
      }, [deleteChip]);

    useEffect(()=>{
        dispatch({ type: "FETCH_INSTRUCTOR_TAGS", payload: user.id });
        dispatch({
            type:"FETCH_TAGS"
          })
    },[])

    const tags = useSelector((store) => store.instructorTags);
    const dbTags = useSelector((store)=> store.search.tags)

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return(
        <div>
            <h3>Tags</h3>
            <Button startIcon={<AddIcon/>} onClick={handleClickOpen}>
                Add Tags
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {'Add a Tag'}
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText>
                        Select Tag Below:
                    </DialogContentText>
                    <FormControl>
                        <FormLabel>
                            Tags
                        </FormLabel>
                        <RadioGroup>
                            { dbTags.map((tag)=>(
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            )) }
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button>Add Tag</Button>
                </DialogActions>
            </Dialog>
            <Stack>
                { tags.map((tag)=>(
                    <Chip 
                        label={tag.tagName} 
                        onDelete={()=>{
                            handleDelete(tag.id)
                        }}
                    />
                ))}
            </Stack>
        </div>
    )
}