import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InstructorClass from "./InstructorClass/InstructorClass";


function instructorClasses({instructor}) {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({
      type: "FETCH_INSTRUCTOR_CLASSES",
      payload: instructor
    })
  },[])

  const classes = useSelector((store) => store.instructorClasses)

  if (classes) {
    console.log(classes);
  }
  return (
      <div className="classOrder" >
        <div className="addIcon"> <AddIcon/> </div>
        
        
        { classes && classes.length > 1 &&
          classes.map((session) =>(
          <InstructorClass session={session} />
          ))
        }
       
        
      </div>
  );
}

export default instructorClasses;
