import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import RecommendInstructors from '../RecommendInstructors/RecommendInstructors';
import {useSelector} from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import UpcomingClasses from '../UpcomingClasses/UpcomingClasses';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className='Universal-Container' >
      <h2>Welcome, {user.username}!</h2>
        <SearchBar/>
        <RecommendInstructors/>
        <UpcomingClasses/>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
