export default function UpcomingClassCard({session}) {
  if (session) {
    console.log('session', session);
  }
  return (
    <div className="class-card ">
      <div className="image col">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="exercise"
        />
      </div>
      {session && (
        <div className="class-text-container">
          <div>
            <strong>Activity: </strong>
            {session.activity}
          </div>
          <div>
            <strong>Day/s: </strong>
            {session.dateOfWeek}
          </div>
          <div>
            <strong>Time: </strong>
            {session.startTime}
          </div>
          <strong>Location: </strong>
          <div>{session.location}</div>
        </div>
      )}
    </div>
  );
}
