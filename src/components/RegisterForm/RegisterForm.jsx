import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pronouns, setPronouns] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        email: email,
        password: password,
        name: name,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Queen Vibes KC</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div>
        <label htmlFor="type">
          <div>User Type</div>
        </label>
        <select id="type" name="type">
          <option value="gym-goer">Gym Goer</option>
          <option value="instructor">Instructor</option>
        </select>
      </div>

      {/* Email input */}
      <div>
        <label htmlFor="username">
          <div>Email</div>
          <input
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
        <label htmlFor="password">
          <div>Password</div>
          <input
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
        <label htmlFor="name">
          <div>Name</div>

          <input
            type="name"
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>

      {/* Phone input */}
      <div>
        <label htmlFor="phone">
          <div>Phone</div>
          <input
            type="phone"
            name="phone"
            value={phone}
            required
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
      </div>

      {/* Pronouns input */}
      <div>
        <label htmlFor="pronouns">
          <div>Pronouns</div>
          <input
            type="pronouns"
            name="pronouns"
            value={pronouns}
            required
            onChange={(event) => setPronouns(event.target.value)}
          />
        </label>
      </div>

      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
