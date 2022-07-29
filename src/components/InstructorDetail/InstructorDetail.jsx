import React, { useEffect } from "react";
import "./InstructorDetail.css";
import InstructorProfile from "./InstructorProfile";
import InstructorClasses from "./InstructorClasses";
import InstructorTags from "./InstructorTags";
import InstructorAbout from "./InstructorAbout";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";

function InstructorDetail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  // useEffect to dispatch 'FETCH_ACTIVE_INSTRUCTOR' on page load
  useEffect(()=>{
    dispatch({type:"FETCH_INSTRUCTOR_PROFILE", payload: params.id})
  },[params.id])

  const profile = useSelector((store) => store.instructorProfile)

  // const instructor = useSelector((store) => store.instructorDetail[0]);

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="Universal-Container">
      <h1> Instructor Detail </h1>

      <button onClick={handleClick}>Back</button>


      <InstructorProfile profile={profile} instructor={params.id} />
      <div>
        <h3> Classes </h3>
        
      {/* <InstructorClasses  instructor={params.id} /> */}
        
      </div>
      <h3> Tags </h3>
      {/* <div className="tags">
        {instructor && (
          <InstructorTags key={instructor} instructor={instructor} />
        )}
      </div>
      <div>
        <h3> About </h3>
      </div>
      {instructor && (
        <InstructorAbout key={instructor} instructor={instructor} />
      )} */}
    </div>
  );
}

export default InstructorDetail;
