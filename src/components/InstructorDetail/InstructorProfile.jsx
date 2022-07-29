import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";



function InstructorProfile( {profile,instructor} ) {
  


  const user = useSelector((store) => store.user) 
  

  return (
    <>
    {(user.adminLevel === 'instructor'&& user.id === Number(instructor))? <div><EditIcon/></div>: <div></div> }
      <div className="profileHeader">
        <div className="pic">
          <Avatar
            sx={{ width: 56, height: 56 }}
            src={profile.avatar}
            alt={profile.name}
          />
        </div>
        <div className="favoriteHeart">
            <FavoriteIcon />
          </div>
        <div className="containerProfile">
          <div> {profile.name} </div>
          <div> {profile.pronouns} </div>
          <div>
            <InstagramIcon src={profile.instagram} color="primary" />
            <FacebookIcon src={profile.facebook} color="primary" />
            <TwitterIcon src={profile.twitter} color="primary" />
          </div>
          <div className="chip"> Ace Certification </div>
        </div>
      </div>
    </>
  );
}
export default InstructorProfile;
