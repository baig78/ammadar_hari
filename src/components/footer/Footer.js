import React from "react";

const Footer = () => {
  return (
    <>
      <section class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4 contact-subsection">
              <i class="fa fa-map-marker contact-icon"></i>
              <h3 class="contact-heading">Find Us</h3>
              <p class="contact-text">TX, USA</p>
            </div>

            <div class="col-md-4 contact-subsection">
              <i class="fa fa-phone contact-icon"></i>
              <h3 class="contact-heading">Call Us</h3>
              <p class="contact-text">903-343-3433</p>
            </div>

            <div class="col-md-4 contact-subsection">
              <i class="fa fa-envelope contact-icon"></i>
              <h3 class="contact-heading">Mail Us</h3>
              <p class="contact-text">info@dsffdsf.com</p>
            </div>
          </div>
        </div>
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
