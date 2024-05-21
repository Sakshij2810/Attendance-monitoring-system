import "./SignUp.css";
import React from "react";
import CartoonLogo from "../../assets/cartoon-logo.jpeg";

const SignUp = () => {
  return (
    <div className="login-container">
      <div className="login-container-1">
        <p className="top-para">Please SignUp First</p>
        <form>
          <label htmlFor="name">
            <h3>Username:</h3>
            <input type="text" id="name" />
          </label>

          <label htmlFor="email">
            <h3>Email:</h3>
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            <h3>Password:</h3>
            <input type="password" id="password" />
          </label>

          <label className="role-select" htmlFor="role">
            <h3>Role:</h3>
            <select id="role" name="role">
              <option value="volvo">HOD</option>
              <option value="saab">Teacher</option>
              <option value="fiat">Student</option>
            </select>
          </label>
          <button className="login-btn" type="submit">
            Sign Up
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

export default SignUp;
