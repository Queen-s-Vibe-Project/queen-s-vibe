import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InstructorAbout from "../InstructorDetail/InstructorAbout";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./InstructorPage.css";
import Icon from "@mui/material/Icon";
import CreateIcon from "@mui/icons-material/Create";
import UpcomingClassCard from "../UpcomingClasses/UpcomingClassCard";
import UserTags from "../UserTags/UserTags";
import UserClasses from "../UserClasses/UserClasses";

function InstructorPage() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
 

  return (
    <>
      <div className="instructor-view-container">
        {/* Tooltip for pencil edit  */}
        <div className="tooltip">
          <Icon className="pencil-icon">
            <CreateIcon />
          </Icon>
          <span className="tooltiptext">Edit Profile</span>
        </div>

        {/* Instructor info */}
        <div className="instructor-view">
          <Avatar
            className="avatar-img"
            alt={user.name}
            src={user.avatar}
            sx={{ width: 100, height: 100 }}
          />

          <div className="instructor-card-name">{user.name}</div>
          <div>{user.pronouns}</div>

          {/* Social media icons */}
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
            <p className="cert">ACE Certification</p>
          </div>
          {/* <div className="about-text">
            <p>{user.about}</p>
          </div> */}
        </div>
      </div>
      {/* tags */}
      <div className="Universal-Container">
        <UserTags/>
      </div>
      

      {/* Classes */}
      <h3 className="class-text">Classes</h3>
      
      <div className="instructor-class-container">
        <UserClasses/>
       
        <div>
        <h3 className="class-text"> About </h3>
        <InstructorAbout user={user} />
        </div>
       
      </div>
    </>
  );
}

export default InstructorPage;
