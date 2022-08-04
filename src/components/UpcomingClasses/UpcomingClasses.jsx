import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import './UpcomingClasses.css'
import UpcomingClassCard from './UpcomingClassCard'
import { useParams } from "react-router-dom";

export default function UpcomingClasses() {
  const user = useSelector((store) => store.user);

  const upcomingClasses = useSelector((store) => store.upcomingClasses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_UPCOMING_CLASSES",
      payload: user.id,
    });
  }, []);

  return (
    <div>
      <h4 className="upcoming-header">Upcoming Classes</h4>
      <div className="upcomingClasses-section">
        {upcomingClasses.map((session) => (
          <UpcomingClassCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
}