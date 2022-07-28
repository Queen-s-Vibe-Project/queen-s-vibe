function InstructorAbout({ item }) {
  return (
    <>
      <div>
        <h3> About </h3>
      </div>
      <p> {item && item.about} </p>
    </>
  );
}

export default InstructorAbout;
