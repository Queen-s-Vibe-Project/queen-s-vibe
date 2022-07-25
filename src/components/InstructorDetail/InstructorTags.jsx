import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function InstructorTags() {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip label="LGBTQ Friendly" />
        <Chip label="POC" />
        <Chip label="Cardio" />
      </Stack>
    </>
  );
}

export default InstructorTags;
