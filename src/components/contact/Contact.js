import React from "react";
import image3 from "../../assets/3.png";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          overflow: "hidden",
        }}
      >
        <img
          src={image3}
          alt="About Page"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#353a41cd",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="container">
        <h2 className="mt-5">Contact Us</h2>
        <div className="row">
          <div className="col-lg-9">
            <div className="sidebar-item contact-form">
              <div className="sidebar-heading">
                <h2>Send us a message</h2>
              </div>
              <div className="content">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          type="text"
                          id="email"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="subject"
                          type="text"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="6"
                          id="message"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button
                          type="submit"
                          id="form-submit"
                          className="custom-btn red-btn"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="sidebar-item contact-information">
              <div className="sidebar-heading">
                <h2>contact information</h2>
              </div>
              <div className="content">
                <ul>
                  <li>
                    <span>PHONE NUMBER</span>
                    {/* <h6>+1-703-228-9195</h6> */}
                    <h6>+1 (703) 228-9195 </h6>
                  </li>
                  <li>
                    <span>EMAIL ADDRESS</span>
                    <h6>info@ammadar.com </h6>
                  </li>
                  <li>
                    <span>STREET ADDRESS</span>
                    <h6>
                      USA <br />{" "}
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.9137521212565!2d-79.94861992524524!3d32.79454608309165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7b3089fb331f%3A0xe0720d6161da06b!2sSt.%20John%20Cemetery!5e0!3m2!1sen!2sin!4v1705745464404!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
