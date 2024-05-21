import "./TopNavbar.css";
import React from "react";
import { IoMenu } from "react-icons/io5";

const TopNavbar = () => {
  return (
    <div className="topnavbar-container">
      <div className="topnavbar-content">
        <div className="icon">
          <IoMenu />
        </div>

        <h3>Attendance Monitoring System | Student Dashboard</h3>
      </div>
    </div>
  );
};

export default TopNavbar;
