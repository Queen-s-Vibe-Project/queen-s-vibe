import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import AddInstructorTag from "../AddInstructorTag/AddInstructorTag";


function InstructorTags({ tags }) {
  const params = useParams();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [deleteChip, setDeleteChip] = useState(false);

  if(tags){
    console.log('tags', tags);
  }

  function handleDelete(id) {
    dispatch({
      type: "DELETE_TAG",
      payload: id,
    });

    setDeleteChip(true);
  }

  useEffect(() => {
    if (deleteChip === true) {
      dispatch({ type: "FETCH_INSTRUCTOR_TAGS", payload: params.id });
      setDeleteChip(false);
    }
  }, [deleteChip]);
//  fix
  return (
    <>
      <div>
       { (user.id === Number(params.id) ) ? <AddInstructorTag /> : <div></div> }
      </div>
      <div >
      <Stack className="tags" direction='row'>
      {
        tags.map((tag)=>(
          (user.id === Number(params.id))? 
          <Chip 
            label={tag.tagName} 
            onDelete={() => {
              handleDelete(tag.id);
            }}
            />
            :
          <Chip label={tag.tagName}  />
        ))
      }
    </Stack>
    </div>
    </>
  );
}

export default InstructorTags;


/*

  <Stack direction="row" spacing={1}>
              {user.id === Number(params.id) ? (
                <Chip
                  onDelete={() => {
                    handleDelete(tag.id);
                  }}
                  label={tag.tagName}
                />
              ) : (
                <Chip label={tag.tagName} />
              )}
            </Stack>

*/