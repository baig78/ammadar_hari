import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";

const ImageCarousel = () => {
  return (
    <>
      <div className="image-carousel">
        <Carousel
          infiniteLoop={false}
          autoPlay={false}
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={5000}
        >
          <div className="position-relative">
            <img src={image1} alt="image1" />
            <div
              className="overlay "
              style={{
                backgroundColor: "var(--carousel-overlay)",
                zIndex: "0",
              }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-light">
              <h1>Welcome to Ammadar</h1>
              <h2 className="testclass">Will Add Value To Your Business</h2>
              <div style={{ marginTop: "50px" }}>
                <button className="custom-btn red-btn">Read More</button>
                <button className="custom-btn gray-transparent-btn">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <img src={image2} alt="image2" />
            <div
              className="overlay"
              style={{
                backgroundColor: "var(--carousel-overlay)",
                zIndex: "0",
              }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-light">
              <h1>Welcome to Ammadar</h1>
              <h2>Will Add Value To Your Business</h2>
              <button className="custom-btn red-btn">Read More</button>
              <button className="custom-btn gray-transparent-btn">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="position-relative">
            <img src={image3} alt="image3" />
            <div
              className="overlay"
              style={{
                backgroundColor: "var(--carousel-overlay)",
                zIndex: "0",
              }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-light">
              <h1>Welcome to Ammadar</h1>
              <h2>Will Add Value To Your Business</h2>
              <button className="custom-btn red-btn">Read More</button>
              <button className="custom-btn gray-transparent-btn">
                Get in Touch
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default ImageCarousel;
