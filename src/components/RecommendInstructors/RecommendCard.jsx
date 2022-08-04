import { useHistory } from "react-router-dom";
import "./RecommendInstructors.css";

export default function RecommendCard({ instructor }) {
  const history = useHistory();

  return (
    <div>
      <div className="recommend-card">
        <img
          className="recommend-avatar"
          src={instructor.avatar}
          alt="picture"
          srcSet=""
          height={75}
        />
        <div>
          <p className="rc-instructor-name">{instructor.name}</p>
        </div>
        <div>
          <p>{instructor.pronouns}</p>
        </div>
        <div>
          <p>{instructor.count} Matching Tags</p>
        </div>
      </div>
      <button
        className="view-more"
        onClick={() => {
          history.push(`/instructor/${instructor.id}`);
        }}
      >
        View More
      </button>
    </div>
  );
}
