import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./InstructorDetail.css";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function InstructorProfile({ profile, instructor }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  return (
    <>
      {user.adminLevel === "instructor" && user.id === Number(instructor) ? (
        <div>
          <EditIcon />
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <div className="profile-card">
          <Avatar
            sx={{ width: 100, height: 100 }}
            src={profile.avatar}
            alt={profile.name}
          />
        </div>
        <div> {profile.name} </div>
        <div> {profile.pronouns} </div>
        <span>
          <FacebookIcon src={profile.facebook} />
        </span>
        <span>
          <InstagramIcon src={profile.instagram} />
        </span>
        <span>
          <TwitterIcon src={profile.twitter} />
        </span>
        {user.id ? (
          <div
            onClick={() => {
              dispatch({
                type: "ADD_INSTRUCTOR_TO_FAVORITES",
                payload: instructor,
              });
            }}
            className="favoriteHeart"
          >
            <FavoriteIcon />
          </div>
        ) : null}

        <div> Ace Certification </div>
        <div className="containerProfile">
          <div></div>
        </div>
      </div>
    </>
  );
}
export default InstructorProfile;
