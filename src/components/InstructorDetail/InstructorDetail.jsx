import React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./InstructorDetail.css";
import InstructorClasses from "./InstructorClasses";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function InstructorDetail() {
  return (
    <>
      <h1> InstructorDetail </h1>
      <div className="profileHeader">
        <Avatar alt="Profile Photo" />
        <div className="containerProfile">
          <div> Edan </div>
          <div> He/Him </div>
          <div>
            <InstagramIcon color="primary" /> <FacebookIcon color="primary" />
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
      <div className="chip">LGBTQ Friendly</div>
      <div>
        <h3> About </h3>
      </div>
      <textarea name="" id="" cols="30" rows="10">
        Hello World! My name is Edan and I have been a trainer for about 10
        years. I love help people achieve their fitness goals....
      </textarea>
    </>
  );
}

export default InstructorDetail;
