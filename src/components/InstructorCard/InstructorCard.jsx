import React from "react";
import Me from "./me.JPG";
import "./InstructorCard.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function InstructorCard() {
  return (
    <>
      <div className="profile-container">
        {/* Left side of profile  */}
        <div className="left-profile">
          <img className="profile-img" src={Me} alt="Me" />
          <div className="view-more">
            <button className="view-more-btn">View More</button>
          </div>
        </div>
        {/* Right side of profile */}
        <div className="right-profile">
          <p className="right-name">Alexander Ratanas</p>
          <div className="pill-tags">
            <p className="right-tag">Diverse/POC</p>
            <p className="right-tag">Senior</p>
          </div>
          <div className="profile-icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default InstructorCard;
