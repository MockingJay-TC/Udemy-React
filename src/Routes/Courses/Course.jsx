import React from "react";
// import { Link } from "react-router-dom";
import "./Course.css";

const Course = () => {
  return (
    <div className="course col-md-4 col-sm-6 col-lg-3 col-xl-2 mt-3">
      {/* <Link> */}
      <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">
        <div className="imgs">
          <img src="assets/images/1.jpg" alt="" />
          <h4 className="title">The Complete 2021 Web Development Bootcamp</h4>
          <p className="name">Dr. Angela Yu</p>
          <div className="reviews">
            <div className="fas fa-star"></div>
            <div className="fas fa-star"></div>
            <div className="fas fa-star"></div>
            <div className="fas fa-star"></div>
            <div className="fas fa-star-half"></div>
          </div>
          <p className="pri">GH¢742.30</p>
          <button className="seller"> Bestseller </button>
        </div>
      </a>
      {/* </Link> */}
    </div>
  );
};

export default Course;
