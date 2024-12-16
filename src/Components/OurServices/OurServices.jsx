import React from "react";
import "./OurServices.css";
import code from "../../assets/svg/code.svg";

let OurServicesObj = [
  {
    img: code,
    title: "Web Design & Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: code,
    title: "Mobile App Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: code,
    title: "Enterprise Software Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: code,
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: code,
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: code,
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: code,
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: code,
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: code,
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
  {
    img: code,
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
  },
];
const OurServices = ({ showAll = false }) => {
  let displayServices = showAll ? OurServicesObj : OurServicesObj.slice(0, 3);
  return (
    <div className="OurServices_section">
      <div className="container">
        <div className="title_section">
          <h2>Our Services</h2>
          <p>We are Expert, Creative & a Little Crazy Coders</p>
        </div>
        <div className="services_card_section">
          <div className="services_card">
            {displayServices.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <img
                    src={item.img}
                    alt=""
                    width={"50px"}
                    style={{ margin: "auto" }}
                  />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {!showAll && (
          <div className="services_card_button">
            <button className="theme_button no_bg">View All Services</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurServices;
