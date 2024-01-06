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
                  Embracing innovation at its core, our dynamic IT company
                  thrives on crafting cutting-edge solutions that propel
                  businesses into the digital future. With a commitment to
                  excellence, we seamlessly blend expertise and creativity to
                  redefine the possibilities of technology
                </i>
              </p>
            </div>
          </div>
          <div className=" h-100 d-flex justify-content-center align-item-center">
            <div className="center-content">
              <p className="text-justify testimonial">
                <i>
                  Embracing innovation at its core, our dynamic IT company
                  thrives on crafting cutting-edge solutions that propel
                  businesses into the digital future. With a commitment to
                  excellence, we seamlessly blend expertise and creativity to
                  redefine the possibilities of technology
                </i>
              </p>
            </div>
          </div>
          <div className=" h-100 d-flex justify-content-center align-item-center">
            <div className="center-content">
              <p className="text-justify testimonial">
                <i>
                  Embracing innovation at its core, our dynamic IT company
                  thrives on crafting cutting-edge solutions that propel
                  businesses into the digital future. With a commitment to
                  excellence, we seamlessly blend expertise and creativity to
                  redefine the possibilities of technology
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
