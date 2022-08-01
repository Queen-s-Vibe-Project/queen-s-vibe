import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import RecommendInstructors from '../RecommendInstructors/RecommendInstructors';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import UpcomingClasses from '../UpcomingClasses/UpcomingClasses';
import FavoriteInstructor from '../FavoriteInstructor/FavoriteInstructor';
import AddClass from '../AddClass/AddClass';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: "FETCH_ACTIVITIES"
    })
  })

  return (
    <div className='Universal-Container' >
      <h2>Welcome, {user.username}!</h2>
        <SearchBar/>
        <RecommendInstructors/>
        <UpcomingClasses/>
        <FavoriteInstructor/>
        {user.adminLevel === "instructor" && <AddClass/>}

      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
