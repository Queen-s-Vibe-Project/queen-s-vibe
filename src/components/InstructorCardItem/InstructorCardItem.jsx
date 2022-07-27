import React from "react";
import "./InstructorCardItem.css";
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
        <Stack direction="row" spacing={1}>
          <Avatar
            alt={item.name}
            src={item.avatar}
            sx={{ width: 75, height: 75 }}
          />
        </Stack>
        {/* Right side */}
        <div>
          <Card className="right-card">
            <CardContent className="rt-card">
              <Typography variant="p" component="div">
                {item.name}
              </Typography>

              <Stack className="chip-container" direction="row" spacing={0.5}>
                <Chip
                  className="chip-pill"
                  label="Diverse"
                  variant="outlined"
                />
                <Chip className="chip-pill" label="LGBQT" variant="outlined" />
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
