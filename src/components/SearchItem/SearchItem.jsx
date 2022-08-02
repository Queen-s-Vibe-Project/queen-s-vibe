import React from "react";
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

function SearchItem({ result }) {
  const history = useHistory();

  return (
    <>
      <div className="featured-container">
        {/* Left side */}
        <div>
          <Stack direction="row" spacing={1}>
            <Avatar
              alt={result.name}
              src={result.avatar}
              sx={{ width: 75, height: 75 }}
            />
          </Stack>
          <button
            onClick={() => {
              history.push(`/instructor/${result.id}`);
            }}
            className="view-more-btn"
          >
            View More
          </button>
        </div>

        {/* Right side card */}
        <Card className="right-card">
          <CardContent className="rt-card">
            <Typography className="instructor-name" variant="p" component="div">
              {result.name}
            </Typography>

            <Stack>
              <span className="chip-container">
                {/* Map over search results instructors */}
                {result.classes &&
                  result.classes.map((classer, i) => {
                    return (
                      <div key={i}>
                        <li>{classer.dateOfWeek}</li>
                        <li>{classer.startTime}</li>
                      </div>
                    );
                  })}
              </span>
            </Stack>
            <div className="icon-container">
              <FacebookIcon className="featured-icon" />
              <InstagramIcon className="featured-icon" />
              <TwitterIcon className="featured-icon" />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SearchItem;
