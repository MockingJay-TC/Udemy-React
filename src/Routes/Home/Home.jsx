import React from "react";
import BannerPop from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Courses from "../../Routes/Courses/Courses";
import "./Home.css";

const Home = () => {
  return (
    <div className="home ">
      <BannerPop />
      <div className=" home d-flex flex-column justify-content-between">
        <Navbar />
        <Courses />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
