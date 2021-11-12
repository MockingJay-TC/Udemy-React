import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__main">
      <div className="footer">
        <div className="first_foot">
          <div className="toes">
            <h4 className="ude">
              <a
                href="https://business.udemy.com/?ref=footer&mx_pg=home-page&locale=en_US"
                style={{ color: "white", textDecoration: "none" }}
              >
                Udemy for Business
              </a>
            </h4>
            <h5>
              <a href="#"> Careers </a>
            </h5>
            <h5>
              <a href="#"> Terms</a>
            </h5>
            <h5>
              <a href="#"> Teach on Udemy</a>
            </h5>
            <h5>
              <a href="#">Blog</a>
            </h5>
            <h5>
              <a href="#">Privacy policy</a>
            </h5>
            <h5>
              <a href="#"> Get the app </a>
            </h5>
            <h5>
              <a href="#"> Help and Support </a>
            </h5>
            <h5>
              <a href="#">Sitemap</a>
            </h5>
            <h5>
              <a href="#">About us</a>
            </h5>
            <h5>
              <a href="#"> Affiliate</a>
            </h5>
            <h5>
              <a href="#"> Featured courses</a>
            </h5>
            <h5>
              <a href="https://about.udemy.com/company/?locale=en-us#offices">
                Contact us
              </a>
            </h5>
          </div>
        </div>
      </div>
      <div className="sole">
        <div className="ground">
          <label className="udemy">
            <img src="assets/images/logo.svg" style={{ height: "30px" }} />
          </label>
        </div>
        <div className="sand" style={{ color: "white" }}>
          <p>© 2021 Udemy, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
