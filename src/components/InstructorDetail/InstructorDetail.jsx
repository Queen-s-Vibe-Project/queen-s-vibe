import React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./InstructorDetail.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function InstructorDetail() {
  return (
    <>
      <h1> InstructorDetail </h1>
      <div className="profileHeader">
        <Avatar alt="Profile Photo" />
        <div className="containerProfile">
          <div> Edan </div>
          <div> He/Him </div>
          <div> <InstagramIcon /> <FacebookIcon /> <TwitterIcon /> </div>
          <div className="chip"> Ace Certification </div>
        </div>
      </div>
      <div>
        <h3> Classes </h3>
        <div className="card">
          <div className="container">
            <div> HIT </div>
            <div> Monday </div>
            <div> 7:00pm </div>
          </div>
        </div>
      </div>
      <h3> Tags </h3>
      <div className="chip">LGBTQ Friendly</div>
      <div>
        <h3> About </h3>
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </>
  );
}

export default InstructorDetail;
