import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      {/* <section class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4 contact-subsection">
              <i class="fas fa-map-marker-alt contact-icon"></i>
              <h3 class="contact-heading">Find Us</h3>
              <p>TX, USA</p>
            </div>

            <div class="col-md-4 contact-subsection">
              <i class="fas fa-phone-alt contact-icon"></i>
              <h3 class="contact-heading">Call Us</h3>
              <p>903-343-3433</p>
            </div>

            <div class="col-md-4 contact-subsection">
              <i class="far fa-envelope contact-icon"></i>
              <h3 class="contact-heading">Mail Us</h3>
              <p>info@dsffdsf.com</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="contact-section">
        <Container>
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i class="fas fa-map-marker-alt contact-icon"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>USA</span>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i class="fas fa-phone-alt contact-icon"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+1 (703) 228-9195</span>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i class="far fa-envelope contact-icon"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>hr@upeopletech.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4 contact-subsection">
              <img src="../../assets/logo.png" alt="Logo" class="brand-logo" />
              <p class="contact-text">
                Ammadar is located in Lexington, South Carolina USA. Ammadar is
                a fast growing, goal-oriented Information Technology (IT)
                Services Company that helps.
              </p>
            </div>

            <div class="col-md-4 contact-subsection">
              <h3 class="contact-heading">Call Us</h3>
              <p class="contact-text">903-343-3433</p>
            </div>

            <div class="col-md-4 contact-subsection">
              <h3 class="contact-heading">Subscribe</h3>
              <p class="contact-text">info@dsffdsf.com</p>
            </div>
          </div>
        </div>
      </section>

      <div class="copyright-section">
        <p>Copyright © 2023, All Right Reserved</p>
      </div>
    </>
  );
};

export default Footer;
