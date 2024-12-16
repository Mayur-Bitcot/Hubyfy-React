import React from "react";
// import bgImage from "../../assets/images/banner.jpg";
import "./hero.css";
import bannerImage from "../../assets/images/Shopify-App-Development-Company.webp";
// minHeight;
const Hero = () => {
  return (
    <div className="hero">
      <div className="container banner_content">
        <div className="content_area ">
          <h1>Make Your Life Easier with Apps in Your Store</h1>
          <p>
            At HubifyApps, we develop Shopify Applications, BigCommerce
            solutions & HubSpot Modules, & other applications that deliver value
            to eCommerce stores & other content management systems. All of our
            applications are fully compatible with the Shopify & Bigcommerce
            platform and will ensure you generate new leads, improve your
            customer conversion rate, & earn more revenue!
          </p>
          <div className="button-theme">
            <button className="theme_button">About Us</button>
            <button className="theme_button no_bg">contact us</button>
          </div>
        </div>
        <div className="banner_image_area">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
