import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo_img from "../../assets/images/logo_header.png";

// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo_img} alt="" />
            </Link>
          </div>
          <nav className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/our-apps">Our Apps</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/faq">Faq</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/free-setup" className="free_setup_btn">
                  FREE SETUP
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
