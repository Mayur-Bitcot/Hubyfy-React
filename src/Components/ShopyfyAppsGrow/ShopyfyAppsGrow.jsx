import React from "react";
import "./ShopyfyAppsGrow.css";
import shopping from "../../assets/images/shopping.webp";
import VolumeTieredPricing from "../../assets/images/Volume-Tiered-Pricing.png";
import mobileCart from "../../assets/images/mobileCart.png";
import shopyfymobile from "../../assets/images/shopyfymobile.jpg";
import shopify from "../../assets/images/shopify.jpg";
import shopifyLaptop from "../../assets/images/shopifyLaptop.jpg";
import CKWclvGn from "../../assets/images/CKWclvGn4P8CEAE-e1690351014940.webp";
import CLArvu from "../../assets/images/CL-Arvu44_8CEAE-300x300.webp";
import CLSnfm from "../../assets/images/CLS8-Nfm4v8CEAE-300x300.webp";
import COaQoMWAq from "../../assets/images/COaQoMWAq-8CEAE-150x150.webp";

const CommerceStoreObj = [
  {
    img: shopping,
    title: "Hubify ‑ Amazing Zoom Features",
  },
  {
    img: VolumeTieredPricing,
    title: "Volume & Tiered Pricing",
  },
  {
    img: mobileCart,
    title: "Persistent & Share Cart",
  },
  {
    img: shopyfymobile,
    title: "Hubify Product Bundles Offer",
  },
  {
    img: shopify,
    title: "Hubify Product Custom Option",
  },
  {
    img: shopifyLaptop,
    title: "Quick Stock Notifier",
  },
  {
    img: CKWclvGn,
    title: "Shopify Ecommerce",
    content:
      "Shopify Ecommerce lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: CLArvu,
    title: "Shopify Ecommerce",
    content:
      "Shopify Ecommerce lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: CLSnfm,
    title: "Shopify Ecommerce",
    content:
      "Shopify Ecommerce lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: COaQoMWAq,
    title: "Shopify Ecommerce",
    content:
      "Shopify Ecommerce lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
];

const ShopyfyAppsGrow = () => {
  return (
    <>
      <div className="shopyfyapp_grow">
        <div className="container">
          <div className="title_section">
            <h2>Shopify Apps to Grow eCommerce Store</h2>
            <p>Our Featured Apps</p>
          </div>
          <div className="shopyfyapps_card_section">
            <div className="shopyfyapps_card">
              {CommerceStoreObj.slice(0, 6).map((item, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={item.img} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopyfyAppsGrow;
