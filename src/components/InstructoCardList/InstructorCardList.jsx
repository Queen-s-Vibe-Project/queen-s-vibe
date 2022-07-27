import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import InstructorCardItem from "../InstructorCardItem/InstructorCardItem";
import { useSelector } from "react-redux";

function InstructorCardList() {
  const dispatch = useDispatch();
  // Need to bring in instructor from redux store
  const instructor = useSelector((store) => store.instructor);

  // useEffect to fetch instructors on page load
  // dispatch 'FETCH_INSTRUCTORS' to trigger saga
  useEffect(() => {
    dispatch({
      type: "FETCH_INSTRUCTORS",
    });
  }, []);

  return (
    <>
      {instructor.map((item) => {
        return <InstructorCardItem key={item.id} item={item} />;
      })}
      <div className="about-section">
        <h4>About Placeholder</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          ante ut tellus lacinia, vel euismod eros euismod. Proin ut ipsum vitae
          diam convallis convallis id sit amet enim. Morbi nec iaculis enim.
          Nulla tempor vehicula dui, vel gravida tortor ultricies ac. Vestibulum
          rutrum mauris ut magna dictum pellentesque. Vestibulum risus odio,
          dictum et justo vitae, rutrum condimentum arcu. Nullam sed ultrices
          libero. Curabitur tempor tristique ipsum vitae porttitor. Duis sed
          aliquet enim. Nullam et aliquet purus, eu convallis sem. Aliquam
          consectetur tincidunt metus, nec laoreet dui pellentesque a.
        </p>
      </div>
    </>
  );
}

export default InstructorCardList;
