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
import "./SearchItem.css";

function SearchItem({ result }) {
  const history = useHistory();

  return (
    <>
      {/* <hr></hr> */}
      <br />
      <div className="search-featured-container">
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
        <Card className="search-right-card">
          <CardContent className="search-rt-card">
            <Typography className="instructor-name" variant="p" component="div">
              {result.name}
            </Typography>

            <Stack>
              <span className="chip-container">
                {/* Map over search results instructors */}
                {result.tags &&
                  result.tags.slice(0, 2).map((tag, i) => {
                    return (
                      <div key={i}>
                        <Chip
                          className="chip-pill"
                          label={tag}
                          variant="outlined"
                        />
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
