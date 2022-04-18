import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const {name, img, expression, price } = service;
  
  return (
    <div className="col-md-6 col-lg-4">
      <div className="service-item">
        <img src={img} alt="" />
        <h2 className="my-3 text-info">{name}</h2>
        <p>
          <small>{expression}</small>
        </p>
        <p className="fs-4 fst-italic">{price}</p>
        <button>{" "} Check Out</button>
        <button  className="service-btn btn px-5 my-3 btn-primary">Check Out</button>
      </div>
    </div>
  );
  };
export default Service;
