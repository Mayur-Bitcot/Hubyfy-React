import React from "react";
import testi1 from "../../assets/images/Testimonials.jpg";
import testi2 from "../../assets/images/Testimonials-Img-N.jpg";
import testi3 from "../../assets/images/Testimonials-Img-Men.jpg";

import "./TestiMonials.css";
import SlickCarousel from "../testimonialSlider/TestmonialSlider";

const TestiMonials = () => {
  return (
    <>
      <div className="testimonials_section">
        <div className="container">
          <div className="title_section">
            <h2>What Our Merchants Have to Say</h2>
          </div>
          <div className="testimonials_card_section">
            <div className="testimonials_card">
              <div className="card_view">
                <div className="">
                  <div className="card_image">
                    <img src={testi1} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="card_image">
                    <img src={testi2} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="card_image">
                    <img src={testi3} alt="" />
                  </div>
                </div>
              </div>
              <div className="testimonial_slick">
                <SlickCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestiMonials;
