import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SignUpComponent from "./SignUpComponent";
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="signUp">
      <Navbar />
      <SignUpComponent />
      <Footer />
    </div>
  );
};

export default SignUp;
