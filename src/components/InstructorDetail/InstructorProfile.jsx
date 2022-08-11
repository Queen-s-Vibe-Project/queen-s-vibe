import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./InstructorDetail.css";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert2";

function InstructorProfile({ profile, instructor }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // useState to disable favorite button after clicked
  const [faveDisable, setFaveDisable] = useState(false);
  const [faveIcon, setFaveIcon] = useState(<FavoriteBorderIcon className='favorite-border-icon' />);
  


  // Disable favorite 'heart' icon after user clicks it
  // Gym goer only allowed to favorite instructor one time
  const faveClickHandler = () => {
    dispatch({
      type: "ADD_INSTRUCTOR_TO_FAVORITES",
      payload: instructor,
    });
    setFaveDisable(true);
    setFaveIcon(<FavoriteIcon />);
    const Toast = swal.mixin({
      toast: true,
      position:'top',
      timer: 3000,
      timerProgressBar: true,
    })
    Toast.fire({
      icon:'success',
      title: 'Added to favorites'
    })

  };

  return (
    <>

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
            <div>
              <button
                className="favoriteHeart"
                disabled={faveDisable}
                onClick={faveClickHandler}
              >
                {faveIcon}
              </button>
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
