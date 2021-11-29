import React, { useEffect, useState } from "react";
import Course from "./Course";
import "./Course.css";
import Axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);
  useEffect(() => {
    const url = "http://localhost:1337/courses";
    Axios.get(url).then((res) => {
      setCourses(res.data);
    });
  }, []);

  return (
    <div className="row mx-5 my-3 my__course">
      {courses.map((course) => {
        return (
          <Course
            key={course?.id}
            name={course?.name}
            description={course?.description}
            instructors={course?.instructors}
            cover_image={course?.cover_image}
            categories={course?.categories}
            price={course?.price}
          />
        );
      })}
    </div>
  );
};

export default Courses;
