import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./InstructorPage.css";
import swal from "sweetalert2";

function InstructorClassItem({ instructorClass }) {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  //This function will allow instructors to update classes
const editClass = () => {
  
  // console.log('inside edit class')
swal.fire({
  title: "Update a Class",
        html:
          `<input id="swal-input1" class="swal2-input" value='${instructorClass.activity}'>` +
          `<input id="swal-input2" class="swal2-input" value='${instructorClass.location}'>` +
          `<input id="swal-input3" class="swal2-input" value='${instructorClass.dateOfWeek}}'>` +
          `<input id="swal-input4" class="swal2-input" value='${instructorClass.startTime}'>` ,
          preConfirm: () => {
            return {
              id: user.id,
              class: document.getElementById("swal-input1").value,
              location: document.getElementById("swal-input2").value,
              date: document.getElementById("swal-input3").value,
              time: document.getElementById("swal-input4").value,
            };
          },
          confirmButtonText: "Save Changes",
          confirmButtonColor: "green",
          showCancelButton: true,
          cancelButtonColor: "red",
          cancelButtonText: "Cancel Edit", 
})
.then((result) => {
  if(result.isConfirmed) {
    console.log('Claass edit reuslts are:', result.value)
    dispatch({
      type: "UPDATE_CLASS",
      payload: result.value
    })
    swal.fire("Sucess!", "Changes were saved", "success");
  }
  else if (result.isDismissed) {
    console.log("No edits were saved");
    swal.fire("Cancelled", "No changes were made", "error");
  }
});

};
 

  const [isDeletePress, setDeletePress] = useState(false)
  
  
  //when delete is press dispatch "FETCH_INSTRUCTOR_CLASSES"
  useEffect(()=>{

    if(isDeletePress === true){
      dispatch({
        type:"FETCH_INSTRUCTOR_CLASSES",
        payload: user.id
      })
      setDeletePress(false)
    }
  },[isDeletePress])

  


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
