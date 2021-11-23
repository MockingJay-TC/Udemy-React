import React from "react";
import Company from "../../Components/Companies/Company";
import { CourseContent } from "../../Components/CourseContent/CourseContent";
import Jambotron from "../../Components/Jambotron/Jambotron";
import Learn from "../../Components/Learn/Learn";

const CourseDetailsLogic = () => {
  return (
    <div className="my__course__details">
      <Jambotron />
      <Learn />
      <Company />
      <CourseContent />
    </div>
  );
};

export default CourseDetailsLogic;
