import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteInstructorCard from "./FavoriteInstructorCard";

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
      <div>
        <h4>Favorite Instructors</h4>
        {favoriteInstructor &&
          favoriteInstructor.map((instructor, i) => (
            <FavoriteInstructorCard key={i} instructor={instructor} />
          ))}
      </div>
    </div>
  );
}
