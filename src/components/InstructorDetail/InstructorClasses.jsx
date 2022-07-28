import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from '@mui/icons-material/Add';

function instructorClasses({item}) {
  return (
      <div className="classOrder">
        <div className="addIcon"> <AddIcon/> </div>
        <div className="card">
        <div className="deleteIcon"> <ClearIcon /> </div>
          <div className="container">
            <div> {item.activity} </div>
            <div> {item.dateOfWeek} </div>
            <div> {item.startTime} </div>
          </div>
        </div>
      </div>
  );
}

export default instructorClasses;
