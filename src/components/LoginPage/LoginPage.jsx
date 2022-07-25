import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import "../LoginForm/LoginForm.css";

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="register-btn"
          onClick={() => {
            history.push("/registration");
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
