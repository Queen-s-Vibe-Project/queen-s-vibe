import React from "react";
import "./InstructorPage.css";

function InstructorClassItem({ instructorClass }) {
  
const editClass = () => {
  // console.log('inside edit class')
  
}
  return (
    <div className="instructor-card">
      <p>
        <strong>Class: </strong>
        {instructorClass.activity}
      </p>
      <p>
        <strong>Location:</strong> {instructorClass.location}
      </p>
      <p>
        <strong>Date:</strong> {instructorClass.dateOfWeek}
      </p>
      <p>
        <strong>Time:</strong> {instructorClass.startTime}
      </p>
      <div className="class-button">
        <button className="edit-class" onClick={editClass}>Edit</button>
        <button className="edit-class">Delete</button>
      </div>
    </div>
  );
}

export default InstructorClassItem;
