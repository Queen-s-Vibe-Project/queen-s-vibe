import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";

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
    <div className="card ic-card ">
      <div> {session.activity} </div>
      <div> {session.dateOfWeek} </div>
      <div> {session.startTime} </div>
      <button onClick={addClassHandle}>Add Class</button>
    </div>
  );
}
