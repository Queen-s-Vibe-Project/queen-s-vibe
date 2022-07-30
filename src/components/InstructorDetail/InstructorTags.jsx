import { useSelector, useDispatch } from "react-redux";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';
import AddInstructorTag from "../AddInstructorTag/AddInstructorTag";

function InstructorTags( {tags} ) {

  const user = useSelector((store) => store.user);

  return (
    <>
     <div
     > 
      <AddInstructorTag/>
    </div>
      {tags.map((tag) => {
        return <div>
              <Stack direction="row" spacing={1}>
               <Chip label={tag.tagName} />
              </Stack>
              </div>       
      })}
    </>
  );
}

export default InstructorTags;
