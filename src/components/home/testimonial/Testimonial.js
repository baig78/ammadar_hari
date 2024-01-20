import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="image-carousel testimonial-section">
        <div class="section-heading-testimonial">Your Needs Our Priority</div>
        <Carousel
          infiniteLoop={false}
          autoPlay={false}
          showStatus={false}
          showArrows={true}
          showThumbs={false}
          interval={5000}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Previous
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Next
            </button>
          )}
        >
          <div className="carousel-slide">
            <div className="center-content">
              <p className="text-justify testimonial">
                <i>
                  "Choosing Ammadar was a game-changer for our business. Their
                  tailored solutions and exceptional support propelled our
                  growth. The team's expertise and commitment exceeded our
                  expectations."
                </i>
              </p>
            </div>
          </div>
          <div className=" h-100 d-flex justify-content-center align-item-center">
            <div className="center-content">
              <p className="text-justify testimonial">
                <i>
                  "Ammadar's e-Commerce solutions transformed our online
                  presence. From personalized website design to seamless
                  integration, their services have been instrumental in
                  enhancing our customer experience. Highly recommend their
                  expertise."
                </i>
              </p>
            </div>
          </div>
          <div className=" h-100 d-flex justify-content-center align-item-center">
            <div className="center-content">
              <p className="text-justify testimonial">
                <i>
                  "Working with Ammadar has been a breeze. Their
                  professionalism, quick response, and innovative approach set
                  them apart. Our collaboration has not only met but surpassed
                  our expectations. Thank you for the outstanding service!"
                </i>
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;
