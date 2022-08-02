import React from "react";
import { useSelector } from "react-redux";
import InstructorAbout from "../InstructorDetail/InstructorAbout";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./InstructorPage.css";

function InstructorPage() {
  const user = useSelector((store) => store.user);

  return (
    <div className="instructor-view-container">
      <div className="instructor-view">
        <Avatar
          className="avatar-img"
          alt={user.name}
          src={user.avatar}
          sx={{ width: 100, height: 100 }}
        />
        <div className="instructor-card-name">{user.name}</div>
        <div>{user.pronouns}</div>
        <section>
          <span className="social social-media-icons">
            <FacebookIcon />
          </span>
          <span className="social social-media-icons">
            <InstagramIcon />
          </span>
          <span className="social">
            <TwitterIcon />
          </span>
        </section>

        <div>
          <p>ACE Certification</p>
        </div>
      </div>
    </div>
  );
}

export default InstructorPage;
