import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../LoginPage/LoginPage.css";
import TextField from "@mui/material/TextField";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <div className="login-container">
      <div className="login-form-header">
        <h2 className="login-header">Welcome to Groupie</h2>
        <h5 className="login-text">The group fitness fit for YOU.</h5>
      </div>
      <form className="form-panel" onSubmit={login}>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}

        <div>
          <label htmlFor="username">
            <div className="login-label">Username</div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <div className="login-label">Password</div>
            <TextField
              type="password"
              id="outlined-basic"
              variant="outlined"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>

        <div>
          <input
            className="login-btn"
            type="submit"
            name="submit"
            value="Log In"
          />
        </div>
      </form>

      <h4 className="not-registered">Not registered yet?</h4>
      <p className="register-text">
        Sign up to get access to hundreds of qualified instructors.
      </p>
    </div>
  );
}

export default LoginForm;
