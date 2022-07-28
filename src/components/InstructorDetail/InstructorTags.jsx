import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';

function InstructorTags( {item} ) {
  return (
    <>
     <div> <AddIcon /> </div>
      {item.tags.map((tags) => {
        return <div>
              <Stack direction="row" spacing={1}>
               <Chip label={tags} />
              </Stack>
              </div>       
      })}
    </>
  );
}

export default InstructorTags;
