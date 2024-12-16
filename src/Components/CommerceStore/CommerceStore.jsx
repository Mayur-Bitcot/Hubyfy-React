import React from "react";
import "./CommerceStore.css";
import zoomImng from "../../assets/images/zoomMagnifire.webp";
import CI2N59qe5f8CEAE from "../../assets/images/CI2N59qe5f8CEAE-150x150.webp";
import cinqeceae from "../../assets/images/CI2N59qe5f8CEAE-e1690351214232.webp";
import JTmtO8CEAE from "../../assets/images/CJLm-JTmtO8CEAE-e1690277176676.webp";
import CKas0MXvs from "../../assets/images/CKas0MXvsP8CEAE-300x300.webp";
import CKWclvGn4P8CEAE from "../../assets/images/CKWclvGn4P8CEAE-150x150.webp";
import CKWclvGn from "../../assets/images/CKWclvGn4P8CEAE-e1690351014940.webp";
import CLArvu from "../../assets/images/CL-Arvu44_8CEAE-300x300.webp";
import CLSnfm from "../../assets/images/CLS8-Nfm4v8CEAE-300x300.webp";
import COaQoMWAq from "../../assets/images/COaQoMWAq-8CEAE-150x150.webp";
// CI2N59qe5f8CEAE-150x150
// import zoomMagnifier from "../../assets/images/zoom-magnifire.webp";

// import zoomImng from "../../assets/images/zoom-magnifire.webp";

const CommerceStoreObj = [
  {
    img: zoomImng,
    title: "Shopify Ecommerce",
    content:
      "Shopify Ecommerce lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: CI2N59qe5f8CEAE,
    title: "Shopify Ecommerce",
    content:
      "Shopify Ecommerce lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: cinqeceae,
    title: "Shopify Ecommerce",
    content:
      "Shopify Ecommerce lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: JTmtO8CEAE,
    title: "Shopify Ecommerce",
    content:
      "Shopify Ecommerce lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: CKas0MXvs,
    title: "Shopify Ecommerce",
    content:
      "Shopify Ecommerce lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: CKWclvGn4P8CEAE,
    title: "Shopify Ecommerce",
    content:
      "Shopify Ecommerce lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
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
const CommerceStore = ({ showAll = false }) => {
  const itemsToDisplay = showAll
    ? CommerceStoreObj
    : CommerceStoreObj.slice(0, 6);

  return (
    <>
      <div className="commerce_store container">
        <div className="title_section">
          <h2>Our Top Shopify Apps to Boost eCommerce Store</h2>
          <p>We have 10+ Apps in Shopify App Store for eCommerce Sellers</p>
        </div>
        <div className="apps_card_section">
          <div className="apps_card">
            {itemsToDisplay.map((item, index) => {
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
        {!showAll && (
          <div className="apps_card_button">
            <button className="theme_button no_bg">View All Apps</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CommerceStore;
