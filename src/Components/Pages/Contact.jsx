import React from "react";
// import About from "./About";
import Students from "../Students/Students";
// import About from "./About";

const Contact = () => {
  return (
    <div>
      <h1>Contact </h1>

      <Students
        name="shubham"
        address="indore"
        other={{ post: "developer", gender: "male" }}
      />
      <Students
        name="shiva"
        address="dewas"
        other={{ post: "design", gender: "male" }}
      />
      <Students
        name="sihvani"
        address="shihore"
        other={{ post: "uiux", gender: "female" }}
      />
    </div>
  );
};

export default Contact;
