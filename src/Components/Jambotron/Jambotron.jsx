import React from "react";
import { Link } from "react-router-dom";

const Jambotron = () => {
  return (
    <div className="p-3 mb-2 bg-dark text-white ">
      <div className="container">
        <   nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item " aria-current="page">
              Home
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Course
            </li>
          </ol>
        </nav>
        <div className="row content">
          <div className="col-lg-8 col-sm-12">
            <h2 className="my-2">The Complete 2022 Web Development Bootcamp</h2>
            <h6 className="fw-light">
              Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
              Javascript, Node, React, MongoDB, build real projects
            </h6>
            <div className="d-flex flex-row">
              <button className="seller me-2"> Bestseller </button>
              <p className="my-auto me-1 fw-light">4.5</p>
              <div className="reviews my-auto ">
                <div className="fas fa-star"></div>
                <div className="fas fa-star"></div>
                <div className="fas fa-star"></div>
                <div className="fas fa-star"></div>
                <div className="fas fa-star-half"></div>
              </div>
            </div>
            <div className="fw-light my-1">
              <p className="m-0">
                Created by <Link to="/course/instructor">Angela Wu</Link>
              </p>
              <p className="m-0">English</p>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Jambotron;
