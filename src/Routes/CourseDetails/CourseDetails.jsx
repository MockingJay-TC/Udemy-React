import React from "react";
import BannerPop from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import CourseDetailsLogic from "./CourseDetailsLogic";
import Footer from "../../Components/Footer/Footer";
import './CourseDetails.css'

const CourseDetails = () => {
  return (
    <div className="my__details">
      <BannerPop />
      <div className="my__details d-flex flex-column justify-content-between">
        <Navbar />
        <CourseDetailsLogic />
        <Footer />
      </div>
    </div>
  );
};

export default CourseDetails;
