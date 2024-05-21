import "./Login.css";
import React from "react";
import CartoonLogo from "../../assets/cartoon-logo.jpeg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-container-1">
        <p className="para">Please Login First</p>
        <form>
          <label htmlFor="name">
            <h3>Username:</h3>
            <input type="text" id="name" />
          </label>

          <label htmlFor="password">
            <h3>Password:</h3>
            <input type="password" id="password" />
          </label>
          <p>forgot password?</p>
          <button className="login-btn" type="submit">
            Log In
          </button>
        </form>
      </div>

      <div className="login-container-2">
        <div className="data">
          <img width="40%" src={CartoonLogo} alt="cartoon-logo" />
          <h3>
            Attendance Monitoring <br /> System
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
