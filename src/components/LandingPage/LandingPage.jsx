import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import SearchBar from "../SearchBar/SearchBar";
import InstructorCard from "../InstructorCard/InstructorCard";

function LandingPage() {
  return (
    <>
      <h3 className="landing-header">Landing Page</h3>
      <h4 className="popular-tags">Search for instructors by tags</h4>
      <SearchBar />
      <h3 className="featured-instructors">Featured Instructors</h3>
      <InstructorCard />
      <InstructorCard />
      <InstructorCard />
    </>
  );
}

export default LandingPage;
