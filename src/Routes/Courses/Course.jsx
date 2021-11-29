import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = ({
  name,
  description,
  instructors,
  cover_image,
  categories,
  price,
}) => {
  return (
    <div className="course col-md-4 col-sm-6 col-lg-3 col-xl-2 mt-3">
      <Link to="/course">
        <div className="imgs">
          <img
            src="https://img-b.udemycdn.com/course/240x135/1565838_e54e_14.jpg?secure=rSFM5RknuIpIMwLDwn4tig%3D%3D%2C1638253164"
            alt=""
          />
          <h4 className="title">{name}</h4>
          <p className="name">{instructors[0]?.name}</p>
          <div className="reviews">
            <div className="fas fa-star"></div>
            <div className="fas fa-star"></div>
            <div className="fas fa-star"></div>
            <div className="fas fa-star"></div>
            <div className="fas fa-star-half"></div>
          </div>
          <p className="pri">GH¢{price}</p>
          <button className="seller"> Bestseller </button>
        </div>
      </Link>
    </div>
  );
};

export default Course;
