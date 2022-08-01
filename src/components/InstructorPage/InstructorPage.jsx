import React from "react";
import { useSelector } from "react-redux";
import InstructorAbout from "../InstructorDetail/InstructorAbout";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function InstructorPage() {
  const user = useSelector((store) => store.user);

  return (
    <>
      <h3>Instructor's Profile View</h3>

      <Avatar
        alt={user.name}
        src={user.avatar}
        sx={{ width: 100, height: 100 }}
      />
      <div>{user.name}</div>
      <div>{user.avatar}</div>
      <div>{user.pronouns}</div>
      <div>
        <span>
          <FacebookIcon />
        </span>
        <span>
          <InstagramIcon />
        </span>
        <span>
          <TwitterIcon />
        </span>
      </div>
    </>
  );
}

export default InstructorPage;
