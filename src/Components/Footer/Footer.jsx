import React from "react";
import "./Footer.css";
import HubifyImage from "../../assets/images/Hubify_image.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="container_row">
              <div className="start_exploring">
                <img src={HubifyImage} alt="" />
                <div className="explore_content">
                  <lable>Give A Try</lable>
                  <h3>Start Exploring Today</h3>
                  <em>Try Our Shopify Apps</em>
                </div>
              </div>
              <button className="theme_button no_bg">
                Get Started
                <i aria-hidden="true" class="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
          <div className="main_footer_area">
            <div className="container">
              <div className="footer_row">
                <div className="footer_left">
                  {/* left side of footer */}
                  <div className="footer_item">
                    <h5>Popular Apps</h5>
                    <ul className="icon-list-items">
                      <li className="icon-list-item">
                        <Link to="#hubify-amazing-zoom-features/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">
                            Hubify ‑ Amazing Zoom Features
                          </span>
                        </Link>
                      </li>
                      <li className="icon-list-item">
                        <Link to="#volume-tiered-pricing/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">
                            Volume &amp; Tiered Pricing
                          </span>
                        </Link>
                      </li>
                      <li className="icon-list-item">
                        <Link to="#persistent-share-cart/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">
                            Persistent &amp; Share Cart
                          </span>
                        </Link>
                      </li>
                      <li className="icon-list-item">
                        <Link to="#hubify-product-bundles-offer/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">
                            Hubify Product Bundles Offer
                          </span>
                        </Link>
                      </li>
                      <li className="icon-list-item">
                        <Link to="#hubify-product-custom-options/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">
                            Hubify Product Custom Options
                          </span>
                        </Link>
                      </li>
                      <li className="icon-list-item">
                        <Link to="#quick-stock-notifiers/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">
                            Quick Stock Notifier ‑ Instock
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_item popular_feature">
                    <h5>Popular Features</h5>
                    <ul className="icon-list-items">
                      <li className="icon-list-item">
                        <Link to="#persistent-share-cart/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">My Wishlist</span>
                        </Link>
                      </li>
                      <li className="icon-list-item">
                        <Link to="#hubify-product-bundles-offer/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">
                            Hubify Abandoned Cart Reminder
                          </span>
                        </Link>
                      </li>
                      <li className="icon-list-item">
                        <Link to="#hubify-product-custom-options/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">Real Profit</span>
                        </Link>
                      </li>
                      <li className="icon-list-item">
                        <Link to="#quick-stock-notifiers/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">
                            AI: Loyalty, Referrals & More
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer_center">
                  <div className="footer_item">
                    <h5>Quick Links</h5>
                    <ul className="icon-list-items">
                      <li className="icon-list-item">
                        <Link to="#hubify-amazing-zoom-features/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">About Us</span>
                        </Link>
                      </li>
                      <li className="icon-list-item">
                        <Link to="#hubify-amazing-zoom-features/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">Careers</span>
                        </Link>
                      </li>
                      <li className="icon-list-item">
                        <Link to="#hubify-amazing-zoom-features/">
                          <span className="icon-listicon">
                            <i
                              aria-hidden="true"
                              className="fas fa-angle-right"
                            ></i>
                          </span>
                          <span className="icon-list-text">Contact Us</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
