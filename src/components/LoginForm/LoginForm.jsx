import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./LoginForm.css";

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
    <>
      <div className="login-form-header">
        <h2 className="login-header">Welcome Back</h2>
        <h5 className="login-text">Stay active. Stay healthy. Sign up!</h5>
      </div>
      <form className="form-panel" onSubmit={login}>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}

        <div>
          <label className="login-label" htmlFor="username">
            Email
          </label>
        </div>
        <input
          className="login-input"
          type="text"
          name="username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <div>
          <label className="login-label" htmlFor="password">
            Password
          </label>
        </div>
        <input
          className="login-input"
          type="password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div>
          <input
            className="login-btn"
            type="submit"
            name="submit"
            value="Log In"
          />
        </div>
      </form>

      <h4 className="register-header">Not registered yet?</h4>
      <p className="register-text">
        Sign up to get access to hundreds of qualified instructors.
      </p>
    </>
  );
}

export default LoginForm;
