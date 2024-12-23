import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonialSlider.css";

const SlickCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed (ms)
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Auto-play speed (ms)
    arrows: true, // Show navigation arrows
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slider_content">
          <p>
            It was easy to install and functioning as required. I like the
            options to customize the stock notification dialog per the website
            theme and no cap on the limit of the messages. I highly recommend
            it. MI Technologies, Inc.
          </p>
          <cite>
            <p>MI Technologies, Inc.</p>
            <p>Quick Stock Notifier ‑ Instock</p>
          </cite>
        </div>
        <div className="slider_content">
          <p>
            This bundle app does way more than any other. You can let the
            customer bundle variants (color or size) or even multiple different
            products into one bundle. Plus there's tons of color and text
            customization. And they are very responsive to customer service
            questions. A+!
          </p>
          <cite>
            <p>MI Technologies, Inc.</p>
            <p>Quick Stock Notifier ‑ Instock</p>
          </cite>
        </div>
        <div className="slider_content">
          <p>
            The app had some glitches earlier but the developer were very quick
            to resolve the issues. It was easy to install and functioning as
            required. I like the options to customize the stock notification
            dialog per the website theme and no cap on the limit of the
            messages. I highly recommend it.
          </p>
          <cite>
            <p>MI Technologies, Inc.</p>
            <p>Quick Stock Notifier ‑ Instock</p>
          </cite>
        </div>
        <div className="slider_content">
          <p>
            Easy to use, straightforward and no fuss. Customer service was
            really prompt and helpful - solved the issue in no time.
          </p>
          <cite>
            <p>MI Technologies, Inc.</p>
            <p>Quick Stock Notifier ‑ Instock</p>
          </cite>
        </div>
      </Slider>
    </div>
  );
};

export default SlickCarousel;
