import "./MonthlyAttendance.css";
import React from "react";
import LeftSidebar from "../../../components/LeftSidebar/LeftSidebar";

const MonthlyAttendance = () => {
  return (
    <div className="monthlyAttendance-container">
      <div className="leftsidebar">
        <LeftSidebar />
      </div>
      <div>
        <h1>Your monthly Attendance will appear here...</h1>
      </div>
    </div>
  );
};

export default MonthlyAttendance;
