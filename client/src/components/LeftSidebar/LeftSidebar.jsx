import "./LeftSidebar.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { BsPersonFillCheck } from "react-icons/bs";

const LeftSidebar = () => {
  return (
    <div className="leftsidebar-container">
      <nav className="leftsidebar-nav">
        <div className="name-link">
          <Link className="left-links" to="/Profile"></Link>
        </div>

        <div className="sidenav-navlinks">
          <NavLink
            to="/Student"
            className="side-nav-links"
            activeClassName="active"
          >
            <MdHome />
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/Subjects"
            className="side-nav-links"
            activeClassName="active"
          >
            <FaBook />
            <p>Subjects</p>
          </NavLink>
          <NavLink
            to="/MonthlyAttendance"
            className="side-nav-links"
            activeClassName="active"
          >
            <MdCalendarMonth />
            <p>Monthly Attendance</p>
          </NavLink>
          <NavLink
            to="/OverallAttendance"
            className="side-nav-links"
            activeClassName="active"
          >
            <BsPersonFillCheck />
            <p>Overall Attendance</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
