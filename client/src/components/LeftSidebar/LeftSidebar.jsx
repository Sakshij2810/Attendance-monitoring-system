import "./LeftSidebar.css";
import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="leftsidebar-container">
      <div className="link-div">
        <Link className="left-links" to="/Profile">
          S
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
