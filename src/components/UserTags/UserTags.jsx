import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../InstructorPage/InstructorPage.css";

//MUI
import AddIcon from "@mui/icons-material/Add";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
//Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//Radio
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function UserTags() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [deleteChip, setDeleteChip] = useState(false);
  const [open, setOpen] = useState(false);

  const [value, setValue] = React.useState("");

  function handleDelete(id) {
    dispatch({
      type: "DELETE_TAG",
      payload: id,
    });

    setDeleteChip(true);
  }

  useEffect(() => {
    if (deleteChip === true) {
      dispatch({ type: "FETCH_INSTRUCTOR_TAGS", payload: user.id });
      setDeleteChip(false);
    }
  }, [deleteChip]);

  useEffect(() => {
    if (value === "") {
      dispatch({ type: "FETCH_INSTRUCTOR_TAGS", payload: user.id });
      dispatch({
        type: "FETCH_TAGS",
      });
    }
  }, [value]);

  const tags = useSelector((store) => store.instructorTags);
  const dbTags = useSelector((store) => store.search.tags);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    console.log("before", value);
    setValue(event.target.value);
  };

  return (
    <div className="tags-container">
      <h4 className="instructor-view-tagheader">Tags</h4>
      <hr />
      <Button
        id="add-tags-btn"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add Tags
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Add a Tag"}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>Select Tag Below:</DialogContentText>
          <FormControl>
            <FormLabel>Tags</FormLabel>
            <RadioGroup onChange={handleChange}>
              {dbTags.map((tag) => (
                <FormControlLabel
                  value={tag.id}
                  control={<Radio />}
                  label={tag.tagName}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            onClick={() => {
              dispatch({
                type: "ADD_TAG",
                payload: value,
              });
              setValue("");
              handleClose();
            }}
          >
            Add Tag
          </Button>
        </DialogActions>
      </Dialog>
      <Stack>
        {tags.map((tag) => (
          <Chip
            size="medium"
            label={tag.tagName}
            onDelete={() => {
              handleDelete(tag.id);
            }}
          />
        ))}
      </Stack>
    </div>
  );
}