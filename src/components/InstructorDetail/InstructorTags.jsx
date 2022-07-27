import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';

function InstructorTags() {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip label="LGBTQ Friendly" />
        <Chip label="POC" />
        <Chip label="Cardio" />
        <div> <AddIcon /> </div>
      </Stack>
    </>
  );
}

export default InstructorTags;
