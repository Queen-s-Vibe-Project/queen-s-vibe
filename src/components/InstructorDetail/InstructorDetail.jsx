import React from "react";
import "./InstructorDetail.css";
import InstructorProfile from "./InstructorProfile";
import InstructorClasses from "./InstructorClasses";
import InstructorTags from "./InstructorTags";
import InstructorAbout from "./InstructorAbout";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function InstructorDetail() {

  const instructor = useSelector((store) => store.instructorDetail[0]);
  
  return (
    <>
      <h1> Instructor Detail </h1>
      <button> Back </button>
      {instructor && <InstructorProfile key={instructor} instructor={instructor} />}

function InstructorDetail() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <h1> Instructor Detail </h1>

      <button onClick={handleClick}> Back </button>

      <InstructorProfile />
      <div>
        <h3> Classes </h3>
            {instructor && <InstructorClasses key={instructor} instructor={instructor} />}
      </div>
        <h3> Tags </h3>
      <div className="tags">
         {instructor && <InstructorTags key={instructor} instructor={instructor} /> } 
      </div>
      <div>
        <h3> About </h3>
      </div>
         {instructor && <InstructorAbout key={instructor} instructor={instructor} /> }
    </>
  );
}

export default InstructorDetail;
