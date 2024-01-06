import React from "react";
import "./Home.css";
import ImageCarousel from "../imageCarousel/ImageCarousel";
import { Container } from "react-bootstrap";
import Cards from "./cards/Cards";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <ImageCarousel />
      <div style={{ background: "#ededed" }}>
        <Container>
          <div class="section">
            <div class="section-heading">About Us</div>
            <p className="text-justify">
              Ammadar is located in Lexington, South Carolina USA. Ammadar is a
              fast growing, goal-oriented Information Technology (IT) Services
              Company that helps companies realize the potential of e-Business
              through the use of Internet Technology and Client Server business
              systems.
            </p>
            <p className="text-justify">
              As a global IT solutions provider, Ammadar helps clients improve
              their business efficiencies by building, supporting and optimizing
              innovative Internet-based solutions / enterprise applications. In
              addition to that, Ammadar provides professional consultancy
              services for clients' short-term/ long-term project needs on
              various IT platforms. As a client centric business, our business
              model focuses on having long-term strategic relationships with our
              clients.
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <Cards />
      </Container>

      <section class="contact-section1">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto">
              <h1 class="contact-heading">
                Contact us today to get a free consultation!
              </h1>
              <p class="contact-paragraph">
                U People Technologies has the services and solutions to help you
                achieve your business objectives. Contact us for a quick phone
                call to discuss your requirements.
              </p>
              <button class="red-btn">Free Consultation</button>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
      </section>
      <div class="section">
        <Container>
          <Testimonial />
        </Container>
      </div>
    </>
  );
};

export default Home;
