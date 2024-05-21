import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Student from "./Pages/Student/Student";
import Subjects from "./Pages/StudentPages/Subjects/Subjects";
import MonthlyAttendance from "./Pages/StudentPages/MonthlyAttendance/MonthlyAttendance";
import OverallAttendance from "./Pages/StudentPages/OverallAttendance/OverallAttendance";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/Login" Component={Login} />
      <Route exact path="/SignUp" Component={SignUp} />
      <Route exact path="/Student" Component={Student} />
      <Route exact path="/Subjects" Component={Subjects} />
      <Route exact path="/MonthlyAttendance" Component={MonthlyAttendance} />
      <Route exact path="/OverallAttendance" Component={OverallAttendance} />
    </Routes>
  );
};

export default AllRoutes;
