import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import swal from 'sweetalert2'; 
import { useSelector, useDispatch } from "react-redux";
function InstructorAbout({ profile }) {
const dispatch = useDispatch();

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
          swal.fire(
            'Success!',
            'Information saved',
            'success'
          )
        dispatch({
          type:'UPDATE_ABOUT',
          payload: {
            id: profile.id,
            result: result.value,
          }
        })
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
