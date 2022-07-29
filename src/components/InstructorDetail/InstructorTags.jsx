import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';

function InstructorTags( {tags} ) {
  return (
    <>
     <div> <AddIcon /> </div>
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
