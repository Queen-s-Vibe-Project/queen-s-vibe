import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
function InstructorAbout({ user }) {
  const params = useParams();
  const dispatch = useDispatch();
  // console.log('did the user make it through', user)
  
  // const [about, setAbout] = useState(false)
  // useEffect(() => {
  // dispatch({
  //   type: "FETCH_INSTRUCTOR_PROFILE",
  //   payload: profile.id
  // })
  // }, [])

  const updateAbout = () => {
    swal
      .fire({
        title: "Update About",
        input: "textarea",
        inputValue: user.about,
        showCancelButton: true,
        cancelButtonColor: "red",
        showConfirmButton: true,
        confirmButtonColor: "Green",
        confirmButtonText: "Save",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire("Success!", "Information saved", "success");
          dispatch({
            type: "UPDATE_ABOUT",
            payload: {
              id: user.id,
              result: result.value,
            },
          });
          dispatch({
            type: "FETCH_INSTRUCTOR_PROFILE",
            payload: user.id,
          });
        }
      });
  };

  return (
    <>
      <div>
        <Button onClick={updateAbout}>
          <EditIcon />
        </Button>
      </div>
      <p> {user.about} </p>
    </>
  );
}

export default InstructorAbout;
