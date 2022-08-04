import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Avatar from "@mui/material/Avatar";

function FavoriteInstructorCard({ instructor }) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <div className="featured-container">
        {/* Left side */}
        <div>
          <Stack direction="row" spacing={1}>
            <Avatar
              alt={instructor.name}
              src={instructor.avatar}
              sx={{ width: 75, height: 75 }}
            />
          </Stack>
          <button
            onClick={() => {
              history.push("/instructor/" + instructor.instructorId);
            }}
            className="view-more-btn"
          >
            View More
          </button>
        </div>

        {/* Right side */}
        <div>
          <Card className="right-card">
            <CardContent className="rt-card">
              <Typography variant="p" component="div">
                {instructor.name}
              </Typography>

              <Stack className="chip-container" direction="row" spacing={0.5}>
                {instructor &&
                  instructor.tags.map((tag, i) => (
                    <Chip
                      key={i}
                      className="chip-pill"
                      label={`${tag}`}
                      variant="outlined"
                    />
                  ))}
              </Stack>
              <div className="icon-container">
                <FacebookIcon className="featured-icon" />
                <InstagramIcon className="featured-icon" />
                <TwitterIcon className="featured-icon" />
              </div>
            </CardContent>
          </Card>

          <button
            onClick={() => {
              dispatch({
                type: "DELETE_FAVORITE_INSTRUCTOR",
                payload: { id: instructor.id },
              });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default FavoriteInstructorCard;
