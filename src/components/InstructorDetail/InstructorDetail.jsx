import React, { useEffect, useState } from "react";
import "./InstructorDetail.css";
import InstructorProfile from "./InstructorProfile";
import InstructorClasses from "./InstructorClasses";
import InstructorClass from "./InstructorClass/InstructorClass";
import InstructorTags from "./InstructorTags";
import InstructorAbout from "./InstructorAbout";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

function InstructorDetail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false)

  // useEffect to dispatch 'FETCH_ACTIVE_INSTRUCTOR' on page load

 

  useEffect(()=>{
    
    dispatch({type:"FETCH_INSTRUCTOR_PROFILE", payload: params.id})
    dispatch({
      type: "FETCH_INSTRUCTOR_CLASSES",
      payload: params.id
    })
  },[params.id])

  const profile = useSelector((store) => store.instructorProfile)
  const classes = useSelector((store) => store.instructorClasses)
  const user = useSelector((store) => store.user) 
  // const instructor = useSelector((store) => store.instructorDetail[0]);
  console.log('Array:',classes);
  
  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="Universal-Container">
      <h1> Instructor Detail </h1>

      <button onClick={handleClick}>Back</button>

      <div className="profile">
        <InstructorProfile profile={profile} instructor={params.id} />
      </div>
      <h3> Classes </h3>
      <div className="class ic-card">
       
        {/* conditinal render add icon */}
       { (user.adminLevel === 'instructor' && user.id === Number(params.id)) ? 
       <div> <AddIcon/> </div>:
       <></>}
        { classes && 
          classes.map((session)=> (
            <InstructorClass session={session} />
          ))
        }
        
      </div>
      <h3> Tags </h3>
      {/* <div className="tags">
        {instructor && (
          <InstructorTags key={instructor} instructor={instructor} />
        )}
      </div>
      <div>
        <h3> About </h3>
      </div>
      {instructor && (
        <InstructorAbout key={instructor} instructor={instructor} />
      )} */}
    </div>
  );
}

export default InstructorDetail;
// { (classes && classes.length > 1) ? 
//   <div className="classOrder" >
//   { (user.adminLevel === 'instructor' && user.id === Number(params.id)) ? 
//   <div className="addIcon"> <AddIcon/> </div> :
//   <div></div>
// }
//     { 
//       classes.map((session)=>{
//         <InstructorClass session={session} />
//       })
//     }
//    </div>  :
//     <div> loading</div>
// }
//   {
//     classes.map((session)=>(
//       <InstructorClass session={session} />
//     ))
//   }