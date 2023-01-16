


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


            <div><h1>PRICE:</h1>{property.price} </div>
            <div><h2>POSTED: </h2>{property.posted}</div>
            <div><h3>LOCATION:</h3> {property.location}</div>
            <div> <h4>SIZE:</h4> {property.size}</div>
            <div> <h5>DISCOUNT:</h5> {property.discounted}</div>
            <div><h6>CONTACT:</h6> {property.contact}</div>
            <div><h7>DATE: </h7> {property.date}</div>
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
