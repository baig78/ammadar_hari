import { Link } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <section className="contact-section">
        <Container>
          <div className="footer-container">
            <div className="footer-section">
              <div className="icon-container">
                <i class="fas fa-map-marker-alt contact-icon"></i>
              </div>
              <div className="text-start">
                <h4>Find us</h4>
                <span className="text-white-50">USA</span>
              </div>
            </div>

            <div className="footer-section">
              <div className="icon-container">
                <i class="fas fa-phone-alt contact-icon"></i>
              </div>
              <div className="text-start">
                <h4>Call us</h4>
                <span className="text-white-50">+ 123 456 789 0</span>
              </div>
            </div>

            <div className="footer-section">
              <div className="icon-container">
                <i class="far fa-envelope contact-icon"></i>
              </div>
              <div className="text-start">
                <h4>Email</h4>
                <span className="text-white-50">hr@upeopletech.com</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="contact-section">
        <Container>
          <div className="footer-container">
            <div className="footer-section-botton1">
              <img src="../../assets/logo.png" alt="Logo" class="brand-logo" />
              <p>
                Ammadar is located in Lexington, South Carolina USA. Ammadar is
                a fast growing, goal-oriented Information Technology (IT)
                Services Company that helps. &nbsp;
                <Link
                  style={{
                    color: "var(--gray-text)",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Read More
                </Link>
              </p>
            </div>
            <div
              style={{ textAlign: "left" }}
              className="footer-section-botton2"
            >
              <h4 style={{ marginBottom: "15px" }}>Useful Links</h4>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-section-botton3">
              <h4 style={{ marginBottom: "15px" }}>Subscribe</h4>
              <p>
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
              {/* <div class="input-container">
                <input type="text" placeholder="Username" />
                <i class="fas fa-user"></i>
              </div> */}
              <div class="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button>
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div class="copyright-section">
        <p>Copyright © 2023, All Right Reserved</p>
      </div>
    </>
  );
};

export default Footer;
