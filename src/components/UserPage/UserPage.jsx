import React, { useEffect } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import RecommendInstructors from "../RecommendInstructors/RecommendInstructors";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import UpcomingClasses from "../UpcomingClasses/UpcomingClasses";
import FavoriteInstructor from "../FavoriteInstructor/FavoriteInstructor";
import AddClass from "../AddClass/AddClass";
import InstructorPage from "../InstructorPage/InstructorPage";
import InstructorTags from "../InstructorDetail/InstructorTags";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const tags = useSelector((store) => store.instructorTags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_ACTIVITIES",
    });

    dispatch({ type: "FETCH_INSTRUCTOR_TAGS", payload: user.id });
  }, []);

  return (
    <>
      {/* Conditional rendering to display either gym goer profile or instructor profile
      based on adminLevel */}
      {/* Gym goer profile */}
      {user.adminLevel === "gym-goer" ? (
        <div>
          <h2 className="welcome Universal-Container">
            Welcome, {user.username}!
          </h2>
          <SearchBar />
          <div className="Universal-Container">
            <RecommendInstructors />
            <UpcomingClasses />
            <FavoriteInstructor />
            <p>Your ID is: {user.id}</p>
            <LogOutButton className="btn" />
          </div>
        </div>
      ) : (
        // Instructor profile
        <div className="instructor-page">
          <h3 className="welcome Universal-Container">
            Welcome, {user.username}!
          </h3>
          <InstructorPage />
          <AddClass />
        </div>
      )}
    </>
  );
}

export default UserPage;
