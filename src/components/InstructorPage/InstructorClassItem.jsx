import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./InstructorPage.css";

function InstructorClassItem({ instructorClass }) {

  const [isDeletePress, setDeletePress] = useState(false)
  const user = useSelector((store)=> store.user)

  useEffect(()=>{

    if(isDeletePress === true){
      dispatch({
        type:"FETCH_INSTRUCTOR_CLASSES",
        payload: user.id
      })
      setDeletePress(false)
    }
  },[isDeletePress])

  const dispatch = useDispatch()

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
        <button className="edit-class">Edit</button>
        <button
          onClick={()=>{
            dispatch({
              type:"DELETE_INSTRUCTOR_CLASS",
              payload: instructorClass.classId
            })

            setDeletePress(true)
          }} 
          className="edit-class"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default InstructorClassItem;
