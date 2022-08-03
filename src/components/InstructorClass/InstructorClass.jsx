import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import "../InstructorDetail/InstructorDetail.css";

export default function InstructorClass({ session }) {
  console.log("Session is", session);
  const dispatch = useDispatch();
  const instructorProfile = useSelector((store) => store.instructorProfile);
  const user = useSelector((store) => store.user);

  const addClassHandle = () => {
    dispatch({
      type: "ADD_CLASS",
      payload: {
        userId: user.id,
        instructorId: instructorProfile.id,
        classId: session.id,
        date: session.dateOfWeek,
        time: session.startTime,
      },
    });
  };

  return (
    <>
      <div className="gym-goer-class">
        <div className="gym-goer-card">
          <div>
            <strong>Activity: </strong>
            {session.activity}
          </div>

          <div>
            <strong>Day: </strong>
            {session.dateOfWeek}
          </div>
          <div>
            <strong>Location: </strong>
            {session.location}
          </div>
          <div>
            <strong>Time: </strong>
            {session.startTime}
          </div>
        </div>
        {user.adminLevel === "gym-goer" ? (
          <div className="add-instructor-class">
            <button className="add-class-btn" onClick={addClassHandle}>
              Add Class
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
