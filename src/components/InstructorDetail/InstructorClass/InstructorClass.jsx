import { useSelector } from "react-redux";

import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from '@mui/icons-material/Add';


export default function InstructorClass({session}) {
    const user = useSelector((store) => store.user) 
    return (
        
          <div className="card">
          { (user.adminLevel === "instructor" ) ? 
          <div className="deleteIcon"> <ClearIcon /> </div> :
          <div></div> }
              <div> {session.activity} </div>
              <div> {session.dateOfWeek} </div>
              <div> {session.startTime} </div>
          </div>
        
    );
  }
  