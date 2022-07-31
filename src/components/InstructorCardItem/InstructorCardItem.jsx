import React from "react";
import { Link } from "react-router-dom";
import "./InstructorCardItem.css";
import { useSelector, useDispatch } from "react-redux";
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

function InstructorCardItem({ item }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // const goToInstructorDetail = () => {
  //   console.log(item.id);
  //   dispatch({
  //     type: "FETCH_INSTRUCTOR_DETAIL",
  //     payload: item.id,
  //   });
  //   history.push(`/instructor/${item.id}`);
  // };

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
          <button
            onClick={() => {
              history.push(`/instructor/${item.id}`);
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
              <Typography
                className="instructor-name"
                variant="p"
                component="div"
              >
                {item.name}
              </Typography>

              {/* Limit tags to 2 per instructor */}
              <Stack>
                <span className="chip-container">
                  {/* <Chip
                    className="chip-pill"
                    label={item.tags[0]}
                    variant="outlined"
                  />

                  <Chip
                    className="chip-pill"
                    label={item.tags[1]}
                    variant="outlined"
                  /> */}

                  {/* Map over instructor tags and limit tags to 2 */}
                  {item.tags.slice(0, 2).map((tag, i) => {
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
