import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';

function InstructorTags( {instructor} ) {
  return (
    <>
     <div> <AddIcon /> </div>
      {instructor.tags.map((tag) => {
        return <div>
              <Stack direction="row" spacing={1}>
               <Chip label={tag} />
              </Stack>
              </div>       
      })}
    </>
  );
}

export default InstructorTags;
