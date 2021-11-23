import React from "react";
import AccordionPage from "../../Helpers/AccordionPage";

export const CourseContent = () => {
  return (
    <div className="container">
      <div className="row">
        <p className="fs-3 p-0">Course Content</p>
        <div className="d-flex col-8 justify-content-between p-0">
          <p className="p-0">
            35 sections <span>&#8226;</span> 441 lectures <span>&#8226;</span>{" "}
            55h 20m total length
          </p>
          <p className="p-0">
            {" "}
            <a href="https://github.com/">Expand all sections</a>
          </p>
        </div>
        <div className="container m-0 p-0">
          <AccordionPage />
        </div>
      </div>
    </div>
  );
};
