import React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./InstructorDetail.css";
import InstructorClasses from "./InstructorClasses";
import InstructorTags from "./InstructorTags";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";



function InstructorDetail() {
  return (
    <>
      <h1> Instructor Detail </h1>
      <div className="profileHeader">
        <div className="pic">
          <Avatar 
          // sx={{ width: 100, height: 100 }}
          alt="Profile Photo" />
        </div>

        <div className="containerProfile">
          <div> Edan </div>
          <div> He/Him </div>
          <div>
            <InstagramIcon color="primary" /> 
            <FacebookIcon color="primary" />
            <TwitterIcon color="primary" />
          </div>
          <div className="chip"> Ace Certification </div>
        </div>
      </div>
      <div>
        <h3> Classes </h3>
        <InstructorClasses />
      </div>
      <h3> Tags </h3>
     <InstructorTags />
      <div>
        <h3> About </h3>
      </div>
      <p>
        Hello World! My name is Edan and I have been a trainer for about 10
        years. I love help people achieve their fitness goals....
      </p>
    </>
  );
}

export default InstructorDetail;
