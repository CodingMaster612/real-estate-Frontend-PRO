import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../../css/reusables/viewProperty.css'
import BuyProductBox from'../reusables/BuyProperty.js'
import PropertyInfoBox from "./PropertyInfoBox";
function ShowProperty() {
  const [property, setProperty] = useState([]);
  const getAllProperty = () => {
    axios
      .get(`http://localhost:8081/property/viewAllHouse/${customerId}`)
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

          <PropertyInfoBox property={property} />
          

        );
      })
      
    ) 
    
    
    
    : (
      <h3>No data yet</h3>
    );
  }
  
  return (
    <>
      {displayProperty()}

    </>
  );
}

export default ShowProperty