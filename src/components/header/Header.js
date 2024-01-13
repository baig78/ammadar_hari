import React, { useState, useEffect } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import ImageCarousel from "../imageCarousel/ImageCarousel";

const Header = () => {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`top-header ${scrolling ? "scrolled" : ""}`}>
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
        </div>
      </div>
    </>
  );
};
export default Header;
