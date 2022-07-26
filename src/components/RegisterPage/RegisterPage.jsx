import React from "react";
import { useHistory } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import "./RegisterPage.css";

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <h3>Already registered? </h3>
        <button
          type="button"
          className="login-btn"
          onClick={() => {
            history.push("/login");
          }}
        >
          Log In
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
