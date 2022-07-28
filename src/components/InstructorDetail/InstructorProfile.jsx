import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from '@mui/icons-material/Edit';

function InstructorProfile( {item} ) {
  console.log('what is instructor', item)
  return (
    <>
    <div className="editIcon"> <EditIcon /> </div>
      <div className="profileHeader">
        <div className="pic">
          <Avatar
            src={item.Avatar}
            alt={item.name}
          />
         
        </div>

        <div className="favoriteHeart">
            <FavoriteIcon />
          </div>
        <div className="containerProfile">
          <div> {item.name} </div>
          <div> {item.pronouns} </div>
          <div>
            <InstagramIcon color="primary" />
            <FacebookIcon color="primary" />
            <TwitterIcon color="primary" />
          </div>
          <div className="chip"> Ace Certification </div>
        </div>
      </div>
    </>
  );
}
export default InstructorProfile;
