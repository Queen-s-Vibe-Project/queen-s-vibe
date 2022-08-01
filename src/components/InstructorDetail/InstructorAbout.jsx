import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import swal from 'sweetalert2'; 
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
function InstructorAbout({ profile }) {
const params = useParams()
const dispatch = useDispatch();
const [about, setAbout] = useState(false)

// useEffect(() => {
// if(about === false){
//   dispatch({
//     type: "FETCH_INSTRUCTOR_PROFILE"
//     })
// }
// },[about])

  const updateAbout = () => {
    setAbout(true)
    console.log('about is', about)
    swal.fire({
      title: 'Update About',
      input: 'textarea',
      inputValue: profile.about,
      showCancelButton: true,
      cancelButtonColor: 'red',
      showConfirmButton: true,
      confirmButtonColor: 'Green',
      confirmButtonText: 'Save', 
    }).then((result) => {
      if(result.isConfirmed){
          swal.fire(
            'Success!',
            'Information saved',
            'success'
          )
        dispatch({
          type:'UPDATE_ABOUT',
          payload: {
            id: profile.id,
            result: result.value,
          }
        })
          dispatch({
            type: 'FETCH_INSTRUCTOR_PROFILE',
            payload: profile.id
          }) 
      }
    })
  };

  return (
    <>
      <div>
        <Button onClick={updateAbout}>
          <EditIcon />
        </Button>
      </div>
      <p> {profile.about} </p>
    </>
  );
}

export default InstructorAbout;