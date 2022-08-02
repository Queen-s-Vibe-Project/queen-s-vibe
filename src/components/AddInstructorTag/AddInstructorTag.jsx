import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


//MUI
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';

export default function AddInstructorTag(props){
    const [open, setOpen] = React.useState(false);

    const [checkbox,setCheckBox] = React.useState(false)
    
    const [value,setValue] = React.useState('')
    const [addTagBtn,setAddTagBtn] = React.useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const params = useParams();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      function handleChange( id) {
        //console.log('before:', value, checkbox);
            if(checkbox === false){
                setCheckBox(true)
                setValue(id)

            } else if (checkbox === true){
                setCheckBox(false)
                setValue('')
            }
      }
      
    

    const dispatch = useDispatch()

    React.useEffect(()=>{
        
        if(addTagBtn === true){
            dispatch({
                type: "FETCH_INSTRUCTOR_TAGS",
                payload: params.id
            })
    
            setAddTagBtn(false)
        }
        

    },[addTagBtn])

    React.useEffect(()=>{
        dispatch({
            type:"FETCH_TAGS"
          })
    },[])

    const tags = useSelector((store)=> store.search.tags)
    return(
        <div>
            <Button onClick={handleOpen} endIcon={<AddIcon/>}>

            </Button>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <List
                    sx={{
                        fontSize: 2,
                        maxHeight: 200,
                        overflow: 'scroll',
                    }}
                >
                    <ListSubheader>List</ListSubheader>
                    
                    {  tags && tags.map(tag=>(
                        <ListItemButton>
                        <Checkbox 
                            onChange={()=>{
                                handleChange(tag.id)
                            }}
                        />
                        <ListItemText key={tag.id} primary={tag.tagName} />
                        </ListItemButton>
                    ))}
                </List>
                <Box sx={{marginTop: 2}}>
                <Button
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    onClick={()=>{
                        dispatch({
                            type:'ADD_TAG',
                            payload: value
                        })
                        setAddTagBtn(true)
                        handleClose()
                        
                    }}
                >
                    Add Tags
                </Button>
                </Box>
                </Box>
            </Modal>
        </div>
    )
}