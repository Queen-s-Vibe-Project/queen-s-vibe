import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';

function InstructorTags( {item} ) {
  return (
    <>
      {item.tags.map((tags) => {
        return <Stack direction="row" spacing={1}>
              <Chip label={tags} />
              
            </Stack>
      })}
       {/* <Stack direction="row" spacing={1}>
         <Chip label={item.tags} />
         <Chip label="POC" />
         <Chip label="Cardio" /> */}
        <div> <AddIcon /> </div>
      {/* </Stack> */}
    </>
  );
}

export default InstructorTags;
