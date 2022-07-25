import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App/App.css";

function RegisterForm() {
  const [userTyper, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const errors = useSelector((store) => store.errors);
  const [tags, setTags] = useState("");
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
        name: name,
        pronouns: pronouns,
        tags: tags,

      },
    });
  }; // end registerUser

  return (
    <form className="registration-container" onSubmit={registerUser}>
      <h2>Queen Vibes KC</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div>
        <label htmlFor="type">
          <div className="user-type">User Type</div>
        </label>
        <select className="user-type-box" id="type" name="type">
          <option value="gym-goer">Gym Goer</option>
          <option value="instructor">Instructor</option>
        </select>
      </div>

      {/* Email input */}
      <div>
        <label className="input-label" htmlFor="username">
          <div>Email</div>
          <input
            className="registration-input"
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

      {/* Password input */}
      <div>
        <label className="input-label" htmlFor="password">
          <div>Password</div>
          <input
            className="registration-input"
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      {/* Name input */}
      <div>
        <label className="input-label" htmlFor="name">
          <div>Name</div>
          <input
            className="registration-input"
            type="name"
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>

      {/* Pronouns input */}
      <div>
        <label className="input-label" htmlFor="pronouns">
          <div>Pronouns</div>
          <input
            className="registration-input"
            type="pronouns"
            name="pronouns"
            value={pronouns}
            required
            onChange={(event) => setPronouns(event.target.value)}
          />
        </label>
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags">
          <div className="user-tag">Select Tags</div>
        </label>
        <select className="user-tag-box" id="tag" name="tag">
          <option value={tags}>LGBQT</option>
          <option value={tags}>SeniorFriendly</option>
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
