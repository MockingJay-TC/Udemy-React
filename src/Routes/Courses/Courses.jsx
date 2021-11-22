import React from "react";
import Course from "./Course";
import "./Course.css";

const Courses = () => {
  return (
    <div className="container-fluid">
      <div className="row mx-5 my-3 my__course">
        <Course />
        <Course />
        <Course />
        <Course />

      </div>
    </div>
  );
};

export default Courses;
