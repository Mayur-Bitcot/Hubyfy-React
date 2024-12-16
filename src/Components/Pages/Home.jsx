import React from "react";
import Hero from "../Hero/Hero";
import CommerceStore from "../CommerceStore/CommerceStore";
import ShopyfyAppsGrow from "../ShopyfyAppsGrow/ShopyfyAppsGrow";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <>
      <Hero />
      <CommerceStore />
      <ShopyfyAppsGrow />
      <OurServices showAll={false} />
    </>
  );
};

export default Home;
