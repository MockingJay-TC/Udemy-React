import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./Routes/CourseDetails/CourseDetails";
import Home from "./Routes/Home/Home";
import Login from "./Routes/Login/Login";
import SignUp from "./Routes/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/course" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
