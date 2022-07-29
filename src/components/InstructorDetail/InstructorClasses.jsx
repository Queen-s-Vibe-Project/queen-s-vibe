import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InstructorClass from "./InstructorClass/InstructorClass";


function instructorClasses({classes, instructor}) {

  console.log(classes);
  
  const user = useSelector((store) => store.user) 

 
  return (
      <div className="classOrder" >
        { (user.adminLevel === 'instructor' && user.id === Number(instructor)) ? 
        <div className="addIcon"> <AddIcon/> </div> :
        <div></div>
      }
        
        {
          
          classes.map((session) =>(
            <InstructorClass session={session} />
          )) 
        }
        
       
        
      </div>
  );
}

export default instructorClasses;
