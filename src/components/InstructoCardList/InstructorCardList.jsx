import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InstructorCardItem from "../InstructorCardItem/InstructorCardItem";

function InstructorCardList() {
  const dispatch = useDispatch();
  // Need to bring in instructor from redux store
  const instructor = useSelector((store) => store.instructor);

  // Random instructor list
  const random = instructor.sort(() => Math.random() - 0.5);
  console.log("random instructors", random);

  // useEffect to fetch instructors on page load
  // dispatch 'FETCH_INSTRUCTORS' to trigger saga
  useEffect(() => {
    dispatch({
      type: "FETCH_INSTRUCTORS",
    });
  }, []);

  return (
    <>
      <section className="instructors-container">
        {/* Limit feature instructors to 3 using slice method */}
        {instructor.slice(0, 3).map((item, i) => {
          return <InstructorCardItem key={i} item={item} />;
        })}
      </section>

      <div className="about-section">
        <h4 className="about-header">About Groupie</h4>
        <p>
          Working out is difficult enough so we want to create a safe and fun
          environment for both gym patrons and gym instructors. Groupie allows
          gym patrons to search for instructors that share similar beliefs and
          values.
        </p>
      </div>
    </>
  );
}

export default InstructorCardList;
