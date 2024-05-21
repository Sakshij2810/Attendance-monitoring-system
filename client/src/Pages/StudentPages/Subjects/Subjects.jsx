import "./Subjects.css";
import React from "react";
import LeftSidebar from "../../../components/LeftSidebar/LeftSidebar";

const Subjects = () => {
  return (
    <div className="subject-container">
      <div className="leftsidebar">
        <LeftSidebar />
      </div>
      <div>
        <h1>All your Subjects will appear here...</h1>
      </div>
    </div>
  );
};

export default Subjects;
