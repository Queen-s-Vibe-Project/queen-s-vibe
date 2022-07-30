import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';

export default function AddInstructorTag(){
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