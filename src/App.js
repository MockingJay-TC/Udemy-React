import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home/Home";
import Login from "./Routes/Login/Login";
import SignUp from "./Routes/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
