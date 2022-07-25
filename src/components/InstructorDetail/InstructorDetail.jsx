import React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./InstructorDetail.css";

function InstructorDetail() {
  return (
    <>
      <h1> InstructorDetail </h1>
      <div>
        <Avatar alt="Profile Photo" />
        <div> Edan </div>
        <div> He/Him </div>
        <div> Instagram, Facebook, Twitter </div>
        <div className="chip"> Ace Certification </div>
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
