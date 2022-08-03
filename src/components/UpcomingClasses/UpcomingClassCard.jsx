export default function UpcomingClassCard({session}) {
  if (session) {
    console.log('session', session);
  }
  return (
    <div className="class-card ">
      <div className="image col">
        <img
          className="image"
          src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf52a4ee2fa719a84/5de0bac6a0e1a660e32875d2/HIIT.png?width=1232&auto=webp&format=progressive&quality=76"
          alt=""
          srcset=""
        />
      </div>
      { session && <div className="class-card-text col">
       <div className="class-text">
        <h5>{session.activity}</h5>
        <p>{session.dateOfWeek.join(', ')}</p>
        <p>{session.startTime}</p>
       </div>
      </div>}
    </div>
  );
}
