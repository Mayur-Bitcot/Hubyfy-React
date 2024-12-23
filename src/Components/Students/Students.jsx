import React from "react";

const Students = (props) => {
  return (
    <div>
      <p>
        Student Name is [{props.name}] and the address is&nbsp;
        <span>{props.address}</span>
      </p>
      <p>Post : {props.other.post}</p>
      <p>Gender : {props.other.gender}</p>
    </div>
  );
};

export default Students;
