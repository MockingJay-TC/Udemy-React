import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import InstructorLogic from "./InstructorLogic";

const Instructor = () => {
  return (
    <div className="login d-flex flex-column justify-content-between">
      <Navbar />
      <InstructorLogic />
      <Footer />
    </div>
  );
};

export default Instructor;
