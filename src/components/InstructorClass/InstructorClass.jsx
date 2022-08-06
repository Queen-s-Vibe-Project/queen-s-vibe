import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import "../InstructorDetail/InstructorDetail.css";
import { useParams, useHistory } from "react-router-dom";

export default function InstructorClass({ session }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const history = useHistory();

  // Handle save class click to direct user to login/register view
  // if user is not logged in, other dispatch "attend class"
  const addClassHandle = () => {
    if (!user.id) {
      history.push("/login");
    } else {
      dispatch({
        type: "ATTEND_CLASS",
        payload: {
          userId: user.id,
          classId: session.classId,
        },
      });
    }
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

        {user.adminLevel != "instructor" ? (
          <div className="add-instructor-class">
            <button className="add-class-btn" onClick={addClassHandle}>
              Save Class
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

