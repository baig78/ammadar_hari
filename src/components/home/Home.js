import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../assets/image1.jpg"
              class="d-block w-100"
              alt="First slide"
            />
            <div class="carousel-caption">
              <h1>Welcome to Ammadar</h1>
              <h2>Will Add Value To Your Business</h2>
              <button class="custom-btn red-btn">Red Button</button>
              <button class="custom-btn gray-transparent-btn">
                Gray Button
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/image2.jpg"
              class="d-block w-100"
              alt="Second slide"
            />
            <div class="carousel-caption">
              <h1>Heading 2</h1>
              <h2>Subheading 2</h2>
              <button class="custom-btn red-btn">Red Button</button>
              <button class="custom-btn gray-transparent-btn">
                Gray Button
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="image3.jpg" class="d-block w-100" alt="Third slide" />
            <div class="carousel-caption">
              <h1>Heading 3</h1>
              <h2>Subheading 3</h2>
              <button class="custom-btn red-btn">Red Button</button>
              <button class="custom-btn gray-transparent-btn">
                Gray Button
              </button>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExample"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExample"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

      <div class="section">
        <div class="section-heading">About Us</div>
        <p>
          Ammadar is located in Lexington, South Carolina USA. Ammadar is a fast
          growing, goal-oriented Information Technology (IT) Services Company
          that helps companies realize the potential of e-Business through the
          use of Internet Technology and Client Server business systems.
        </p>
        <p>
          As a global IT solutions provider, Ammadar helps clients improve their
          business efficiencies by building, supporting and optimizing
          innovative Internet-based solutions / enterprise applications. In
          addition to that, Ammadar provides professional consultancy services
          for clients' short-term/ long-term project needs on various IT
          platforms. As a client centric business, our business model focuses on
          having long-term strategic relationships with our clients.
        </p>
      </div>

      <div class="container">
        <div class="row custom-section">
          <div class="col-md-4 custom-box">
            <div>
              <i class="custom-icon fas fa-cube"></i>
              <h3>Consulting</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div class="col-md-4 custom-box">
            <div>
              <i class="custom-icon fas fa-cube"></i>
              <h3>Technology</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div class="col-md-4 custom-box">
            <div>
              <i class="custom-icon fas fa-cube"></i>
              <h3>Development Services</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div class="row custom-section">
          <div class="col-md-4 custom-box">
            <div>
              <i class="custom-icon fas fa-cube"></i>
              <h3>Application Outsourcing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div class="col-md-4 custom-box">
            <div>
              <i class="custom-icon fas fa-cube"></i>
              <h3>E-COMMERCE & e-Learning Solutions</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

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

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <script
        src="https://kit.fontawesome.com/your-fontawesome-kit.js"
        crossorigin="anonymous"
      ></script>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  );
};

export default Home;
