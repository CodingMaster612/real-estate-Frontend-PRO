// import axios from 'axios'
// import React, { useState ,useEffect } from 'react'
// import '../../css/reusables/viewProperty.css'

// function ViewBox() {


//   const [property, setProperty] = useState({
//     contact: "",
//     images: "",
//     pasted: "",
//     price: "",
//     size: "",
//     location: "",
//     date: "",
//     discounted: ""
//   })
  
  
//   useEffect(function() {
   
    
//     axios.get(`http://localhost:8081/property/viewAll`)
//     .then(function(response) {
//       // const allProperty = response.data.property.allProperty;
//       // setProperty(allProperty)
//         setProperty(response.data)
//     })
//     .catch((e) => {
//       console.log(e)
//     }) 

//   }, [])

//   const displayData = () => {
//     return property ? (
//       property.map((property) => {
//         return (
//           <div className="data" key={property.id}>
//             <h3>{property.image}</h3>
//           </div>
//         );
//       })
//     ) : (
//       <h3>No data yet</h3>
//     );
//   }
// return (
//     <>
//       {displayData()}
//     </>
//   );
// }

// export default ViewBox


import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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
    return property? (
      property.map((property) => {
        return (
          <div className="data" key={property.id}>
            <h3>{property.price}</h3>
            <h3>{property.location}</h3>
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
