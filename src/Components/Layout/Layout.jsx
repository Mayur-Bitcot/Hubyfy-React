import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
