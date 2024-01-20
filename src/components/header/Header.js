import React, { useState, useEffect } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        setShowContactInfo(false);
      } else {
        setScrolling(false);
        setShowContactInfo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location.pathname]);

  return (
    <>
      <div className={`top-header ${scrolling ? "scrolled" : ""}`}>
        <Container>
          {showContactInfo && (
            <div className="header">
              <div className="contact-info">
                <div>
                  <i className="fas fa-phone-alt"></i>&nbsp;
                  <span>+1 703-228-9195</span>
                </div>
                <div>
                  <i className="far fa-envelope"></i> &nbsp;
                  <span>info@Ammadar.com</span>
                </div>
              </div>
              <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          )}
        </Container>

        <div>
          <Navbar>
            <Container>
              <Navbar.Brand href="/">
                <img
                  src="../../assets/logo.png"
                  alt="Logo"
                  className="brand-logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  <Link
                    smooth={true}
                    duration={500}
                    to="/"
                    className={`custom-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    smooth={true}
                    duration={500}
                    to="/about"
                    className={`custom-link ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    smooth={true}
                    duration={500}
                    to="/services"
                    className={`custom-link ${
                      location.pathname === "/services" ? "active" : ""
                    }`}
                  >
                    Services
                  </Link>
                  <Link
                    smooth={true}
                    duration={500}
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
