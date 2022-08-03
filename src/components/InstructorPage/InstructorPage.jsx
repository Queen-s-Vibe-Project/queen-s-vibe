import React from "react";
import { useSelector } from "react-redux";
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

function InstructorPage() {
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
        <UserTags />
      </div>

      <h3 className="instructor-view-header">Classes</h3>
      <hr />
      <p className="scroll-text">Scroll to view more</p>
      {/* Classes card */}
      <div className="instructor-class-container">
        <div className="instructor-card">
          <p>Class: HIIT</p>
          <p>Location: Minneapolis</p>
          <p>Date: 10/9/22</p>
          <p>Time: 8am</p>
          <div className="class-button">
            <button className="edit-class">Edit</button>
            <button className="edit-class">Delete</button>
          </div>
        </div>

        <div className="instructor-card">
          <p>Class: Weightlifting</p>
          <p>Location: Plymouth</p>
          <p>Date: 10/9/22</p>
          <p>Time: 8am</p>
          <div className="class-button">
            <button className="edit-class">Edit</button>
            <button className="edit-class">Delete</button>
          </div>
        </div>

        <div className="instructor-card">
          <p>Class: Weightlifting</p>
          <p>Location: Plymouth</p>
          <p>Date: 10/9/22</p>
          <p>Time: 8am</p>
          <div className="class-button">
            <button className="edit-class">Edit</button>
            <button className="edit-class">Delete</button>
          </div>
        </div>

        <div className="instructor-card">
          <p>Class: Yoga</p>
          <p>Location: Saint Paul</p>
          <p>Date: 10/9/22</p>
          <p>Time: 8am</p>
          <div className="class-button">
            <button className="edit-class">Edit</button>
            <button className="edit-class">Delete</button>
          </div>
        </div>
      </div>

      <div className="about-text">
        <InstructorAbout user={user} />
      </div>
    </>
  );
}

export default InstructorPage;
