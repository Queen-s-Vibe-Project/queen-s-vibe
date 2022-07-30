import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';


//MUI
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function AddInstructorTag(props){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({
            type:"FETCH_TAGS"
          })
    },[])

    const tags = useSelector((store)=> store.search.tags)
    return(
        <div
            onClick={()=>{
                console.log('click');
            }}
        >
            <AddIcon/>
        </div>
    )
}