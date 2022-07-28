import React from "react";
import "./InstructorDetail.css";
import InstructorProfile from "./InstructorProfile";
import InstructorClasses from "./InstructorClasses";
import InstructorTags from "./InstructorTags";
import { useSelector } from "react-redux";

function InstructorDetail() {

  const instructor = useSelector((store) => store.instructorDetail);

  return (
    <>
      <h1> Instructor Detail </h1>
      <button> Back </button>
      {instructor.map((item) => {
        return (
        <InstructorProfile key={item.id} item={item} />
        )
      })}
        
      <div>
        <h3> Classes </h3>
        {instructor.map((item) => {
          return <InstructorClasses key={item.id} instructor={item} />
        })}
      </div>
      <h3> Tags </h3>
      {instructor.map((item) => {
        return <InstructorTags key={item.id} item={item} />
      })}
      <div>
        <h3> About </h3>
      </div>
      <p>
        {instructor && instructor.about}
      </p>
    </>
  );
}

export default InstructorDetail;
