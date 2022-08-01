import React, { useEffect } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import RecommendInstructors from "../RecommendInstructors/RecommendInstructors";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import UpcomingClasses from "../UpcomingClasses/UpcomingClasses";
import FavoriteInstructor from "../FavoriteInstructor/FavoriteInstructor";
import AddClass from "../AddClass/AddClass";
import InstructorPage from "../InstructorPage/InstructorPage";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "FETCH_ACTIVITIES",
    });
  });

  return (
    <>
      <h2 className="Universal-Container">Welcome, {user.username}!</h2>
      <SearchBar />

      {/* Conditional rendering to display either gym goer profile or instructor profile
      based on adminLevel */}
      {/* Gym goer profile */}
      {user.adminLevel === "gym-goer" ? (
        <div className="Universal-Container">
          <RecommendInstructors />
          <UpcomingClasses />
          <FavoriteInstructor />
          <p>Your ID is: {user.id}</p>
          <LogOutButton className="btn" />
        </div>
      ) : (
        // Instructor profile
        <div>
          <InstructorPage />
          <AddClass />
          <LogOutButton className="btn" />
        </div>
      )}
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
