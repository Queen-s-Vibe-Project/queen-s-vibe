import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from '@mui/icons-material/Edit';

function InstructorProfile( {instructor} ) {
  console.log('did it come', instructor)
  return (
    <>
    <div className="editIcon"> <EditIcon /> </div>
      <div className="profileHeader">
        <div className="pic">
          <Avatar
            src={instructor.avatar}
            alt={instructor.name}
          />
        </div>
        <div className="favoriteHeart">
            <FavoriteIcon />
          </div>
        <div className="containerProfile">
          <div> {instructor.name} </div>
          <div> {instructor.pronouns} </div>
          <div>
            <InstagramIcon src={instructor.instagram} color="primary" />
            <FacebookIcon src={instructor.facbook} color="primary" />
            <TwitterIcon src={instructor.twitter} color="primary" />
          </div>
          <div className="chip"> Ace Certification </div>
        </div>
      </div>
    </>
  );
}
export default InstructorProfile;
