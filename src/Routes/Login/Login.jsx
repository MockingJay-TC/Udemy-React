import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Login.css";
import LoginComponent from "./LoginComponent";

const Login = () => {
  return (
    <div className="login">
      <Navbar />
      <LoginComponent />
      <Footer />
    </div>
  );
};

export default Login;
