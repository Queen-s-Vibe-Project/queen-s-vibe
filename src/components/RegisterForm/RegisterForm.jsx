import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../RegisterPage/RegisterPage.css";
import SearchBar from "../SearchBar/SearchBar";
import TextField from "@mui/material/TextField";

function RegisterForm() {
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const errors = useSelector((store) => store.errors);
  const listOfTags = useSelector((store) => store.search.tags);
  const [tags, setTags] = useState("");
  const dispatch = useDispatch();

  if (listOfTags) {
    console.log(listOfTags);
  }
  useEffect(() => {
    dispatch({
      type: "FETCH_TAGS",
    });
  }, []);

  const registerUser = (event) => {
    event.preventDefault();

    const formData = new FormData()
    

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
        name: name,
        pronouns: pronouns,
        tags: tags,
        adminLevel: userType,
      },
    });
  }; // end registerUser

  return (
    <form className="registration-container" onSubmit={registerUser}>
      <h2>Sign Up</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div>
        <label htmlFor="type">
          <div className="user-type">User Type</div>
        </label>
        <select
          onChange={(evt) => {
            setUserType(evt.target.value);
          }}
          className="user-type-box"
          id="type"
          name="type"
        >
          <option value="">--Gym Goer or Instructor--</option>
          <option value="gym-goer">Gym Goer</option>
          <option value="instructor">Instructor</option>
        </select>
      </div>

      {/* Email input */}
      <div>
        <label htmlFor="username">
          <div className="input-label">Username</div>

          <TextField
            value={username}
            required
            id="outlined-basic"
            variant="outlined"
            onChange={(event) => setUsername(event.target.value)}
          />
          {/* <input
            className="registration-input"
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          /> */}
        </label>
      </div>

      {/* Password input */}
      <div>
        <label htmlFor="password">
          <div className="input-label">Password</div>

          <TextField
            value={password}
            required
            id="outlined-basic"
            variant="outlined"
            onChange={(event) => setPassword(event.target.value)}
          />

          {/* <input
            className="registration-input"
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          /> */}
        </label>
      </div>

      {/* Name input */}
      <div>
        <label htmlFor="name">
          <div className="input-label">Name</div>

          <TextField
            value={name}
            required
            id="outlined-basic"
            variant="outlined"
            onChange={(event) => setName(event.target.value)}
          />
          {/* <input
            className="registration-input"
            type="name"
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          /> */}
        </label>
      </div>

      {/* Pronouns input */}
      <div>
        <label htmlFor="pronouns">
          <div className="input-label">Pronouns</div>

          <TextField
            value={pronouns}
            required
            id="outlined-basic"
            variant="outlined"
            onChange={(event) => setPronouns(event.target.value)}
          />
          {/* <input
            className="registration-input"
            type="pronouns"
            name="pronouns"
            value={pronouns}
            required
            onChange={(event) => setPronouns(event.target.value)}
          /> */}
        </label>
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags">
          <div className="user-tag">Select tags you are insterested in:</div>
        </label>
        <select
          onChange={(evt) => setTags(evt.target.value)}
          className="user-tag-box"
          id="tag"
          name="tag"
        >
          {listOfTags &&
            listOfTags.map((tag, i) => (
              <option key={i} value={tag.id}>
                {tag.tagName}
              </option>
            ))}
        </select>
      </div>

      <div>
        <input
          className="register-btn"
          type="submit"
          name="submit"
          value="Register"
        />
      </div>
    </form>
  );
}

export default RegisterForm;
