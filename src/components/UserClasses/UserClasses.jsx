import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

export default function UserClasses(){

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({
            type: "FETCH_INSTRUCTOR_CLASSES",
            payload: user.id,
          });
    },[])

    const classes = useSelector((store) => store.instructorClasses);

    function deleteClass(id) {
        console.log('delete', id);
        dispatch({
            type:'DELETE_AVAILABLE_CLASS',
            payload: id
        })
    }

    return(
        <div>
            { classes &&
        classes.map((cl)=>(
          <div className="instructor-card">
          <p>Class: {cl.activity}</p>
          <p>Location: {cl.location}</p>
          <p>Date: {cl.dateOfWeek.join(', ')}</p>
          <p>Time: {cl.startTime}</p>
          <div className="class-button">
            <button className="edit-class">Edit</button>
            <button 
              onClick={()=>{
                deleteClass(cl.id)
              }} 
              className="delete-class"
            >
              Delete
            </button>
          </div>
        </div>
        ))
      }
        </div>
    )
}