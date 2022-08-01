import React, { useEffect, useState } from "react";
import "./InstructorDetail.css";
import InstructorProfile from "./InstructorProfile";
import InstructorClasses from "./InstructorClasses";
import InstructorClass from "./InstructorClass/InstructorClass";
import InstructorTags from "./InstructorTags";
import InstructorAbout from "./InstructorAbout";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";


function InstructorDetail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect to dispatch 'FETCH_ACTIVE_INSTRUCTOR' on page load

  // const instructor = useSelector((store) => store.instructorDetail[0]);

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
  const imTags = useSelector((store)=> store.search.tags)
  const user = useSelector((store) => store.user);
  // const instructor = useSelector((store) => store.instructorDetail[0]);
  console.log("Array:", imTags);

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="Universal-Container">
      <h1> Instructor Detail </h1>

      <button onClick={handleClick}>Back</button>

      <div>
        <h3> Classes </h3>

        <div className="profile">
          <InstructorProfile profile={profile} instructor={params.id} />
        </div>
        <h3> Classes </h3>
        <div className="class ic-card">
          {/* conditional render add icon */}
          {user.adminLevel === "instructor" && user.id === Number(params.id) ? (
            <div>
              <AddIcon />
            </div>
          ) : (
            <></>
          )}
          {classes &&
            classes.map((session) => <InstructorClass session={session} />)}
        </div>
        <h3> Tags </h3>
        <div className="tags">
          {tags && tags.length > 0 && <InstructorTags tags={tags} />}
        </div>
      </div>
      <div>
        <h3> About  </h3>
      </div>
        <InstructorAbout profile={profile} instructor={params.id} /> 
    </div>
  );
}

export default InstructorDetail;
