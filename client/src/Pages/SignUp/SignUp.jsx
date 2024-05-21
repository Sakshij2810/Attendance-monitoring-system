import "./SignUp.css";
import React, { useState } from "react";
import CartoonLogo from "../../assets/cartoon-logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../actions/authAction";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log({ name, email, password, role });

    if (!email && !password && !name && !role) {
      alert("Please Enter Name, Email, Password and Role to continue!");
    } else {
      dispatch(signup({ name, email, password, role }, navigate));
    }
  };

  return (
    <div className="login-container">
      <div className="login-container-1">
        <p className="top-para">Please SignUp First</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <h3>Username:</h3>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="email">
            <h3>Email:</h3>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <h3>Password:</h3>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label className="role-select" htmlFor="role">
            <h3>Role:</h3>
            <select
              id="role"
              name="role"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="HOD">HOD</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
          </label>
          <button className="login-btn" type="submit">
            Sign Up
          </button>
          <p style={{ marginLeft: "-160px" }}>
            Already have an account?{" "}
            <Link
              to="/Login"
              style={{
                color: "rgb(0, 140, 255)",
                textDecoration: "none",
              }}
            >
              Log in
            </Link>
          </p>
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
