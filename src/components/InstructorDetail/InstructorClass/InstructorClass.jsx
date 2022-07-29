import { useSelector } from "react-redux";

import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from '@mui/icons-material/Add';


export default function InstructorClass({session}) {
    console.log(session);
    return (
        
          <div className="card">
              <div> {session.activity} </div>
              <div> {session.dateOfWeek} </div>
              <div> {session.startTime} </div>
          </div>
        
    );
  }
  