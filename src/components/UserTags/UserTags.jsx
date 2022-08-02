import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//MUI
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";


export default function UserTags(){
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [deleteChip, setDeleteChip] = useState(false);

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
    },[])

    const tags = useSelector((store) => store.instructorTags);

    return(
        <div>
            <h3>Tags</h3>
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