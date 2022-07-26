import ClearIcon from "@mui/icons-material/Clear";

function instructorClasses() {
  return (
    <>
      <div className="classOrder">
        <div className="card">
        <div className="deleteIcon"> <ClearIcon /> </div>
          <div className="container">
            <div> HIT </div>
            <div> Monday </div>
            <div> 7:00pm </div>
          </div>
        </div>
        <div className="card">
        <div className="deleteIcon"> <ClearIcon /> </div>
          <div className="container">
            <div> Yoga </div>
            <div> Thursday </div>
            <div> 4:00pm </div>
          </div>
        </div>
        <div className="card">
        <div className="deleteIcon"> <ClearIcon /> </div>
          <div className="container">
            <div> Boxing </div>
            <div> Friday </div>
            <div> 2:00pm </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default instructorClasses;
