import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

import DeleteIcon from "@mui/icons-material/Delete";
import Icon from "@mui/material/Icon";


export default function UpcomingClassCard({session,id}) {
  
  const dispatch = useDispatch()
  const [isDeletePress, setIsDeletePress] = useState(false)

  return (
    <div className="class-card ">
      <div>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="exercise"
        />
      </div>

      {session && (
        <div className="class-text-container">
          <div>
            <div className="top-activity">
              <p>
                <strong>Activity: </strong>
                {session.activity}
              </p>
              <Button
                onClick={() => {
                  dispatch({
                    type: "DELETE_GYM-GOER_CLASS",
                    payload: session.id,
                  });
                  setIsDeletePress(true);
                }}
                color="error"
              >
                <Icon className="delete-icon">
                  <DeleteIcon />
                </Icon>
              </Button>
            </div>

            <p>
              <strong>Day/s: </strong>
              {session.dateOfWeek}
            </p>
            <p>
              <strong>Time: </strong>
              {session.startTime}
            </p>
            <p>
              <strong>Location: </strong>
              {session.location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
