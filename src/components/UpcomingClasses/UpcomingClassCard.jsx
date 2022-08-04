import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
export default function UpcomingClassCard({session}) {
  
  const dispatch = useDispatch()
  const [isDeletePress, setIsDeletePress] = useState(true)

  useEffect(()=>{
    if (isDeletePress === true) {
      dispatch({
        type:'FETCH_UPCOMING_CLASSES'
    })
      setIsDeletePress(false)
    }
  },[isDeletePress])

  return (
    <div className="class-card ">
      <div className="image col">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="exercise"
        />
      </div>

      { session && <div className="class-card-text col">
       <div className="class-text">
        <h5>{session.activity}</h5>
        <p>{session.dateOfWeek.join(', ') }</p>
        <p>{session.startTime}</p>
        <Button
          onClick={()=>{
            dispatch({
              type:"DELETE_GYM-GOER_CLASS",
              payload:session.id
            })
            setIsDeletePress(true)
          }}
          color='error'
        >
          Delete
        </Button>
       </div>
      </div>}

    </div>
  );
}
