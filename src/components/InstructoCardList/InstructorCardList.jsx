import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import InstructorCardItem from "../InstructorCardItem/InstructorCardItem";
import { useSelector } from "react-redux";

function InstructorCardList() {
  const dispatch = useDispatch();
  // Need to bring in instructor from redux store
  // const instructor = useSelector((store) => store.instructor);

  // useEffect to fetch instructors on page load
  // dispatch 'FETCH_INSTRUCTORS' to trigger saga
  useEffect(() => {
    dispatch({
      type: "FETCH_INSTRUCTORS",
    });
  }, []);

  return (
    <>
      {user.map((item) => {
        return <InstructorCardItem key={item.id} item={item} />;
      })}
    </>
  );
}

export default InstructorCardList;
