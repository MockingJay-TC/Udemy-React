import React from "react";
import BannerPop from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import CourseDetailsLogic from "./CourseDetailsLogic";
import Footer from "../../Components/Footer/Footer";

const CourseDetails = () => {
  return (
    <div>
      <BannerPop />
      <div className="d-flex flex-column justify-content-between">
        <Navbar />
        <CourseDetailsLogic />
        <Footer />
      </div>
    </div>
  );
};

export default CourseDetails;
