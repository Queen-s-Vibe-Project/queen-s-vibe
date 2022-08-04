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
      {/* {user.adminLevel === "instructor" && user.id === Number(instructor) ? (
        <div>
          <EditIcon />
        </div>
      ) : (
        <div></div>
      )} */}
      <div className="instructor-view-container detail-view">
        <div className="instructor-view">
          <div className="profile-card">
            <Avatar
              className="avatar-img"
              sx={{ width: 100, height: 100 }}
              src={profile.avatar}
              alt={profile.name}
            />
          </div>

          <div className="instructor-card-name">{profile.name}</div>
          <div>{profile.pronouns}</div>

          <section>
            <span>
              <FacebookIcon
                className="social social-media-icons"
                src={profile.facebook}
              />
            </span>
            <span>
              <InstagramIcon
                className="social social-media-icons"
                src={profile.instagram}
              />
            </span>
            <span className="social">
              <TwitterIcon src={profile.twitter} />
            </span>
          </section>

          <div>
            <p className="cert">ACE Certification</p>
          </div>

          {user.id && user.adminLevel === "gym-goer" ? (
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

          <div className="containerProfile">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default InstructorProfile;
