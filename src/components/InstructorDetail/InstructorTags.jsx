import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';
import AddInstructorTag from "../AddInstructorTag/AddInstructorTag";

function InstructorTags( {tags} ) {
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
