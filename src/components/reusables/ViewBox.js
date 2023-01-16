


import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../../css/reusables/viewProperty.css'

function ViewBox() {
  const [property, setProperty] = useState("");
  const getAllProperty = () => {
    axios
      .get(`http://localhost:8081/property/viewAll`)
      .then((response) => {
        console.log(response.data);
        setProperty(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllProperty();
  }, []);
  const displayProperty = () => {
    return property ? (
      property.map((property) => {
        return (
          <div className="wrapper" key={property.id}>


            <div>{property.price}</div>
            <div>{property.posted}</div>
            x<div>{property.location}</div>
            <div>{property.size}</div>
            <div>{property.discounted}</div>
            <div>{property.contact}</div>
            <div>{property.date}</div>
            <div><img src={property.images} /></div>

          </div>

        );
      })
    ) : (
      <h3>No data yet</h3>
    );
  }
  return (
    <>
      {displayProperty()}
    </>
  );
}

export default ViewBox
