import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="top-header">
        <div class="header">
          <div class="contact-info">
            <div>
              {/* <img src="phone-icon.png" alt="Phone"/> */}
              <i class="fa fa-phone"></i> &nbsp;
              <span>+1 123-456-7890</span>
            </div>
            <div>
              {/* <img src="email-icon.png" alt="Email"/> */}
              <i class="fa fa-envelope-o"></i> &nbsp;
              <span>example@example.com</span>
            </div>
          </div>
          <div class="social-icons">
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-facebook-f"></i>
            {/* 
            <img src="facebook-icon.png" alt="Facebook"/>
            <img src="twitter-icon.png" alt="Twitter"/> */}
          </div>
        </div>
        <div>
          <Navbar expand="lg" sticky="top" className="shadow p-3 ">
            <Container>
              <Navbar.Brand href="/">
                {/* <img src={logo} className="site-logo" alt="consaint" /> */}
                <img
                  src="../../assets/logo.png"
                  alt="Logo"
                  class="brand-logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  {/* <img src="../../assets/logo.png" alt="Logo" class="brand-logo" /> */}
                  {/* <div class="link-container"> */}
                  <Link
                    to="/"
                    className={`custom-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`custom-link ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    to="/services"
                    className={`custom-link ${
                      location.pathname === "/services" ? "active" : ""
                    }`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className={`custom-link ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* </div> */}
        </div>

        {/* <nav className="navbar">
      <h3 className="logo">Logo</h3>

      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/service">
          <li>Service</li>
        </Link>
        <Link to="/industries">
          <li>Industries</li>
        </Link>
        <Link to="/carrier">
          <li>Carrier</li>
        </Link>
        <Link to="/news">
          <li>News</li>
        </Link>
        <Link to="/company">
          <li>Company</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </div>
    </>
  );
};

export default Header;
