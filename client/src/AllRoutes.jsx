import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Student from "./Pages/Student/Student";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/Login" Component={Login} />
      <Route exact path="/SignUp" Component={SignUp} />
      <Route exact path="/Student" Component={Student} />
    </Routes>
  );
};

export default AllRoutes;
