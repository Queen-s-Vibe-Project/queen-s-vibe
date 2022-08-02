import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import SearchBar from "../SearchBar/SearchBar";

import InstructorCardList from "../InstructoCardList/InstructorCardList";

function LandingPage() {
  return (
    <>
      <h3 className="landing-header">Welcome to Groupie</h3>
      <h4 className="popular-tags">Search for instructors by tags</h4>
      <SearchBar />

      <h3 className="featured-instructors">Featured Instructors</h3>
      <InstructorCardList />
    </>
  );
}

export default LandingPage;
 