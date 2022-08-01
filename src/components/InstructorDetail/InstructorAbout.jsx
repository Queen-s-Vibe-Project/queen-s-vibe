import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import swal from 'sweetalert2'; 

function InstructorAbout({ profile }) {

  const updateAbout = () => {
    swal.fire({
      title: 'Update About',
      input: 'textarea',
      inputValue: profile.about,
      showCancelButton: true,
      cancelButtonColor: 'red',
      showConfirmButton: true,
      confirmButtonColor: 'Green',
      confirmButtonText: 'Save', 
    }).then((result) => {
      if(result.isConfirmed){
        console.log('what is my result', result.value )
        
      }
    })
  };

  return (
    <>
      <div>
        <Button onClick={updateAbout}>
          <EditIcon />
        </Button>
      </div>
      <p> {profile.about} </p>
    </>
  );
}

export default InstructorAbout;
