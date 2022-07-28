import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from '@mui/icons-material/Add';

function instructorClasses({instructor}) {
  return (
      <div className="classOrder">
        <div className="addIcon"> <AddIcon/> </div>
        <div className="card">
        <div className="deleteIcon"> <ClearIcon /> </div>
          <div className="container">
            <div> {instructor.activity} </div>
            <div> {instructor.dateOfWeek} </div>
            <div> {instructor.startTime} </div>
          </div>
        </div>
      </div>
  );
}

export default instructorClasses;
