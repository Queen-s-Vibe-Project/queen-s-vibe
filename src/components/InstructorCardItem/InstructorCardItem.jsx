import React from "react";
import "./InstructorCardItem.css";
import { useSelector } from "react-redux";
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

function InstructorCardItem({ item }) {
  return (
    <>
      <div className="featured-container">
        {/* Left side */}
        <div>
          <Stack direction="row" spacing={1}>
            <Avatar
              alt={item.name}
              src={item.avatar}
              sx={{ width: 75, height: 75 }}
            />
          </Stack>
          <button className="view-more-btn">View More</button>
        </div>

        {/* Right side */}
        <div>
          <Card className="right-card">
            <CardContent className="rt-card">
              <Typography
                className="instructor-name"
                variant="p"
                component="div"
              >
                {item.name}
              </Typography>

              {/* Map over instructor tags */}
              <Stack>
                <span className="chip-container">
                  {item.tags.map((tag, i) => {
                    return (
                      <li className="tag-list" key={i}>
                        <Chip
                          className="chip-pill"
                          label={tag}
                          variant="outlined"
                        />
                      </li>
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
      </div>
    </>
  );
}

export default InstructorCardItem;
