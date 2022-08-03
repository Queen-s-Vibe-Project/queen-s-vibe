import React, { useEffect, useState } from "react";
import "./InstructorDetail.css";
import InstructorProfile from "./InstructorProfile";
import instructorClasses from "../InstructorClass/InstructorClasses";
import InstructorClass from "../InstructorClass/InstructorClass";
import InstructorTags from "./InstructorTags";
// import InstructorAbout from "./InstructorAbout";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

function InstructorDetail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch({ type: "FETCH_INSTRUCTOR_PROFILE", payload: params.id });
    //
    dispatch({
      type: "FETCH_INSTRUCTOR_CLASSES",
      payload: params.id,
    });
    //
    dispatch({ type: "FETCH_INSTRUCTOR_TAGS", payload: params.id });
    //
  }, [params.id]);

  const profile = useSelector((store) => store.instructorProfile);
  const classes = useSelector((store) => store.instructorClasses);
  const tags = useSelector((store) => store.instructorTags);
  const imTags = useSelector((store) => store.search.tags);
  const user = useSelector((store) => store.user);
  console.log("Array:", imTags);

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="Universal-Container">
      <button className="go-back view-more-btn" onClick={handleClick}>
        Back
      </button>

      <h3 className="instructor-view-header"> Instructor Details </h3>
      <hr />

      <div>
        <div className="profile">
          <InstructorProfile profile={profile} instructor={params.id} />
        </div>
        <h3 className="instructor-view-header"> Classes </h3>
        <hr />
        <p className="scroll-text">Scroll to view more</p>

        <div className="ic-card">
          {/* conditional render add icon
          {user.adminLevel === "instructor" && user.id === Number(params.id) ? (
            <div>
              <AddIcon />
            </div>
          ) : (
            <></>
          )} */}
          {classes &&
            classes.map((session, i) => (
              <InstructorClass key={i} session={session} />
            ))}
        </div>
        <h3> Tags </h3>
        <div className="tags">
          <InstructorTags tags={tags} />
        </div>
      </div>
      <div>
        <h3>About</h3>
        <p>{profile.about}</p>
      </div>
    </div>
  );
}

export default InstructorDetail;
