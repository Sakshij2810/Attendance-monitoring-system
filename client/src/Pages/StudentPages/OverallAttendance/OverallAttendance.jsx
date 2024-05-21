import "./OverallAttendance.css";
import React from "react";
import LeftSidebar from "../../../components/LeftSidebar/LeftSidebar";

const OverallAttendance = () => {
  return (
    <div className="overallAttendance-container">
      <div className="leftsidebar">
        <LeftSidebar />
      </div>
      <div>
        <h1>Your Overall Attendance appear here...</h1>
      </div>
    </div>
  );
};

export default OverallAttendance;
