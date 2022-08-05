import { useState } from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import AddClass from "../AddClass/AddClass";

export default function UserClasses(){

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch()
    const [deletePress, setDeletePress] = useState(true)

    useEffect(()=>{
        if (deletePress === true) {
            
            dispatch({
                type: "FETCH_INSTRUCTOR_CLASSES",
                payload: user.id,
            });
            
            setDeletePress(false)
        }
    },[deletePress])

    const classes = useSelector((store) => store.instructorClasses);

    function deleteClass(id) {
        console.log('delete', id);
        dispatch({
            type:'DELETE_AVAILABLE_CLASS',
            payload: id
        })

        setDeletePress(true)
    }

    return (
      <div>
        <AddClass />
        {classes &&
          classes.map((cl) => (
            <div className="instructor-card">
              <p>Class: {cl.activity}</p>
              <p>Location: {cl.location}</p>
              <p>Date: {cl.dateOfWeek}</p>
              <p>Time: {cl.startTime}</p>
              <div className="class-button">
                <button className="edit-class">Edit</button>
                <button
                  onClick={() => {
                    deleteClass(cl.classId);
                  }}
                  className="delete-class"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    );
}