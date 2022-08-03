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
import swal from "sweetalert2";
import UserClasses from "../UserClasses/UserClasses";


function InstructorPage() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);

  
// Edit function for instructor profile
const editProfile = () => {

  swal.fire({
  title:'Update your Profile',
  html:
  `<input id="swal-input1" class="swal2-input" value='${user.name}'>` +
  `<input id="swal-input2" class="swal2-input" value='${user.pronouns}'>`+
  `<input id="swal-input3" class="swal2-input" value='${user.facebook}'>`+
  `<input id="swal-input4" class="swal2-input" value='${user.instagram}'>`+
  `<input id="swal-input5" class="swal2-input" value='${user.twitter}'>`+
  `<input id="swal-input6" class="swal2-input" value='${user.certification}'>`,
   preConfirm: () => {
     return {
       id: user.id,
       name: document.getElementById('swal-input1').value,
       pronouns: document.getElementById('swal-input2').value,
       facebook: document.getElementById('swal-input3').value,
       instagram: document.getElementById('swal-input4').value,
       twitter: document.getElementById('swal-input5').value,
       certification: document.getElementById('swal-input6').value
     }
   },
   confirmButtonText: 'Save Changes',
   confirmButtonColor: 'green',
   showCancelButton: true,
   cancelButtonColor:'red',
   cancelButtonText: 'Cancel Edit'
  }).then((result) => {
    if(result.isConfirmed ){
      console.log('Profile edit result is', result.value)
      dispatch({
        type:'UPDATE_PROFILE',
        payload: result.value
      })
      swal.fire(
        'Sucess!',
        'Changes were saved',
        'success'
      )
    }
    else if(result.isDismissed){
      console.log('No edits were saved')
      swal.fire(
        'Cancelled',
        'No changes were made',
        'error'
      )
    }
  })

}


  return (
    <>
      <div className="instructor-view-container">
        {/* Tooltip for pencil edit  */}
        <div className="tooltip">
          <Icon className="pencil-icon">
            <CreateIcon onClick={editProfile}/>
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
             <a href={user.facebook}><FacebookIcon /></a> 
            </span>
            <span className="social social-media-icons">
              <a href={user.instagram}><InstagramIcon /></a>
            </span>
            <span className="social">
              <a href={user.twitter} ><TwitterIcon /></a>
            </span>
          </section>
          {/* Certification */}
          <div>
            <p className="cert">{user.certification}</p>
          </div>
        </div>
      </div>
      {/* tags */}
      <div className="Universal-Container">
        <UserTags />
      </div>
      {/* Classes card section */}
      <h3 className="instructor-view-header">Classes</h3>
      <hr />
      <p className="scroll-text">Scroll to view more</p>

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
