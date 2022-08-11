import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import "../InstructorDetail/InstructorDetail.css";
import { useParams, useHistory } from "react-router-dom";
import swal from "sweetalert2";
export default function InstructorClass({ session }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const instructorProfile = useSelector((store) => store.instructorProfile);
  const history = useHistory();

  console.log("user website is", instructorProfile.website);

  // Handle save class click to direct user to login/register view
  // if user is not logged in, otherwise dispatch "attend class"
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

      const Toast = swal.mixin({
        toast: true,
        position: "bottom",
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Saved successfully",
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
            {session.dateOfWeek.join(", ")}
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
            <a href={instructorProfile.website} target="_blank">
              <button className="add-class-btn">Sign Up</button>
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

