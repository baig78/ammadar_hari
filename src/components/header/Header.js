import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import ImageCarousel from "../imageCarousel/ImageCarousel";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="top-header">
        <div class="header">
          <div class="contact-info">
            <div>
              {/* <img src="phone-icon.png" alt="Phone"/> */}
              <i class="fas fa-phone-alt"></i>&nbsp;
              <span>+1 703-228-9195</span>
            </div>
            <div>
              {/* <img src="email-icon.png" alt="Email"/> */}
              <i class="far fa-envelope"></i> &nbsp;
              <span>info@Ammadar.com</span>
            </div>
          </div>
          <div class="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <div>
          <Navbar expand="lg" sticky="top" className=" p-3 ">
            <Container>
              <Navbar.Brand href="/">
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
          {/* <ImageCarousel /> */}
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
        {/* href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" */}
      </div>
    </>
  );
};
export default Header;
