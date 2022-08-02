import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../RegisterPage/RegisterPage.css";
import SearchBar from "../SearchBar/SearchBar";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import axios from 'axios'
import { Autocomplete } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import "../LoginPage/LoginPage.css";

function RegisterForm() {
  const [userType, setUserType] = useState("instructor");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const limit = 6;
  const tags = useSelector((store) => store.search.tags);
  const [searchTags, setSearchTags] = useState([]);
  const [limitReached, setLimitReached] = useState(false);
  const onSelect = useCallback(
    (event, value) => {
      setSearchTags(value);
      setLimitReached(value.length >= limit);
    },
    [limit]
  );

  const checkDisable = useCallback(
    (option) => limitReached && !searchTags.includes(option),
    [limitReached, searchTags]
  );

  useEffect(() => {
    dispatch({
      type: "FETCH_TAGS",
    });
  }, []);

  const handleChange = (evt) => {
    setProfilePhoto(URL.createObjectURL(evt.target.files[0]));
    setFile(evt.target.files[0]);
  };

  const handleChangeUserType = (evt) => {
    setUserType(evt.target.value);
  };
  const Input = styled("input")({
    display: "none",
  });

  const registerUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    const result = await axios.post("/upload", formData);
    console.log(result.data.Location);

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
        name: name,
        avatar: result.data.Location,
        pronouns: pronouns,
        tags: searchTags,
        adminLevel: userType,
      },
    });
  }; // end registerUser

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form className="registration-container" onSubmit={registerUser}>
          <h2>Sign Up</h2>
          {errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {errors.registrationMessage}
            </h3>
          )}

          <div>
            <ToggleButtonGroup
              required
              color="primary"
              value={userType}
              exclusive
              onChange={handleChangeUserType}
            >
              <ToggleButton value="gym-goer">Gym-Goer</ToggleButton>
              <ToggleButton value="instructor">Instructor</ToggleButton>
            </ToggleButtonGroup>
          </div>

          {/* Email input */}
          <div>
            <label htmlFor="username">
              <div className="input-label">Username</div>

              <TextField
                value={username}
                required
                id="username"
                variant="outlined"
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
          </div>

          {/* Password input */}
          <div>
            <label htmlFor="password">
              <div className="input-label">Password</div>

              <TextField
                value={password}
                type="password"
                required
                id="password"
                variant="outlined"
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>

          {/* Name input */}
          <div>
            <label htmlFor="name">
              <div className="input-label">Name</div>

              <TextField
                value={name}
                required
                id="name"
                variant="outlined"
                onChange={(event) => setName(event.target.value)}
              />
            </label>
          </div>

          {/* Pronouns input */}
          <div>
            <label htmlFor="pronouns">
              <div className="input-label">Pronouns</div>

              <TextField
                value={pronouns}
                required
                id="pronouns"
                variant="outlined"
                onChange={(event) => setPronouns(event.target.value)}
              />
            </label>
          </div>

          {/* Tags */}
          <div className="tags-input">
            <Autocomplete
              multiple
              options={tags}
              sx={{
                width: "20rem",
              }}
              getOptionDisabled={checkDisable}
              getOptionLabel={(option) => option.tagName}
              onChange={onSelect}
              renderInput={(params) => (
                <TextField
                  id="add-tags"
                  {...params}
                  variant="outlined"
                  placeholder={limitReached ? "Tag Limit Reached" : "Add Tags"}
                  helperText={limitReached && "Tag Limit Reached"}
                />
              )}
            />
          </div>

          {/* Photo upload */}
          <div className="input-label">Upload a photo</div>
          <Avatar
            className="photo-avatar"
            alt="Profile Photo"
            src={profilePhoto}
            sx={{ width: 150, height: 150 }}
          />
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={handleChange}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>

          <div>
            <input
              className="register-btn"
              type="submit"
              name="submit"
              value="Register"
              // onClick={() => setLoading(true)}
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default RegisterForm;
