import React from "react";
import "./InstructorDetail.css";
import InstructorProfile from "./InstructorProfile";
import InstructorClasses from "./InstructorClasses";
import InstructorTags from "./InstructorTags";



function InstructorDetail() {
  return (
    <>
      <h1> Instructor Detail </h1>
      <InstructorProfile />
      <div>
        <h3> Classes </h3>
        <InstructorClasses />
      </div>
        <h3> Tags </h3>
        <InstructorTags />
      <div>
        <h3> About </h3>
      </div>
      <p>
        Hello World! My name is Edan and I have been a trainer for about 10
        years. I love help people achieve their fitness goals....
      </p>
    </>
  );
}

export default InstructorDetail;
