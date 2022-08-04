import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteInstructorCard from "./FavoriteInstructorCard";
import "./FavoriteInstructor.css";

export default function FavoriteInstructor() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_FAVORITE_INSTRUCTOR",
    });
  }, []);

  const favoriteInstructor = useSelector((store) => store.favoriteInstructor);

  if (favoriteInstructor) {
    console.log(favoriteInstructor);
  }

  return (
    <div>
      {" "}
      <h4 className="favorite-header-text">Favorite Instructors</h4>
      <div className="favorite-instructors-container">
        {favoriteInstructor &&
          favoriteInstructor.map((instructor, i) => (
            <FavoriteInstructorCard key={i} instructor={instructor} />
          ))}
      </div>
    </div>
  );
}
