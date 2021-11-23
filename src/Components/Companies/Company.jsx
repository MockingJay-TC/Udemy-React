import React from "react";

const Company = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 p-4 my-4 flex border">
          <p className="fs-6 fw-bold m-0">
            Top companiesoffer this course to their employees
          </p>
          <p className=" fw-light m-0">
            This course was selected for our collection of top-rated courses
            trusted by businesses worldwide.{" "}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
          </p>
          <div className="row justify-content-between mt-3">
            <div className="d-flex col-lg-3">
              <p>APPLE</p>
            </div>
            <div className="d-flex col-lg-3">
              <p>BOX</p>
            </div>
            <div className="d-flex col-lg-3">
              <p>NETFLIX</p>
            </div>
            <div className="d-flex col-lg-3">
              <p>BMW</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
